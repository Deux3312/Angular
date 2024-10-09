@echo off
SET PGPATH="C:\Program Files\PostgreSQL\14\bin\pg_dump.exe"
SET PGPASSWORD=Laeisz2022
SET YY=%DATE:~-4%
SET MM=%DATE:~-7,2%
SET DD=%DATE:~-10,2%
SET SS=%TIME:~-5,2%
SET MI=%TIME:~-8,2%
SET HH=%TIME:~-11,2%
%PGPATH% -h 127.0.0.1 -p 5432  -U postgres -F c -b -v -f  C:\xampp\htdocs\Solicitudes\backups_BD\solicitudes%YY%-%MM%-%DD%_%HH%_%MI%_%SS%.backup solicitudes
exit