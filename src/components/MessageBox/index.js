import React from 'react';
import './MessageBox.css';

function MessageBox(props) {
  const { url, title, body, prices } = props.message;
  return (
    <div className={`card${props.id}`}>
      <div className="card-up">
        <div className="card-up-img">
          <img src={url} alt="img" />
        </div>
        <div className="card-up-text">
          <div>{title}</div>
          <div>{body}</div>
        </div>
      </div>
      {
        prices &&
        <div className="card-down">
          {  
            prices.map((item,key) => 
            <div className="prices">
              {item}
            </div>)
          }
        </div>
      }
    </div>
  );
}

export default MessageBox;
