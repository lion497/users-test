import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface UsersState {
    profile: {
        picture: { large: string },
        name: { first: string, last: string },
        id: { name: string },
        department: string,
        dob: { date: string },
        phone: string,
    },
    typeFilter: string,
    searchByName: string,
    activeTab: string,
}

const initialState: UsersState = {
    profile: {} as UsersState["profile"],
    typeFilter: "",
    searchByName: "",
    activeTab: "all",
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        SET_SEARCH_BY_NAME: (state, action: PayloadAction<string>) => {
            state.searchByName = action.payload
        },
        SET_USER_PROFILE: (state, action: PayloadAction<[]>) => {
            // @ts-ignore
            state.profile = action.payload
        },
        SET_TYPE_FILTER: (state, action: PayloadAction<string>) => {
            state.typeFilter = action.payload
        },
        SET_ACTIVE_TAB: (state, action: PayloadAction<string>) => {
            state.activeTab = action.payload
        },
    }
})

export const {
    SET_SEARCH_BY_NAME,
    SET_USER_PROFILE,
    SET_TYPE_FILTER,
    SET_ACTIVE_TAB
} = usersSlice.actions

export default usersSlice.reducer