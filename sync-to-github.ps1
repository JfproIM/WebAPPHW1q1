# 自動同步檔案到 GitHub 儲存庫
# 使用方法：在 PowerShell 中執行 .\sync-to-github.ps1

# 複製檔案到 GitHub 儲存庫
Copy-Item "index.html" "WebAPPHW1q1\" -Force
Copy-Item "style.css" "WebAPPHW1q1\" -Force
Copy-Item "main.js" "WebAPPHW1q1\" -Force
Copy-Item "README.md" "WebAPPHW1q1\" -Force

Write-Host "檔案已同步到 GitHub 儲存庫資料夾"
Write-Host "請在 GitHub Desktop 中提交並推送變更"
