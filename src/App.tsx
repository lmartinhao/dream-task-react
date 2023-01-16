import { useState } from 'react'
import { Header } from './components/Header'
import { TaskDisplay } from './components/TaskDisplay'
import styles from './App.module.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />

      <main>
        <TaskDisplay />
        <div className={styles.bubbleWrapper}>
          <div className={styles.bubble}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles.bubble}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles.bubble}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles.bubble}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles.bubble}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles.bubble}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles.bubble}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles.bubble}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </main>
    </div>
  )
}

export default App
