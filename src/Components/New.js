import React, { useState } from "react";
import People from "../Components/Data/Data";
import "../Components/Style/New.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const New = () => {
  const [state, setState] = useState(0);
  const { id, name, image, title, quote } = People[state];

  const Next = () => {
    setState((state + 1) % People.length);
  };
  const Prev = () => {
    const newState = state - 1;
    if (newState < 0) {
      setState(People.length - 1);
    } else {
      setState(state - 1);
    }
  };

  return (
    <>
      <section className="section">
        <div className="title">
          <h2 className="heading">
            <span className="heading-content"> Our Customer Reviews</span>
          </h2>
        </div>
        <div className="section-center">
          <div className="person-card">
            <img src={image} alt={name} className="person-img" />
            <h4 className="name">{name}</h4>
            <p className="title">{title}</p>
            <p className="quote">{quote}</p>
          </div>
          <button className="prev" onClick={Prev}>
            <FaArrowLeft />
          </button>
          <button className="next" onClick={Next}>
            <FaArrowRight />
          </button>
        </div>
      </section>
    </>
  );
};

export default New;
