import React, {useState} from 'react';
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from '@walletconnect/web3-provider';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import styles from './WalletConnect.module.scss';

const INFURA_ID = "3ef01540f7de46f9bff8c8fad83ca826";

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
  cacheProvider: true, // optional
  providerOptions // required
});

// const instance = await web3Modal.connect();
// const provider = new ethers.providers.Web3Provider(instance);
// const signer = provider.getSigner();

const WalletConnect = () => {
    const [currentAccount, setCurrentAccount] = useState(null);

    const connectWalletHandler = async () => {
        const instance = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(instance);
        // const signer = provider.getSigner();

        try {
            const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
            console.log("Found an account! address: ", accounts[0]);
            setCurrentAccount(accounts[0]);
        } catch (err) {
            console.log(err);
        }
    }

    // const connectWalletButton = () => {
    //     return (
    //       <button onClick={connectWalletHandler}>
    //         Connect Wallet
    //       </button>
    //     )
    //   }

    return (
        <div className={styles.connect}>
          <button onClick={connectWalletHandler}>
            Connect Wallet
          </button>
        </div>
    );

}

export default WalletConnect;