import { DataSource } from "typeorm";

import { CreateCategories1680898346350 } from "./migrations/1680898346350-CreateCategories";

const dataSource = new DataSource({
  type: "postgres",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  migrations: [CreateCategories1680898346350],
});

export function createConnection(host = "database"): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

export default dataSource;



