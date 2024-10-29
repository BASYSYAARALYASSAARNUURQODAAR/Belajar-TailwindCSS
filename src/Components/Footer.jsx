const Footer = () => {
  return <div className="Footer bg-slate-300  shadow mt-20" id="social">
  <div className="container mx-auto px-4 flex items-center justify-between">
    <p className="py-4">
      &copy; Copyright by <span className="font-bold">Basysyaar</span>  
     </p>
     <div className="social-footer flex items-center sm:gap-7 gap-2">
    <a href="https://x.com/Basyar_anq"><i className="ri-twitter-fill text-2xl hover:text-blue-500"></i></a>
    <a href="ri-youtube-fill text-2x"> <i className="ri-youtube-fill text-2xl hover:text-red-500"></i></a>
    <a href="https://www.linkedin.com/in/basysyaar-alyassaar-nuur-qodaar/"><i className="ri-linkedin-box-fill text-2xl hover:text-blue-800"></i></a>
    <a href="https://www.instagram.com/basyar_anq"> <i className="ri-instagram-fill text-2xl hover:text-pink-500"></i></a>
     </div>
   </div>
  </div>;
};

export default Footer   