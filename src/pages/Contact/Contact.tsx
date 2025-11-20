import { useState } from "react";
import emailjs from "@emailjs/browser";

interface AlertState {
  type: "success" | "error";
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<AlertState | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = "service_o4iuvdp";
    const templateId = "template_12suks6";
    const publicKey = "xxUV7_e-DLwMj2fr_";

    const templateParams = {
      title: "Portfolio Contact Form",
      message: formData.message,
      name: formData.name,
      email: formData.email,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setAlert({
          type: "success",
          message:
            "Your message has been sent successfully! I will get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setAlert({
          type: "error",
          message:
            "Failed to send your message. Please try again or contact me directly.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const closeAlert = () => setAlert(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-white text-center">
          Hire Me
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8">
          Interested in working together? Fill out the form below and I'll get
          back to you as soon as possible.
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                Project Details
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your project or opportunity"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Hire Me"}
            </button>
          </form>
        </div>

        {/* Alert Modal */}
        {alert && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div
              className={`relative p-6 rounded-lg shadow-lg max-w-md w-full mx-4 ${
                alert.type === "success"
                  ? "bg-green-100 border border-green-400"
                  : "bg-red-100 border border-red-400"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3
                  className={`text-lg font-bold ${
                    alert.type === "success" ? "text-green-800" : "text-red-800"
                  }`}
                >
                  {alert.type === "success" ? "Success!" : "Error"}
                </h3>
                <button
                  onClick={closeAlert}
                  className="text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <p
                className={`${
                  alert.type === "success" ? "text-green-700" : "text-red-700"
                }`}
              >
                {alert.message}
              </p>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={closeAlert}
                  className={`px-4 py-2 rounded ${
                    alert.type === "success"
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-red-600 hover:bg-red-700"
                  } text-white font-medium`}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
