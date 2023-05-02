import React from 'react';

import './VievRecord.css';

const ViewRecord = () => {
  const getRecordsFromDB = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/records/6450d1ec01aaa57c7eaa5ea0');
      const data = await response.json();
      console.log(data);
      if (response.status === 201) {
        console.log('Got data!');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>ViewRecord</h1>
      <button onClick={getRecordsFromDB}>Get Records</button>
    </div>
  );
};

export default ViewRecord;
