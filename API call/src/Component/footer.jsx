import React from 'react'

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-16">

      <h2 className="text-white text-2xl text-center font-semibold mb-10">
        Contact Us
      </h2>

      
      <div className="flex justify-center gap-8 text-2xl mb-12">
        <i className="fa-brands fa-facebook hover:text-blue-500"></i>
        <i className="fa-brands fa-whatsapp hover:text-blue-500 "></i>
        <i className="fa-brands fa-square-instagram hover:text-blue-500"></i>
        <i className="fa-brands fa-youtube hover:text-blue-500 "></i>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto text-center md:text-left">

          <div className="flex flex-col gap-2">
            <a href="#" className="hover:text-orange-400">About Us</a>
            <a href="#" className="hover:text-orange-400">Explore</a>
            <a href="#" className="hover:text-orange-400">Home</a>
            <a href="#" className="hover:text-orange-400">Features</a>
            <a href="#" className="hover:text-orange-400">Blog</a>
            <a href="#" className="hover:text-orange-400">FAQ</a>
          </div>

        <div className="flex flex-col gap-2">
          <a href="#" className="hover:text-orange-400">About Us</a>
          <a href="#" className="hover:text-orange-400">Explore</a>
          <a href="#" className="hover:text-orange-400">Home</a>
          <a href="#" className="hover:text-orange-400">Features</a>
          <a href="#" className="hover:text-orange-400">Blog</a>
          <a href="#" className="hover:text-orange-400">FAQ</a>
        </div>

        <div className="flex flex-col gap-2">
          <a href="#" className="hover:text-orange-400">About Us</a>
          <a href="#" className="hover:text-orange-400">Explore</a>
          <a href="#" className="hover:text-orange-400">Home</a>
          <a href="#" className="hover:text-orange-400">Features</a>
          <a href="#" className="hover:text-orange-400">Blog</a>
          <a href="#" className="hover:text-orange-400">FAQ</a>
        </div>

      </div>

      <p className="text-center text-gray-500 mt-12 text-sm">
        © 2026 JungleBook. All rights reserved.
      </p>

    </footer>
  )
}

export default Footer
