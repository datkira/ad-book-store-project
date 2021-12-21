import { Controller, Get, Param } from "@nestjs/common";
import { StoredProcedureDefine } from "../stored-procedure-define";

const sql = require("mssql");

@Controller('categories')
export class CategoryController {
  @Get()
  async getAllCategories() {
    const result = await sql.query("select * from CATEGORY");
    return result.recordset;
  }

  @Get("/:id")
  async getAllBooksWithCategoryID(@Param("id") id: number) {
    return await sql.query(`EXEC ${StoredProcedureDefine.VIEW_TOP_20_BOOK_CATEGORY} @CATEGORY_ID = ${id}`);
  }
}
