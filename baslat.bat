@echo off
chcp 65001 > nul
title Adar Cep Shop - Kırşehir Tanıtım Sitesi
echo ===================================================================
echo               ADAR CEP SHOP - KIRŞEHİR MERKEZ
echo   Sıfır & 2. El Telefon, Zore Aksesuar ve Teknik Servis Vitrini
echo ===================================================================
echo.
echo Sunucu aktif ediliyor...
echo.
start http://localhost:3000
bun run server.ts
pause
