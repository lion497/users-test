import React from 'react';
import styles from "./LoadingUsersList.module.scss";

function LoadingUsersList() {
    let outList = [];
    for (let i = 0; i < 7; i++) {
        outList.push(<LoadingWorker key={i}/>);
    }
    return (
        <div className={styles.loading_workers_list}>
            {outList}
        </div>
    );
}

function LoadingWorker() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.image}/>
            <div className={styles.info}>
                <div className={styles.name}/>
                <div className={styles.department}/>
            </div>
        </div>
    );
}

export default LoadingUsersList;

