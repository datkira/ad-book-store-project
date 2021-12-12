import { Controller, Get } from "@nestjs/common";
const sql = require("mssql");

@Controller("teachers")
export class TeacherController {
  @Get()
  async getAllTeachers() {
    const result = await sql.query("select * from GIAOVIEN");
    return result.recordset;
  }
}
