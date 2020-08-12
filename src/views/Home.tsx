import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../store/types';

const Home: FC = () => {
  const todo = useSelector((state: ApplicationState) => state.todos);
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch({ type: 'ADD_TODO' });
  }, [dispatch]);

  return (
    <div>
      <p>{todo?.[0]}</p>
      <button onClick={handleClick}>Klicka här</button>
    </div>
  );
};

export default Home;
