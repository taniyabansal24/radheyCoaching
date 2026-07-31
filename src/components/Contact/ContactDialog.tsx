"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { useEffect } from "react";

interface ContactDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactDialog({
  open,
  onClose,
}: ContactDialogProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-1/2 z-[9999] w-[92%] max-w-3xl -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
              {/* Glow */}
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#EAF7CF] blur-3xl opacity-50" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200"
              >
                <X size={20} />
              </button>

              <div className="relative z-10 p-8 md:p-10">
                <div className="grid gap-5 md:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label className="mb-2 block text-[15px] font-medium text-[#303042]">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="John Doe"
                      className="h-12 w-full rounded-xl border border-gray-300 px-4 text-[15px] outline-none transition focus:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/20"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-[15px] font-medium text-[#303042]">
                      Work Email
                    </label>

                    <input
                      type="email"
                      placeholder="john@company.com"
                      className="h-12 w-full rounded-xl border border-gray-300 px-4 text-[15px] outline-none transition focus:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/20"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="mt-5">
                  <label className="mb-2 block text-[15px] font-medium text-[#303042]">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="General Inquiry"
                    className="h-12 w-full rounded-xl border border-gray-300 px-4 text-[15px] outline-none transition focus:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/20"
                  />
                </div>

                {/* Message */}
                <div className="mt-5">
                  <label className="mb-2 block text-[15px] font-medium text-[#303042]">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full resize-none rounded-xl border border-gray-300 p-4 text-[15px] outline-none transition focus:border-[#6FA073] focus:ring-2 focus:ring-[#6FA073]/20"
                  />
                </div>

                {/* Button */}
                <button className="mt-7 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#9D4091] text-[15px] font-medium text-white shadow-md transition hover:bg-[#5c9162] hover:shadow-lg active:scale-[0.98]">
                  Send Message
                  <Send size={18} />
                </button>

                {/* Footer */}
                <p className="mt-5 text-center text-[13px] text-gray-400">
                  By sending this message, you agree to our{" "}
                  <a
                    href="/privacy"
                    className="font-medium underline underline-offset-2 transition-colors hover:text-[#6FA073]"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}