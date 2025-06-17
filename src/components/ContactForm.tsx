import React from "react";
import { toast } from "react-toastify";

export default function ContactForm() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xovwwpbq", {
                method: "POST",
                headers: { Accept: "application/json" },
                body: formData,
            });

            if (response.ok) {
                toast.success("Pesan berhasil dikirim!");
                form.reset();
            } else {
                toast.error("Gagal mengirim pesan.");
            }
        } catch (err) {
            toast.error("Terjadi error!");
        }
    };

    return (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                        placeholder="Your name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                        placeholder="your.email@example.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                        name="message"
                        rows={4}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                        placeholder="Let’s work together..."
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
