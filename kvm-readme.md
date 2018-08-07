# KVM for Linux Mint 18

Based on this [training](https://www.hiroom2.com/2017/07/17/linuxmint-18-kvm-en/)


```bash

  # check that the CPU we are using has support for virtualization
  cat /proc/cpuinfo

  # 1 install libs
  sudo apt install -y -o 'apt::install-recommends=true' \
qemu-kvm libvirt0 libvirt-bin virt-manager bridge-utils

  # 2 Register libvirt-bin to systemd.
  sudo systemctl enable libvirt-bin

  # create bridge interface
  https://www.hiroom2.com//2017/07/17/linuxmint-18-bridge-en/

  # 3 
  sudo gpasswd libvirtd -a ${USER}

  sudo mkdir /var/lib/libvirt/iso
  sudo mv linuxmint-18-cinnamon-64bit.iso /var/lib/libvirt/iso/
  sudo chown libvirt-qemu:libvirtd \

```


