import Hero from '../layout/Hero'
import Features from '../layout/Features'
import Features2 from '../layout/Features2'

import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <Features />
      <Features2 />
    </div>
  )
}

export default Home