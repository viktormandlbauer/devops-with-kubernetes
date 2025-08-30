# Cheatsheet

## k3d commands

```bash
# List cluster information
k3d cluster list

# Creates a cluser with exposed loadbalancer and two agents (worker nodes)
k3d cluster create -p 8080:80@loadbalancer --agents 2
```
