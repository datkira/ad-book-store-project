--Truy vấn 3: Đối với những đơn hàng của khách hàng cụ thể, lấy ra thông tin về tổng tiền của đơn hàng    
SELECT BI.BILL_ID, BI.CREATED_DATE, BI.BILL_TOTAL_COST
FROM BILL BI, CUSTOMER C
WHERE BI.CUSTOMER_ID = C.CUSTOMER_ID AND C.CUSTOMER_ID = 1

--Truy vấn 4: Thống kê doanh thu theo ngày 
SELECT SUM(BILL_TOTAL_COST)
FROM BILL  
WHERE CREATED_DATE = '2021-3-12'