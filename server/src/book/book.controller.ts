import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { StoredProcedureDefine } from "../stored-procedure-define";

const sql = require("mssql");

@Controller("books")
export class BookController {
  @Get()
  async getAllBooks() {
    const result = await sql.query("select * from BOOK");
    return result.recordset;
  }

  @Get("/top")
  async getTopBooks() {
    return await sql.query(`EXEC ${StoredProcedureDefine.VIEW_TOP_20_BOOK}`);
  }

  @Get("/:id")
  async getBook(@Param("id") id: number) {
    return await sql.query(`EXEC ${StoredProcedureDefine.VIEW_BOOK_BY_ID} @book_id = ${id}`);
  }

  @Post()
  async createBook(@Body () book: any) {
    console.log(book.title, book.author);
    return await sql.query(`EXEC ${StoredProcedureDefine.CREATE_BOOK} @TITLE = ${book.title}, @AUTHOR_ID = ${book.author}`);
  }
}
