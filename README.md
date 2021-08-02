# Mono quickstart

This repository accompanies Mono's [**quickstart guide**]().

Here you'll find full example integration apps using our [**libraries**](https://docs.mono.co/docs/overview):

![Mono quickstart app](/assets/quickstart.png)

## Table of contents

<!-- toc -->

- [1. Clone the repository](#1-clone-the-repository)
- [2. Set up your environment variables](#2-set-up-your-environment-variables)
- [3. Run the quickstart](#3-run-the-quickstart)
    - [Pre-requisites](#pre-requisites)
    - [Quickstart Scripts](#quickstart-scripts)
      - [Setup](#scripts-setup)
      - [Start Node](#scripts-start-node)
    - [1. Running the backend](#1-running-the-backend)
      - [Node](#node)
    - [2. Running the frontend](#2-running-the-frontend)

<!-- tocstop -->

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

Copy `.env.example` to a new file called `.env` and fill out the environment variables inside. Add your `MONO_PUBLIC` and `MONO_SECRET`. Get your Client ID and secrets from
the dashboard: [https://app.mono.co/apps](https://app.mono.co/apps)

> NOTE: `.env` files are a convenient local development tool. Never run a production application
> using an environment file with secrets in it.

## <a name="3-run-the-quickstart"></a> 3. Run the Quickstart

#### <a name="pre-requisites"></a> Pre-requisites

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
$ ./start.sh
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

