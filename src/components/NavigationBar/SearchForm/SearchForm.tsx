import styles from './SearchForm.module.scss';
import close from "assets/images/close.svg";
import {useState} from "react";
import ReactModal from 'react-modal';
import {useDispatch, useSelector} from "react-redux";
import sleep from 'utils/sleep';
import {RootState} from "../../../store";
import {SET_SEARCH_BY_NAME, SET_TYPE_FILTER} from '../../../slices/usersSlice';
import filter from 'assets/images/filter.svg';
import search from 'assets/images/search.svg';

export function SearchForm() {
    const dispatch = useDispatch();
    const [valueSearch, setValueSearch] = useState("Please enter your first or last name...");

    function handleChange(event: any) {
        setValueSearch(event.target.value);
        dispatch(SET_SEARCH_BY_NAME(event.target.value));
    }

    const [showModalFilter, setShowModalFilter] = useState(false);

    async function waitCloseModal() {
        await sleep(1000)
        setShowModalFilter(false);
    }

    async function handleByDate() {
        await waitCloseModal()
        dispatch(SET_TYPE_FILTER("ByDate"));
    }

    async function handleAlphabetically() {
        await waitCloseModal()
        dispatch(SET_TYPE_FILTER("Alphabetically"));
    }

    function handleFocus() {
        setValueSearch("");
    }

    const typeFilter = useSelector((state: RootState) => state.users.typeFilter)
    return <div className={styles.wrapper}>
        <h1>Search</h1>
        <div className={styles.wrapper_box}>
            <img className={styles.search} src={search}/>
            <input onChange={handleChange} onFocus={handleFocus} type="text" value={valueSearch}/>
            <img onClick={() => {
                setShowModalFilter(true)
            }} className={styles.filter} src={filter}/>
        </div>

        <ReactModal
            isOpen={showModalFilter}
            ariaHideApp={false}
            className={styles.Modal}
            overlayClassName={styles.overlay}
        >
            <div className={styles.header_filter}>
                <h3>Sorting</h3>
                <div onClick={() => {
                    setShowModalFilter(false);
                }} className={styles.close_circle}><img alt={''} src={close}/></div>
            </div>
            <div className={styles.types_filter}>
                <div className={styles.form_radio}>
                    <input onChange={handleAlphabetically} type="radio" name="rb" id="rb1"
                           defaultChecked={typeFilter === "Alphabetically"}/>
                    <label htmlFor="rb1"><span>Alphabetically</span></label>
                </div>
                <div className={styles.form_radio}>
                    <input onChange={handleByDate} type="radio" name="rb" id="rb2"
                           defaultChecked={typeFilter === "ByDate"}/>
                    <label htmlFor="rb2"><span>By birthday</span></label>
                </div>
            </div>
        </ReactModal>
    </div>
}