import React, { FC, useEffect } from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Header from 'components/Header';
import AppRouter from './router';
import { useAppDispatch } from 'hooks/redux';
import { setUser } from 'redux/reducers/authSlice';
import './App.css';


const App: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem('profile') || 'null');
  useEffect(() => {
    dispatch(setUser(user));
  }, [])
  
  return (
    <div className='App'>
      <Header/>
      <ToastContainer/>
      <AppRouter/>
    </div>
  )
}

export default App;
