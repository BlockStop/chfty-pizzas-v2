import React from 'react';
import RoadmapItem from '../RoadmapItem/RoadmapItem';
import { RoadmapContent } from '../../text/RoadmapContent';
import styles from './FullRoadmapItem.module.scss';

function FullRoadmapItem(props) {

  return (
    <div>
        <button onClick={() => {props.setButtonPopup(true); props.setNumber(props.num)}}>
            <RoadmapItem roadmapDescription={RoadmapContent.content[props.num]['description']} roadmapStatus={RoadmapContent.content[props.num]['status']} backColor={RoadmapContent.content[props.num]['color']}/>
        </button>
    </div>
  )
}

export default FullRoadmapItem;
