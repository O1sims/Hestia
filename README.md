# Hestia

## Overview

Hestia (from the Greek goddess of the family and home) is a Python-based web application that develops a house valuation index to allow people to value and sell their own houses in Belfast.

## Technology stack

The Python web application uses [Django](https://www.djangoproject.com/) as the backend framework and [Angular](https://angular.io/) as the frontend framework. Documentation of the RESTful API service is handled by [Swagger](https://swagger.io/). Development is done within a [Docker](https://www.docker.com/) and we use [MongoDB](https://www.mongodb.com/) as our main database.

## Building the application

We use Docker in the development of Hestia to make it easy to build, run and share. We have two Dockerfile's: one the builds the Python backend and one that builds the Angular GUI. Both components of the application can be built from the `build.sh` file:
```
git clone https://github.com/O1sims/Hestia.git
cd Hestia
bash build.sh all
```
The `build.sh` file has multiple options to choose from.

## Running the application

The `build.sh` file also coordinates the running of the application. Specifically, the application can be run with the following command:
```
bash build.sh up
```
Likewise, the application can be brought down with `bash build.sh down`.

By default, the main Hestia application is accessible on port `3000`, the API and backend components are on port `5000`, the Mongo database is run on port `8210`. The `docker-compose.yml` can be altered to allow these services to run on different ports. Swagger API documentation can be found at `localhost:5000/swagger/`.

Environmental variables for the application can be changed in the `docker-compose.yml` file.

## Using the application

The application stores data of 1,500 properties which have been scraped from NI's biggest property portal, PropertyPal. When the application is initially ran, a property valuation model is created and stored. This is used to value properties in Belfast and is at the crux of the application.

Using your browser, navigate to `localhost:3000`, here you will see a front page with a search bar. You can search for whatever you like... but since there are only 1,500 properties, you may want to use the search term, `holywood` or `east belfast` or just `belfast` to get a list of properties. Each property should have some analysis that suggests whether it is overvalued, undervalued or correctly priced.

Along with search, a user can also analyse the price estimation of their own properties and upload details of their property to the database. It will then be searchable.
