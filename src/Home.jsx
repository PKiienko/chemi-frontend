import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './Home.css';
import CreateRecord from './CreateRecord';
import ViewFuelStock from './ViewFuelStock';
import ViewRecord from './ViewRecord';

const Home = () => {
  return (
    <>
      <h4>Dekoplant Chemi</h4>
      <nav>
        <ul>
          <li>
            <Link to='create_record'>Create Record</Link>
          </li>
          <li>
            <Link to='view_record'>View Record</Link>
          </li>
          <li>
            <Link to='view_stock'>View Stock</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/create_record' element={<CreateRecord />} />
        <Route path='/view_record' element={<ViewRecord />} />
        <Route path='/view_stock' element={<ViewFuelStock />} />
      </Routes>
    </>
  );
};

export default Home;
