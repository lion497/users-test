import styles from './User.module.scss';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {SET_USER_PROFILE} from '../../../slices/usersSlice';

export function User(props: any) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const dispatch = useDispatch();
    const typeFilter = useSelector((state: RootState) => state.users.typeFilter)
    return <div className={styles.wrapper}>
        <div className={styles.image_worker}>
            <NavLink to="/profile" onClick={() => dispatch(SET_USER_PROFILE(props.user))}>
                <img alt="" src={props.user.picture.large}/>
            </NavLink>
        </div>
        <div className={styles.info_user}>
            <div className={styles.name}>
                <h3>{props.user.name.first} {props.user.name.last} </h3>
                <p>{(props.user.name.last).toLowerCase()}</p>
                <div className={styles.date_text}>
                    <p>{typeFilter === "ByDate" ? new Date(props.user.dob.date).getDate() + " " + months[new Date(props.user.dob.date).getMonth()] : ""} </p>
                </div>
            </div>
            <div className={styles.department}>
                <p>{props.user.department} </p>
            </div>
        </div>
    </div>;
}