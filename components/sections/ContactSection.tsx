"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { profileData } from "@/constants/profile";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Toast } from "@/components/ui/Toast";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import {
  Mail,
  MapPin,
  Send,
  Download,
  MessageSquare,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ isVisible: boolean; message: string; type: "success" | "error" }>({
    isVisible: false,
    message: "",
    type: "success",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setToast({
        isVisible: true,
        message: "Please fill in all required fields before submitting.",
        type: "error",
      });
      return;
    }

    setIsSubmitting(true);
    // Simulate submission API call
    setTimeout(() => {
      setIsSubmitting(false);
      setToast({
        isVisible: true,
        message: "Thank you! Your message has been received. Nomonde will reply shortly.",
        type: "success",
      });
      setFormData({ name: "", email: "", organization: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-50/60 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="blue">
              <MessageSquare className="w-3.5 h-3.5" /> Get in Touch
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              Connect for WIL Placement & Graduate Engineering
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
              Open to technical inquiries, interview requests, and Work Integrated Learning placement discussions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details & Direct Actions */}
            <motion.div variants={fadeIn("right", 0.2)} className="lg:col-span-5 space-y-6">
              <Card className="p-6 sm:p-8 space-y-6 border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Contact Information
                </h3>

                <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-100/60 dark:bg-slate-800/60">
                    <Mail className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-400 uppercase font-semibold">Direct Email</div>
                      <a
                        href={`mailto:${profileData.email}`}
                        className="font-medium text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {profileData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-100/60 dark:bg-slate-800/60">
                    <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-400 uppercase font-semibold">Location</div>
                      <span className="font-medium text-slate-900 dark:text-slate-100">
                        {profileData.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Professional Networks
                  </h4>
                  <div className="flex items-center gap-3">
                    <a
                      href={profileData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 transition-all"
                      aria-label="GitHub Profile"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={profileData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 transition-all"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <a href={profileData.resumePath} download className="block w-full">
                    <Button variant="primary" className="w-full justify-center" icon={<Download className="w-4 h-4" />}>
                      Download Official Resume PDF
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.div>

            {/* Interactive Form */}
            <motion.div variants={fadeIn("left", 0.3)} className="lg:col-span-7">
              <Card className="p-6 sm:p-8 space-y-6 border-slate-200 dark:border-slate-800">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    Submit your placement inquiry or schedule an introductory engineering conversation.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Organization / Company (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Enterprise Software Solutions"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Message / Placement Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share position requirements or project details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    icon={<Send className="w-4 h-4" />}
                    iconPosition="right"
                    className="w-full justify-center"
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <Toast
        isVisible={toast.isVisible}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, isVisible: false })}
      />
    </section>
  );
}
