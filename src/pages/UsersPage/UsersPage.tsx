import {NavigationBar} from "../../components/NavigationBar/NavigationBar";
import {Users} from "../../components/Users/Users";
import styles from "./UsersPage.module.css";
import {nanoid} from "@reduxjs/toolkit";

export function UsersPage() {
    return <div>
        <div className={styles.wrapper}>
            <NavigationBar/>
            <Users key={nanoid()}/>
        </div>
    </div>;
}