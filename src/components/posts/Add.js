import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../../Constant';

const Add = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigation = useNavigate();

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (!title && !description) return;
        
        try {
            const newPost = { id: (Date.now()).toString(), title, description }
            const headerOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
            }
             const response = await fetch(BASE_URL, headerOptions);
            await response.json().then(() => {
                navigation('/');
            });
            
            
        } catch (error) {
            console.error("Error:", error);
        }

    }

    const redirectToList = () => {
         navigation('/');
    }

  return (
    <>
          <div className='align-items-center justify-content-center w-50 centerDiv'>
                   <h4>Add Post</h4>
                  <form className='form' onSubmit={handleOnSubmit}>
                      <div className='form-group'>
                          <label>Title</label>
                          <input name="title" className='form-control'
                              value={title}
                              onChange={(e) => setTitle(e.target.value)} />
                      </div>
                      <div className='form-group pt-4'>
                          <label>Description</label>
                          <input name="description" className='form-control'
                              value={description}
                              onChange={(e) => setDescription(e.target.value)} />
                  </div>
                  
                    <div className='form-group pt-4 col-12'>
                      <button type='submit' className='btn btn-primary'>Add Post</button>
                      <button type='button' className='btn btn-secondary mx-2'
                          onClick={redirectToList}>Back to list</button>
                      </div>
                </form>
          </div>
    </>
  )
}

export default Add
