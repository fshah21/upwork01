import React, { useState, useEffect } from "react";
import axios from 'axios';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import RichTextRenderer from './RichTextRenderer'; 
import Navbar from "./Navbar";

export default function BlogPost() {

    const [posts, setPosts] = useState([]);
    const [featuredImages, setFeaturedImages] = useState([{}]);

    const imageUrlArray = [
          "https://images.ctfassets.net/0bd3qexsvzly/1QRlmx5Wnci9DIe37Odnrc/7d526e28bf06f0a3842b42165d8ca8a2/harexi.png"
        
    ];
    
    useEffect(() => {
        const fetchPosts = async () => {
        try {
            const response = await axios.get("https://cdn.contentful.com/spaces/0bd3qexsvzly/environments/master/entries?access_token=cDWBT7hLqXxg9sEr8Zn0BugQVRRsW2-jPIk30pF-2dA");
            setPosts(response.data.items);
    
            const featuredImages = [];
            var count = 0;
            await response.data.items.forEach(async (item) => {
                const imagesResponse = await axios.get(`https://cdn.contentful.com/spaces/0bd3qexsvzly/environments/master/assets/` 
                + item.fields.imageSh1.sys.id + `?access_token=cDWBT7hLqXxg9sEr8Zn0BugQVRRsW2-jPIk30pF-2dA`);

                featuredImages.push('https:' + imagesResponse.data.fields.file.url);
            });

            console.log("IMAGE URL ARRAY");
            console.log(imageUrlArray);
            console.log("SET FEATURED");
            console.log(featuredImages);
            setFeaturedImages(featuredImages);

        } catch (error) {
            console.error('Error fetching blog posts:', error);
        }
        };

        fetchPosts();
    }, []);

    const options = {
        renderNode: {
        //   'paragraph' : (node) => `<p>${node.content}</p>`,
        //   'embedded-asset-block': (node) => (
        //     <img
        //       src={node.data.target.fields.file.url}
        //       alt={node.data.target.fields.description}
        //     />
        //   ),
        },
    };
    
    const imageUrl = async (id) => {
        const response = await axios.get(`https://cdn.contentful.com/spaces/0bd3qexsvzly/environments/master/assets/` + id + `?access_token=cDWBT7hLqXxg9sEr8Zn0BugQVRRsW2-jPIk30pF-2dA`);
        return "https:" + response.data.fields.file.url;
    }

    return (
        <div className="text-gray-400 bg-gray-900 body-font text-center w-full h-full">
            <Navbar />
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white mt-4">
                Blog
            </h1>
            {posts.map((post, index) => (
                <div key={index}  className="lg:w-4/5 md:w-4/5 flex flex-row mx-auto items-center bg-gray-800 border border-gray-800 rounded-lg shadow md:flex-col dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:bg-slate-800 mb-10 p-4">
                    <p className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{post.fields.title}</p>
                </div>
            ))}
            {featuredImages.map((imageUrl, index) => (
            <li key={index}>
                <img src={imageUrl} alt={`Image ${index}`} />
            </li>
            ))}
        </div>
    );  
}

// content delivery API : cDWBT7hLqXxg9sEr8Zn0BugQVRRsW2-jPIk30pF-2dA
// content preview API : qpE2FUchqOkLRFamhkQqLVlo2cXhch7erBEveJ1b7gI
// space id : 0bd3qexsvzly
