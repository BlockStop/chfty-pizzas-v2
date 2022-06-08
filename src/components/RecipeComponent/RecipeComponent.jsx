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
                <h3>Ingredients: </h3>
                <p>
                    {props.ingredients.map(ingredient => <div key={ingredient} 
                    style={styles}>{ingredient}</div>)}
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

        <div className={styles.instructions}>
            <h3> Instructions: </h3>
            <h4> FOR THE BIRRIA </h4>
            <p>
                {props.instructions.map(instruction => <div key={instruction} 
                    style={styles}>{instruction} <br/> <br/></div>)}
            </p>
        </div>
    </React.Fragment>
  )
}

export default RecipeComponent
