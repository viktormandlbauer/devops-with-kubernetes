# Notes

```bash
# Building the container image
docker build -t <image-name>:<tag> .

# Pushing the container image to a regsitry (docker hub for example)
docker push <image-name>:<tag>

# Restarting the deployment
kubectl rollout restart deployment todo-app-dep

# Connecting from outside the cluster
kubectl port-forward <pod-id> <host-port>:<pod-port>
```
