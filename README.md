# Test task2 (PostgreSQL/TypeORM/NestJS)

[![CI/CD](https://github.com/dominicarrojado/nestjs-postgres-boilerplate/actions/workflows/ci.yml/badge.svg)](https://github.com/dominicarrojado/nestjs-postgres-boilerplate/actions/workflows/ci.yml)

A local development setup or boilerplate for [Nest.js framework](https://nestjs.com/) with [PostgreSQL](https://www.postgresql.org/) and [pgAdmin4](https://www.pgadmin.org/) using [Docker Compose](https://docs.docker.com/compose/).

## Quick Start

1. Install [Node.js](https://nodejs.org/en/download/) - _for IDE type checking_.
2. Install [Yarn](https://yarnpkg.com/lang/en/docs/install/) - _for IDE type checking_.
3. Install [Docker Compose](https://docs.docker.com/compose/install/) and make sure it is running in the system background.
4. Clone the app:

```bash
git clone git@github.com:dominicarrojado/nestjs-postgres-boilerplate.git
```

5. Install npm packages - _for IDE type checking_.

```bash
cd nestjs-postgres-boilerplate
yarn install --frozen-lockfile
```

6. Build and run the Docker image.

```bash
yarn docker-compose:dev
```

7. Access the app at http://localhost:3000.

8. Make file changes and it will automatically rebuild the app.

9. PgAdmin starts at http://localhost:5050/ (admin@admin.com/pgadmin4)

10. Create a connection to postgres there as host: host.docker.internal, pass,username,dbname - postgres

11. Import a collection into postman (provided in archive) to have all endpoints

12. Test!

## VSCode Extensions

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Learn

Learn how to build this setup or boilerplate [here](https://dominicarrojado.com/posts/local-development-setup-for-nestjs-projects-with-postgresql/).
