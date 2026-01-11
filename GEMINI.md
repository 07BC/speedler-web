# Project Overview

This is a Next.js (App Router) starter template for creating applications with AWS Amplify. It's designed for a quick setup of a full-stack application with authentication, API, and database capabilities.

## Key Technologies

*   **Frontend:** Next.js, React
*   **Backend:** AWS Amplify
*   **Authentication:** Amazon Cognito
*   **API:** AWS AppSync (GraphQL)
*   **Database:** Amazon DynamoDB
*   **Language:** TypeScript

## Building and Running

To run the application in a local development environment, use the following command:

```bash
npm run dev
```

To build the application for production, use the following command:

```bash
npm run build
```

To start the production server, use the following command:

```bash
npm run start
```

## Development Conventions

*   **Linting:** The project uses `next lint` for linting.
*   **Styling:** The project uses CSS Modules and global CSS.
*   **Testing:** There are no explicit testing configurations in the project.
*   **Deployment:** The project is configured for deployment to AWS via AWS Amplify. See the `amplify.yml` file for the build and deployment settings.

## Project Structure

*   `app/`: Contains the main application code, following the Next.js App Router structure.
*   `amplify/`: Contains the AWS Amplify backend configuration.
*   `public/`: Contains static assets.
*   `next.config.js`: Next.js configuration file.
*   `package.json`: Project dependencies and scripts.
*   `amplify.yml`: AWS Amplify deployment configuration.
*   `README.md`: Project documentation.
*   `GEMINI.md`: This file, containing a summary of the project for AI-assisted development.
