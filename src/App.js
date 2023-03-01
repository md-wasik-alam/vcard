
import './App.css';
import Header from './Components/Header.jsx';
import Insert from './Components/Insert.jsx';
import Home from './Components/Home.jsx';
import {  Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


function App() {
  const navigate=useNavigate();
  const [vdata, setVdata] = useState([])
  const [refresh, setRefresh] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState([])

  const handleDelete = async (id) => {
    await fetch(`http://127.0.0.1:8000/api/student/${id}`, {
      method: "delete",
    }).then(resp => resp.json()).then(resp => alert(resp.msg)).then(data => setRefresh(!refresh))


  }
  useEffect(() => {

    fetch("http://127.0.0.1:8000/api/student").then(res => res.json()).then(res => setVdata(res.data))
  }, [refresh])

  const handleEdit = (value) => {
    setEditMode(true);
    setEditData(value);
    navigate("/insert")
    
  }

 
  return (
    <>
      <Header editMode={editMode} />
      <Routes>
        <Route path='/' element={<Home vdata={vdata} handleDelete={handleDelete} handleEdit={handleEdit} />} />
        <Route path='/insert' element={(editMode)?<Insert setEditData={setEditData} editData={editData} editMode={editMode} setEditMode={setEditMode} />:<Insert />} />
      </Routes>
    </>
  );
}

export default App;
