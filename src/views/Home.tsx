import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const initialText = useSelector((state) => state.initialText);
  console.log('initialText: ', initialText);
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    console.log('klick');
    dispatch({ type: 'CHANGE_TEXT' });
  }, [dispatch]);

  return (
    <div>
      <p>{initialText}</p>
      <button onClick={handleClick}>Klicka här</button>
    </div>
  );
};

export default Home;
