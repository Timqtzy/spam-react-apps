import React, { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState(""); // success, error

  const showToastNotification = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    // Auto-hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await fetch(`${API_URL}/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        showToastNotification("Subscribed successfully!", "success");
        setEmail("");
      } else {
        const errorMessage =
          data.message || "Failed to subscribe. Please try again.";
        showToastNotification(errorMessage, "error");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      showToastNotification(
        "Network error occurred. Please check your connection and try again.",
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="text-gray-600 body-font bg-none max-w-screen-xl mx-auto rounded-lg shadow-[0_0_4px_rgba(220,38,38,0.3)] ">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium title-font mb-4 text-gray-900">
            Ready To Stay Updated?
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Subscribe to the SPAM newsletter for the latest updates, news, and
            resources in campus journalism.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex lg:w-2/3 w-full flex-col mx-auto px-8 px-0"
        >
          <div className="py-2 w-full">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-customRed focus:bg-transparent focus:ring-2 focus:ring-customRedHover text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`mx-auto w-32 text-white bg-customRed border-0 py-2 px-4 focus:outline-none hover:bg-customRedHover rounded text-lg hover:bg-customRedHover rounded text-lg transform transition-all duration-[300ms] ease-in delay-[100ms]${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
        {showToast && (
          <div
            className={`fixed bottom-4 right-4 z-50 min-w-[300px] text-center ${
              toastType === "success"
                ? "text-green-600 bg-green-100"
                : "text-red-600 bg-red-100"
            } p-4 rounded-lg shadow-lg border ${
              toastType === "success" ? "border-green-200" : "border-red-200"
            } animate-fade-in-up`}
          >
            {toastMessage}
          </div>
        )}
      </div>
    </section>
  );
}
