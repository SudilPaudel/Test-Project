import axios from 'axios'
import React, { useState } from 'react'

const API1 = () => {
    const [userName, setUserName] = useState('')
    const [profile, setProfile] = useState(null)
    const handleSearch = () => {
       fetch(`https://api.github.com/users/${userName}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProfile(data)
            })``
            .catch(err => console.error(err))
    }
    return (
        <>
            <div className='mt-40'>
                <input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder='Enter GitHub Username'
                    className='border p-2 mb-4 rounded'
                />
                <button onClick={handleSearch} className='bg-blue-600 text-white px-4 py-2 rounded'>Search</button>
                {profile && (
                    <div className='border p-4 mt-4 rounded'>
                        <h2 className='text-xl font-bold'>{profile.name}</h2>
                        <img src={profile.avatar_url} alt="Avatar user"  width="100" />
                        <p> Followers: {profile.followers}</p>
                        <p>Following: {profile.following}</p>
                        <p>{profile.node_id}</p>
                        <a href="{profile.url}">{profile.url}</a><br />
                        <a href="{profile.hrml_url}">{profile.html_url}</a>
                    </div>
                )}
            </div>
        </>
    )
}

export default API1