# Django and React Dockerized App with PostgreSQL

Note that this project does not use Nginx and Gunicorn so is not ready for production and the psycop2g used is only the binary version which should be updated when moving to production


## Initiate application

If you have docker installed simply hit on your terminal:
```
docker-compose build 
```
and then upload the containers:
```
docker-compose up
```
This should start the application.

In the actual stage it should only be possible to make CRUD operations after composing the containers. There will be no books when you initiate the application, please add your favorites and observe how they are added to our simple frontend while the data is stored to PostgreSQL.

To add some books you can either go to port 8000/api and POST directly or access the client at port 3000 and do it there.

## After populating the database the front end should look like this

![image](https://user-images.githubusercontent.com/89080061/172760110-25226cfa-345f-4d34-9436-7b2f1c91def5.png)
