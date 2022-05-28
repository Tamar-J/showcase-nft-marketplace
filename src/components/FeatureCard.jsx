import React from 'react'
import styles from '../styles/Global'

export default function FeatureCard({ iconUrl, iconText }) {
  return (
    <div className={styles.featureCard}>
        <img src={iconUrl} alt="icon" className={styles.featureImg} />
        <p className={styles.featureText}>
            {iconText}
        </p>
    </div>
  )
}
