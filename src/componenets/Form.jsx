import React, { useEffect, useRef } from 'react'

const Form = () => {
    const inputRef = useRef()

    useEffect(()=>{
        inputRef.current.focus()
    }, [])
    const handleSubmit = (e)=>{
        e.preventDefault();
        alert(`You typed: ${inputRef.current.value}`)
        inputRef.current.value =""
        inputRef.current.focus();
    }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 p-4'>
        <form onSubmit={handleSubmit} className='bg-white shadow-md rounded 
        px-8 pt-6 pb-8 w-full max-w-sm '>
            <h2 className='text-xl font-semibold mb-4 text-gray-400'>Auto Focused Input Form</h2>
            <input
            className='w-full px-4 py-2 border border-gray-300 rounded mb-4 
            focus:outline:none focus:ring-2 focus:ring-blue-500' 
            ref={inputRef} 
            type="text" 
            placeholder='Type SOmething ..' 
            />
            <button 
            className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-900 transition'
            type='submit'
            >Submit</button>
        </form>
    </div>
  )
}

export default Form