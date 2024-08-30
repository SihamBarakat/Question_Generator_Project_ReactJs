import React, { useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';

function InsertData() {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios.post('/api/insert', data)
      .then((response) => {
        console.log(response);
        setData({ name: '', email: '', message: '' });
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={data.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={data.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Message:
        <textarea name="message" value={data.message} onChange={handleChange}></textarea>
      </label>
      <br />
      {isLoading ? <CircularProgress /> : <button type="submit">Submit</button>}
    </form>
  );
}

export default InsertData;