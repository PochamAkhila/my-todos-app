import React from 'react'
import MainTables from '../../component/Table/MainTables';
import { UserContext } from '../../component/Table/ThemeContext';
import { useContext } from 'react';
import "../Home/Styl.css";
// import Table from '../../component/Table/Index';

const Home = () => {

  const { theme, setTheme } = useContext(UserContext)

  function Mybtn() {
    setTheme(!theme);
  }
  return (
    <div>

      <div className='bt'>
        <button type='button' onClick={Mybtn} className="btn-bg">Toggle</button>
      </div>

      <MainTables />
    </div>
  )
}

export default Home