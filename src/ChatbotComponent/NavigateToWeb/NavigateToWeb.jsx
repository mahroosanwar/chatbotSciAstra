import React from "react";

import "./NavigateToWeb.css";

const NavigateToWeb = () => {
  const options = [
    {
      label: "Home",
      url: "https://www.sciastra.com/",
      id: 1,
    },
    {
      label: "Courses",
      url: "https://www.sciastra.com/courses/",
      id: 2,
    },
    {
      label: "Selections",
      url: "https://www.sciastra.com/selections/",
      id: 3,
    },
    {
      label: "Blog",
      url: "https://www.sciastra.com/blog/",
      id: 4,
    },
    {
      label: "Materials",
      url: "https://www.sciastra.com/materials/",
      id: 5,
    },
    {
      label: "Teams",
      url: "https://www.sciastra.com/teams/",
      id: 6,
    },
    {
      label: "Contact Us",
      url: "https://www.sciastra.com/contact/",
      id: 7,
    },
    {
      label: "Login/Signup",
      url: "https://www.sciastra.com/app/",
      id: 8,
    },
  ];

  const optionsMarkup = options.map((option) => (
    <a href={option.url} target="_blank" rel="noopener noreferrer">
      <button className="learning-option-button" key={option.id}>
        {option.label}
      </button>
    </a>
  ));

  return <div className="navigate-options-container">{optionsMarkup}</div>;
};

export default NavigateToWeb;
