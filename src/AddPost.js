// import React, { useState,useEffect } from 'react';
// import { BASE_URL } from './Constant';

// // Saving post
// export const AddPost = () => {

    
//     // Initial Post
//     const initialPost = {
//         title: "",
//         description: "",
//         date: new Date().toLocaleDateString(),
//     }
//     // set post
//     const [posts, setPosts] = useState(initialPost);
//     const [inputError, setInputError] = useState(false);
//     const [isError, setIsError] = useState(false);
//     const [success, setSuccess] = useState('');
//     const [refreshKey, setRefreshKey] = useState(false);

//    useEffect(()=>{
//     setTimeout(() => {
//         setSuccess('');
//          }, 3000);
//        },
//    [success])
//     const handleChange = (e) => {
//         setPosts({ ...posts, [e.target.name]: e.target.value });
//         (!posts.title || !posts.description) ? setInputError(true) : setInputError(false);
//     }


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!posts.title || !posts.description) {
//             setInputError(true);
//             return
//         }
//         const newPost = { ...posts, id: Date.now() };
//         postData(BASE_URL, newPost).then((res) => {
//             res.status === 201 ? setSuccess(res.statusText) : setSuccess("");
//         if (!res.ok) {
//             setIsError(true);
//             return
//         } 
//             res.json().then(data => {
//                 if (data) {
//                     setPosts(initialPost);
//                     setRefreshKey(!refreshKey);
//                 e.target.reset(); 
//              }

//             }).catch(error => console.error('Error:', error));
//         })
//     };
   

//     if (isError) {
//       return <h3>Error in post data</h3>
//     }
    
//   return (
//       <div>
//          {success && <div style={{color:'green'}}>Post Created Successfully</div>}
//        <form onSubmit={handleSubmit}>
//               <div className='form-control'>
//                   <label>Title</label>
//                   <input type='text' value={posts.title} name="title" onChange={handleChange} />
//                   {inputError && <span>Please add title </span>}
//               </div><br />
//               <div className='form-control'>
//                   <label>Description</label>
//                   <input type='text' value={posts.description} name="description" onChange={handleChange} />
//                   {inputError && <span>Please add Description </span>}
//               </div> 
//               <div className='form-control'>
//                   <button type='submit'>Save Post</button>
//               </div>
//           </form>
//           <ListPost refreshKey={refreshKey} />
//       </div>
      
//   )
// }

// const ListPost = ({refreshKey}) => {
    
//     const [posts, setPosts] = useState([]);
    
//     useEffect(() => {
//       fetch(BASE_URL)
//       .then(response => response.json())
//       .then(data => setPosts(data))
//     }, [refreshKey]);
    
//     const deletePost =  (deleteId) => {
//          fetch('http://localhost:3030/posts/'+deleteId, { method: 'DELETE' })
//                .then(response => response.json())
//                .then(() => setPosts(values => { return values.filter(item => item.id !== deleteId)}))

// }

//   return (
//     <>
//      <table width={"800px"} align='center'>
//             <thead>
//                 <tr>
//                 <th>S.R. No</th>
//                 <th>Title</th>
//                 <th>Description</th>
//                 <th>Creation Date</th> 
//                 <th>Action</th>      
//             </tr>
//             </thead>
//               <tbody>
//             {posts && posts.map(res => {
//                 return (<tr key={res.id}>
//                         <td>{res.id}</td>
//                         <td>{res.title}</td>
//                         <td>{res.description}</td>
//                     <td>{res.date}</td> 
//                     <td><button onClick={() => deletePost(res.id)}>delete</button> |
//                         <button intent="primary" onClick={() => updatePost(res.id)}>
//                   Update
//                 </button></td> 
//                 </tr> )
//             })}  
//             {posts.length===0 && <tr><td colSpan="4">No Post data</td></tr>}      
//    </tbody>
// </table>
//     </>
//   )
// } 


