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