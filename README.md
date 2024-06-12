# Warehouse Layout Editor

Created from this full stack template https://github.com/prisma/prisma-examples

- [**Next.js**](https://nextjs.org/)**: A [React](https://reactjs.org/) framework
- [**Apollo Client**](https://www.apollographql.com/docs/react/) (frontend),
- [**GraphQL Yoga**](https://the-guild.dev/graphql/yoga-server): GraphQL server
- [**Pothos**](https://pothos-graphql.dev/): Code-first GraphQL schema definition library
- [**Prisma Client**](https://www.prisma.io/docs/concepts/components/prisma-client): Databases access (ORM)
- [**Prisma Migrate**](https://www.prisma.io/docs/concepts/components/prisma-migrate): Database migrations
- [**SQLite**](https://www.sqlite.org/index.html): Local, file-based SQL database

## Getting started

### 1. Download repo and install dependencies

Clone this repository:

```
git clone https://github.com/marten-sova/warehouse-layout.git
```

Install npm dependencies:

```
cd warehouse-layout
npm install
```

</details>

### 2. Create and seed the database

Run the following command to create your SQLite database file. This also creates the `User` and `Post` tables that are defined in [`prisma/schema.prisma`](./prisma/schema.prisma):

```
npx prisma migrate dev --name init
```

When `npx prisma migrate dev` is executed against a newly created database, seeding is also triggered. The seed file in [`prisma/seed.ts`](./prisma/seed.ts) will be executed and your database will be populated with the sample data.


### 2. Start the app

```
npm run dev
```

The app is now running, navigate to [`http://localhost:3000/`](http://localhost:3000/) in your browser to explore its UI.
