import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const sql = require("mssql");
import { Logger } from "@nestjs/common";

const logger = new Logger("bootstrap");

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  try {
    await sql.connect({
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      server: process.env.DATABASE_SERVER,
      pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
      },
      options: {
        encrypt: false, // for azure, set to true
        trustServerCertificate: false // change to true for local dev / self-signed certs
      }
    });

    logger.log("Database connected!");
  } catch (err) {
    logger.error("Can not connect to database!");
    throw new Error(err);
  }

  await app.listen(5000);
}

bootstrap();
