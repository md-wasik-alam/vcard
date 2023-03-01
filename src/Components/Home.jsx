import React from 'react'

const Home = ({ vdata,handleDelete,handleEdit }) => {

    

    return (
       <div className=" ">
         <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>

                    <th scope="col" className="px-6 py-3 border">
                        id
                    </th>
                    <th scope="col" className="px-6 py-3 border">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3 border">
                        Father_name
                    </th>
                    <th scope="col" className="px-6 py-3 border">
                        Contact
                    </th>
                    <th scope="col" className="px-6 py-3 border">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3 border">
                        city
                    </th>
                    <th scope="col" className="px-6 py-3 border">
                        Pincode
                    </th>
                    <th scope="col" className="px-6 py-3 border">
                        View
                    </th>
                    <th scope="col" className="px-6 py-3 border">
                        Edit
                    </th>
                    <th scope="col" className="px-6 py-3 border">
                        Delete
                    </th>
                </tr>
            </thead>
            <tbody>

                {
                    vdata.map((value, index) => (

                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                            <td scope="row" className=" border px-6 py-4 font-medium text-gray-900   dark:text-white">{value.id}</td>

                            <td scope="row" className="px-6 py-4 font-medium text-gray-900   dark:text-white">{value.name} </td>

                            <td scope="row" className="px-6 py-4 font-medium text-gray-900   dark:text-white">{value.father_name} </td>

                            <td scope="row" className="px-6 py-4 font-medium text-gray-900   dark:text-white">{value.contact} </td>

                            <td scope="row" className="px-6 py-4 font-medium text-gray-900   dark:text-white">{value.email} </td>

                            <td scope="row" className="px-6 py-4 font-medium text-gray-900   dark:text-white">{value.city}</td>

                            <td scope="row" className="px-6 py-4 font-medium text-gray-900   dark:text-white">{value.pincode}</td>



                            <td scope="row" className=" border px-6 py-4 font-medium text-gray-900   dark:text-white">

                                <input className="bg-green-500 hover:bg-green-600 px-2 py-1 rounded-md text-white" type="button" value="view" />

                            </td>
                            <td scope="row" className=" border px-6 py-4 font-medium text-gray-900   dark:text-white">



                                <button onClick={()=>handleEdit(value)} className="bg-orange-500 hover:bg-orange-600 px-2 py-1 rounded-md text-white" >Edit</button>

                            </td>
                            <td scope="row" className=" border px-6 py-4 font-medium text-gray-900   dark:text-white">


                                <input className="bg-red-700 hover:bg-red-800 px-2 py-1 rounded-md text-white" type="button" onClick={()=>handleDelete(value.id)} value="delete" />



                            </td>

                        </tr>
                    ))
                }





            </tbody>
        </table>
       </div>
    )
}

export default Home
