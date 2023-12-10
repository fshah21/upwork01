import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Navbar from './Navbar';

const GithubBlogPost = () => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/post1.md`);
        const content = await response.text();
        setMarkdownContent(content);
      } catch (error) {
        console.error('Error fetching Markdown content:', error);
      }
    };

    fetchMarkdownContent();
  }, []);

  return (
    <div className="text-gray-400 bg-gray-900 body-font mb-40">
      <Navbar/>
      <div className="markdown-content mt-20 mx-40">
        <ReactMarkdown children={markdownContent}></ReactMarkdown>
      </div>
    </div>
  );
};

export default GithubBlogPost;