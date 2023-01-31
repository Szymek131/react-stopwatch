import { useState, useEffect } from 'react';
import FormattedTime from '../FormattedTime/FormattedTime';
import styles from './Timer.module.scss';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState();

  const addTime = () => {
    setTime(prevValue => prevValue + 20)
  }

  const startTimer = () => {
    if (timerInterval) return
    setTimerInterval(setInterval(addTime, 20));
  }

  const stopTimer = () => {
    if (!timerInterval) return
    setTimerInterval(clearInterval(timerInterval));
  }

  const clearTimer = () => {
    stopTimer();
    setTime(0);
  }

  useEffect(() => {
    return () => {
      clearInterval(timerInterval)
    };
  }, []);

  return (
    <div>
      <div className={styles.timer}>
        <FormattedTime timeInMiliseconds={time}/>
      </div>
      <div className={styles.timerButtonContainer}>
        <button className={styles.button} onClick={startTimer}>Start</button>
        <button className={styles.button} onClick={stopTimer}>Stop</button>
        <button className={styles.button} onClick={clearTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;