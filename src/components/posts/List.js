import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import BASE_URL from '../../Constant';

const List = () => {

    const [posts, setPosts] = useState([]); 
    const navigation = useNavigate();

    const [searchPost, setSearchPost] = useState('')

    // Load Single Post
    const loadPost = async () => {
        return await fetch(BASE_URL)
            .then((res) => res.json())
            .then((response) => setPosts(response))
            .catch(err => console.log(err)) 
    }

    useEffect(() => {
        loadPost();
    }, [])
    

    // Delete single Post
    const deletePost = async (id) => {
        await fetch(BASE_URL+id, {
            method:"DELETE"
        }).then((res) => res.json()).then(() => {
            loadPost();
        })
    }

    const updatePost = (id) => {
         navigation('/update',{state: {Id: id}});
    }

    
// Simple Search
  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    if (searchTerm === "") {
        loadPost();
    }
    setSearchPost(searchTerm);
    const filteredItems = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setPosts(filteredItems);
  }



  return (
      <>
           <h3 align="center" className='mb-4'>List of posts</h3>
          <div className='align-items-center justify-content-center  centerDiv mt-4'>
             
         <div className='row'>
              <div className='col-6'><Link to="/add" className='btn btn-sm btn-dark'>Add Post</Link></div>
                  <div className='col-6'><input className='w-100'
                      type='text'
                      value={searchPost}
                      placeholder='Search post...'
                      onChange={handleInputChange} /></div>     
        </div> 
              <div className="card" style={{ marginTop: "20px" }}>
                  <div className='row mx-1 py-2'>
                              <div className='col-4 fw-bold'>Title</div>
                              <div className='col-6 fw-bold'>Description</div>
                              <div className='col-2 fw-bold'>Action(s)</div>
                           </div>
                  <div className="list-group list-group-flush">
                      <div className="list-group-item"> 
                          {posts && posts.map((res, i) => {
                              return (
                                  <div className='row' key={res.id}>
                                      <div className='col-4'>{res.title}</div>
                                      <div className='col-6'>{res.description}</div>
                                      <div className='col-2 mb-2'>
                                      <button type="button"
                                         onClick={() => deletePost(res.id)}
                                              className="btn btn-sm btn-danger">Delete</button>
                                          <button type="button"
                                         onClick={() => updatePost(res.id)}
                                         className="btn btn-sm btn-success mx-2">Update</button>
                                      </div>
                                     {posts.length!==i+1 && <hr />}  
                                  </div>
                                  
                              )
                          })}
                          {posts.length===0 && <h4 className='text-info' align="center">No post available...</h4>}
                          </div>
                     
        </div>
      </div>  
        </div>
      
    </>
  )
}

export default List
