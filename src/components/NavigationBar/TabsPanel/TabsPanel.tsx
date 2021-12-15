import React from 'react';
import styles from "./TabsPanel.module.scss";
import {departments} from "../../Users/Users";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {SET_ACTIVE_TAB} from "../../../slices/usersSlice";
import {nanoid} from "@reduxjs/toolkit";

function TabsPanel() {
    const activeTab = useSelector((state: RootState) => state.users.activeTab)
    const dispatch = useDispatch();
    return (
        <div className={styles.tabs}>
            {departments.map((item) =>
                <div key={nanoid()} className={item.key === activeTab ? styles.tab_item_active : styles.tab_item}
                     onClick={() => dispatch(SET_ACTIVE_TAB(item.key))}>
                    {item.title}
                </div>)}
        </div>
    );
}

export default TabsPanel;