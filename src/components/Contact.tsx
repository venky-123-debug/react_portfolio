import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Linkedin,
  Github,
  MessageSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import resumeData from "../data/resumeData.json";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl transition-all focus:outline-none focus:ring-4 ${
      errors[field]
        ? "border-red-500/60 focus:ring-red-500/20"
        : "focus:border-brand-purple focus:ring-brand-purple/15"
    }`;

  return (
    <section
      id="contact"
      className="py-20 relative dot-grid"
      style={{
        background: "var(--bg-subtle)",
        borderTop: "1px solid var(--border-base)",
      }}
    >
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" /> Contact
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Get In Touch <span className="gradient-text"></span>
          </h2>
          <p className="mt-4" style={{ color: "var(--text-secondary)" }}>
            Whether you'd like to connect, discuss opportunities, ask a question,
            or simply say hello, I'd be happy to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="glass-card p-8 rounded-3xl">
              <h3
                className="text-2xl font-extrabold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                Contact Information
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: resumeData.personal.email,
                    href: `mailto:${resumeData.personal.email}`,
                    color: "text-brand-purple",
                    bg: "bg-brand-purple/10",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: resumeData.personal.phone,
                    href: `tel:${resumeData.personal.phone}`,
                    color: "text-brand-cyan",
                    bg: "bg-brand-cyan/10",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: resumeData.personal.location,
                    href: undefined,
                    color: "text-brand-emerald",
                    bg: "bg-brand-emerald/10",
                  },
                ].map(({ icon: Icon, label, value, href, color, bg }) => (
                  <div key={label} className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${bg} ${color} shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4
                        className="text-xs uppercase tracking-wider font-bold"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {label}
                      </h4>
                      {href ? (
                        <a
                          href={href}
                          className={`text-sm font-semibold hover:${color} transition-colors break-all`}
                          style={{ color: "var(--text-primary)" }}
                        >
                          {value}
                        </a>
                      ) : (
                        <p
                          className="text-sm font-semibold"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-10 pt-8"
                style={{ borderTop: "1px solid var(--border-base)" }}
              >
                <h4
                  className="text-xs uppercase tracking-wider font-bold mb-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  Social Channels & Platforms
                </h4>
                <div className="flex gap-4">
                  {[
                    {
                      icon: Linkedin,
                      href: resumeData.personal.socials.linkedin,
                      label: "LinkedIn",
                    },
                    {
                      icon: Github,
                      href: resumeData.personal.socials.github,
                      label: "GitHub",
                    },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl flex items-center justify-center flex-1 gap-2 hover:bg-brand-purple/10 hover:text-brand-purple transition-all"
                      style={{
                        background: "var(--bg-elevated)",
                        border: "1px solid var(--border-base)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-xs font-bold">{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl">
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass("name")}
                        style={{
                          background: "var(--input-bg)",
                          borderWidth: 1,
                          borderStyle: "solid",
                          borderColor: errors.name
                            ? "rgb(239 68 68 / 0.6)"
                            : "var(--input-border)",
                          color: "var(--input-text)",
                        }}
                        placeholder="Enter Full Name"
                      />
                      {errors.name && (
                        <div className="absolute right-3 top-3 text-red-500">
                          <AlertCircle className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                    {errors.name && (
                      <span className="text-xs text-red-500 font-semibold">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass("email")}
                        style={{
                          background: "var(--input-bg)",
                          borderWidth: 1,
                          borderStyle: "solid",
                          borderColor: errors.email
                            ? "rgb(239 68 68 / 0.6)"
                            : "var(--input-border)",
                          color: "var(--input-text)",
                        }}
                        placeholder="Enter Email Address"
                      />
                      {errors.email && (
                        <div className="absolute right-3 top-3 text-red-500">
                          <AlertCircle className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                    {errors.email && (
                      <span className="text-xs text-red-500 font-semibold">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={inputClass("subject")}
                      style={{
                        background: "var(--input-bg)",
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: errors.subject
                          ? "rgb(239 68 68 / 0.6)"
                          : "var(--input-border)",
                        color: "var(--input-text)",
                      }}
                      placeholder="Reason for Contact"
                    />
                    {errors.subject && (
                      <div className="absolute right-3 top-3 text-red-500">
                        <AlertCircle className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  {errors.subject && (
                    <span className="text-xs text-red-500 font-semibold">
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Your Message
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={inputClass("message")}
                      style={{
                        background: "var(--input-bg)",
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: errors.message
                          ? "rgb(239 68 68 / 0.6)"
                          : "var(--input-border)",
                        color: "var(--input-text)",
                        resize: "none",
                      }}
                      placeholder="Introduce yourself and share the purpose of your message."
                    />
                    {errors.message && (
                      <div className="absolute right-3 top-3 text-red-500">
                        <AlertCircle className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  {errors.message && (
                    <span className="text-xs text-red-500 font-semibold">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-linear-to-r from-brand-purple to-brand-cyan hover:opacity-95 text-white font-bold text-sm tracking-wide shadow-lg shadow-brand-purple/20 transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              {/* Success Toast */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="mt-5 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 flex items-center space-x-3 text-sm text-left"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <div>
                      <span className="font-bold">
                        Message sent successfully!
                      </span>{" "}
                      Thank you, Venkatesh will get back to you shortly.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
