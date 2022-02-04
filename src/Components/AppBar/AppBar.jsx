import React from 'react';
import classes from './appbar.module.css';
import image from '../../assets/memories.png';

export default function AppBar() {
  return (
    <div className={classes.appBar}>
      <h1>MEMORIES</h1>
      <img src={image} alt='memories' height='80px' />
    </div>
  );
}
