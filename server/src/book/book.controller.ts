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

  @Get('getAllDependencies')
  async getAllAuthorsAndWarehouseAndPublisherAndCategories() {
    const authors = await sql.query("select * from BOOK");
    const categories = await sql.query("select * from CATEGORY");
    const ware_houses = await sql.query("select * from WAREHOUSE");
    const publishers = await sql.query("select * from PUBLISHER");

    return {
      authors: authors.recordset,
      categories: categories.recordset,
      ware_houses: ware_houses.recordset,
      publishers: publishers.recordset
    };
  }

  @Get("/top")
  async getTopBooks() {
    return await sql.query(`EXEC ${StoredProcedureDefine.VIEW_TOP_20_BOOK}`);
  }

  @Get("/:id")
  async getBook(@Param("id") id: number) {
    return await sql.query(`EXEC ${StoredProcedureDefine.VIEW_BOOK_BY_ID} @book_id = ${id}`);
  }

  @Get("/search_book/:keyword")
  async searchBook(@Param("keyword") keyword: string) {
    return await sql.query(`EXEC ${StoredProcedureDefine.SEARCH_BOOK_BY_TITLE} @SEARCH_STRING = ${keyword}`);
  }

  @Post()
  async createBook(@Body() book: any) {
    console.log(book.title, book.author);
    return await sql.query(`EXEC ${StoredProcedureDefine.CREATE_BOOK} @TITLE = ${book.title}, @AUTHOR_ID = ${book.author}`);
  }
}
