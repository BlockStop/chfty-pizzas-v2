import React, {useState, useEffect} from 'react';
import RecipeComponent from '../../components/RecipeComponent/RecipeComponent';
import { RecipeOneTimestamps } from '../../text/RecipeOneTimestamps';
import { RecipeOneIngredients } from '../../text/RecipeOneIngredients';
import { RecipeOneInstructions } from '../../text/RecipeOneInstructions';
import { RecipeOneIngredientsDuck } from '../../text/RecipeOneIngredientsDuck';
import { RecipeOneInstructionsDuck } from '../../text/RecipeOneInstructionsDuck';
import { RecipeOneInstructionsQuesa } from '../../text/RecipeOneInstructionsQuesa';
import jQuery from 'jquery';
import locales from '../../text';
import BackTest from '../../assets/test-back.webp';
import HolderImg from '../../assets/chefpizza.webp'
import ApeImg from '../../assets/monke.webp';
import WhaleImg from '../../assets/whale.webp';
import styles from './SecretHolder.module.scss';

const SecretHolder = (props) => {
    const [imgUrl, setImgUrl] = useState(null);

    useEffect(() => {
        (async () => {
            const ipfsMetadata = await jQuery.getJSON(props.uri.toString());
            setImgUrl(ipfsMetadata.image);
            console.log(ipfsMetadata);

        })();
    }, [props.uri]);

    const shortenAddress = (address, chars = 4) => {
        return `${address.slice(0, chars)}...${address.slice(-chars)}`;
      };

    const isApe = () => {
        return (props.num > 3 && props.num < 15)
    }

    const isWhale = () => {
        return (props.num > 14)
    }

    const isHolder = () => {
        return (!isApe() && ! isWhale())
    }

    return (
        <React.Fragment>
            <div className={styles.img__container} style={{ backgroundImage: `url(${BackTest})`}}>
                <section className={styles.page__filter}> 
                    <h2> <br/>Welcome. </h2>
                </section>
            </div>

            <div className={styles.recipe__container}>
                <div className={styles.center__container}>
                <img src={imgUrl} loading="lazy" />
                <p>{shortenAddress(props.account.toString() || "")}</p>
                <p>Proudly hodling {props.num.toString()} CHFTY Pizzas</p>

                <div className={styles.status__row}>

                {isHolder() ? (
                    <img src={HolderImg}/>
                    ) : (
                    <img src={HolderImg} style={{ filter: "brightness(30%)" }}/>
                )}
                    
                <div />

                {isApe() ? (
                    <img src={ApeImg}/>
                    ) : (
                    <img src={ApeImg} style={{ filter: "brightness(30%)" }}/>
                )}
                
                <div />

                {isWhale() ? (
                    <img src={WhaleImg}/>
                    ) : (
                    <img src={WhaleImg} style={{ filter: "brightness(30%)" }}/>
                )}
                </div>
                
                <br />
                <p> {isHolder() && locales.en.secretHolderPage.holderText} </p>
                <p> {isApe() && locales.en.secretHolderPage.apeText} </p>
                <p> {isWhale() && locales.en.secretHolderPage.whaleText} </p>
                </div>

                <div className={styles.recipe}>
                    <RecipeComponent title="CHFTY Cooking Demo: Tacos 5/2" embedId='kco73-ZgzWA' timestamps={RecipeOneIngredientsDuck} ingredients={RecipeOneIngredients} instructions={RecipeOneInstructions} instructions_two={RecipeOneInstructionsQuesa} instructions_three={RecipeOneInstructionsDuck}
                    ingredients_one="Spike's Birria Tacos" ingredients_two="Tom's Duck Tacos" title_one="FOR THE BIRRIA" title_two="FOR THE BIRRIA QUESATACOS" title_three="FOR THE DUCK TACOS"/>
                </div>

            </div>
        </React.Fragment>
    );
}

export default SecretHolder;