import '@rainbow-me/rainbowkit/styles.css';

import Header from '@/components/header'
import Groups from '@/components/groups'
import Layout from '@/components/layout'
import Marquee from '@/components/marquee'
import { darkTheme, RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit'
import Image from 'next/image'
import { AuctionHero, BuilderDAO, useDao } from 'nouns-builder-components'
import { WagmiConfig, configureChains, createClient, mainnet, useAccount } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'


const { chains, provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()],
)

const { connectors } = getDefaultWallets({
  appName: 'Group Purple',
  chains
});
 
const wagmiClient = createClient({
  autoConnect: true,
  provider,
  connectors,
  webSocketProvider,
})

export default function Home() {

  const { address } = useAccount()

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider 
        chains={chains}
        theme={darkTheme({
          accentColor: '#7b3fe4',
          accentColorForeground: 'white',
          borderRadius: 'small',
          fontStack: 'system',
          overlayBlur: 'small',
        })}>
          <Layout>
            <Header name="Win a Purple NFT with your friends" />
            { typeof address === 'undefined' ? <Marquee name="Group Purple" /> : <Groups /> }
          </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
