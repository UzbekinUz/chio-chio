import { useState } from "react";
import { ChevronRight,  X } from "lucide-react";

export default function Features() {
  const [selectedImage, setSelectedImage] = useState(null);

  const slides = [
    {
      id: 1,
      img: "/exter.JPG",
      title: "Tashqi ko'rinishimiz",
      desc: "Toshkent shahridagi eng shinam va zamonaviy Yapon konsepsiyasiga ega salon tashqi qiyofasi.",
    },
    {
      id: 2,
      img: "/inter.JPG",
      title: "Salon ichki qismi",
      desc: "Mijozlarimiz uchun maxsus sterilizatsiya hududi va qulay kutish zonasi bilan ta'minlangan interyer.",
    },
    {
      id: 3,
      img: "man.JPG",
      title: "Ahil jamoamiz",
      desc: "O'z kasbining professional ustalaridan tashkil topgan Chio-Chio Toshkent jamoasi sizning xizmatingizda.",
    },
  ];

  return (
    <div className="w-full relative bg-[#edece7] py-16">
      {/* <div className="bg-[#0D263F] w-full h-50 bottom-0 absolute" style={{borderRadius:"100% 100% 0 0"}}></div> */}

      <div className="max-w-6xl mx-auto px-4">
        {/* --- SCROLL KONTEYNERI --- */}
        <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 scrollbar-hide">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-[85%] relative border-2 border-t-[#0d263fb0] border-l-[#0d263fb0] md:min-w-[320px] snap-center bg-[#e5e3db] border-gray-300/30 rounded-3xl p-5 flex flex-col shadow-lg"
            >
              {/* Rasm qismi: aspect-square orqali bir xil o'lcham */}
              <div
                className="w-full aspect-square overflow-hidden rounded-4xl shadow-inner cursor-pointer"
                onClick={() => setSelectedImage(slide.img)}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Matn qismi */}
              <div className="text-center my-4 grow">
                <h3 className="font-black text-lg text-[#1a2e40] mb-2">
                  {slide.title}
                </h3>
                <p className="text-xs text-gray-600 font-medium leading-relaxed">
                  {slide.desc}
                </p>
              </div>
              <div className="flex flex-col absolute right-0 bottom-0 items-center text-gray-500">
                <div className="w-10 h-10 border-2 bg-[#0D263F] rounded-full flex items-center justify-center animate-bounce">
                  <ChevronRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Oyna (Lightbox) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-5 right-5 text-white bg-black/30 p-2 rounded-full hover:bg-black/50"
            onClick={() => setSelectedImage(null)}
          >
            <X size={30} />
          </button>
          <img
            src={selectedImage}
            alt="Katta rasm"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl animate-in zoom-in duration-300"
          />
        </div>
      )}
      <div className="flex justify-center items-center mt-6 md:hidden animate-pulse"></div>
    </div>
  );
}
