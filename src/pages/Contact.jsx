import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const triggerConfetti = () => {
    // School-pride colored confetti burst (Cyan, Blue, Purple)
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#06b6d4", "#3b82f6", "#a855f7"]
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#06b6d4", "#3b82f6", "#a855f7"]
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    /* 
      EMAILJS INTEGRATION TEMPLATE:
      For active delivery, Ganesh can configure EmailJS:
      1. Install emailjs-com: npm install @emailjs/browser
      2. Import emailjs: import emailjs from '@emailjs/browser';
      3. Call:
         emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
           .then(() => { ... })
    */

    // Simulate sending progress
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      triggerConfetti();

      // Clear form
      setFormData({ name: "", email: "", message: "" });

      // Clear status after 5s
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  const contactDetails = [
    {
      icon: <Phone size={18} className="text-cyan-400" />,
      title: "Call Direct",
      value: "+91 8088125908",
      href: "tel:+918088125908",
      glowColor: "rgba(6, 182, 212, 0.2)",
    },
    {
      icon: <Mail size={18} className="text-purple-400" />,
      title: "Send Email",
      value: "ganeshbannimatti36@gmail.com",
      href: "mailto:ganeshbannimatti36@gmail.com",
      glowColor: "rgba(168, 85, 247, 0.2)",
    },
    {
      icon: <MapPin size={18} className="text-blue-400" />,
      title: "Location",
      value: "Lakshmeshwar, Karnataka, India",
      href: "https://maps.google.com/?q=Lakshmeshwar",
      glowColor: "rgba(59, 130, 246, 0.2)",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
          Get In{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Touch
          </span>
        </h2>
        <div className="h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3 rounded-full w-16" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Side: Contact Information Cards */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="text-left flex flex-col gap-3">
            <h3 className="text-xl font-heading font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">
              Let's Create Something Epic!
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-450 light:text-slate-600 leading-relaxed mb-4">
              Whether you are looking for a dedicated intern, seeking to collaborate on an upcoming national hackathon, have placements requirements, or want to build a freelance project—reach out and let's coordinate!
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {contactDetails.map((detail) => (
              <a
                key={detail.title}
                href={detail.href}
                target={detail.title === "Location" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="p-5 rounded-2xl glass-panel border border-slate-850 hover:border-glow-hover flex items-center gap-4 transition-all duration-300 group overflow-hidden"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{
                    background: `radial-gradient(circle at 10% 50%, ${detail.glowColor} 0%, transparent 80%)`,
                  }}
                />

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 group-hover:text-cyan-400 transition-all duration-300 dark:bg-slate-900 dark:border-slate-800 light:bg-slate-100 light:border-slate-200 light:text-slate-700">
                  {detail.icon}
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-slate-500 dark:text-slate-500 light:text-slate-400 uppercase tracking-widest font-bold">
                    {detail.title}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-850 group-hover:text-cyan-400 transition-colors mt-0.5 break-all">
                    {detail.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-7">
          <div className="p-8 rounded-2xl glass-panel border border-slate-850 relative h-full">
            {/* Status alerts */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-3 text-xs font-semibold text-left">
                <CheckCircle2 size={18} />
                <div>
                  <p className="font-bold">Message Sent Successfully!</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Thank you for reaching out. Ganesh will respond to you shortly!</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left h-full justify-between">
              <div>
                {/* Name */}
                <div className="flex flex-col gap-2 mb-5">
                  <label className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-650 font-bold uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-900 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none dark:bg-slate-950 dark:border-slate-900 light:bg-white light:border-slate-200 light:text-slate-900"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2 mb-5">
                  <label className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-650 font-bold uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-900 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none dark:bg-slate-950 dark:border-slate-900 light:bg-white light:border-slate-200 light:text-slate-900"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 mb-6">
                  <label className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-650 font-bold uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-900 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none dark:bg-slate-950 dark:border-slate-900 light:bg-white light:border-slate-200 light:text-slate-900 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white text-xs sm:text-sm font-semibold tracking-wider flex items-center justify-center gap-2 hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-[0.99] disabled:opacity-50 transition-all duration-300 cursor-pointer disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Transmission In Progress...
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
