# GitHub Pages 上傳指南

## 方法一：使用 GitHub Desktop（推薦給初學者）

1. 下載並安裝 [GitHub Desktop](https://desktop.github.com/)
2. 登入您的 GitHub 帳號
3. 點擊 "Clone a repository from the Internet"
4. 選擇您剛建立的儲存庫
5. 將本資料夾的所有檔案複製到儲存庫資料夾中
6. 在 GitHub Desktop 中提交變更並推送

## 方法二：使用網頁介面上傳

1. 前往您的 GitHub 儲存庫頁面
2. 點擊 "uploading an existing file"
3. 將以下檔案拖拽到頁面上：
   - index.html
   - style.css
   - main.js
4. 在下方輸入提交訊息："Add responsive navbar files"
5. 點擊 "Commit changes"

## 方法三：使用 Git 命令列

```bash
# 初始化 Git 儲存庫
git init

# 新增遠端儲存庫
git remote add origin https://github.com/您的使用者名稱/儲存庫名稱.git

# 新增檔案
git add .

# 提交變更
git commit -m "Add responsive navbar files"

# 推送到 GitHub
git push -u origin main
```

## 啟用 GitHub Pages

1. 前往您的儲存庫頁面
2. 點擊 "Settings" 標籤
3. 在左側選單中找到 "Pages"
4. 在 "Source" 下選擇 "Deploy from a branch"
5. 選擇 "main" 分支和 "/ (root)" 資料夾
6. 點擊 "Save"

## 存取您的網站

幾分鐘後，您的網站將可在以下網址存取：
`https://您的使用者名稱.github.io/儲存庫名稱/`

例如：`https://jeffe.github.io/hw1-q1-responsive-navbar/`
