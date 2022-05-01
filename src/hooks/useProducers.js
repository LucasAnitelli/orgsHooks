
import React, { useState, useEffect } from 'react';
import { loadProducers } from '../services/loadData';

const useProducers = () => {
  const [title, setTitle] = useState('');
  const [producers, setProducers] = useState([]);
  
  useEffect(() => {
    const result = loadProducers();
    if (result) {
      setTitle(result.title);
      setProducers(result.list);
    }
  }, [])
  return [title, producers];
}

export default useProducers;
