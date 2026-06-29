import { useState } from 'react';
import { Menu, X, LogOut, Calendar, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Navbar({ activeTab, setActiveTab, client, setAuthCheck, authCheck }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setAuthCheck(!authCheck);
    setIsOpen(false);
    navigate('/');
  };

  const handleTabClick = (cat) => {
    setActiveTab(cat.name);
    setIsOpen(false);

    navigate(cat.id);
  };

  const categories = [
    { id: '/', name: 'Bosh sahifa' },
    { id: '/booking', name: !client.auth?'Bron qilish':'Uchrashuvlar' },
  ];

  return (
    <nav className="w-full bg-[#E5E6E0] px-4 pt-4 pb-2 md:px-8 relative z-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between border-b border-gray-300/40 pb-4">
          <img 
            src="/logoBlack.png" alt="Chio Chio" 
            className="h-10 md:h-14 object-contain cursor-pointer" 
            onClick={() => {navigate('/'); }}
          />

          {/* DESKTOP TUGMALARI */}
          <div className="hidden md:flex items-center gap-4">
            {client.auth ? (
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-xs text-[#1a2e40]">{client.name}</p>
                  <p className="text-[10px] text-gray-500">{client.phone}</p>
                </div>

                <button onClick={handleLogout} className="p-2 hover:text-rose-600"><LogOut size={20} /></button>
                <Link to="/booking" onClick={()=>setActiveTab("Uchrashuvlar")} className="bg-[#0D263F] text-white mt-1 font-bold text-sm md:text-base px-8 py-3.5 rounded-full hover:bg-opacity-90 transition duration-300 shadow-md">Uchrashuvlar</Link>
              </div>
            ) : (
              <button 
                onClick={() => { setActiveTab('Bron qilish'); navigate('/booking'); }}
                className="bg-[#0D263F] text-white font-bold text-sm px-6 py-2 rounded-full hover:bg-[#c40043]"
              >
                Online booking
              </button>
            )}
          </div>

          {/* MOBIL BURGER */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBIL MENU */}
        {isOpen && (
          <div className="absolute left-0 w-full bg-[#E5E6E0] border-b border-gray-300 p-4 md:hidden flex flex-col gap-3">
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => handleTabClick(cat)} className="text-left font-bold py-2 border-b border-gray-300/20">
                {cat.name}
              </button>
            ))}
            {client.auth && (
              <button onClick={handleLogout} className="text-left font-bold py-2 text-rose-700 flex items-center gap-2">
                <LogOut size={18} /> Chiqish
              </button>
            )}
          </div>
        )}

        {/* DESKTOP NAVIGATSIYA */}
        <div className="hidden md:block mt-4 bg-[#e5e3db]/60 rounded-xl p-1">
          <div className="flex justify-between font-bold text-xs">
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => handleTabClick(cat)} className={`flex-1 py-3 rounded-lg ${activeTab === cat.name ? 'bg-white text-[#e5004f]' : ''}`}>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;