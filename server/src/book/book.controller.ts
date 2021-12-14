import { Controller, Get } from "@nestjs/common";
const sql = require("mssql");

@Controller('book')
export class BookController {
  @Get()
  async getAllBooks() {
    const result = await sql.query("select * from BOOK");
    return result.recordset;
  }
}
