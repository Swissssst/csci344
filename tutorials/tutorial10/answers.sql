--1:

SELECT * from USERS

--2:

SELECT id, first_name, last_name 
from USERS

--3:

SELECT id, first_name, last_name 
from USERS
order by LAST_NAME 

--4:

SELECT id, user_id, image_url
from POSTS 
where USER_ID = 26

--5:

SELECT id, user_id, image_url
from POSTS 
where USER_ID = 26 or USER_ID = 12

--6:

select COUNT(*) as total
from POSTS

--7:

SELECT user_id, COUNT(*) as count 
from comments
group by USER_ID 
order by count desc;

--8:

SELECT posts.id, posts.IMAGE_URL, posts.USER_ID,
users.USERNAME, users.FIRST_NAME, users.LAST_NAME
from POSTS
join USERS 
on users.ID = posts.USER_ID
where USER_ID = 26 or USER_ID = 12

--9:

SELECT p.id, p.pub_date, f.following_id
FROM posts p
JOIN following f ON p.user_id = f.following_id
WHERE f.user_id = 26;

--10:

SELECT p.id, p.pub_date, f.following_id, u.username
FROM posts p
JOIN following f ON p.user_id = f.following_id
JOIN users u ON p.user_id = u.id
WHERE f.user_id = 26
ORDER BY p.pub_date DESC;


--11:

insert into BOOKMARKS(user_id, POST_ID, timestamp)
values(26, 219, now())

SELECT * from BOOKMARKS where USER_ID = 26

--12:

DELETE FROM bookmarks
WHERE user_id = 26 AND post_id = 219;

DELETE FROM bookmarks
WHERE user_id = 26 AND post_id = 220;

DELETE FROM bookmarks
WHERE user_id = 26 AND post_id = 221;

--13:

UPDATE users
SET email = 'knick2022@gmail.com'
WHERE id = 26;

--14:

SELECT p.id, p.caption, COUNT(c.id) AS count
FROM posts p
LEFT JOIN comments c ON p.id = c.post_id
WHERE p.user_id = 26
GROUP BY p.id, p.caption
ORDER BY p.id;






