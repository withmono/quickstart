# Mono Quickstart

This repository accompanies Mono's [**quickstart guide**]().

Here you'll find full example integration apps using our [**libraries**](https://docs.mono.co/docs/overview):

![Mono quickstart app](/assets/quickstart_hero.png)

## Table of contents

- [1. Clone the repository](#1-clone-the-repository)
- [2. Set up your environment variables](#2-set-up-your-environment-variables)
- [3. Run the quickstart](#3-run-the-quickstart)
    - [Run with Docker](#docker)
      - [Prerequisites](#docker-prerequisites)
      - [Running](#running-1)
        - [Start the container](#start-the-container)
        - [View the logs](#view-the-logs)
        - [Stop the container](#stop-the-container)
    - [Run without Docker](#no-docker)
      - [Pre-requisites](#no-docker-prerequisites)
      - [Quickstart Scripts](#quickstart-scripts)
        - [Setup](#scripts-setup)
        - [Start Node](#scripts-start-node)
      - [1. Running the backend](#1-running-the-backend)
        - [Node](#node)
      - [2. Running the frontend](#2-running-the-frontend)

## <a name="1-clone-the-repository"></a> 1. Clone the repository

Using https:

```
$ git clone https://github.com/withmono/quickstart.git
$ cd quickstart
```

Alternatively, if you use ssh:

```
$ git clone git@github.com:withmono/quickstart.git
$ cd quickstart
```

## <a name="2-set-up-your-environment-variables"></a> 2. Set up your environment variables

```
$ cp .env.example .env
```

Copy `.env.example` to a new file called `.env` and fill out the environment variables inside. Add your `REACT_APP_MONO_PUBLIC` and `MONO_SECRET`. Get your Client ID and secrets from
the dashboard: [https://app.mono.co/apps](https://app.mono.co/apps)

> NOTE: `.env` files are designed for development only. Never run a production application with an environment file that contains secrets.

## <a name="3-run-the-quickstart"></a> 3. Run the Quickstart

### <a name="docker"></a> Run with Docker

#### Pre-requisites

- `make` command in your terminal: [https://formulae.brew.sh/formula/make](https://formulae.brew.sh/formula/make)
- Docker installed and running on your machine: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)
- Your environment variables in a `.env` file as noted above
- If using Windows, a working Linux installation on Windows 10. If you are using Windows and do not already have WSL or Cygwin configured, we recommend [running without Docker](#no-docker) (it's easier than installing WSl or Cygwin).

#### Running

There are three `make` commands available

- `up`: builds and starts the container
- `logs`: tails logs for running application
- `stop`: stops the container, you can also use the Docker GUI

Each of these should be used with a `language` argument, which is `node`. If unspecified, the default is `node`.

##### Start the container

```
$ make up language=node
```

The quickstart backend is now running on [http://localhost:8080](http://localhost:8080) and frontend on [http://localhost:3000](http://localhost:3000).

If you change contents of the server files or `.env` file, simply run `make up language=node` to rebuild and restart the server.

If you experience a Docker connection error when running the command above, try the following:

- Make sure Docker is running
- Try running the command prefixed with `sudo`

##### View the logs

```
$ make logs
```

##### Stop the container

```
$ make stop
```


### <a name="no-docker"></a> Run without Docker

#### <a name="no-docker-prerequisites"></a> Prerequisites

- The language you intend to use is installed on your machine and available at your command line.
  This repo should generally work with active LTS versions of each language such as node >= 14
- Your environment variables populated in `.env`
- [npm](https://www.npmjs.com/get-npm)
- If using Windows, a command line utility capable of running basic Unix shell commands

#### <a name="quickstart-scripts"></a> Quickstart Scripts

Scripts are located in the main directory for your convenience.

##### <a name="scripts-setup"></a> Setup

```
./setup.sh
```

Run to install the required dependencies.

##### <a name="scripts-start-node"></a> Node

```
./start_node.sh
```
This will run both the frontend and node backend at once in a single convenient terminal.

#### <a name="1-running-the-backend"></a> 1. Running the backend

Once started with one of the commands below, the quickstart will be running on [http://localhost:8080](http://localhost:8080) for the backend. Enter the additional commands in step 2 to run the frontend which will run on [http://localhost:3000](http://localhost:3000).

##### <a name="node"></a> Node

```
$ cd ./node
$ npm install
$ npm start
```

#### <a name="2-running-the-frontend"></a> 2. Running the frontend

```
$ cd ./frontend
$ npm install
$ npm start

```

## Support
If you're having general trouble with Mono Connect.js or your Mono integration, please reach out to us at <hi@mono.co> or come chat with us on Slack. We're proud of our level of service, and we're more than happy to help you out with your integration to Mono.

## Contributing

If you find any issue using this package please let us know by filing an issue right [here](https://github.com/withmono/quickstart/issues).

## License

[MIT](https://github.com/withmono/quickstart/tree/main/LICENSE) for more information.
