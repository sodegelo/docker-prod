// Instalar o DOCKER COM WSL
https://github.com/codeedu/wsl2-docker-quickstart

// Rodar o DOCKER
sudo service docker start

// Ver os conteiners ativos
docker ps

// Ver as imagens
docker image ls

// Parar Conteiner
docker stop 89da071898
 
docker kill 89da071898

// Remover Conteiner
docker rm 89da071898

// Remover Imagem
docker rmi 89da071898

// Subir um container por linha de comando
docker run -p 8001:80 -v $(pwd):/usr/share/nginx/html/  nginx:1.19.10-alpine

// levantar um mysql LOCAL 
docker run -p 3306:3306 -v $(pwd)/mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root mysql:5.7



//#### DOCKER FILE ###

// gera uma imagem com os arquivos da pasta atual
docker build -t nome-da-imagem .

// Subir imagem no docker HUB 
docker push sodegelo/nome-da-imagem

// Rodar o build com a versão PROD
docker build -t nome-da-imagem -f Dockerfile.prod .
