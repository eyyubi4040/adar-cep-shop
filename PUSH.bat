@echo off
chcp 65001 > nul
echo ======================================================
echo 🚀 Adar Cep Shop - GitHub Push Scripti
echo ======================================================
echo.
git push -u origin main
echo.
if %ERRORLEVEL% equ 0 (
    echo ✅ GitHub'a başarıyla gönderildi!
) else (
    echo ❌ Push başarısız oldu. Lütfen GitHub'da 'adar-cep-shop' reposunun oluşturulduğundan emin olun:
    echo 🔗 https://github.com/new
)
echo.
pause
