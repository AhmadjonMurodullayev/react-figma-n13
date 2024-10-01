import React, { useState } from 'react';
import style from './style.module.scss'
import Switch from '@mui/material/Switch';

const successVars = { message: "Success" }; 
const defaultVars = { message: "Default" };   

const Sorch = () => {
  const [vars, setVars] = useState(defaultVars);

  const handleChange = (event) => {
    setVars(event.target.checked ? successVars : defaultVars);
  };

  return (
    <div className={style.box}>
      <div className={style.box2}>
        <h4 className={style.title}>Display total price</h4>
        <h4 className={style.title}>Includes all fees, before taxes</h4>
      </div>
      <Switch
        checked={vars === successVars}
        onChange={handleChange}
        color="primary"
        value="dynamic-class-name"
      />
    </div>
  );
};

export default Sorch;
