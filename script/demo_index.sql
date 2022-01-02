--Truy vấn 1: Xem danh sách tất cả các cuốn sách mà cửa hàng có bán
SELECT bk.BOOK_ID, bk.B_NAME, 
	   bk.B_DESCRIPTION, ath.A_NAME, ct.TITLE, pub.P_NAME
FROM Book bk, Author ath, Category ct, Publisher pub
WHERE bk.AUTHOR_ID = ath.AUTHOR_ID 
	  AND bk.CATEGORY_ID = ct.CATEGORY_ID 
	  AND bk.PUBLISHER_ID = pub.PUBLISHER_ID

--Truy vấn 2: Truy xuất thông tin sách theo tên thể loại
SELECT bk.BOOK_ID, bk.B_NAME, bk.B_DESCRIPTION, ct.TITLE
FROM Book bk, Category ct 
WHERE bk.CATEGORY_ID = ct.CATEGORY_ID AND ct.TITLE = N'Logic học' 

--Truy vấn 3: Đối với những đơn hàng của khách hàng cụ thể, lấy ra thông tin về tổng tiền của đơn hàng    
SELECT BI.BILL_ID, BI.CREATED_DATE, BI.BILL_TOTAL_COST
FROM BILL BI, CUSTOMER C
WHERE BI.CUSTOMER_ID = C.CUSTOMER_ID AND C.CUSTOMER_ID = 1

--Truy vấn 4: Thống kê doanh thu theo ngày 
SELECT SUM(BILL_TOTAL_COST)
FROM BILL  
WHERE CREATED_DATE = '2021-3-12'

--Truy vấn 5: Truy xuất những đơn hàng chưa được xác nhận 
SELECT BILL_ID, CREATED_DATE, BILL_TOTAL_COST
FROM BILL B
WHERE B_STATUS = 0

--Truy vấn 6: Truy xuất những đơn hàng đã xác nhận bởi nhân viên cụ thể 
SELECT E.EMPLOYEE_ID, E.E_NAME, B.BILL_ID, B.CREATED_DATE 
FROM EMPLOYEE E, BILL B 
WHERE E.EMPLOYEE_ID = B.EMPLOYEE_ID AND E.E_NAME = N'Lan Phương'
