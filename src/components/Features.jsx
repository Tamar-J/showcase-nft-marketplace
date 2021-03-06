import React from 'react'

import assets from '../assets'
import styles from '../styles/Global'

import FeatureCard from './FeatureCard'



export default function Features({ banner }) {
  return (
    <section className={`${styles.section} ${styles.bgPrimary} ${banner}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Technologies</h1>
          <p className={`${styles.pText}  ${styles.whiteText}`}>
            ProNef has been developed using a cross-platform technology, React Native.
          </p>
        </div>
        <section className={styles.flexWrap}>
          <FeatureCard 
            iconUrl={assets.react}
            iconText="React Native"
          />
          <FeatureCard 
            iconUrl={assets.javascript}
            iconText="JavaScript"
          />
        </section>
      </div>
    </section>
  )
}
