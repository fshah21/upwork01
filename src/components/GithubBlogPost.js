import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const GithubBlogPost = () => {
  const [markdownContent, setMarkdownContent] = useState('');

  const source = `
# Hello, world!
---
~this doesn't work.~`

  return (
    <ReactMarkdown children={source}>
    </ReactMarkdown>
  );
};

export default GithubBlogPost;