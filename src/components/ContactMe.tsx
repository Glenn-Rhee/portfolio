"use client";
import { Mail, MessageSquare, Send } from "lucide-react";
import ShellSection from "./ShellSection";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { variantsText } from "./MainPage";
import { FormEvent, useRef, useState } from "react";
import Button from "./ui/Button";

const contacts = [
  {
    icon: <Mail size={35} color="#f3f4f6" />,
    href: "mailto:arielrizki.fs1@gmail.com",
  },
  {
    icon: (
      <Image
        src={"/github-mark-white.png"}
        width={35}
        height={35}
        alt="Github Icon"
      />
    ),
    href: "https://github.com/Glenn-Rhee",
  },
  {
    icon: (
      <Image
        src={"/instagram.png"}
        width={70}
        height={70}
        alt="Instagram Icon"
      />
    ),
    href: "https://www.instagram.com/aaarrl.r/",
  },
  {
    icon: (
      <Image
        src={"/linked-in.png"}
        width={42}
        height={42}
        alt="Linked in Icon"
      />
    ),
    href: "https://www.linkedin.com/in/ariel-rizki-muhtamad-bakri-21b032287/",
  },
];

export default function ContactMe() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isShow = useInView(ref, {
    amount: 0.3,
  });

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim() || !message.trim()) return;
    // TODO: sambungkan ke API route / server action / EmailJS / Resend
    console.log({ email, message });
    setEmail("");
    setMessage("");
  }

  return (
    <ShellSection className="md:grid-cols-2 lg:grid-cols-2 gap-x-8" ref={ref}>
      {/* Kolom kiri: rata kiri di semua ukuran layar (sesuai desain mobile) */}
      <div className="flex flex-col text-start justify-center gap-y-4 md:gap-y-6 md:pe-8">
        <div className="flex flex-col gap-y-1 md:gap-y-2">
          <motion.span
            initial={{
              x: -40,
              opacity: 0,
            }}
            variants={variantsText}
            animate={isShow ? "show" : "hide"}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 0,
            }}
            className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-slate-500"
          >
            Contact
          </motion.span>
          <motion.h2
            initial={{
              x: -40,
              opacity: 0,
            }}
            variants={variantsText}
            animate={isShow ? "show" : "hide"}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 0,
            }}
            className="text-5xl md:text-6xl lg:text-8xl md:-m-1 font-bold text-black-primary"
          >
            Get In Touch
          </motion.h2>
        </div>
        <div className="flex flex-col justify-start gap-y-2 md:gap-y-3 mt-1 md:mt-0">
          <motion.div
            initial={{
              x: -40,
              opacity: 0,
            }}
            variants={variantsText}
            animate={isShow ? "show" : "hide"}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 0.2,
            }}
            className="w-28 h-[4px] bg-slate-800 rounded-lg"
          />
          <motion.div
            initial={{
              x: -40,
              opacity: 0,
            }}
            variants={variantsText}
            animate={isShow ? "show" : "hide"}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 0.3,
            }}
            className="w-28 h-[4px] bg-slate-800 rounded-lg md:ms-10 lg:ms-12 ms-8"
          />
        </div>
        <motion.p
          initial={{
            x: -40,
            opacity: 0,
          }}
          variants={variantsText}
          animate={isShow ? "show" : "hide"}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: 0.5,
          }}
          className="text-base md:text-xl text-gray-600 leading-relaxed"
        >
          Feel free to contact me if you have any question.
          <br />
          I&apos;ll get back to you as soon as possible.
        </motion.p>
        <motion.div
          initial={{
            x: -40,
            opacity: 0,
          }}
          variants={variantsText}
          animate={isShow ? "show" : "hide"}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: 0.6,
          }}
          className="flex items-center gap-x-3 text-base md:text-xl text-gray-600"
        >
          <Mail size={24} className="shrink-0" />
          <span className="break-all">arielrizki.fs1@gmail.com</span>
        </motion.div>
        <div className="flex items-center justify-start w-full gap-x-4">
          {contacts.map((v, i) => (
            <motion.a
              target="_blank"
              initial={{
                y: 80,
                opacity: 0,
              }}
              variants={{
                show: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                    delay: 0.7 + +("0." + i + 1),
                  },
                },
                hide: {
                  y: 80,
                  opacity: 0,
                  transition: {
                    delay: 0,
                  },
                },
              }}
              animate={isShow ? "show" : "hide"}
              transition={{
                ease: "easeOut",
              }}
              href={v.href}
              key={i}
            >
              <button className="h-13 w-13 cursor-pointer hover:bg-slate-700 active:bg-slate-900 transition-all duration-200 aspect-square p-1 md:h-16 md:w-16 bg-slate-800 flex items-center justify-center rounded-full">
                {v.icon}
              </button>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Form menggantikan gambar profil */}
      <motion.div
        initial={{
          x: -40,
          opacity: 0,
        }}
        variants={variantsText}
        animate={isShow ? "show" : "hide"}
        transition={{
          duration: 0.4,
          ease: "easeOut",
          delay: 0.1,
        }}
        className="w-full mt-4 md:mt-0 bg-white/70 border border-gray-200 rounded-2xl shadow-md p-6 md:p-8"
      >
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-y-5">
          <div className="flex flex-col gap-y-1 text-start">
            <h3 className="text-2xl font-bold text-black-primary">
              Send Me a Message
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Have a project in mind, a collaboration idea, or just want to say
              hi? I&apos;d love to hear from you!
            </p>
          </div>

          <div className="flex flex-col gap-y-2 text-start">
            <label
              htmlFor="contact-email"
              className="text-sm md:text-base font-medium text-slate-800"
            >
              Your Email <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <Mail
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                id="contact-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-300 bg-white/60 py-3.5 pl-11 pr-3 text-base md:text-sm text-slate-800 placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-slate-800 focus:ring-2 focus:ring-slate-800/20"
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-2 text-start">
            <label
              htmlFor="contact-message"
              className="text-sm md:text-base font-medium text-slate-800"
            >
              Message <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <MessageSquare
                size={20}
                className="absolute left-3 top-4 text-gray-500"
              />
              <textarea
                id="contact-message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full resize-none md:resize-y rounded-lg border border-gray-300 bg-white/60 py-3.5 pl-11 pr-3 text-base md:text-sm text-slate-800 placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-slate-800 focus:ring-2 focus:ring-slate-800/20"
              />
            </div>
          </div>

          <Button type="submit" className="w-full md:w-full">
            <Send size={18} />
            Send Message
          </Button>
        </form>
      </motion.div>
    </ShellSection>
  );
}
