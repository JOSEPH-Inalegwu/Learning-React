import { useState } from 'react';
import './App.css'

function App() {

  const [bgColor, setBgColor] = useState('olive');

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: bgColor }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 p-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-full bg-white'>

          <button
          onClick={() => setBgColor('blue')} 
          className='px-5 py-2 text-white bg-blue-500 rounded-3xl hover:bg-blue-700'>
            Blue
          </button>

          <button 
          onClick={() => setBgColor('red')}
          className='px-5 py-2 text-white bg-red-500 rounded-3xl hover:bg-red-700'>
            Red
          </button>

          <button 
          onClick={() => setBgColor('green')}
          className='px-5 py-2 text-white bg-green-500 rounded-3xl hover:bg-green-700'>
            Green
          </button>

          <button 
          onClick={() => setBgColor('yellow')}
          className='px-5 py-2 text-white bg-yellow-500 rounded-3xl hover:bg-yellow-700'>
            Yellow
          </button>

          <button 
          onClick={() => setBgColor('purple')}
          className='px-5 py-2 text-white bg-purple-500 rounded-3xl hover:bg-purple-700'>
            Purple
          </button>

          <button 
          onClick={() => setBgColor('pink')}
          className='px-5 py-2 text-white bg-pink-500 rounded-3xl hover:bg-pink-700'>
            Pink
          </button> 

          <button 
          onClick={() => setBgColor('indigo')}
          className='px-5 py-2 text-white bg-indigo-500 rounded-3xl hover:bg-indigo-700'>
            Indigo 
          </button>

          <button 
          onClick={() => setBgColor('gray')}
          className='px-5 py-2 text-white bg-gray-500 rounded-3xl hover:bg-gray-700'>
            Gray
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
