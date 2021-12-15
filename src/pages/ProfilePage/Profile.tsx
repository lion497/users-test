import styles from "./Profile.module.scss";
import React from "react";
import right from "assets/images/right.svg";
import number from "assets/images/number.svg";
import favorite from "assets/images/favorite.svg";
import {Navigate, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

function Profile() {
    let months = ['янв', 'февр', 'март', 'апр', 'май', 'июнь', 'июль', 'авг', 'сент', 'окт', 'нояб', 'дек'];
    let profile = useSelector((state: RootState) => state.users.profile)
    if (profile.name) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <NavLink to={"/"}>
                        <img alt="" src={right}/>
                    </NavLink>
                    <div className={styles.info_profile}>
                        <img alt="" src={profile.picture.large}/>
                        <div className={styles.nameProfile}>
                            <h3>{profile.name.first} {profile.name.last}<span>{profile.id.name.toLowerCase()}</span>
                            </h3>
                        </div>
                        <div className={styles.department_profile}>
                            <p>{profile.department}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.contacts_block}>
                    <div className={styles.birthday}>
                        <img alt="" src={favorite}/>
                        <p>{new Date(profile.dob.date).getDate() + " " + months[new Date(profile.dob.date).getMonth()] +
                            " " + new Date(profile.dob.date).getFullYear()}</p>
                        <div className={styles.age}>
                            <p>{(new Date().getFullYear()) - (new Date(profile.dob.date).getFullYear())} years</p>
                        </div>
                    </div>
                    <div className={styles.number}>
                        <img alt="" src={number}/><a href={"tel:" + profile.phone}>{profile.phone}</a>
                    </div>
                </div>
            </div>
        )
    } else {
        return <Navigate to="/"/>
    }
}

export default Profile;