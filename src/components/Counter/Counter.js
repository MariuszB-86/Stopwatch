import styles from './Counter.module.scss';

const Counter = ({time}) => {

    const ms = (time % 1000);
    const sec = Math.floor((time / 1000) % 60);
    const min = Math.floor((time / (1000 * 60)) % 60);
    const hr = Math.floor((time / (1000 * 60 * 60)) % 24);
      
    const hours = (hr < 10) ? "0" + hr : hr;
    const minutes = (min < 10) ? "0" + min : min;
    const seconds = (sec < 10) ? "0" + sec : sec;
      
    return (
        <div className={styles.counter}>{hours} : {minutes} : {seconds}.{ms}</div>
    );
};

export default Counter;