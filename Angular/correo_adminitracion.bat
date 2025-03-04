@echo off
powershell -Command "Invoke-WebRequest -Uri 'http://192.168.0.88/Solicitudes/model/model_requisa/phpmailer/cron_correo_administracion.php' -UseBasicParsing"
