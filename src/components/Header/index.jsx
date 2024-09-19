import React from 'react'
import styles from "./header.module.scss"
import Logo  from "./Logo/index.jsx"
import  DesktopNav  from './Navigation/DesktopNav.jsx'
import MobileNav from './Navigation/MobileNav.jsx'
import  CodereBtn  from '../CodereBtn/index.jsx'

export const  Header = () => {

    const btnTitle = "acceder"

  return (
    <div  className={styles.headerContainer}>
    <div className={styles.header}>
        <div className={styles.mobileNav}>
            <MobileNav/>
            <Logo/>
        </div>
        <DesktopNav/>
        <CodereBtn title={btnTitle}/>
    </div>
    </div>
    
  )
}
