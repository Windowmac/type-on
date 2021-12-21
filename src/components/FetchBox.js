import { useState, useEffect } from 'react';
import axios from 'axios';
import ColorText from './ColorText';
import './FetchBoxStyle.css';


const FetchBox = () => {
  const [fetchedString, setFetchedString] = useState('');
  const [fetchedAuthor, setFetchedAuthor] = useState('')
  useEffect(() => {
    axios.get('https://api.quotable.io/random').then((res) => {
      setFetchedString(res.data.content);
      setFetchedAuthor(res.data.author)
    });
  }, []);
  return (
    <div id='container'>
      <ColorText string={fetchedString} />
      <h2> - {fetchedAuthor}</h2>
    </div>
  );
};

export default FetchBox;
