#WWCode-SV Chapter Tools API

##Setup instructions using Docker:

* Install Docker and docker-compose. [Someone to fill installation instructions for docker]
* Once Docker and Docker Compose is installed, run the following command:
```
$ cd api/wwcodesvtools/
$ docker-compose up
```
* Check if the containers are running by running
```
$ docker ps -a
```

### Compose 
* To start the containers in daemon mode, use the following command:
```
$ docker-compose up -d
```
* To rebuild all the containers, use the following command:
```
$ docker-compose up -d --build
```
* To run any command in the app container, use 
```
$ docker-compose exec web <command>
```
* To be able to interactively run or debug inside the container environment,
```
$ docker ps -a
$ docker exec -it <container name> bash 
```

###Logs
* To tail logs, run
```
$ docker logs -f wwcodesvtools_web_1
```

###Migrations
When you bring up docker containers for the first time or rebuild them, migrations are automatically run. If your 
containers are already running and you want to add a few migrations and run migrations in the db, you can use 
the following commands.
* To make a new migration, run
```
$ docker-compose exec web python manage.py makemigrations --name <name of migration>
```
* To run migrations, run
```
$ docker-compose exec web python manage.py migrate --noinput
```

###Shut down
* To stop the containers, run
```
$ docker-compose down
```