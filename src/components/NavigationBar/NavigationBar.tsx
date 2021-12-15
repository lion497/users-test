import styles from './NavigationBar.module.scss';
import {SearchForm} from "./SearchForm/SearchForm";
import TabsPanel from "./TabsPanel/TabsPanel";

export function NavigationBar() {
    return <div className={styles.wrapper}>
        <SearchForm/>
        <TabsPanel/>
    </div>;
}