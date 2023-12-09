import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const GithubBlogPost = () => {
  const [markdownContent, setMarkdownContent] = useState('');

  const source = `
# Hello, world!
---
## Hello to you!`

  return (
    <div className="markdown-content">
        <ReactMarkdown children={source}></ReactMarkdown>
    </div>
  );
};

export default GithubBlogPost;