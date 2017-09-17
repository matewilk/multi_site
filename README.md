# multi_site
multi site proof of concept

## How to run dockerised app

* install latest version of docker on your local machine
* enter project root directory
* run `docker-compose up` (this will build all the containers and install all necessary npm packages)

It will start multiple containers at once:

* 1 rest client container (rest_client)
* 2 bravura instances (bravura1, bravura2)
* 4 node instances (node1, node2, node3, node4)
* 1 mongodb container (mongodb)

If you encounter the following error while starting

> ERROR: for mongodb  Cannot start service db: driver failed programming external connectivity on endpoint 
> mongodb (07dea02ca2120a73e3173158939c26aa66a94be4a94a90b6d57cc7c2fea1dc4f): 
> Error starting userland proxy: listen tcp 0.0.0.0:27017: bind: address already in use

Make sure that your local `mongod` doesn't ocuppy the default port `27017` or simply turn off your local mongod.

### Useful commands and shortcuts for docker

* `Ctrl + C` - to gracefully stop it (assuming you launched the app with `docker-compose up`)
* `docker-compose down` - if graceful stop was unsuccessful (and you want to stop all the running containers) 
* `docker-compose up --build` - if you want to build (run `npm install`) for all the containers 


## Exposed addresses from docker containers

* rest_client
  * `localhost:8080` - front end app
  * `localhost:3000` - back end app
  * `localhost:5858` - port for chromium inspector
  
* bravura_instance
  * bravura1
    * `localhost:4001` - back end app
    * `localhost:5841` - chromium inspector
  * bravura2
    * `localhost:4002` - back end app
    * `localhost:5842` - chromium inspector
    
* node_instance
  * node1
    * `localhost:5001` - back end app
    * `localhost:5851` - chromium inspector
  * node2
    * `localhost:5002` - back end app
    * `localhost:5852` - chromium inspector
  * node3
    * `localhost:5003` - back end app
    * `localhost:5853` - chromium inspector
  * node4
    * `localhost:5004` - back end app
    * `localhost:5854` - chromium inspector
    
