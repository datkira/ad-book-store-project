--Trigger
-- Số lượng đơn hàng
UPDATE CUSTOMER  
SET TotalBills = 
(select 
count(*) from Bill o 
where o.Customer_ID = Customer.Customer_ID
)
go

create or alter trigger TotalBills on Bill
for insert,delete 
as
begin
UPDATE CUSTOMER  
SET TotalBills = 
(select 
count(*) from Bill o 
where o.Customer_ID = Customer.Customer_ID
)
where Customer_Id  in ( select Customer_Id from Inserted )
end

go


-- Số tiền đã mua

update Customer set
TotalMoney = (select sum(BILL_TOTAL_COST) from BILL o 
where o.CUSTOMER_ID=Customer.CUSTOMER_ID
group by o.CUSTOMER_ID)
go

create or alter trigger TotalMoney on Bill_Detail
for insert,delete
as
update Customer set
TotalMoney = (select sum(BILL_TOTAL_COST) from BILL o
where o.CUSTOMER_ID=Customer.CUSTOMER_ID
group by o.CUSTOMER_ID)
where Customer_ID  in ( select Customer_ID from Inserted union select Customer_ID from Deleted )


--Giá
UPDATE 
BILL_DETAIL
SET PRICE =(SELECT PRICE FROM BOOK B
WHERE B.BOOK_ID= BILL_DETAIL.BOOK_ID)


-- Tổng tiền 
UPDATE dbo.Bill
SET Bill_Total_Cost = f.valsum
FROM 
(
  SELECT BD.Bill_ID,  SUM(BD.PRICE * BD.Quantity) valsum
  FROM dbo.Bill_Detail BD 
  GROUP BY BD.BILL_ID
) f
WHERE dbo.BILL.BILL_ID= f.BILL_ID

go 

create or alter trigger Bill_ToTal_Cost on Bill_Detail
for insert,delete 
as 
begin
UPDATE dbo.Bill
SET Bill_Total_Cost = f.valsum
FROM 
(
  SELECT BD.Bill_ID,  SUM(BD.PRICE * BD.Quantity) valsum
  FROM dbo.Bill_Detail BD 
  GROUP BY BD.BILL_ID
) f
WHERE dbo.BILL.BILL_ID= f.BILL_ID AND Bill.Bill_Id IN (SELECT  bill_Id FROM Inserted UNION SELECT bill_id FROM Deleted)
end

go 

UPDATE BOOK
SET TOTAL_SOLD_BOOK =
(
SELECT COUNT(QUANTITY) FROM CART C
WHERE C.BOOK_ID=BOOK.BOOK_ID
GROUP BY BOOK_ID
)

go
create or alter trigger Total_Sold_Book on Bill_Detail
for insert,delete
as
UPDATE BOOK
SET TOTAL_SOLD_BOOK =
(
SELECT COUNT(QUANTITY) FROM CART C
WHERE C.BOOK_ID=BOOK.BOOK_ID
GROUP BY BOOK_ID
)
where book_id in ( select book_id from Inserted union select book_id from Deleted )

