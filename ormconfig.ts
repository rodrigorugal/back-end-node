const productionEnv = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: ["./dist/src/entities/*.js"],
  migrations: ["./dist/src/migrations/*.js"],
  cli: {
    migrationsDir: "./dist/src/migrations",
  },
  ssl: { rejectUnauthorized: false },
};

const developmentEnv = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/migrations",
  },
  synchronize: true,
  logging: false,
  ssl: false,
};

module.exports =
  process.env.NODE_ENV === "production" ? productionEnv : developmentEnv;
