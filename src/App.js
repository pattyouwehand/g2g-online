import React from 'react';
import { Route } from 'react-router-dom';
import PostScreen from './screens/PostScreen';
import './App.css';

function App() {

  return (
    <div>
      <main>
        <Route exact path='/' component={PostScreen}/>
      </main>
    </div>
  );
};

export default App;
