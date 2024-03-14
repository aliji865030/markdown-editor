import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

const MarkdownEditor = () => {
  const [markdownContent, setMarkdownContent] = useState('**Hello world!**');

  return (
    <div className="markdown-editor">
      <MDEditor
        value={markdownContent}
        onChange={setMarkdownContent}
      />
      <MDEditor.Markdown  />
    </div>
  );
};

export default MarkdownEditor;
