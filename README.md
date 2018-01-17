# VMware ESXi 6.5.0
+ 請先安裝好 [ESXi 6.5](https://my.vmware.com/web/vmware/details?downloadGroup=ESXI650&productId=614)

# I. Install Operation System
## Photon
+ [Photon OS](https://vmware.github.io/photon/)
+ [Full ISO](https://bintray.com/vmware/photon/download_file?file_path=photon-1.0-62c543d.iso) (Photon OS 1.0, Revision 2 Binaries)
+ 更新作業系統
```bash
tdnf update -y
tdnf install wget git rsync -y
```

## Open SSH
+ 查看過去指令
```bash
history
```

+ 修改SSH
```bash
vi /etc/ssh/sshd_config
/PermitRootLogin yes
systemctl restart sshd
```

+ 查看IP
```bash
ifconfig eth0
```

+ 改用 SSH 連入

# II. Install Docker

## Docker-Compose

+ 服務狀態與啟用
```bash
systemctl status docker
systemctl enable docker
```

+ 安裝 Docker-Compose
```bash
curl -L https://github.com/docker/compose/releases/download/1.18.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
```

+ 權限修改
```bash
chmod +x /usr/local/bin/docker-compose
```

+ 版本查詢
```bash
docker-compose --version
```

## Clone Project
+ clone [Express Demo](https://github.com/explooosion/Node.js-demo)
```bash
git clone https://github.com/explooosion/Node.js-demo.git
```

+ 進入專案
```bash
cd Node.js-demo/
```

## Docker Build
+ 建立映像檔
	+ demo: namespace
	+ myapp: project
```bash
docker build -t demo/myapp .
```

+ 查看映像檔(可看到已有容器)
	+ -a:所有過去容器
	+ -q:僅顯示ID
```bash
docker images
```

## Docker Run
+ 建立容器並運行
```bash
docker run -p 8080:3000 --name myapp -d demo/myapp
```
	+ -d:背景執行
	+ 外部的 8080 映射到容器的 3000

+ 查看容器運行狀態(應該會出現剛剛執行的)
	+ -a:包含過去容器
	+ -q:僅顯示容器ID
```bash
docker ps -a
```

## Docker Stop
+ 停止容器運行
```bash
docker stop myapp
```

## Docker Start
+ 執行容器運行
```bash
docker start myapp
```

## Docker Remove
+ 移除容器
```bash
docker rm myapp
```

+ 移除所有容器
```bash
docker rm $(docker ps -a -q)
```

## Docker Log
+ 查看紀錄
```bash
docker logs myapp
```


# III. DockerFile

## 完整配置

+ Dockerfile ( [Docker Hub](https://hub.docker.com/) )
```Dockerfile
    FROM node:8-alpine

    COPY . /workspace
    WORKDIR /workspace
    RUN yarn install

    EXPOSE 3000

    CMD yarn start
```

## 語法說明
+ 使用 [node:8-alpine](https://hub.docker.com/_/node/)
```Dockerfile
FROM node:8-alpine
```

+ 複製本地檔案到容器中的 workspace
```Dockerfile
COPY . /workspace
```

+ 切換容器中目錄至 workspace
```Dockerfile
WORKDIR /workspace
```

+ RUN 為部屬階段的指令
```Dockerfile
RUN yarn install
```

+ 欲開啟的 Port
```Dockerfile
EXPOSE 3000
```

+ 執行專案，CMD 為部屬完畢後的指令
```Dockerfile
CMD yarn start
```
