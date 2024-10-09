@echo off
powershell -Command "Invoke-WebRequest -Uri 'http://192.168.0.88/Solicitudes/cronjob/cron_eoc.php' -UseBasicParsing"
