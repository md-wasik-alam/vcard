import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Incert = ({ editData, setEditData, editMode, setEditMode }) => {
  const [name, setName] = useState("");
  const [father_name, setFather_name] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const navigate = useNavigate();


  // update in create data function 
  const handleSubmit = (e) => {
    e.preventDefault();
    let x = { name, father_name, contact, email, city, pincode };

    if (editMode) {
      const id = editData.id;

      axios.patch(`http://127.0.0.1:8000/api/student/${id}`, x)
        .then(res => alert(res.data.msg))
        .then(res => setEditMode(false))
        .then(res => navigate('/'))
        .catch(err => console.error(err))
    }
    else {
      axios.post('http://127.0.0.1:8000/api/student', x)
        .then(res => alert(res.data.msg))
        .then(res => navigate('/'))
        .catch(err => console.error(err))
    }

  }

  // editData init in state 
  useState(() => {
    setName((editData?.name) ? editData.name : "")
    setFather_name((editData?.father_name) ? editData.father_name : "")
    setContact((editData?.contact) ? editData.contact : "")
    setEmail((editData?.email) ? editData.email : "")
    setCity((editData?.city) ? editData.city : "")
    setPincode((editData?.pincode) ? editData.pincode : "")
  }, [editData])


  return (
    <div className="mx-auto max-w-md py-4">
      <h1 className="text-2xl font-bold mb-4">{(editMode) ? "Update Personal Information" : "Personal Information"}</h1>
      <form className="space-y-4" onSubmit={handleSubmit} >


        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
          <input name="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500" id="name" type="text" placeholder="John Doe" />

        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="father_name">Father's Name</label>
          <input name="father_name" value={father_name} onChange={(e) => setFather_name(e.target.value)} className="w-full border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500" id="father_name" type="text" placeholder="Jane Doe" />

        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="contact">Contact Number</label>
          <input name="contact" value={contact} onChange={(e) => setContact(e.target.value)} className="w-full border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500" id="contact" type="text" placeholder="+91 9876543210" />

        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email Address</label>
          <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500" id="email" type="email" placeholder="johndoe@example.com" />

        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="city">City</label>
          <input name="city" value={city} onChange={(e) => setCity(e.target.value)} className="w-full border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500" id="city" type="text" placeholder="New York" />

        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="pin">PIN Code</label>
          <input name="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} className="w-full border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-500" id="pin" type="text" placeholder="123456" />

        </div>
        {
          (editMode) ?
            <div className="flex gap-3">
              <button onClick={() => (setEditMode(false))} className="bg-orange-600 hover:bg-orange-700 w-full text-white font-bold py-2 px-4 rounded">Cancle</button>
              <button type='submit' className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded">Update</button>
            </div>

            :
            <button type='submit' className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded">Submit</button>

        }
      </form>
    </div>
  )
}

export default Incert
