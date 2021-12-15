import {Error} from "./Error/Error";
import LoadingUsersList from "./LoadingUsers/LoadingUsersList";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import axios from "axios";
import {useQuery} from 'react-query'
import {UsersFiltered} from "./UsersFiltered/UsersFiltered";

export const departments = [
    {title: "All", key: "all"},
    {title: "Android", key: "android"},
    {title: "IOS", key: "ios"},
    {title: "Дизайн", key: "design"},
    {title: "Менеджмент", key: "management"},
    {title: "QA", key: "qa"},
    {title: "Бэк-офис", key: "back_office"},
    {title: "Frontend", key: "frontend"},
    {title: "HR", key: "hr"},
    {title: "PR", key: "pr"},
    {title: "Backend", key: "backend"},
    {title: "Техподдержка", key: "support"},
    {title: "Аналитика", key: "analytics"},
]

export function Users(props: any) {
    const {isLoading, error, data} = useQuery("users", async () => {
        let users = await axios
            .get(`https://randomuser.me/api/?nat=us&results=50`)
            .then(res => res.data.results)
        return users.map(function (user: any) {
            user.department = departments[Math.floor(Math.random() * departments.length)].key
            return user
        });
    });
    const typeFilter = useSelector((state: RootState) => state.users.typeFilter)
    const activeTab = useSelector((state: RootState) => state.users.activeTab)

    if (isLoading) return <LoadingUsersList/>
    if (error) return <Error/>

    if (activeTab === "all") {
        return <UsersFiltered users={data} typeFilter={typeFilter}/>
    } else {
        let usersFilter = data.filter((item: { department: string | any[]; }) =>
            item.department.includes(activeTab))
        return <UsersFiltered users={usersFilter} typeFilter={typeFilter}/>
    }
}
