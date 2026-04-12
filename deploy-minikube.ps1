# deploy-minikube.ps1
# Automates building the local images inside Minikube and deploying the Kubernetes manifests.

Write-Host "Starting Minikube if it's not already running..."
minikube start

Write-Host "Configuring Docker environment to use Minikube's Docker daemon..."
& minikube -p minikube docker-env --shell powershell | Invoke-Expression

Write-Host "Building Backend Docker image (travelgo-server:latest)..."
docker build -t travelgo-server:latest ./server

Write-Host "Building Frontend Docker image (travelgo-client:latest)..."
docker build -t travelgo-client:latest ./client

Write-Host "Creating Backend Secrets from .env file..."
kubectl delete secret backend-env --ignore-not-found
kubectl create secret generic backend-env --from-env-file=server/.env

Write-Host "Applying Kubernetes manifests from k8s directory..."
kubectl apply -f k8s/

Write-Host "Waiting for deployments to be ready..."
kubectl wait --for=condition=available --timeout=60s deployment/backend-deployment
kubectl wait --for=condition=available --timeout=60s deployment/frontend-deployment

Write-Host "Deployment complete! Opening the frontend service in your default browser..."
minikube service frontend-service
