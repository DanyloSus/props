import React from "react";

export default function Contact (props) {
    console.log(props.img)
    return (
        <div className="contact-card">
              <img 
                src={require(`../images/${props.img}`)}
                alt={props.name}
            />
              <h3>{props.name}</h3>
              <div className="info-group">
                <img 
                    src="./images/phone-icon.png" 
                    alt="phone"
                />
                  <p>{props.number}</p>
              </div>
              <div className="info-group">
                <img 
                    src="./images/mail-icon.png"
                    alt="mail" 
                />
                  <p>{props.mail}</p>
              </div>
          </div>
    );
}