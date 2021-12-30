import { Body, Controller, Post, Get, Param, Delete } from "@nestjs/common";
import { StoredProcedureDefine } from "../stored-procedure-define";

const sql = require("mssql");

@Controller("cart")
export class CartController {
  @Get()
  async getAll() {
    const result = await sql.query(`EXEC ${StoredProcedureDefine.VIEW_BOOK_IN_CART} @CUSTOMER_ID = 1`);
    return {
      status: 200,
      result: result.recordset
    };
  }

  @Delete(":id")
  async delete(@Param("id") id: number) {
    const result = await sql.query(`delete from CART_DETAIL where BOOK_ID = ${id}`);
    return {
      status: 200,
      result: {
        result,
        id
      }
    };
  }

  @Post()
  async addToCart(@Body() body: any) {
    console.log(body);
    console.log("add to cart");
    try {
      const result = await sql.query(`EXEC ${StoredProcedureDefine.ADD_TO_CART} @CUSTOMER_ID = ${body.customer_id}, @BOOK_ID = ${body.book_id} , @QUANTITY = ${body.quantity}`);
      return {
        status: 200,
        result: result.recordset
      };
    } catch (error) {
      return {
        status: 400,
        message: error.message
      };
    }
  }
}
