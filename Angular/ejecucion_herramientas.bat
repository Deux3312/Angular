@echo off
powershell -Command "Invoke-WebRequest -Uri 'http://localhost/Solicitudes/cronjob/cron_her.php' -UseBasicParsing"
