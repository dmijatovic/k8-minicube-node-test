# Minicube k8 simple nodejs app

This repo is demo of running [simple hello-world nodejs app](https://kubernetes.io/docs/tutorials/hello-minikube/) in k8 cluster using minicube.


## Installation steps Linux Mint(Ubuntu/Debian)

- install virtualBox:
  - [download proper Linux image](https://www.virtualbox.org/wiki/Linux_Downloads)
  - run install package
- install [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl)
- install minicube
- running [minicube locally](https://kubernetes.io/docs/setup/minikube/)

Minikube is a tool that makes it easy to run Kubernetes locally. Minikube runs a single-node Kubernetes cluster inside a VM on your laptop for users looking to try out Kubernetes or develop with it day-to-day.

```bash

  #1 - install virtualbox Linux Mint 18 (Ubuntu 16)
  
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

## Minikube

Kubernetes local cluster for development.


```bash

  # start minicube cluster
  # I need to use sudo with minicube
  sudo minikube start


  # stop minikube cluster
  sudo minikube stop

```