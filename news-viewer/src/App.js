import React, { useCallback, useState } from 'react';
import Categories from './components/Categories';
import NewsList from './components/NewsList';

const App = () => {
  const [catagory, setCatagory] = useState('all');
  const onSelect = useCallback((catagory) => setCatagory(catagory), []);

  return (
    <>
      <Categories catagory={catagory} onSelect={onSelect} />
      <NewsList catagory={catagory} />;
    </>
  );
};

export default App;
