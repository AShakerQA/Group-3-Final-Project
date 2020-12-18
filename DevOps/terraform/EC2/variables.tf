variable "ec2" {
  description = "EC2 image"
  default     = "t2.micro"
}

variable "ami_id" {
  default = "ami-0dc8d444ee2a42d8a"
}

variable "subnet_id" {
  description = "subnet id for EC2"
}

variable "name" {
  description = "EC2 name"
}

variable "enable_public_ip" {
  description = "enable public ip"
  default     = true
}

variable "keyy" {
  description = "key variable for dupe key prevention when using multiple ec2"
}

variable "vpc_security_group_ids" {
  description = "vpc security group ids"
}

variable "instance" {
  description = "ec2 instance"
  default     = "t2.micro"
}
