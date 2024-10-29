import HeroImage from "../assets/images/hero.svg";
import AboutImage from "../assets/images/about.svg";

import Proyek1 from "../assets/images/proyek-1.Webp";
import Proyek2 from "../assets/images/proyek-2.Webp";
import Proyek3 from "../assets/images/proyek-3.Webp";
import Proyek4 from "../assets/images/proyek-4.Webp";
import Proyek5 from "../assets/images/proyek-5.Webp";

const HomePage = () => {
  return (
  <div className="homepage pb-10">
    <div className="container mx-auto px-4">
      <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
      <div className="box">
        <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
          Belajar Membuat Website Dengan <span className="font-bold text-green-400 underline">Tailwind CSS</span>
        </h1>
        <p className="text-base/8 mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid nam, eius ratione vero error tempora exercitationem officilis dolor?</p>
        <a href="#" className="bg-green-400 hover:bg-green-500 transition-all py-2 px-4 text-white shadow rounded-full">
          Tentang Kami <i className="ri-eye-line ms-1"></i>
          </a>
       </div>
       <div className="box">
        <img src={HeroImage} alt="Hero Image" className="md:w-full w-[400px] mx-auto md:m-0" />
       </div>
     </div>

     <div className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 md:pt-20 pt-32" id="about">
      <div className="box md:order-1 order-2">
        <img src={AboutImage} alt="About Image" className="lg:w-[500px] w-[400px] md:m-0 mx-auto" />
      </div>
      <div className="box md:order-2 order-1">
      <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
          Belajar Membuat Website Dengan <span className="font-bold text-green-400 underline">Tailwind CSS</span>
        </h1>
        <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid nam, eius ratione vero error tempora exercitationem officilis dolor?</p>
      </div>
     </div>
     <div className="service pt-32" id="services">
      <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2 ">Layanan SMKN 69 JKT</h1>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <div className="service-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        <div className="box bg-red-400 rounded-lg shadow p-4">
          <i className="ri-number-1 text-3xl text-white"></i>
          <h3 className="text-xl font-bold text-white mt-6 mb-2">Service Name 1</h3>
          <p className="text-white text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, deleniti dolor explicabo iusto quibusdam aliquam?</p>
        </div>
        <div className="box bg-yellow-400 rounded-lg shadow p-4">
          <i className="ri-number-2 text-3xl text-white"></i>
          <h3 className="text-xl font-bold text-white mt-6 mb-2">Service Name 2</h3>
          <p className="text-white text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, deleniti dolor explicabo iusto quibusdam aliquam?</p>
        </div>
        <div className="box bg-green-400 rounded-lg shadow p-4">
          <i className="ri-number-3 text-3xl text-white"></i>
          <h3 className="text-xl font-bold text-white mt-6 mb-2">Service Name 3</h3>
          <p className="text-white text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, deleniti dolor explicabo iusto quibusdam aliquam?</p>
        </div>
      </div>
     </div>
     <div className="proyek pt-32" id="proyek">
     <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2 ">Proyek SMKN 69 JKT</h1>
     <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
     <div className="proyek-box pt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
      <div className="box p-2 bg-white shadow">
         <img src={Proyek1} alt="proyek Image" className="w-full h-[220px]" />
         <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 1</h3>
         <p className="text-base/loose">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi provident incidunt ipsa laboriosam maxime animi?</p>
       </div>
      <div className="box p-2 bg-white shadow">
         <img src={Proyek2} alt="proyek Image" className="w-full h-[220px]" />
         <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 2</h3>
         <p className="text-base/loose">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi provident incidunt ipsa laboriosam maxime animi?</p>
       </div>
      <div className="box p-2 bg-white shadow">
         <img src={Proyek3} alt="proyek Image" className="w-full h-[220px]" />
         <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 3</h3>
         <p className="text-base/loose">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi provident incidunt ipsa laboriosam maxime animi?</p>
       </div>
      <div className="box p-2 bg-white shadow">
         <img src={Proyek4} alt="proyek Image" className="w-full h-[220px]"  />
         <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 4</h3>
         <p className="text-base/loose">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi provident incidunt ipsa laboriosam maxime animi?</p>
       </div>
      <div className="box p-2 bg-white shadow">
         <img src={Proyek5} alt="proyek Image" className="w-full h-[220px]" />
         <h3 className="text-xl font-bold mt-6 mb-2">Proyek Name 5</h3>
         <p className="text-base/loose">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi provident incidunt ipsa laboriosam maxime animi?</p>
       </div>
      </div>
     </div>
    </div>
   </div>
  );
};

export default HomePage;
