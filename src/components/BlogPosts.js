import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const BlogPosts = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log("fetch posts");
        var category = props.category;
        if(category === "Blog") {
            category = "blog"
        } else if(category === "Projects") {
            category = "project"
        } else {
            category = "ctf"
        }
        const response = await fetch('https://public-api.wordpress.com/rest/v1.1/sites/example90078.wordpress.com/posts?category=' + category);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log("DATA");
        console.log(data);
        setPosts(data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="text-gray-400 bg-gray-900 body-font h-screen w-screen">
        <Navbar/>
        <div className="container mx-auto flex flex-col items-center">
            <button class="text-2xl font-bold text-white font-bold p-4 flex flex-col items-center text-capitalize">
             {props.category}
            </button>
        </div>
        {posts.map((post) => (
        <div class="lg:w-4/5 md:w-4/5 flex flex-col mx-auto items-center bg-gray-800 border border-gray-800 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:bg-slate-800 m-10">
            <img class="rounded-t-lg lg:h-2/4 lg:w-2/4 p-4" src={post.featured_image} alt="upwork"/>
            <div class="flex flex-col justify-between p-10 leading-normal" key={post.ID}>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{post.title}</h5>
                <div class="mb-3 list-disc font-normal text-slate-400 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: post.content.replace(/<img[^>]*>/g, '').length <= 500 ? post.content.replace(/<img[^>]*>/g, '') : post.content.replace(/<img[^>]*>/g, '').substring(0, 500 - 3) + '...' }} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default BlogPosts;