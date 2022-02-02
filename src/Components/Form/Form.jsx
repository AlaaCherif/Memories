import useStyles from './styles';
import { Button } from '@material-ui/core';
import { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import { useSelector } from 'react-redux';
import classes2 from './form.module.css';

function Form({ currentId, setCurrentId }) {
  const post = useSelector(state =>
    currentId ? state.posts.find(p => p._id === currentId) : null
  );

  const dispatch = useDispatch();
  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };

  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
    if (postData.selectedFile) {
      if (currentId) {
        dispatch(updatePost(currentId, postData));
      } else {
        dispatch(createPost(postData));
      }
      clear();
    }
  };

  return (
    <aside className={classes2.paper}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes2.form} ${classes.root}`}
        onSubmit={handleSubmit}
      >
        <h1>{currentId ? 'Editing Memory' : 'Creating Memory'} </h1>
        <div className={classes2.group}>
          <input
            className={classes2.input}
            type='text'
            required
            value={postData.creator}
            onChange={e =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
          <span className={classes2.highlight}></span>
          <span className={classes2.bar}></span>
          <label className={classes2.label}>Creator</label>
        </div>
        <div className={classes2.group}>
          <input
            className={classes2.input}
            type='text'
            value={postData.title}
            required
            onChange={e => setPostData({ ...postData, title: e.target.value })}
          />
          <span className={classes2.highlight}></span>
          <span className={classes2.bar}></span>
          <label className={classes2.label}>Title</label>
        </div>
        <div className={classes2.group}>
          <input
            type='text'
            className={classes2.input}
            value={postData.message}
            required
            onChange={e =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
          <span className={classes2.highlight}></span>
          <span className={classes2.bar}></span>
          <label className={classes2.label}>Message</label>
        </div>
        <div className={classes2.group}>
          <input
            className={classes2.input}
            type='text'
            value={postData.tags}
            required
            onChange={e =>
              setPostData({ ...postData, tags: e.target.value.split(',') })
            }
          />
          <span className={classes2.highlight}></span>
          <span className={classes2.bar}></span>
          <label className={classes2.label}>Tags</label>
        </div>

        <div>
          <div className={classes.fileInput}>
            <FileBase
              type='file'
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
        </div>
        <Button
          className={classes.buttonSubmit}
          variant='outlined'
          color='primary'
          size='large'
          type='submit'
          fullWidth
        >
          Submit
        </Button>

        <Button
          variant='contained'
          color='secondary'
          size='small'
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </aside>
  );
}

export default Form;
