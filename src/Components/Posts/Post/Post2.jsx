import React from 'react';
import classes from './post.module.css';
import moment from 'moment';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export default function Post2({ post }) {
  return (
    <div className={classes.post}>
      <div className={classes.image}>
        <div className={classes.left}>
          <h1>{post.creator}</h1>
          <small>{moment(post.createdAt).fromNow()} </small>
        </div>
        <div className={classes.right}>
          <MoreHorizIcon fontSize='medium' />
        </div>
      </div>
      <div className={classes.indent}>
        <span className={classes.tags}>
          {post.tags.map(tag => `#${tag} `)}{' '}
        </span>
        <p className={classes.title}>{post.title} </p>
        <p className={classes.message}>{post.message} </p>
      </div>
      <div className={classes.buttons}>
        <div>pouce</div>
        <div>bleu</div>
      </div>
    </div>
  );
}
