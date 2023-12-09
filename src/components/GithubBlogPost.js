import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GithubBlogPost = () => {
    const [htmlContent, setHTMLContent] = useState('');

    useEffect(() => {
      // URL of the GitHub raw content API for your HTML file
      const githubApiUrl = 'https://api.github.com/repos/username/repo/contents/path/to/your/component.html';
  
      const fetchHTMLContent = async () => {
        try {
          const response = await axios.get(githubApiUrl);
          const { data } = response;
  
          if (response.status === 200) {
            // Set the HTML content to the component state
            setHTMLContent(data);
          } else {
            console.error(`Failed to fetch HTML content: ${data.message}`);
          }
        } catch (error) {
          console.error('Error fetching HTML content:', error);
        }
      };
  
      // Call the function when the component mounts
      fetchHTMLContent();
    }, []);
  
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
};

export default GithubBlogPost;