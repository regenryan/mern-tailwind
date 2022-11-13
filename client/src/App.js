import React from 'react';

// We use Route in order to define the different routes of our application
import { Route, Routes } from 'react-router-dom';

// We import all the components we need in our app
import Navbar from './components/navbar';
import RecordList from './components/recordList';
import Edit from './components/edit';
import Create from './components/create';
import './index.css';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<RecordList />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </div>
  );
};

export function App2() {
  return (
    <h1 className='text-3xl font-bold underline bg-red-500'>Hello world!</h1>
  );
}
