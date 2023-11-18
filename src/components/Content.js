import React, { useState, useEffect } from 'react';
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { useNavigate } from 'react-router-dom';

export default function Content() {
    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState(["Blog", "Projects", "CTF Challenges"]);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          var response = await fetch('https://public-api.wordpress.com/rest/v1.1/sites/example90078.wordpress.com/posts?category=blog&order=DESC&number=1');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          var data = await response.json();
          var blogPost = data.posts[0];
          blogPost.category = "Blog";
          blogPost.urlCategory = "/blog";
          
          var response = await fetch('https://public-api.wordpress.com/rest/v1.1/sites/example90078.wordpress.com/posts?category=project&order=DESC&number=1');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          var data = await response.json();
          var projectPost = data.posts[0];
          projectPost.category = "Projects";
          projectPost.urlCategory = "/project";
         
          var response = await fetch('https://public-api.wordpress.com/rest/v1.1/sites/example90078.wordpress.com/posts?category=ctf&order=DESC&number=1');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          var data = await response.json();
          var ctfPost = data.posts[0];
          ctfPost.category = "CTF Challenges";
          ctfPost.urlCategory = "/ctf";

          var posts = [blogPost, projectPost, ctfPost];
          
          setPosts( // Replace the state
            posts
        );

        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };
  
      fetchPosts();
    }, []);

    const containerStyle = {
        height: '550px'
    };

    const categoryStyle = {
        marignTop: '500px'
    };

    const handleClick = (category) => {
        navigate(category);
    }   

    const readDetailedPost = (e, id) => {
        e.stopPropagation();

        const propsToSend = {
            ID: id,
          };
      
        navigate('/blog-detailed-post', { state: propsToSend });
    }   

  return (
    <section id="content">
        <div className="text-center mb-2">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Read More
          </h1>
        </div>
        <div className="m-2 flex items-center justify-center mb-20">
        {posts.map((post) => (
            <div className="flex flex-col max-w-sm bg-white border border-gray-200 h-2/5 w-fit rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-gray-800 border border-gray-800 mx-10 mt-10" style={containerStyle} key={post.ID} onClick={() => handleClick(post.urlCategory)}>
                <a href="#">
                    <img className="rounded-t-lg w-fit h-60" src={post.featured_image} alt="" />
                </a>
                <div class="p-10 w:1/3">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{post.title}</h5>
                    </a>
                    <div className="mb-3 list-disc font-normal text-slate-400 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: post.content.replace(/<img[^>]*>/g, '').length <= 200 ? post.content.replace(/<img[^>]*>/g, '') : post.content.replace(/<img[^>]*>/g, '').substring(0, 200 - 3) + '...' }} />
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={(e) => readDetailedPost(e, post.ID)}>
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                    <p className="text-2xl p-4 font-bold text-white text-center mb-0" style={categoryStyle}>{post.category}</p>
                </div>
            </div>
        ))}
        </div>
    </section>
  );
}