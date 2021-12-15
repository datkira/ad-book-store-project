import { Controller, Get } from "@nestjs/common";
import { StoredProcedureDefine } from "../stored-procedure-define";

const sql = require("mssql");

@Controller("bill")
export class BillController {
  @Get()
  async GetTotalCostOfBill() {
    return await sql.query(`EXEC ${StoredProcedureDefine.VIEW_COST_OF_BILL} @BILL_ID = 1`);
  }
}
