﻿use BOOKSTORE
go

CREATE   PROCEDURE ADD_BILL_DETAIL_TO_BILL @BILL_ID INT, @BOOK_ID INT, @QUANTITY INT AS
DECLARE @PRICE INT
SELECT @PRICE = PRICE
FROM BOOK
WHERE BOOK_ID = @BOOK_ID
INSERT INTO BILL_DETAIL (BOOK_ID, BILL_ID, QUANTITY, PRICE)
VALUES (@BOOK_ID, @BILL_ID, @QUANTITY, @PRICE)
go

CREATE   PROCEDURE ADD_TO_BILL_AND_BILL_DETAIL
 @BOOK_ID INT,
 @QUANTITY INT
 AS
 INSERT INTO BILL(CREATED_DATE,B_STATUS,EMPLOYEE_ID,CUSTOMER_ID,BILL_TOTAL_COST) VALUES  (GETDATE(),'0',NULL,'1','0')
 DECLARE @BILL_ID INT
 SELECT @BILL_ID=  MAX(BILL_ID) FROM BILL
 DECLARE @PRICE INT
 SELECT @PRICE=PRICE FROM BOOK WHERE BOOK_ID=@BOOK_ID
 INSERT INTO BILL_DETAIL (BOOK_ID,BILL_ID,QUANTITY,PRICE) VALUES(@BOOK_ID,@BILL_ID,@QUANTITY,@PRICE)
go

CREATE   PROCEDURE
    ADD_TO_CART @CUSTOMER_ID INT, @BOOK_ID INT, @QUANTITY INT AS
INSERT INTO CART
VALUES (@CUSTOMER_ID, @BOOK_ID, @QUANTITY)
go

CREATE   PROCEDURE CHECKOUT_BILL
@BILL_ID INT
AS
SELECT B.BILL_ID,B.CREATED_DATE,B.BILL_TOTAL_COST 
 FROM BILL B 
 WHERE B.BILL_ID=@BILL_ID
go

create   procedure CREATE_BILL @EMPLOYEE_ID INT, @CUSTOMER_ID INT AS
BEGIN
    INSERT INTO BILL(CREATED_DATE, B_STATUS, EMPLOYEE_ID, CUSTOMER_ID, BILL_TOTAL_COST)
    OUTPUT INSERTED.BILL_ID
    VALUES (GETDATE(), '0', @EMPLOYEE_ID, @CUSTOMER_ID, '0')
END
go

CREATE   PROCEDURE CREATE_BOOK(
    @TITLE NVARCHAR(50),
    @AUTHOR_ID INT,
    @PUBLISHER_ID INT,
    @CATEGORY_ID INT,
    @DESCRIPTION VARCHAR(MAX),
    @COVER_URL VARCHAR(MAX),
    @PRICE INT,
    @SALE_PRICE INT,
    @STOCK INT
)
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO BOOK(B_NAME,
                     AUTHOR_ID,
                     CATEGORY_ID,
                     PUBLISHER_ID,
                     B_DESCRIPTION,
                     COVER_URL,
                     PRICE,
                     SALE_PRICE,
                     STOCK)
    VALUES (@TITLE,
            @AUTHOR_ID,
            @CATEGORY_ID,
            @PUBLISHER_ID,
            @DESCRIPTION,
            @COVER_URL,
            @PRICE,
            @SALE_PRICE,
            @STOCK);
END
go

CREATE   PROCEDURE DELETE_BILL_DETAIL
 @BILL_ID INT,
 @BOOK_ID INT
 AS
 DELETE FROM BILL_DETAIL WHERE BOOK_ID=@BOOK_ID AND BILL_ID=@BILL_ID
 DELETE FROM BILL WHERE BILL_ID=@BILL_ID
go

CREATE   PROCEDURE DELETE_BILL_DETAIL_AND_BILL @BILL_ID INT
AS
DELETE
FROM BILL_DETAIL
WHERE BILL_ID = @BILL_ID
DELETE
FROM BILL
WHERE BILL_ID = @BILL_ID
go

CREATE   PROCEDURE SEARCH_BOOK_BY_TITLE @SEARCH_STRING nvarchar(50)
AS
SELECT *
FROM BOOK
WHERE BOOK.B_NAME LIKE '%' + @SEARCH_STRING + '%'
go

CREATE   PROCEDURE UPDATE_QUANTITY
@BOOK_ID INT,
@BILL_ID INT,
@QUANTITY INT
AS
UPDATE BILL_DETAIL
SET QUANTITY=@QUANTITY
WHERE BILL_ID=@BILL_ID AND BOOK_ID=@BOOK_ID
go

CREATE   PROCEDURE VIEW_ALL_MY_BILL @CUSTOMER_ID INT
AS
SELECT *
FROM BILL JOIN CUSTOMER C on BILL.CUSTOMER_ID = C.CUSTOMER_ID
WHERE BILL.CUSTOMER_ID = @CUSTOMER_ID
go

CREATE   PROCEDURE VIEW_ALL_MY_BILL_PENDING @CUSTOMER_ID INT
AS
SELECT *
FROM BILL JOIN CUSTOMER C on BILL.CUSTOMER_ID = C.CUSTOMER_ID
WHERE BILL.CUSTOMER_ID = @CUSTOMER_ID AND B_STATUS = 0
go

CREATE   PROCEDURE VIEW_BOOK_BY_ID @book_id INT
AS
SELECT B.BOOK_ID, B.B_NAME, B.PRICE, B.CATEGORY_ID, B.COVER_URL, B.STOCK, A.A_NAME AS AUTHOR_NAME, C.TITLE AS CATEGORY_NAME, B.TOTAL_SOLD_BOOK
FROM BOOK B JOIN AUTHOR A
on B.AUTHOR_ID = A.AUTHOR_ID
    JOIN CATEGORY C on C.CATEGORY_ID = B.CATEGORY_ID
where B.BOOK_ID = @book_id
ORDER BY B.BOOK_ID DESC;
go

CREATE   PROCEDURE VIEW_COST_OF_BILL
@BILL_ID INT
AS
SELECT BILL_TOTAL_COST FROM BILL WHERE BILL_ID=@BILL_ID
go

--- Xem lịch sử đặt hàng
CREATE   PROCEDURE VIEW_HISTORY_BILL
@CUSTOMER_ID INT
AS 
SELECT BO.BOOK_ID,BD.QUANTITY,BD.PRICE,B.CREATED_DATE
FROM BILL B JOIN BILL_DETAIL BD 
ON B.BILL_ID=BD.BILL_ID
JOIN BOOK BO ON BO.BOOK_ID=BD.BOOK_ID
ORDER BY B.CREATED_DATE DESC
go

CREATE   PROCEDURE VIEW_TOP_20_BOOK
AS
SELECT TOP (20) B.BOOK_ID, B.B_NAME, B.PRICE, B.CATEGORY_ID, B.COVER_URL, A.A_NAME AS AUTHOR_NAME, C.TITLE AS CATEGORY_NAME, B.TOTAL_SOLD_BOOK
FROM BOOK B
         JOIN AUTHOR A on B.AUTHOR_ID = A.AUTHOR_ID
         JOIN CATEGORY C on C.CATEGORY_ID = B.CATEGORY_ID
ORDER BY B.BOOK_ID DESC;
go
