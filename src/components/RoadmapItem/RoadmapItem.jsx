import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import styles from './RoadmapItem.module.scss';

function RoadmapItem(props) {
  return (
    <div className={styles.container}>
        <p> {props.roadmapDescription} </p>
        <div className={styles.status}>
            <p>{props.roadmapStatus}</p>
        </div>
        <div className={styles.arrow}>
            <AiOutlineArrowRight />
        </div>
    </div>
  )
}

export default RoadmapItem
