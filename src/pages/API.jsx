import React, { useEffect, useState } from 'react'

const API = () => {
const [users, setUsers] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)
useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(!res.ok){
                throw new Error("Network response was not ok ")
            }
            return res.json()
        })
        .then((data)=>{
            setUsers(data)
            setLoading(false)
        })
        .catch((err)=>{
            setError(err.message)
            setLoading(false)
        })
},[])

  return (
    <>
    <div>
        <h2 className='text-xl mt-30 font-semibold mb-4'>User List</h2>
    {users.map((user)=>(
        <div key={user.id} className='border p-2 mb-2 rounded'>
            <h4>{user.name}</h4>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <a href={`https://${user.website}`}>Website: {user.website}</a>
            <p>Company: {user.company.name}</p>
            <p>Address: {user.address.street}, {user.address.city}</p>
        </div>
    ))}
    </div>
    </>
  )
}

export default API