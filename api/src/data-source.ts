import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: process.env.DATABASE || 'app.sql',
    synchronize: false,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
})