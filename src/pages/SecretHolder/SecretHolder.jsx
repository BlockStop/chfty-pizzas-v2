import React, {useState, useEffect} from 'react';
import RecipeComponent from '../../components/RecipeComponent/RecipeComponent';
import RecipeComponentBasic from '../../components/RecipeComponentBasic/RecipeComponentBasic';
import { RecipeOneIngredients } from '../../text/RecipeOneIngredients';
import { RecipeOneInstructions } from '../../text/RecipeOneInstructions';
import { RecipeOneIngredientsDuck } from '../../text/RecipeOneIngredientsDuck';
import { RecipeOneInstructionsDuck } from '../../text/RecipeOneInstructionsDuck';
import { RecipeOneInstructionsQuesa } from '../../text/RecipeOneInstructionsQuesa';
import { RecipeTwoIngredients } from '../../text/RecipeTwoIngredients';
import { RecipeTwoInstructions } from '../../text/RecipeTwoInstructions';
import jQuery from 'jquery';
import locales from '../../text';
import BackTest from '../../assets/test-back.webp';
import HolderImg from '../../assets/chefpizza.webp'
import ApeImg from '../../assets/monke.webp';
import WhaleImg from '../../assets/whale.webp';
import styles from './SecretHolder.module.scss';
import { RecipeThreeIngredients } from '../../text/RecipeThreeIngrediants';
import { RecipeThreeInstructions } from '../../text/RecipeThreeInstructions';
import { RecipeFourIngredients } from '../../text/RecipeFourIngredients';
import { RecipeFourInstructions } from '../../text/RecipeFourInstructions';

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

                    <RecipeComponentBasic title="CHFTY Cooking Demo: Tom's Roast Chicken 6/6" embedId='etMWkoYKSxo' ingredients={RecipeTwoIngredients} instructions={RecipeTwoInstructions}/>
                    <RecipeComponentBasic title="CHFTY Cooking Demo: Spike and Rocco's Paella 6/23" embedId='3rztv2bCRVM' ingredients={RecipeThreeInstructions} instructions={RecipeThreeIngredients}/>
                    <RecipeComponentBasic title="CHFTY Cooking Demo: Tom's Summer Pasta 8/8" embedId='c6rbQnsyb5I' ingredients={RecipeFourIngredients} instructions={RecipeFourInstructions}/>


                </div>

            </div>
        </React.Fragment>
    );
}

export default SecretHolder;