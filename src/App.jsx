import React from 'react'

import { Download, Features, SectionWrapper } from './components'
import assets from './assets'
import styles from './styles/Global'

export default function App() {


  return (
    <>
      <SectionWrapper 
        title="Your own store of Nifty NFT. Start Selling & Growing"
        description="Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features 
        banner="banner03"
      />
      <SectionWrapper 
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users devices. You can easily get your app into people's hands."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <footer className="pb-[0.5rem] text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with ❤️ by <span className="bold">Tamar</span>
        </p>
      </footer>
    </>
  )
}
