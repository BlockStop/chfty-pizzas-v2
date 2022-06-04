import React from 'react'
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed';
import styles from './RecipeComponent.module.scss';

function RecipeComponent(props) {
  return (
    <React.Fragment>
        <div className={styles.pageTitle}>
            <h2>{props.title}</h2>
            <div />
            <br/>
        </div>

        <div className={styles.video}>
            <YoutubeEmbed  embedId={props.embedId}/>
        </div>

        <div className={styles.info__row}>
            <div className={styles.ingrediants}>
                <h3>Ingrediants: </h3>
                <p>
                    {props.timestamps.map(timestamp => <div key={timestamp} 
                    style={styles}>{timestamp}</div>)}
                </p>
            </div>

            <div className={styles.ingrediants}>
                <h3>Timestamps: </h3>
                <p>
                    {props.timestamps.map(timestamp => <div key={timestamp} 
                    style={styles}>{timestamp}</div>)}
                </p>
            </div>

        </div>
    </React.Fragment>
  )
}

export default RecipeComponent
