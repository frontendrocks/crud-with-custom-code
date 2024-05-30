import React, { useState,useEffect } from 'react';
import {postData} from './ApiService';
import { BASE_URL } from './Constant';
import ListPost from './ListPost';
// Saving post
const AddPost = () => {
    // Initial Post
    const initialPost = {
        title: "",
        description: "",
        date: new Date().toLocaleDateString(),
    }
    // set post
    const [posts, setPosts] = useState(initialPost);
    const [inputError, setInputError] = useState(false);
    const [isError, setIsError] = useState(false);
    const [success, setSuccess] = useState('');
    const [refreshKey, setRefreshKey] = useState(0);

   useEffect(()=>{
    setTimeout(() => {
        setSuccess('');
         }, 3000);
       },
   [success])
    const handleChange = (e) => {
        setPosts({ ...posts, [e.target.name]: e.target.value });
        (!posts.title || !posts.description) ? setInputError(true) : setInputError(false);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!posts.title || !posts.description) {
            setInputError(true);
            return
        }
        const newPost = { ...posts, id: Date.now() };
        postData(BASE_URL, newPost).then((res) => {
            res.status === 201 ? setSuccess(res.statusText) : setSuccess("");
            setRefreshKey(oldKey => oldKey +1)
        if (!res.ok) {
            setIsError(true);
            return
        } 
            res.json().then(data => {
                if (data) {
                setPosts(initialPost);
                e.target.reset(); 
             }

            }).catch(error => console.error('Error:', error));
        })
    };
   

    if (isError) {
      return <h3>Error in post data</h3>
    }
    
  return (
      <div>
         {success && <div style={{color:'green'}}>Post Created Successfully</div>}
       <form onSubmit={handleSubmit}>
              <div className='form-control'>
                  <label>Title</label>
                  <input type='text' value={posts.title} name="title" onChange={handleChange} />
                  {inputError && <span>Please add title </span>}
              </div><br />
              <div className='form-control'>
                  <label>Description</label>
                  <input type='text' value={posts.description} name="description" onChange={handleChange} />
                  {inputError && <span>Please add Description </span>}
              </div> 
              <div className='form-control'>
                  <button type='submit'>Save Post</button>
              </div>
          </form>
                <ListPost refreshKey={refreshKey} />
      </div>
      
  )
}

export default AddPost
