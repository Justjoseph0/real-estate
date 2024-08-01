import { useState } from "react";
import Nav from "./components/Nav";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <header className="bg-header-image bg-cover bg-center">
        <Nav />
        <Header />
      </header>
    </>
  );
}

function Header() {
  const [activeTabs, setActiveTabs] = useState('sale')

  function handleActiveTabs(tab) {
    setActiveTabs(tab)
  }
  return (
    <section className="w-4/5 mx-auto mt-28 flex justify-between items-center px-14">
      <div className="w-[50%] h-fit">
        <p className="font-semibold text-xl text-[#4361EE] leading-7">
          REAL ESTATE
        </p>
        <h1 className="font-bold text-[57px] text-[#0B090A] my-4 leading-[64px]">
          Find a perfect home you love..!
        </h1>
        <p className="font-normal text-[#808080] leading-6">
          Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.
          Integer a dolor eu sapien sodales vulputate ac in purus.
        </p>
       <PropertyShowcase />
        
      </div>

      <div className="w-[40%] bg-white shadow rounded-[30px] h-fit">
        <div className="flex justify-center gap-10 mb-4 border-b">
          <button
            className={`font-medium py-6 border-b-2 border-transparent focus:outline-none w-[150px] ${
              activeTabs === "sale"
                ? "border-custom-purple text-custom-purple"
                : "text-gray-500"
            }`}
            onClick={() => handleActiveTabs("sale")}
          >
            For Sale
          </button>
          <button
            className={`font-medium py-6 border-b-2 border-transparent focus:outline-none w-[150px]
              ${
                activeTabs === "rent"
                  ? "border-custom-purple text-custom-purple "
                  : "text-gray-500"
              }`}
            onClick={() => handleActiveTabs("rent")}
          >
            For Rent
          </button>
        </div>

        <form className="flex flex-col gap-6 px-10 mt-12 pb-12">
          <div>
            <input
              type="text"
              className="w-full h-14 rounded-[20px] bg-gray-100 px-5 outline-none text-[#AAAAAA]"
              placeholder="New York, San Francisco, etc"
            />
          </div>
          <div>
            <select className="w-full h-14 rounded-[20px] bg-gray-100 outline-none text-[#AAAAAA] px-3">
              <option>Select Property Type</option>
              {/* Other options here */}
            </select>
          </div>
          <div>
            <select className="w-full h-14 rounded-[20px] bg-gray-100 outline-none text-[#AAAAAA] px-3">
              <option>Select Rooms</option>
              {/* Other options here */}
            </select>
          </div>
          <div>
            <a
              href="#"
              className="text-custom-purple flex items-center space-x-3"
            >
              <img src="setting.svg" alt="" />
              <span className="text-xs font-normal">Advance Search</span>
            </a>
          </div>
          <button className="w-full bg-custom-purple text-white rounded-[50px] h-14 font-medium flex justify-center items-center gap-3 mt-8">
            <img src="search.svg" alt="" />
            <span> Search</span>
          </button>
        </form>
      </div>
      
    </section>
  );
}

const PropertyShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);


  const slides = [
    "Group.png",
    "Group.png",
    "Group.png",
  ];
   const handlePrevClick = () => {
     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
   };

   const handleNextClick = () => {
     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
   };
   return (
     <div className="">
       <div className="relative">
         <div className="overflow-hidden rounded-lg">
           <div
             className="whitespace-nowrap transition-transform duration-500"
             style={{ transform: `translateX(-${currentSlide * 100}%)` }}
           >
             {slides.map((slide, index) => (
               <img
                 key={index}
                 src={slide}
                 alt={`Slide ${index + 1}`}
                 className="inline-block w-full"
               />
             ))}
           </div>
         </div>
         <button
           onClick={handlePrevClick}
           className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 -ml-6"
         >
           <svg
             className="w-6 h-6 text-gray-600"
             fill="none"
             stroke="currentColor"
             viewBox="0 0 24 24"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M15 19l-7-7 7-7"
             />
           </svg>
         </button>
         <button
           onClick={handleNextClick}
           className="absolute right-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 -mr-6"
         >
           <svg
             className="w-6 h-6 text-gray-600"
             fill="none"
             stroke="currentColor"
             viewBox="0 0 24 24"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M9 5l7 7-7 7"
             />
           </svg>
         </button>
         <div className="flex justify-center space-x-2 mt-0 absolute bottom-0 left-0 right-0 mb-4">
           {slides.map((_, index) => (
             <button
               key={index}
               onClick={() => setCurrentSlide(index)}
               className={`w-3 h-3 rounded-full ${
                 currentSlide === index ? "bg-blue-600" : "bg-gray-300"
               }`}
             ></button>
           ))}
         </div>
       </div>
     </div>
   );
};

export default App;
