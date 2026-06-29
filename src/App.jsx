import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/nav";
import Booking from "./pages/booking";
import { useEffect, useState } from "react";
import { API_LINK } from "./cfg";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";

export default function ChioChioTashkent() {
  const [authCheck, setAuthCheck] = useState(false);
  const [activeTab, setTab] = useState("Bosh sahifa");
  const [client, setClient] = useState({
    auth: false,
    clientId: "",
    name: "",
    phone: "",
  });

  // Avtorizatsiyani tekshirish
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      setClient({ auth: false, clientId: "", name: "", phone: "" });
      return;
    }

    // DIQQAT: Backend yo'nalishiga qarab /chiodata qismini tekshirib oling!
    axios
      .get(`${API_LINK}/chiodata/client/check`, {
        headers: { "x-client-token": token },
      })
      .then((res) => {
        const { ok, userInfo } = res.data;
        if (ok) {
          // Backend'dan kelayotgan userInfo ichida _id bo'lsa, uni clientId ga tenglaymiz
          setClient({
            auth: true,
            clientId: userInfo._id || userInfo.clientId,
            name: userInfo.name,
            phone: userInfo.phone,
          });
        } else {
          setClient({ auth: false, clientId: "", name: "", phone: "" });
          localStorage.removeItem("access_token");
        }
      })
      .catch(() => {
        setClient({ auth: false, clientId: "", name: "", phone: "" });
        localStorage.removeItem("access_token");
      });
  }, [authCheck]);

  return (
    <>
      <Navbar client={client} setAuthCheck={setAuthCheck} setActiveTab={setTab} activeTab={activeTab}/>
      <Routes>
        <Route path="/" element={<Home activeTab={activeTab}/>} />
        <Route
          path="/booking"
          element={<Booking client={client} setAuthCheck={setAuthCheck} />}
        />
      </Routes>
      <Footer />
    </>
  );
}
