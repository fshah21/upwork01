import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';

const EachBlogPost = (props) => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const receivedProps = location.state;
  console.log(receivedProps);

  useEffect(() => {
    const fetchSinglePost = async () => {
      try {
        const response = await fetch("https://public-api.wordpress.com/rest/v1.1/sites/example90078.wordpress.com/posts/" + receivedProps.ID);
        console.log("RESPONSE");
        console.log(response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log("DATA");
        console.log(data);
        setPost(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchSinglePost();
  }, []);

  return (
    <div className="text-gray-400 bg-gray-900 body-font h-screen w-screen">
        <Navbar/>
        <div className="container mx-auto flex flex-col">
            <div class="flex flex-col justify-evenly p-10 leading-normal" key={post.ID}>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white text-center mb-20">{post.title}</h5>
                <div class="mb-3 list-disc font-normal justify-left text-slate-400 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: post.content}} />
            </div>
          </div>
    </div>
  );
};

export default EachBlogPost;