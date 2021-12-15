import styles from './Error.module.css';

export function Error() {
    return (
        <div className={styles.critical_error}>
            <h3>Какой-то сверхразум все сломал</h3>
            <p>Постараемся быстро починить</p>
            <a href="/">Попробовать снова</a>
        </div>
    );
}