import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Box, Button, Typography, Card, CardContent } from '@mui/material';

const RichTextEditor = () => {
  const [content, setContent] = useState(localStorage.getItem('richTextData') || '');

  const handleSave = () => {
    localStorage.setItem('richTextData', content);
    alert('Content saved!');
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['clean'],
    ],
  };

  return (
    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ width: '50%', p: 2 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Rich Text Editor
          </Typography>
          <ReactQuill
            value={content}
            onChange={setContent}
            modules={modules}
            style={{ marginBottom: '1rem' }}
          />
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RichTextEditor;
