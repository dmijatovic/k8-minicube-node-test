# Minicube k8 simple nodejs app

This repo is demo of running [simple hello-world nodejs app](https://kubernetes.io/docs/tutorials/hello-minikube/) in k8 cluster using minicube.


## Installation steps Linux Mint(Ubuntu/Debian)

- install VirtualBox:
  - [download proper Linux image](https://www.virtualbox.org/wiki/Linux_Downloads)
  - run install package
- install [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl)
- install minicube
- running [minicube locally](https://kubernetes.io/docs/setup/minikube/)
- install Helm [via script](https://docs.helm.sh/using_helm/#installing-helm)


Minikube is a tool that makes it easy to run Kubernetes locally. Minikube runs a single-node Kubernetes cluster inside a VM on your laptop for users looking to try out Kubernetes or develop with it day-to-day.

```bash

  #1 - install virtualbox Linux Mint 18 (Ubuntu 16)


  #1a - install KVM
  sudo apt-get install qemu-kvm libvirt-bin virtinst bridge-utils cpu-checker 

  # create user group
  sudo newgrp libvirt
  # assign group to yourself
  sudo usermod -a -G libvirt $(whoami)

  # download KVM2
  curl -Lo docker-machine-driver-kvm2 https://storage.googleapis.com/minikube/releases/latest/docker-machine-driver-kvm2 \
&& chmod +x docker-machine-driver-kvm2 \
&& sudo cp docker-machine-driver-kvm2 /usr/local/bin/ \
&& rm docker-machine-driver-kvm2

  
  #2 - install kubectl
  sudo apt-get update && sudo apt-get install -y apt-transport-https
  curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
  sudo touch /etc/apt/sources.list.d/kubernetes.list 
  echo "deb http://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list.d/kubernetes.list
  sudo apt-get update
  sudo apt-get install -y kubectl

  #3- install minicube
  curl -Lo minikube https://storage.googleapis.com/minikube/releases/v0.28.2/minikube-linux-amd64 && chmod +x minikube && sudo mv minikube /usr/local/bin/

  #4 - start minikube
  # i need to use sudo here 
  sudo minikube start
```

## Using [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/)

kubectl is a command line interface for running commands against Kubernetes clusters. 

Check this [cheetsheet page](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) for quick ref. 

```bash
  # create 
  kubectl run hello-minikube --image=gcr.io/google_containers/echoserver:1.4 --port=8080

  # expose / make avaliable
  kubectl expose deployment hello-minikube --type=NodePort

  # get info about k8 cluster
  kubectl config view

  # list nodes
  kubectl get nodes

  # list services running
  kubectl get services

  # list pods (containers)
  kubectl get pods
  # get info about pod
  kubectl describe pod { name }
  
  # delete deployment
  kubectl delete deployment hello-minikube
  

```

## [Minikube](https://github.com/kubernetes/minikube)


Minikube is a tool that makes it easy to run Kubernetes locally. Minikube runs a single-node Kubernetes cluster inside a VM on your laptop for users looking to try out Kubernetes or develop with it day-to-day.

Basic commands

```bash

  # start minicube cluster
  minikube start

  # status report concerning minikube, k8 cluster & kubectl
  minikube status

  # check pods use kubectl
  kubectl get pods

  # stop minikube cluster
  sudo minikube stop

```

## [Helm](https://github.com/helm/helm)

Helm is a tool for managing Kubernetes charts. Charts are packages of pre-configured Kubernetes resources.

### Instalation script

```bash

  # download script into current directory
  curl https://raw.githubusercontent.com/kubernetes/helm/master/scripts/get > ./get_helm.sh
  
  # change mode / permissions
  chmod 700 get_helm.sh
  
  #run instalation script
  ./get_helm.sh

  # after success init helm
  helm init

```


## Using HELM

When you first install Helm, it is preconfigured to talk to the official [Kubernetes charts repo](https://github.com/helm/charts). This repository contains a number of carefully curated and maintained charts. This chart repository is named stable by default.

```bash
  # search for helm charts in official k8 repo
  helm search <chart name>

  # download chart locally
  helm fetch <chart name>

  # inspect chart (k8 specs)
  helm inspect <chart name>


  # create helm template yaml files
  helm create <chart name>

  #install 
  helm install <chart name>



```