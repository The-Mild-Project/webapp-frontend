# Food App Admin Panel Web App

This app is an admin panel for the Mild Project applicaiton. It is written in Javascript and built with the [React JS Framework](https://reactjs.org). React uses NodeJS and NPM to build the applicaiton.

This app connects to the backend Java microservice hosted on Heroku.

## Building the Application Locally

The app can be built locally with NPM. Simply use the command `npm start` in the root directory to start the application on the default system port. Optionally, port can be specified with `npm PORT=XXXX start`. NPM features hot reloading, so when changes are made to the app's codebase, React will shutdown and rerun the app behind the scenes for the user.

Additionally, the applicaiton can be run in a Docker container by using the following commands:

1. `docker build -t webapp-frontend`
2. `docker run -p {local-port}:{docker-port} -it webapp-frontend:latest`

### Required Env Variables

There are a few required env variables to be able to run the application locally. They can be added as system environment vars, or added to an `.env` file in the root directory.

- `PORT` - port to run on
- `REACT_APP_DATA_PROVIDER` - URL for the backend application
- `REACT_APP_GOOGLE_CLIENT_ID` - Google client ID required to log users in with OAuth2.0

## CI/CD

CI/CD Process Implemented by Github Actions.
Action implemented can be found in `.github/workflows/nodejs.yml`.

- Application is tested on the most recent Ubuntu release with NodeJS 13.x.
- Once CI passes, and new code is merged into the master branch, Heroku will pull new code, build a new Docker container, and deploy the applicaiton to the live server.

## Deployment

We chose Heroku for our live deployment of the application. We chose this because in addition to a large offering of different services, Heroku has great support for CI/CD workflows.

- The application is currently deployed on live servers hosted via [Heroku](https://www.heroku.com).
- The live application can be accessed [here](https://mild-project.herokuapp.com).
