# Pertemuan 13
### Changelog
View at [Homepage](https://github.com/ricky03knowhere/IF215007#pertemuan-13)

- 💭💡Membahas Cloud Computing  : Containerization
- ⚡`DEMO` : Dockerizing Web App to Server


## NVM Configuration 
### 1 Install NVM
```sh
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 
```

### 2 Refresh .bashrc
```sh
. ~/.bashrc   
```

### 3 Install Node versi 16
```sh
nvm install 16
```

### 4 Gunakan Node versi 16
```sh
nvm use 16
```

## Build Docker Image dari Source Code

### 0 Masuk Ke Folder Baru Project
```sh
cd ~/ricky
mkdir latihan-docker-image
cd latihan-docker-image
```

### 1 Inisiasi Project NPM

```sh
npm init
```

### 2 Instalasi Package-Package

```sh
npm install express
```

### 3 Copy Script Backendnya

file : [index.js](./index.js) doang

### 4 Copy dockerfile nya

file : [dockerfile](./dockerfile) doang

### 5 Build dockerfile Jadi Docker Image

```sh
docker build -t pawe-ricky:0.1.0 .
```
### 6 Jalankan Container dari Docker Image yang sudah dibuat

```sh
docker run -d --name webservice-ricky -p 20104:20104 pawe-ricky:0.1.0
```
### 7 Check web app di browser
  ![sf](./Screenshot%202022-12-03%20110233.jpg)