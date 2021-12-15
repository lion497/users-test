import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import NothingFound from "../NothingFound/NothingFound";
import _ from "lodash";
import {User} from "../User/User";
import {nanoid} from "@reduxjs/toolkit";
import styles from "./UsersFiltered.module.scss";

export function UsersFiltered(props: any) {
    let users = props.users
    const searchByName = useSelector((state: RootState) => state.users.searchByName)
    if (searchByName !== "Введи имя, тег, почту..." && searchByName) {
        let usersTemp = users
        let lastName = []
        let firstName: any = []
        firstName = usersTemp.filter(Query(searchByName, "first"))
        lastName = usersTemp.filter(Query(searchByName, "last"))
        lastName = lastName.filter((e: any) => !firstName.includes(e));

        users = [...firstName, ...lastName].flat()
        if (users.length === 0) {
            return <NothingFound/>
        }
    }
    if (props.typeFilter === "Alphabetically") {
        users = _.orderBy(users, 'name.first', 'asc');
        users = users.map((item: any) =>
            <User key={nanoid()} user={item}/>)
    } else if (props.typeFilter === "ByDate") {
        users = users.map(function (item: { dob: { date: string | number | Date; }; }) {
            let dd = new Date(item.dob.date).getDate()
            let mm = new Date(item.dob.date).getMonth()
            let currentYear = new Date().getFullYear();
            let birthdayDate = new Date(currentYear, mm, dd)
            let now = new Date().valueOf();
            if (birthdayDate.valueOf() < now) {
                birthdayDate.setFullYear(currentYear + 1)
            }
            return ({
                ...item,
                fromNow: Number(birthdayDate.valueOf() - now)
            });
        })
        users = _.orderBy(users, 'fromNow', 'asc');

        let currentMonth = new Date().getMonth()
        let currentDate = new Date().getDate()
        let currentYears = []
        let nextYears = []

        for (let item of users) {
            item.monthBirthday = new Date(item.dob.date).getMonth()
            item.dateBirthday = new Date(item.dob.date).getDate()
            if (item.monthBirthday > currentMonth) {
                currentYears.push(item)
            } else if (item.monthBirthday === currentMonth) {
                if (item.dateBirthday > currentDate) {
                    currentYears.push(item)
                } else {
                    nextYears.push(item)
                }
            } else {
                nextYears.push(item)
            }
        }
        users = []
        for (let item of currentYears) {
            users.push(<User key={nanoid()} user={item}/>)
        }
        users.push(<div key={nanoid()} className={styles.divide_year}>
            <div className={styles.line}/>
            <div className={styles.yearText}><p>{(new Date().getFullYear() + 1)}</p></div>
            <div className={styles.line}/>
        </div>)
        for (let item of nextYears) {
            users.push(<User key={nanoid()} user={item}/>)
        }
    } else {
        users = users.map((item: any) => <User key={nanoid()} user={item}/>)
    }
    return <div key={nanoid()} className={styles.wrapper}>{users}</div>
}

function Query(searchByName: any, property: any) {
    let makeQuery = function (property: any, regexp: any) {
        return function (elem: any) {
            return elem.name[property].search(regexp) !== -1;
        };
    };
    return makeQuery(property, new RegExp("^" + searchByName, "i"));
}

