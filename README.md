# MongoDB Change Stream with Docker

This repository contains a simple Node.js script for monitoring changes in a MongoDB collection using Change Streams. The Docker Compose configuration is included to set up a MongoDB instance with authentication and a Redis server.

## Prerequisites

Make sure you have the following installed on your system:

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/)

## MongoDB Configuration

The `docker-compose.yml` file defines the MongoDB service with the following configurations:

- MongoDB version: 4.4.0
- Container name: mongodb4.4
- Hostname: ${MONGO_HOSTNAME}
- Authentication: Username and password specified in the `.env` file
- Replica set: ${MONGO_REPLICA_SET_NAME}
- MongoDB data and initialization scripts are stored in the `./data/db` and `./scripts/mongoinit` directories, respectively.

## Redis Configuration

The Docker Compose file also includes configurations for a Redis server and Redis Commander:

- Redis version: 6-alpine
- Redis Commander: The latest version from the [official Redis Commander Docker image](https://hub.docker.com/r/rediscommander/redis-commander)
- Redis data stored in the `./data/redis` directory
- Redis Commander accessible at [http://localhost:6500](http://localhost:6500)

## Node.js MongoDB Change Stream Script

The `index.js` file contains a simple Node.js script that connects to the MongoDB instance and sets up a Change Stream on the `warehouses` collection in the `projectDb` database. Whenever there is a change in the collection, the script logs the new document.

### Usage

1. Clone this repository: `git clone https://github.com/yourusername/your-repo.git`
2. Navigate to the repository: `cd your-repo`
3. Bring up the containers: `docker compose up -d`
4. Test out the script: `node test.js`
5. Now go to mongoDB compass and add some data in the collections. You will see it in the terminal logs instantly

Feel free to modify the script or Docker Compose configuration to suit your specific requirements.