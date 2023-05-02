import { useState, useEffect } from 'react';
import { useFormik } from 'formik';

import './CreateOrder.css';

const CreateRecord = () => {
  const [myRecords, setMyRecords] = useState([]);

  useEffect(() => {}, [myRecords]);

  const postRecordToDB = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/records', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formik.values.name,
          quantity: formik.values.quantity,
          prodObject: formik.values.prodObject,
          worker: formik.values.worker,
          date: formik.values.date,
        }),
      });
      if (response.status === 201) {
        console.log('hello');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      quantity: '',
      prodObject: '',
      worker: '',
      date: '',
    },
    onSubmit: (values) => {
      setMyRecords((prevItems) => [...prevItems, values]);
      console.log(myRecords);
      postRecordToDB();
    },
  });

  return (
    <div>
      <h1>CreateRecord</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <select name='name' value={formik.values.name} onChange={formik.handleChange}>
            <option>H20</option>
            <option>CuS04</option>
            <option>CaO</option>
            <option>Liposam</option>
          </select>
        </div>
        <div>
          <label htmlFor='quantity'>Quantity</label>
          <select name='quantity' value={formik.values.quantity} onChange={formik.handleChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div>
          <label htmlFor='prodObject'>Production Object</label>
          <select name='prodObject' value={formik.values.prodObject} onChange={formik.handleChange}>
            <option>Red Currant 2023</option>
            <option>Black Currant 2023</option>
            <option>Wheat 2023</option>
            <option>Raspberry 2023</option>
            <option>Roses 2023</option>
          </select>
        </div>
        <div>
          <label htmlFor='worker'>Worker</label>
          <select name='worker' value={formik.values.worker} onChange={formik.handleChange}>
            <option>Prokopenko</option>
            <option>Drobot</option>
            <option>Kushnir</option>
          </select>
        </div>
        <div>
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            name='date'
            value={formik.values.date}
            onChange={formik.handleChange}
          />
        </div>

        <button type='submit'>Add</button>
      </form>
      <div>
        {myRecords.map((myRecord) => {
          return (
            <p key={Math.random()}>
              {myRecord.vehicleName}
              {myRecord.workName}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default CreateRecord;
