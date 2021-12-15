import React from 'react';
import styles from "./NothingFound.module.scss";
import nothing_search from "assets/images/nothingSearch.svg";

function NothingFound() {
    return (
        <div className={styles.wrapper}>
            <img src={nothing_search} alt={''}/>
            <h3>Мы никого не нашли</h3>
            <p>Попробуй скорректировать запрос</p>
        </div>
    );
}

export default NothingFound;