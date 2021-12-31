import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { StoredProcedureDefine } from "../stored-procedure-define";

const sql = require("mssql");

@Controller("bill")
export class BillController {
  @Get()
  async getAllBill() {
    const result = await sql.query(`EXEC ${StoredProcedureDefine.VIEW_ALL_MY_BILL_PENDING} @CUSTOMER_ID = 1`);
    return {
      status: 200,
      result: result.recordset
    };
  }

  @Put("/enable/:id")
  async enableBill(@Param("id") id: number) {
    const result = await sql.query(`UPDATE BILL SET B_STATUS = 1 WHERE BILL_ID = ${id}`);
    return {
      status: 200,
      result: result
    };
  }

  @Delete(":id")
  async deleteBill(@Param("id") id: number) {
    const result = await sql.query(`EXEC ${StoredProcedureDefine.DELETE_BILL_DETAIL_AND_BILL} @BILL_ID = ${id}`);
    return {
      status: 200,
      result: result
    };
  }

  @Post()
  async addToBill(@Body() body) {
    const createdBill = await sql.query(`EXEC ${StoredProcedureDefine.CREATE_BILL} @EMPLOYEEE_ID = 1, @CUSTOMER_ID = 1`);
    console.log(createdBill);
    const listBooks = body.listBooks;
    for (let i = 0; i < listBooks.length; i++) {
      console.log(listBooks[i]);
      await sql.query(`EXEC ${StoredProcedureDefine.ADD_BILL_DETAIL_TO_BILL} @BILL_ID = ${createdBill.recordset[0].BILL_ID}, @BOOK_ID = ${listBooks[i].BOOK_ID}, @QUANTITY = ${listBooks[i].Quantity}`);
    }

    return {
      status: 200,
      message: "Create bill success"
    };
  };
}
