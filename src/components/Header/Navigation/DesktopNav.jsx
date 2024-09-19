import React from 'react'
import styles from "./desktopNav.module.scss"
import  links from "./links.json"

 const DesktopNav = () => {

  return (
    <div className={styles.nav}>
        {links.links.map(item=>{
            return <a key={item.title} className={styles.navItem}>
                 {item.title}
            </a>
        })}
    </div>
  )
}

export default DesktopNav