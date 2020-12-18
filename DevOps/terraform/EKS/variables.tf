variable "sub1" {
  description = "subnet id from vpc"
}

variable "sub2" {
  description = "subnet id from vpc"
}

variable "security_id" {
  description = "security group id"
}

#variable "arnrole" {
#  default = "arn:aws:iam::(INSERTNUMBERHERE):role/cluster_role"
#}

#variable "arnnode" {
#  default = "arn:aws:iam::(INSERTNUMBERHERE):role/NodeInstanceRole"
#}

variable "instance_type" {
  default = ["t3.small"]
}

variable "ami_type" {
  default = "AL2_x86_64"
}
