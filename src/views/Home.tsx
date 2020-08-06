import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const initialText = useSelector((state: any) => state.initialText);
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
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
