import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
       <div className={styles.logo}>hamadev</div>
       <div className={styles.text}>
          hama Creative thoughts agency All rights reserved.
       </div>
     </div>
  )
}

export default Footer;