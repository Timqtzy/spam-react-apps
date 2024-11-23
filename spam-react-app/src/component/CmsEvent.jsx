// src/pages/CmsEvent.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CmsEvent = ({ endpoint }) => {
  const [content, setContent] = useState({
    title: "",
    description: "",
    imageUrl: "",
    eventTitle: "",
    eventDescription: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(endpoint);
        setContent(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [endpoint]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const fullImageUrl = `http://localhost:5000${content.imageUrl}`;

  return (
    <div>
      <div className="max-w-screen-xl font-semibold mb-4 mx-auto px-4">
        <h2 className="text-4xl font-bold">{content.title}</h2>
        <p className="text-xl">{content.description}</p>
      </div>
      <div className="p-4 mx-auto max-w-screen-xl">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 aspect-w-[580] aspect-h-[480] relative rounded-2xl overflow-hidden group/news-card">
            <img
              className="h-48 md:h-full w-full object-cover object-center p-4 transition-transform duration-300 hover:scale-105"
              src={fullImageUrl}
              alt="Event Photo"
            />
          </div>
          <div className="p-6 md:w-2/3 flex flex-col justify-center">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {content.eventTitle}
            </h1>
            <p className="leading-relaxed mb-3">{content.eventDescription}</p>
            <div className="flex items-center flex-wrap">
              <Link to="/register">
                <button
                  id="RegisterBtn"
                  className="inline-flex text-white font-semibold bg-customRed border-0 py-2 px-6 focus:outline-none hover:bg-customRedHover rounded text-lg"
                >
                  Register Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CmsEvent;
