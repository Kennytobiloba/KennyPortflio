"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false); // for loading state
  const [modalVisible, setModalVisible] = useState(false); // for modal visibility
  const [modalMessage, setModalMessage] = useState(""); // to store modal message

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setModalMessage("Thanks for reaching out! We'll get back to you soon.");
      } else {
        setModalMessage("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      setModalMessage("Error sending message. Please try again.");
    } finally {
      setLoading(false); // Hide loading state
      setModalVisible(true); // Show modal
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const closeModal = () => {
    setModalVisible(false); // Close the modal
  };

  return (
    <section id="contact" className="dark:bg-gray-900 py-12 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Contact Me</h2>
        <p className="text-white mb-8">
          Have a project in mind or just want to say hello? Fill out the form below and I’ll get back to you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-left text-white">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-left text-white">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-left text-white dark:text-gray-200">Message</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="bg-green-400 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
            disabled={loading} // Disable button when loading
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Modal */}
      {modalVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold">{modalMessage}</h3>
            <button
              onClick={closeModal}
              className="mt-4 px-6 py-2 bg-green-400 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
