import styles from './FormattedTime.module.scss';

const FormattedTime = ({ timeInMiliseconds }) => {
  const totalSeconds = Math.floor(timeInMiliseconds / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  
  const miliseconds = timeInMiliseconds % 1000;
  const seconds = totalSeconds % 60;
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);
  
  const padTo2Digits = num => num.toString().padStart(2, '0');
  const padTo3Digits = num => num.toString().padStart(3, '0');

  return <span className={styles.timer}>{padTo2Digits(hours)}:{padTo2Digits(minutes)}:{padTo2Digits(seconds)}.{padTo3Digits(miliseconds)}</span>
}

export default FormattedTime
