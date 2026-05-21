import { createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Fungsi Mengirim Email menggunakan EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v9wr30d",    // Service ID Anda
        "template_skpxxq9",   // Template ID Anda
        form.current,
        "aKpetVgEfA8y1-mUh"   // Public Key / API Key Anda
      )
      .then(
        (result) => {
          console.log(result.text);
          // Reset form setelah berhasil dikirim
          form.current.reset();
          // Notifikasi sukses
          toast.success("Email berhasil dikirim! Terima kasih.");
        },
        (error) => {
          console.log(error.text);
          // Notifikasi error
          toast.error("Gagal mengirim pesan. Silakan coba lagi nanti.");
        }
      );
  };

  return (
    <section className="bg-dark_primary text-white" id="contact">
      {/* Container notifikasi toast */}
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className="md:container px-5 py-14">
        {/* Judul & Subjudul */}
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle !text-white/60" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />

        <div className="flex gap-10 md:flex-row flex-col mt-5">
          {/* Form Kontak */}
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            {/* Input Nama (from_name) */}
            <input
              type="text"
              name="from_name"
              placeholder="Nama Lengkap"
              required
              className="border border-white/20 p-4 rounded-lg bg-white/5 outline-none focus:border-accent transition-all duration-300 font-DMSans"
            />
            
            {/* Input Email (user_email) */}
            <input
              type="email"
              name="user_email"
              placeholder="Alamat Email"
              required
              className="border border-white/20 p-4 rounded-lg bg-white/5 outline-none focus:border-accent transition-all duration-300 font-DMSans"
            />
            
            {/* Input Pesan (message) */}
            <textarea
              name="message"
              placeholder="Tulis pesan Anda di sini..."
              required
              className="border border-white/20 p-4 rounded-lg bg-white/5 outline-none focus:border-accent transition-all duration-300 h-44 resize-none font-DMSans"
            ></textarea>
            
            {/* Tombol Kirim */}
            <button
              type="submit"
              className="btn self-start bg-white text-dark_primary hover:bg-accent hover:text-white border-none transition-all duration-300"
            >
              Kirim Pesan
            </button>
          </form>

          {/* Kolom Informasi Sosial Media */}
          <div className="flex-1 flex flex-col gap-6">
            {Contact.social_media.map((item, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-4 group"
              >
                {/* Ikon Sosial Media */}
                <div className="text-2xl w-12 h-12 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-accent transition-all duration-300">
                  {createElement(item.icon)}
                </div>
                
                {/* Link Teks */}
                <a 
                  className="font-Poppins text-lg text-white/80 hover:text-white transition-all duration-300" 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {item.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;