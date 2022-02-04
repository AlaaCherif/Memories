import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './posts.module.css';
import Post2 from './Post/Post2';
import PortalModal from '../Posts/PortalModal';
import Loader from '../Loader/Loader';

export default function Posts({ setCurrentId }) {
  const [modal, setModal] = useState(null);
  const posts = useSelector(state => state.posts);
  const handleHide = e => {
    if (e.target.id === 'outer') setModal(null);
  };
  return !posts.length ? (
    <Loader />
  ) : (
    <div className={classes.container}>
      {modal === null ? (
        <></>
      ) : (
        <PortalModal post={modal} handleHide={handleHide} />
      )}
      {posts.map(post => (
        <Post2
          key={post._id}
          post={post}
          setCurrentId={setCurrentId}
          setModal={setModal}
        />
      ))}
    </div>
  );
}
