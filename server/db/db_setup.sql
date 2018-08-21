DROP DATABASE IF EXISTS ng_rolodex;
-- DROP USER IF EXISTS happy_user;

-- CREATE USER happy_user WITH PASSWORD 'password';
CREATE DATABASE ng_rolodex WITH OWNER happy_user;

\c ng_rolodex happy_user;

