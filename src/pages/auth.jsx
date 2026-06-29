import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { API_LINK } from "../cfg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AuthPage({ refresh, setRefresh }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
  });
  const [toast, setToast] = useState({
    show: false,
    msg: "",
    type: "ok",
  });
  const gps = useNavigate();
  // Funksiyalar (Bu yerda API bog'lanadi)
  function showToast(msg, type = "ok") {
    setToast({ show: true, msg, type });
    setTimeout(() => {
      setToast({ show: false, msg: "", type: "ok" });
    }, 3000);
  }
  function handleSubmit(e) {
    e.preventDefault();

    const endpoint = isLogin
      ? `${API_LINK}/chiodata/client/enter`
      : `${API_LINK}/chiodata/client/add`;

    axios
      .post(endpoint, formData)
      .then((res) => {
        if (isLogin) {
          const { ok, msg, access_token } = res.data;

          if (!ok) {
            showToast(msg, "error");
          } else {
            showToast(msg, "ok");
            localStorage.setItem("access_token", access_token);
            setTimeout(() => {
              setRefresh(!refresh);
              gps('/booking')
            }, 1200);
          }
        } else {
          const { ok, msg } = res.data;
          if (!ok) {
            showToast(msg, "error");
          } else {
            showToast(msg, "ok");
            setTimeout(() => {
              setIsLogin(true);
              setFormData({
                name: "",
                phone: "",
                password: "",
              });
            }, 1500);
          }
        }
      })
      .catch((err) => {
        console.error(err);
        showToast("Tizimga ulanishda xatolik yuz berdi!", "warning");
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#edece7] p-4">
      {toast.show && (
        <div
          className={`fixed top-6 right-6 z-50 flex items-center p-4 rounded-xl shadow-xl border text-white font-medium backdrop-blur-sm transform transition-all duration-300 ${
            toast.type === "ok"
              ? "bg-emerald-600/95 border-emerald-500"
              : toast.type === "error"
                ? "bg-rose-600/95 border-rose-500"
                : "bg-amber-500/95 border-amber-400"
          }`}
        >
          <span className="mr-2.5 text-lg">
            {toast.type === "ok" ? "⚡" : toast.type === "error" ? "🛑" : "⚠️"}
          </span>
          {toast.msg}
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-[40px] shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-black text-[#1a2e40] mb-6 text-center">
          {isLogin ? "Xush kelibsiz!" : "Ro'yxatdan o'tish"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Ismingiz"
              className="w-full p-4 rounded-2xl bg-gray-100 outline-none"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          )}
          <input
            type="tel"
            placeholder="Telefon raqamingiz"
            className="w-full p-4 rounded-2xl bg-gray-100 outline-none"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Parol"
            className="w-full p-4 rounded-2xl bg-gray-100 outline-none"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <button
            type="submit"
            className="w-full bg-[#1a2e40] text-white py-4 rounded-2xl font-bold hover:bg-[#e5004f] transition-all"
          >
            {isLogin ? "Kirish" : "Ro'yxatdan o'tish"}
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-500">
          {isLogin ? "Profilingiz yo'qmi?" : "Allaqachon a'zosiz?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#e5004f] font-bold ml-1"
          >
            {isLogin ? "Ro'yxatdan o'ting" : "Kiring"}
          </button>
        </p>
      </motion.div>
    </div>
  );
}
