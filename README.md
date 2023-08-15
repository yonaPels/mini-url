# Mini-URL

**Mini-URL** is a full stack web application designed to shorten URLs, making them more manageable and shareable. By converting long URLs into shorter versions, Mini-URL provides an elegant solution for simplifying links.

## Description

Mini-URL allows users to input lengthy URLs and receive a shortened version that redirects to the original link. This service is especially useful when sharing links on platforms with character limits, like social media or messaging apps. The application employs a React frontend, Node.js backend, and PostgreSQL database to deliver this functionality.

### Architecture

- **Frontend**: The React application resides in the `/frontend` folder, offering a user-friendly interface for URL shortening.

- **Backend**: The Node.js Express API, located in the `/backend` folder, handles the logic for generating and managing shortened URLs.

- **Database**: Mini-URL employs a PostgreSQL database, storing the original and shortened URLs, ensuring efficient retrieval and redirection.

- **Docker**: The entire application is containerized using Docker. Included are Dockerfiles, a Docker Compose file, and configurations to seamlessly run each component within containers.

## Running the App

To start the application in development mode, simply execute the following command:

```shell
docker-compose up --build
```
The frontend will be accessible at http://localhost:3000, while the backend will be available at http://localhost:5000.

In a production environment, the frontend is statically built and served by the Node.js backend.

## Functionality

The key functionalities of Mini-URL include:

- **Shortening URLs**: Users can input long URLs, and the frontend communicates with the backend API to generate a shortened URL.

- **Redirection**: The generated shortened URL redirects users to the original, longer URL, Through redirects-page.

- **Listing Shortened URLs**: The application provides a list of all the shortened URLs, enabling users to manage and share them conveniently.
