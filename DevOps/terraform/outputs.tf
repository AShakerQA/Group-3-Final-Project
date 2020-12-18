output "rds_endpoint_test" {
  value = module.test_rds.rds_endpoint
}

output "jenkinsvm_ip" {
  value = module.Jenkinsvm.public_ip
}

output "testvm_ip" {
  value = module.Testvm.public_ip
}

output "rds_endpoint_prod" {
  value = module.prod_rds.rds_endpoint
}
  
#output "BastionHost_ip" {
#  value = module.BastionHost.public_ip
#}
