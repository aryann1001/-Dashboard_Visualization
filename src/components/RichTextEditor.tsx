// File: src/components/RichTextEditor.tsx

import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { Box, Button, Typography } from '@mui/material';

const RichTextEditor: React.FC = () => {
  // Load saved content from localStorage if available
  const initialContent = localStorage.getItem('richTextData') || '';

  // State to manage the editor content
  const [content, setContent] = useState<string>(initialContent);

  // Handle content change
  const handleContentChange = (value: string) => {
    setContent(value);
  };

  // Save content to localStorage on button click
  const handleSave = () => {
    localStorage.setItem('richTextData', content);
    alert('Content saved successfully!');
  };

  // Quill editor modules for formatting options
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'], 
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['clean'], // Remove formatting
    ],
  };

  // Quill formats that are supported
  const formats = [
    'header',
    'bold', 'italic', 'underline',
    'list', 'bullet',
  ];

  return (
    <Box sx={{ maxWidth: 800, margin: '2rem auto', padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Rich Text Editor
      </Typography>
      <ReactQuill 
        value={content} 
        onChange={handleContentChange} 
        modules={modules} 
        formats={formats} 
        style={{ marginBottom: '1rem' }}
      />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save Content
      </Button>
    </Box>
  );
};

export default RichTextEditor;
