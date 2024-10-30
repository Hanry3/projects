import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-green-400 text-black  py-2  border border-black'>
      <div className="logo">
        <span className='font-bold text-2xl mx-8 border border-black rounded-xl bg-black text-green-400 cursor-progress'>TaskFlow</span>
      </div>
      <ul className="flex gap-6 mx-12">
        <a target='_blank' href="https://www.linkedin.com/in/shubham-shukla-62095032a/"> <li className='cursor-pointer hover:font-bold transition-all border border-black rounded-3xl size-10'> <img src="/src/assets/linkedin.png" alt="instagram" /> </li>
        </a>
        <a target='_blank' href="https://www.instagram.com/shbhm.exe/"> <li className='cursor-pointer hover:font-bold transition-all border border-black rounded-3xl size-10'> <img src="/src/assets/instagram.png" alt="instagram" /> </li>
        </a>

        <a target='_blank' href="https://github.com/shbhmexe"> <li className='cursor-pointer hover:font-bold transition-all opacity-1 size-10'> <img src="/src/assets/github.png" alt="github" /> </li>
        </a>
      </ul>
    </nav>
  )
}

export default Navbar
