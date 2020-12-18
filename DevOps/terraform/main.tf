provider "aws" {
  region                  = "eu-west-1"
  shared_credentials_file = "/home/ubuntu/.aws.credentials"
}

module "vpc" {
  source = "./VPC"
}

module "sg_node" {
  web_sg_name   = "sg for vpc"
  source        = "./SG"
  open_internet = "0.0.0.0/0"
  vpc_id        = module.vpc.vpc_id
  ingress_ports = [22, 80, 3306, 8080]
}

#module "bastion_sg"{
#  web_sg_name = "sg for bastion host"
#  source = "./SG"
#  vpc_id = module.vpc.vpc.id
#  ingress_ports = [22]
#  tags = {
#    Name = "allows ssh"
#  }
#}


resource "aws_key_pair" "key_pub" {
  key_name   = "key_pub"
  public_key = file(var.key_pub)
}

# will have to take ssh key from config vm then implement it to testvm and jenkinsvm
#module "BastionHost" {
#  source = "./EC2"
#  name = "ec2"
#  subnet_id = module.vpc.subnet_a_id
#  vpc_security_gorups_ids = [module.bastion_sg.sg_id]
#  keyy = aws_key_pair.key_pub.id
#}


module "Jenkinsvm" {
  source                 = "./EC2"
  name                   = "jenkins_vm"
  subnet_id              = module.vpc.subnet_a_id
  vpc_security_group_ids = [module.sg_node.sg_id]
  keyy                   = aws_key_pair.key_pub.id
}

module "Testvm" {
  source                 = "./EC2"
  name                   = "test_vm"
  subnet_id              = module.vpc.subnet_a_id
  vpc_security_group_ids = [module.sg_node.sg_id]
  keyy                   = aws_key_pair.key_pub.id
  instance               = "t2.xlarge"
}

resource "aws_db_subnet_group" "default" {
  name       = "var.dbsubnet_gpname"
  subnet_ids = [module.vpc.subnet_a_id, module.vpc.subnet_b_id]

  tags = {
    Name = "Proj database"
  }
}

module "test_rds" {
  source                 = "./RDS"
  dbname                 = "testdb"
  dbsubnet_gpname        = aws_db_subnet_group.default.name
  subnet_ids             = [module.vpc.subnet_a_id, module.vpc.subnet_b_id]
  vpc_security_group_ids = [module.sg_node.sg_id]
  rds_username           = var.username1
  rds_password           = var.password1
}

module "prod_rds" {
  source                 = "./RDS"
  dbname                 = "proddb"
  dbsubnet_gpname        = aws_db_subnet_group.default.name
  subnet_ids             = [module.vpc.subnet_a_id, module.vpc.subnet_b_id]
  vpc_security_group_ids = [module.sg_node.sg_id]
  rds_username           = var.username1
  rds_password           = var.password1
}


module "eks" {
  source      = "./EKS"
  sub1        = module.vpc.subnet_a_id
  sub2        = module.vpc.subnet_c_id
  security_id = module.sg_node.sg_id
}
