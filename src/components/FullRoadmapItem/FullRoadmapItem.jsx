import React, {useState} from 'react';
import RoadmapItem from '../RoadmapItem/RoadmapItem';
import Popup from '../Popup/Popup';
import { RoadmapContent } from '../../text/RoadmapContent';
import styles from './FullRoadmapItem.module.scss';

function FullRoadmapItem(props) {
    const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
        <button onClick={() => setButtonPopup(true)}>
            <RoadmapItem roadmapDescription={RoadmapContent.content[props.num]['description']} roadmapStatus={RoadmapContent.content[props.num]['status']} backColor={RoadmapContent.content[props.num]['color']}/>
        </button>
        <div className={styles.popup}>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}> my popup </Popup>
        </div>
    </div>
  )
}

export default FullRoadmapItem;
