import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Posts from './Components/Posts/Posts';
import Form from './Components/Form/Form';
import { getPosts } from './actions/posts';
import classes2 from './app.module.css';
import AppBar from './Components/AppBar/AppBar';

const App = () => {
  const [currentId, setCurrentId] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <div className={classes2.outerContainer}>
      <AppBar />
      <div className={classes2.grow}>
        <div className={classes2.innerContainer}>
          <Posts setCurrentId={setCurrentId} />
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
      </div>
    </div>
  );
};
export default App;
