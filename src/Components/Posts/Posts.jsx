import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import classes2 from './posts.module.css';
import Post2 from './Post/Post2';

export default function Posts({ setCurrentId }) {
  const posts = useSelector(state => state.posts);
  const classes = useStyles();
  return !1 ? (
    <CircularProgress />
  ) : (
    <div className={classes2.container}>
      {posts.map(post => (
        <Post2 key={post._id} post={post} />
        // <Grid key={post._id} item xs={12} sm={6}>
        //   {/* <Post post={post} setCurrentId={setCurrentId} /> */}

        // </Grid>
      ))}
    </div>
  );
}
