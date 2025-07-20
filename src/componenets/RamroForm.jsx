import React, { useState } from 'react'

const RamroForm = () => {
    const [email, setEmail] = useState('')
    const[submitted, setSubmitted] = useState(false)
    const[error, setError] =useState('')
    const handleSubmit= (e)=>{
        e.preventDefault()
        if(!email.includes("@gmail.com")){
            setError("Please Enter a email with @gmail.com")
            return;
        }
        setSubmitted(true)
        setError('')
    }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 p-4'>
        <div bg-white shadow-lg rounded-lg p-6 w-full max-w-md>
            <h2 className='text-2xl font-bold mb-4 text-gray-800'>Subscribe to NewsLetter</h2>
            {submitted ? (
                <p className='text-green-600 font-medium'>Thank you for subscribing</p>
            ): (<form onSubmit={handleSubmit}>
                <label className='block mb-2 text-sm font-medium text-gray-700'>Email Address</label>
                <input 
                type="email" 
                className='w-full px-4 py-2 border border-gray-300 rounded-md 
                focus:ring-2 focus:ring-blue-500 outline-none'
                value={email}
                placeholder='yoremail@example.com'
                onChange={(e)=> setEmail(e.target.value)}
                />
                {error && <p className='text-red-500 text-sm mt-1'>{error}</p> }
                <button 
                type="submit"
                className='mt-4 w-full bg-blue-600 text-white py-2 rounded 
                hover:bg-blue-700 transition'
                >
                    Subscribe
                </button>
            </form>)}
            
        </div>
    </div>
  )
}

export default RamroForm