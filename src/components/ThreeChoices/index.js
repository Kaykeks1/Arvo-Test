import React from 'react';
import './ThreeChoices.css';

function ThreeChoices(props) {
  return (
    <div className="rect-box">
      <div className="rect-img"><img src={props.choice.url} alt="img" /></div>
      <div className="rect-title">{props.choice.title}</div>
      <div className="rect-body">{props.choice.body}</div>
    </div>
  );
}

export default ThreeChoices;
