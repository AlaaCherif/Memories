import React, { useState, useEffect } from 'react';
import classes from './post.module.css';
import moment from 'moment';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import like from '../../../assets/likesmol.png';
import { likePost } from '../../../actions/posts';
import { deletePost } from '../../../actions/posts';
import { useDispatch } from 'react-redux';

export default function Post2({ post, setCurrentId, setModal }) {
  const [showMore, setShowMore] = useState(post.message.length > 50);
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deletePost(post._id));
  };

  const likeHandler = () => {
    dispatch(likePost(post._id));
  };

  const handleMore = () => {
    setModal(post);
  };
  useEffect(() => {
    setShowMore(post.message.length > 50);
  }, [post.message]);
  return (
    <div className={classes.post}>
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${post.selectedFile})` }}
      >
        <div className={classes.left}>
          <h1>{post.creator}</h1>
          <small>{moment(post.createdAt).fromNow()} </small>
        </div>
        <div className={classes.right}>
          <MoreHorizIcon
            fontSize='medium'
            onClick={() => setCurrentId(post._id)}
          />
        </div>
      </div>
      <div className={classes.indent}>
        <span className={classes.tags}>
          {post.tags.map(tag => `#${tag} `)}{' '}
        </span>
        <p className={classes.title}>{post.title} </p>
        <p className={classes.message}>
          {post.message.slice(0, 50)}
          {showMore ? (
            <>
              <br />
              <span className={classes.showMore} onClick={handleMore}>
                Show more ...
              </span>
            </>
          ) : (
            ''
          )}{' '}
        </p>
      </div>
      <div className={classes.buttons}>
        <div className={classes.button} onClick={likeHandler}>
          <img src={like} alt='Like' />
          &nbsp;Like &nbsp; {post.likeCount}
        </div>
        <div className={classes.button} onClick={deleteHandler}>
          <img
            src='https://img.icons8.com/ios/24/000000/delete-sign--v1.png'
            alt='Delete'
          />{' '}
          &nbsp;Delete
        </div>
      </div>
    </div>
  );
}
