import { useState } from "react";
import Toast from "./Toast";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("_subject", "New Newsletter Subscription");

    try {
      const response = await fetch("https://formspree.io/f/xeogbakl", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setToastMessage("Thank you! Your subscription has been received.");
        setEmail("");
      } else {
        setToastMessage("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setToastMessage("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
          <input
            type="email"
            name="email"
            placeholder="Enter your e-mail to subscribe to our newsletter."
            className="flex-1 text-gray-700 bg-transparent outline-none px-2 py-2"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="text-gray-600 hover:text-gray-800 transition scale-125 mr-2 hover:cursor-pointer"
            aria-label="Subscribe"
          >
            🖂
          </button>
        </div>
      </form>

      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage("")} />
      )}
    </>
  );
}

export default NewsletterForm;
