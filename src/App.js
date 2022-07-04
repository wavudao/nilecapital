import React,{useMemo,createContext, useState,  useEffect} from "react";
import routes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import { useRoutes } from "react-router-dom";
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    GlowWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { fetch } from "./redux/actions";
import { useDispatch } from "react-redux";



export const AuthContext = createContext()


const initialData = {
  userName:"",
  userEmail:"",
  address:""
}


require('@solana/wallet-adapter-react-ui/styles.css');
function App() {
  const routing = useRoutes(routes);

  const [userData, setUserData] = useState(initialData) 

  const addUserData = (name, data) => {
    setUserData(userData => ({
      ...userData,
      [name]: data
    }))
  }
  const dispatch = useDispatch();

  useEffect(()=>{
    const getArticles = ()=>{
      dispatch(fetch());
    }
    getArticles()
  },[])

  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Mainnet

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  
  const wallets = useMemo(
      () => [
          new PhantomWalletAdapter(),
          new GlowWalletAdapter(),
          new SlopeWalletAdapter(),
          new SolflareWalletAdapter({ network }),
          new TorusWalletAdapter(),
      ],
      [network]
  );
    

  return (
    <AuthContext.Provider value={{userData, add:addUserData}}>
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Header />

          <SmoothScroll>
            {routing}
            <Footer />
          </SmoothScroll>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
    </AuthContext.Provider>
  );
}

export default App;
