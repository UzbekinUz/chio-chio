import { useEffect, useState } from "react";
import { ChevronRight, X } from "lucide-react";
import axios from "axios";
import { API_LINK, SITE_LINK } from "../cfg";

export default function BarberFeatures() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [barbers, setBarber] = useState([])
  useEffect(()=>{
    axios.get(`${API_LINK}/chiodata/barber/getAll`).then((e)=>{
      const {ok, msg, data} = e.data
      if (ok) {
        setBarber(data)

      } else {
        console.log(msg);
        
      }
    })
  },[])
  return (
    <div className="w-full bg-[#E5E6E0] py-16">
      <div className="w-full flex justify-center mx-auto px-4">
        <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 scrollbar-hide">
          {barbers.map((barber, key) => (
            <div
              key={key}
              className=" snap-center bg-none p-6 flex flex-col items-center  transition-transform hover:scale-[1.02]"
            >
              {/* Yumaloq rasm */}
              <div
                className="w-60 h-60 overflow-hidden rounded-full  cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-4 border-[#edece7]"
                onClick={() => setSelectedImage(`${SITE_LINK}${barber.photo}`)}
              >
                <img
                  src={`${SITE_LINK}${barber.photo}`}
                  alt={barber.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Matn qismi */}
              <div className="text-center mt-6 grow">
                <h3 className="font-black text-2xl text-[#1a2e40]">{barber.name}</h3>
                
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-5 right-5 text-white p-2 hover:bg-white/20 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X size={30} />
          </button>
          <img
            src={selectedImage}
            className="max-w-full max-h-[80vh] rounded-[30px] shadow-2xl"
            alt="Barber"
          />
        </div>
      )}
    </div>
  );
}