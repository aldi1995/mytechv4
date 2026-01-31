import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface YoutubeModalProps {
  open: boolean;
  onClose: () => void;
  videoId: string;
}

export default function YoutubeModal({
  open,
  onClose,
  videoId,
}: YoutubeModalProps) {
  if (!videoId) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-black shadow-2xl">

              {/* CLOSE BUTTON */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 z-10 bg-black/60 hover:bg-black text-white p-2 rounded-full"
              >
                <X size={20} />
              </button>

              {/* YOUTUBE IFRAME */}
              <div className="relative w-full aspect-video">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                  title="YouTube demo"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
