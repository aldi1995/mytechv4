import { useState } from "react";
import { MessageCircle, X, Phone } from "lucide-react";

const WA_NUMBER = "6285156928164"; // GANTI ke nomor kamu
const DEFAULT_MESSAGE = "Halo MYTECH, saya tertarik dengan layanan Anda.";

export default function WhatsAppFloating() {
  const [open, setOpen] = useState(false);

  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* POPUP BOX */}
      {open && (
        <div className="w-80 bg-white rounded-2xl shadow-2xl border overflow-hidden animate-in fade-in slide-in-from-bottom-5">

          {/* HEADER */}
          <div className="bg-green-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span className="font-semibold">WhatsApp MYTECH</span>
            </div>
            <button onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* BODY */}
          <div className="p-4 text-sm text-gray-700">
            <p className="mb-3 font-medium">
              Hai 👋 Mau konsultasi software / SaaS?
            </p>
            <p className="text-gray-500 mb-4">
              Klik tombol di bawah untuk chat langsung dengan tim MYTECH.
            </p>

            <a
              href={waLink}
              target="_blank"
              className="block text-center bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
            >
              Chat di WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center shadow-xl transition"
      >
        <MessageCircle size={26} />
      </button>

    </div>
  );
}
