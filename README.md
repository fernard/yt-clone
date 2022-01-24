# Youtube Clone App

The frontend app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The backend app has been written from scratch using Express, Typescript, Prisma and PostgreSQL.

## Environment Setup and Launch

Before you start, make sure you have `docker`, `docker-compose` and `yarn`  installed on your OS.
First, run `yarn install` in the root directory. Then, go to `packages/backend` and run `yarn db:up` command.
Once the docker container with postres is running, run `yarn migrate` from the same directory.
After a successful data migration, copy the contents of the `.env.example` file to a newly created `.env` file in the same directory.
Finally, go back to the root directory and run `yarn start`.

## Comments

The app was written in the Linux OS, so the paths specified in the environment variables assume that the host machine is able to recognize the Unix file system.
This is a very basic implementation, still plenty of things are missing e.g: Authentication, Testing.
