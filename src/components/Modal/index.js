import React from 'react';
import Popup from 'reactjs-popup';
import './index.css'
import 'reactjs-popup/dist/index.css';
 import { useState } from 'react';


const Modal = () => {
  const [open, setOpen] = useState(false);

  const test = () => setOpen(true);

  const closeModal = () => setOpen(false);

  return (
      <div>
        <button onClick={test}>learning</button>
          <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                  <button className="close" onClick={closeModal}>
                      &times;
                  </button>
                  <div className="content">
                    <input></input>
                    <h1>hello world</h1>
                  </div>
              
          </Popup>
      </div>
);
                    }

export default Modal


