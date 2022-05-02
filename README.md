# users-crud

## 1 Kubernetes setup

### 1.1 Create temporary namespace

```shell
$ kubectl create ns temp
$ kubectl config set-context --current --namespace=temp
```

### 1.2 Setup PV and PVC manually

```shell
$ kubectl apply -f ./kubernetes-manifests/postgres/pv.yaml # host path: /mnt/postgres
$ kubectl apply -f ./kubernetes-manifests/postgres/pvc.yaml
```

### 1.3 Setup database
```shell
$ helm repo add bitnami https://charts.bitnami.com/bitnami
$ helm repo update
$ helm install postgres bitnami/postgresql -f ./helm/postgres/values.yaml
```

### 1.4 Setup application (with `helm` OR with `kubectl`)

> After starting the application, please wait a bit for the database migrations to complete.

#### 1.4.1-A Starting with `helm`

```shell
$ helm install users-crud ./helm/application/users-crud
```

#### 1.4.1-B Starting with `kubectl`

```shell
$ kubectl apply -f ./kubernetes-manifests/application
```

### 1.5 Cleanup

```shell
$ kubectl delete ns temp
$ kubectl delete pv postgres-pv
$ kubectl config set-context --current --namespace=default
```

## 2 Postman collection playground

Postman collection playground [here](https://www.getpostman.com/collections/d3fdd3f5537998e7271d).

## 3 Database after the application has been started

### 3.1 Structure:

![image info](./images/users-crud.png)

### 3.2 Data:

**users** table:

| user_id | username  | first_name     | last_name           | email               | phone        |
| :------ | :-------- | :------------- | :------------------ | :------------------ | :----------- |
| 1       | superuser | superuser name | superuser last name | superuser@gmail.com | +79990001122 |
| 2       | adminuser | adminuser name | adminuser last name | adminuser@gmail.com | +79990003344 |
| 3       | guestuser | guestuser name | guestuser last name | guestuser@gmail.com | +79990005566 |
