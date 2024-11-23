// src/pages/Event.js
import React from "react";
import CmsEvent from "./CmsEvent";

const Event = () => {
  const cmsEndpoint = "http://localhost:5000/api/event";

  return (
    <div>
      <CmsEvent endpoint={cmsEndpoint} />
    </div>
  );
};

export default Event;
