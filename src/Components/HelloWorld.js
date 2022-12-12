
import React from 'react'
import styles from './HelloWorld.module.css';


const HelloWorld = () => {
     const heading = React.createElement(
        'h1',
        null,
        'Hello this is a new Component');
  return (
    <div className={styles
        ["main-two"]}>
       <h1>Hello to the <span>NEW</span></h1>

    </div>
  );
};
  

export default HelloWorld 