import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import BASE_URL from '../../Constant';

const Update = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigation = useNavigate();
   const location = useLocation();
    let Id = location.state.Id;
    
    useEffect(() => {
        const loadSinglePost = async () => {
            await fetch(BASE_URL + Id)
                .then((res) => res.json())
                .then((response) => {
                    setTitle(response.title)
                    setDescription(response.description)
                })
        }
        loadSinglePost();
    }, [Id])

    
    const handleOnUpdate = async (e) => {
        e.preventDefault();
        if (!title && !description) return;
        
        try {
            const newUpdatedPost = { id:Id , title, description }
            const headerOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUpdatedPost),
            }
             const response = await fetch(BASE_URL+Id, headerOptions);
            await response.json().then((response) => {
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
     <div className='align-items-center justify-content-center w-50 centerDiv'>
                   <h4>Update Post</h4>
                  <form className='form' onSubmit={handleOnUpdate}>
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
                      <button type='submit' className='btn btn-primary'>Update Post</button>
                     <button type='button' className='btn btn-secondary mx-2'
                      onClick={redirectToList}>Back to list</button>
                      </div>
                </form>
          </div>
  )
}

export default Update
