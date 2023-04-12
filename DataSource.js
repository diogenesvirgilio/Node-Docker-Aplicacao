const dataSource = new DataSource({
  type: "postgres",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  entities: ["./src/modules/**/entities/*.ts"],
  migrations: [{
    "migrationsDir": "./src/database/migrations"}],
});
