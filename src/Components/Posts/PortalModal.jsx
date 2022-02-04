import React from 'react';
import ReactDOM from 'react-dom';
import classes from './portalmodal.module.css';

export default function PortalModal({ post, handleHide }) {
  return ReactDOM.createPortal(
    <div className={classes.fallBack} id='outer' onClick={handleHide}>
      <div className={classes.content}>
        <div
          className={classes.image}
          style={{
            backgroundImage: `url(${post.selectedFile}) ,linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4))`,
          }}
        >
          <h1>{post.title}</h1>
        </div>
        <div>{post.tags.map(tag => `#${tag} `)}</div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}
