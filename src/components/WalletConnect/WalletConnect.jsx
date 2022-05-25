import React, {useState, useEffect} from 'react';
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from '@walletconnect/web3-provider';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import contract from '../../contracts/ChftyPizzas.json';
import CryPizza from '../../assets/crypizza-test.jpg'
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

    const connectWalletHandler = async () => {
        web3Modal.clearCachedProvider();
        const instance = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(instance);

        try {
            const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
            console.log("Found an account! address: ", accounts[0]);
            setCurrentAccount(accounts[0]);

            console.log("entered extractNftData");
            const signer = provider.getSigner();
            const nftContract = new ethers.Contract(contractAddress, abi, signer);
    
            let nftBalance = await nftContract.balanceOf(accounts[0]);
            setBalance(nftBalance);

            
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className={styles.connect}>
          {!currentAccount && <button onClick={connectWalletHandler}> Connect Wallet </button>}
          {currentAccount && balance == 0 && 
          <div className={styles.nopizza}>
            <p>You do not hold any CHFTY Pizzas. Please purchase one on the secondary market to view this page</p>
            <img src={CryPizza} /> 
          </div>
          }
          {currentAccount && balance > 0 && 
          <div className={styles.hodler}>
            <p>Welcome CHFTY Pizza hodler! Inside our secret menu is a repository of exclusive recipes and video files</p>
            <p>These are exclusive CHFTY cooking demos only accessible to members of the CHFTY club </p>
          </div>
          }

          test
        </div>
    );

}

export default WalletConnect;