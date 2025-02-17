// File: src/App.tsx

import React from 'react';
import Counter from './components/Counter';
import UserDataForm from './components/UserDataForm';
import RichTextEditor from './components/RichTextEditor';
const App: React.FC = () => {
  return (
    <div>
      <Counter />
      <UserDataForm />
      <RichTextEditor />
      {/* You can add other components or routes here */}
    </div>
  );
};

export default App;
