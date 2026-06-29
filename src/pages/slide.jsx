import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Professional sartaroshlik",
    desc: "Yapon texnologiyalari asosida",
    image:
      "https://images.unsplash.com/photo-1599351431202-180f0b484501?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Zamonaviy uslub",
    desc: "Eng yaxshi ustalar xizmati",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b09f6f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Soch bo'yash",
    desc: "Sifatli va xavfsiz materiallar",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  // Avtomatik alishish
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center w-full min-h-125 overflow-hidden rounded-2xl shadow-xl group">
      <div className="relative flex max-w-6xl">
        {/* Slaydlar */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-10 left-10 text-white">
              <h2 className="text-4xl font-bold">{slide.title}</h2>
              <p className="text-lg opacity-90">{slide.desc}</p>
            </div>
          </div>
        ))}

        {/* Navigatsiya tugmalari */}
        <button
          onClick={() =>
            setCurrent((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
          }
          className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm transition opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={30} />
        </button>
        <button
          onClick={() =>
            setCurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
          }
          className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm transition opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={30} />
        </button>

        {/* Indikator nuqtalar */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-white w-8" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
