"use client";

import { motion } from "framer-motion";
import { ArrowRight, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState, FormEvent } from "react";

export function ContactForm() {
    const [focused, setFocused] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        project: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [statusMessage, setStatusMessage] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setStatusMessage(data.message || "Message sent successfully!");
                // Reset form
                setFormData({ name: "", email: "", project: "", message: "" });
            } else {
                setStatus("error");
                setStatusMessage(data.error || "Failed to send message. Please try again.");
            }
        } catch (error) {
            setStatus("error");
            setStatusMessage("Failed to send message. Please try again.");
        }

        // Reset status after 5 seconds
        setTimeout(() => {
            setStatus("idle");
            setStatusMessage("");
        }, 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                    placeholder="Name"
                    focused={focused}
                    setFocused={setFocused}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <Input
                    placeholder="Email"
                    focused={focused}
                    setFocused={setFocused}
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <Input
                placeholder="Tell us about your project"
                focused={focused}
                setFocused={setFocused}
                name="project"
                value={formData.project}
                onChange={handleChange}
                required
            />

            <div className="relative">
                <textarea
                    name="message"
                    placeholder="How can we help your business grow?"
                    className="w-full bg-zinc-900 border-2 border-zinc-700 rounded-lg px-4 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary focus:bg-zinc-800 transition-all resize-none h-32"
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Status Message */}
            {status !== "idle" && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 p-4 rounded-lg ${status === "success"
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : status === "error"
                                ? "bg-red-500/20 text-red-400 border border-red-500/30"
                                : "bg-zinc-800 text-zinc-300"
                        }`}
                >
                    {status === "success" && <CheckCircle className="w-5 h-5" />}
                    {status === "error" && <AlertCircle className="w-5 h-5" />}
                    <span>{statusMessage}</span>
                </motion.div>
            )}

            <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                className={`bg-accent text-black font-display font-bold text-xl uppercase py-4 rounded-sm flex items-center justify-center gap-2 hover:bg-white transition-colors mt-4 group ${status === "loading" ? "opacity-50 cursor-not-allowed" : ""
                    }`}
            >
                {status === "loading" ? "Sending..." : "START A CONVERSATION"}
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
        </form>
    );
}

function Input({
    placeholder,
    focused,
    setFocused,
    name,
    type = "text",
    value,
    onChange,
    required = false
}: {
    placeholder: string;
    focused: string | null;
    setFocused: (val: string | null) => void;
    name: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}) {
    return (
        <div className="relative">
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full bg-zinc-900 border-2 border-zinc-700 rounded-lg px-4 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary focus:bg-zinc-800 transition-all"
                onFocus={() => setFocused(name)}
                onBlur={() => setFocused(null)}
            />
        </div>
    )
}
