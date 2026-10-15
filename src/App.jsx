import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'

{/*
JS 陣列內建語法
陣列.maps(函式)                   ：陣列內建函式，代表將陣列中每個值傳入你指定的函式中，執行完再回傳結果，通常那個函式都有需傳入的值
陣列.includes(要檢測的內容)       ：陣列內建函式，用於檢測特定內容是否於陣列內，回傳boolean
陣列.filter(判斷函式)             ：陣列內建函式，將陣列中的每個值依序傳入指定的函式，函式需要回傳 true 或 false，true 代表保留該項目，false 代表排除該項目，最後回傳一個只包含符合條件項目的新陣列，不會改變原陣列。
*/}
{/*
git備份與發佈
git status                ：檢查當前檔案狀態
git log                   ：查看過往的 Commit 歷史紀錄。
git diff                  ：比較檔案修改前後的細節差異。
git add .                 ：將檔案的變更加入暫存區，. 代表將當前目錄及子目錄下所有「修改與新增」的檔案加入暫存區
git commit -m "訊息說明"   ：建立記錄點，附帶訊息    
*/}


function App() {
  return (
    <BrowserRouter basename="/Haru_coach_handbook">
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App

