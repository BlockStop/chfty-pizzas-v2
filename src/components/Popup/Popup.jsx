import React from 'react'
import styles from './Popup.module.scss';

function Popup(props) {
  return (props.trigger)?(
    <div className={styles.popup}>
        <div className={styles.innerpop}> 
            <button className={styles.closebtn} onClick={() => props.setTrigger(false)}> close </button>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default Popup;
