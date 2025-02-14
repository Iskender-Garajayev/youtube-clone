import React, { useEffect } from 'react';
import { fetchFromAPI } from '../Util/fetchFromAPI';

const Feed = () => {
  useEffect(() => {
    fetchFromAPI('search');
  }, []);

  return (
    <div>
      Feed
      <span>Name</span>
    </div>
  );
};

export default Feed;
