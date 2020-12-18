variable "cidr_block" {
  default = "10.0.0.0/16"
}

variable "sg_cidr_block" {
  default = "10.0.1.0/24"
}

variable "sg_cidr_block_b" {
  default = "10.0.2.0/24"
}

variable "sg_cidr_block_c" {
  default = "10.0.3.0/24"
}

variable "open_internet" {
  default = "0.0.0.0/0"
}
