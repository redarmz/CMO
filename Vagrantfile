# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
config.vm.box = "debian/bullseye64"
config.vm.network :forwarded_port, guest: 80, host: 8088
config.vm.provider :virtualbox do |vb|
vb.customize ["modifyvm", :id, "--memory", "3044"]
end
end
