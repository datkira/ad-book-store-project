--Trigger
-- Số lượng đơn hàng


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



create or alter trigger TotalMoney on Bill_Detail
for insert,delete
as
update Customer set
TotalMoney = (select sum(BILL_TOTAL_COST) from BILL o
where o.CUSTOMER_ID=Customer.CUSTOMER_ID
group by o.CUSTOMER_ID)
where Customer_ID  in ( select Customer_ID from Inserted union select Customer_ID from Deleted )


--Giá



-- Tổng tiền 


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

create or alter trigger Import_ToTal_Cost on Imported_Bill_Detail
for insert,delete 
as 
begin
UPDATE dbo.Imported_bill
SET Total_Cost = f.valsum
FROM 
(
  SELECT BD.Ip_ID,  SUM(BD.Imported_PRICE * BD.Quantity) valsum
  FROM dbo.Imported_Bill_Detail BD 
  GROUP BY BD.IP_ID
) f
WHERE dbo.Imported_bill.Ip_ID= f.Ip_ID
and  Imported_bill.Ip_ID IN (SELECT  Ip_ID FROM Inserted UNION SELECT Ip_ID FROM Deleted)
end

go

create or alter trigger Export_ToTal_Cost on Exported_Bill_Detail
for insert,delete 
as 
begin
UPDATE dbo.Exported_bill
SET Total_Cost = f.valsum
FROM 
(
  SELECT ex.Exported_bill_id,  SUM(b.price * ex.Quantity) valsum
  FROM dbo.Exported_Bill_Detail ex  join book b on ex.book_id=b.book_id
  GROUP BY ex.Exported_bill_id
) f
WHERE dbo.Exported_bill.Exported_id= f.Exported_bill_id and Exported_bill.Exported_id in ( SELECT  Exported_bill_id FROM Inserted UNION SELECT Exported_bill_id FROM Deleted)
end

go
create or alter trigger Total_Sold_Book on Bill_Detail
for insert,delete
as
UPDATE BOOK
SET TOTAL_SOLD_BOOK =
(
SELECT COUNT(QUANTITY) FROM CART_DETAIL C
WHERE C.BOOK_ID=BOOK.BOOK_ID
GROUP BY BOOK_ID
)
where book_id in ( select book_id from Inserted union select book_id from Deleted )

