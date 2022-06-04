import React, {useState, useEffect} from 'react';
import { ethers } from "ethers";
import SoldOutComponent from '../SoldOutComponent/SoldOutComponent';
import SecretHolder from '../../pages/SecretHolder/SecretHolder';
import Web3Modal from "web3modal";
import WalletConnectProvider from '@walletconnect/web3-provider';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import { CircularProgress } from "@material-ui/core";
import contract from '../../contracts/ChftyPizzas.json';
import CryPizza from '../../assets/crypizza.webp'
import PizzaOne from '../../assets/PizzaLogo50.webp';
import styles from './WalletConnect.module.scss';

const INFURA_ID = "3ef01540f7de46f9bff8c8fad83ca826";
const contractAddress = "0xA720E16603f81CD82FaAE15AE16F1aCfE88ddF0F";
const abi = contract.abi;

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: INFURA_ID // required
        }
    },
    coinbasewallet: {
        package: CoinbaseWalletSDK, // Required
        options: {
          appName: "CHFTY", // Required
          infuraId: INFURA_ID, // Required
          rpc: "", // Optional if `infuraId` is provided; otherwise it's required
          chainId: 4, // rinkeby. mainnet = 1
          darkMode: false // Optional. Use dark theme, defaults to false
        }
    }
};

const web3Modal = new Web3Modal({
  network: "rinkeby", // optional
  cacheProvider: false, // optional
  disableInjectedProvider: false,
  providerOptions // required
});


const WalletConnect = () => {
    const [currentAccount, setCurrentAccount] = useState(null);
    const [balance, setBalance] = useState(0);
    const [uri, setUri] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const connectWalletHandler = async () => {
        web3Modal.clearCachedProvider();
        const instance = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(instance);

        try {
            setIsLoading(true);
            const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
            console.log("Found an account! address: ", accounts[0]);
            setCurrentAccount(accounts[0]);

            console.log("entered extractNftData");
            const signer = provider.getSigner();
            const nftContract = new ethers.Contract(contractAddress, abi, signer);
    
            let nftBalance = await nftContract.balanceOf(accounts[0]);
            let tokenIdHex = await nftContract.tokenOfOwnerByIndex(accounts[0], 0);
            let tokenId = parseInt(tokenIdHex._hex, 16);
            let tokenUri = await nftContract.tokenURI(tokenId);

            console.log(tokenUri);
            setUri(tokenUri);
            setBalance(nftBalance);
            setIsLoading(false);

        } catch (err) {
            console.log(err);
            setIsLoading(false);
        }
    }

    return (
        <div className={styles.connect}>
          <div className={styles.connect__row}>
            {!currentAccount && <img src={PizzaOne}/> }
            {!currentAccount && <p > ....psssssstt. Click the big red button! </p> }
            {!currentAccount && <img src={PizzaOne}/> }
          </div>
          {!currentAccount && <button onClick={connectWalletHandler}> Connect Wallet </button>}
          {isLoading && <CircularProgress />}
          {currentAccount && balance == 0 && !isLoading && 
          <div className={styles.nopizza}>
            <img src={CryPizza} /> 
            <p>Oh no! Looks like you do not hold any CHFTY Pizzas. Please purchase one on the secondary market to access the contents of this page</p>
            <SoldOutComponent />
          </div>
          }
          {currentAccount && balance > 0 && !isLoading &&
          <div className={styles.hodler}>
            <SecretHolder account={currentAccount} num={balance} uri={uri}/>
          </div>
          }
        </div>
    );

}

export default WalletConnect;