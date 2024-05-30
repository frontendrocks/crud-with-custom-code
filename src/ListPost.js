import React, {useState, useEffect} from 'react'
import { BASE_URL } from './Constant';
// import { getPostData } from './ApiService';

const ListPost = ({refreshKey}) => {

    console.log(refreshKey);
    const [posts, setPosts] = useState([]);
    useEffect(  () => {
      fetch(BASE_URL)
      .then(response => response.json())
      .then(data => setPosts(data));
  }, [refreshKey]);
    // useEffect(() => {
    //     getPostData(BASE_URL)
    //         .then((res) => {
    //         console.log(res, "res");
    //     return res.json();
    // })
    // .then((data) => {
    //     console.log(data);
    //     setPosts(data);
    // });
    // }, []);

  return (
    <>
     <table width={"800px"} align='center'>
            <thead>
                <tr>
                <th>S.R. No</th>
                <th>Title</th>
                <th>Description</th>
                <th>Creation Date</th>           
            </tr>
            </thead>
              <tbody>
     {posts.map(res => {
           return (<tr key={res.id}>
      
                 <td>{res.id}</td>
                 <td>{res.title}</td>
                 <td>{res.description}</td>
                <td>{res.date}</td>
                     
         </tr> )
      })}     
   </tbody>
</table>
    </>
  )
}

export default React.memo(ListPost)
