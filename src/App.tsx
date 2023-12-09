import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import ChooseFile from './pages/ChooseFilePage/ChooseFile'
import React from 'react';
import { getDataFromStorage } from './utils/localstorage';
import Table from './pages/Table/Table';

function App() {
  const [data, setData] = React.useState<Person[]>(getDataFromStorage());
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ChooseFile setData={setData} data={data}/>}/>
        <Route path='/table' element={<Table setData={setData} data={data}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
