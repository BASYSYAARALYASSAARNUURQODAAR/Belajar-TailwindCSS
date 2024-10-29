import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const[scroll, setscroll] = useState(false);

  const handleClick = () => {
    setShow(!show);  
    // console.log(show);
  };

  let menuActive = show ? "left-0" : "-left-full";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5 ) {
        console.log("testing");
        setscroll(true);
        setShow(false);      
      } else {
        setscroll(false);
      }
    });
  });

  let scrollActive = scroll ? "py-6 bg-slate-300 shadow" : "py-4";

return (
   <div className={`navbar fixed w-full transition-all ${scrollActive}`}>
   <div className="container mx-auto px-4">
     <div className="navbar-box flex items-center justify-between">
     <div className="logo">
        <h1 className="sm:text-2xl text-xl font-bold">Ngoding kuy.</h1>
     </div>
     <ul 
     className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-green-400 font-bold text-white transition-all`} 
     >
      <nav className="hover:text-green-500 p-4">
       <li className="flex items-center gap-3">
         <i className="ri-home-8-line text3xl md:hidden block"></i>  
          <a href="#home" className="font-medium opacity-75">Beranda</a>
        </li> 
        </nav>
        <nav className="hover:text-green-500 p-4">
        <li className="flex items-center gap-3">
        <i className="ri-information-line text3xl md:hidden block"></i>  
          <a href="#about" className="font-medium opacity-75">Tentang kami</a>
        </li>
        </nav>
        <nav className="hover:text-green-500 p-4">
        <li className="flex items-center gap-3">
        <i className="ri-settings-3-line text3xl md:hidden block"></i>  
          <a href="#services" className="font-medium opacity-75">Layanan</a>
        </li>
        </nav>
        <nav className="hover:text-green-500 p-4">
        <li className="flex items-center gap-3">
        <i className="ri-image-line text3xl md:hidden block"></i>  
          <a href="#proyek" className="font-medium opacity-75">Proyek</a>
        </li>
        </nav>
      </ul>
      <div className="social flex items-center gap-2">
       <a href="#social" className="bg-green-400 px-5 py-2 rounded-full text-white font-bold hover:bg-green-500 transition">Social Media</a>
       <i className="ri-menu-3-fill text-3xl md:hidden block" onClick={handleClick}></i>
      </div>
     </div>
   </div>
  </div>
);

};

export default Navbar;