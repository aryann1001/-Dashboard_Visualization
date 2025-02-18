import React from 'react';
import Counter from './components/Counter';
import UserDataForm from './components/UserDataForm';
import RichTextEditor from './components/RichTextEditor';

const App = () => {
  return (
    <div style={{ margin: '1rem' }}>
      {/* Task 1: Counter */}
      <Counter />

      {/* Task 2: User Data Form */}
      <UserDataForm />

      {/* Task 3: Rich Text Editor */}
      <RichTextEditor />
    </div>
  );
};

export default App;
