import {AppDispatch} from "../index";
import {TokenResponse} from "../../models/TokenResponse";
import axios from "axios";
import {instance} from "../../api/instance";
import {UserActionCreators} from "./user-reducer";
import {TicketActionCreators} from "./ticket-reducer";
import {FeedActionCreators} from "./feed-reducer";
import {ArchiveActionsCreators} from "./archive-reducer";

export enum AuthActionsEnum {
    SET_AUTH = 'SET_AUTH',
}

interface AuthState {
    isAuth: boolean
}

let initialState: AuthState = {
    isAuth: false,
};

type ActionTypes = SetIsAuthAction;

const authReducer = (state = initialState, action: ActionTypes): AuthState => {
    switch (action.type) {
        case AuthActionsEnum.SET_AUTH:
            return {...state, isAuth: action.payload};
        default:
            return state;
    }
};

export type SetIsAuthAction = { type: AuthActionsEnum.SET_AUTH, payload: boolean };

export const AuthActionsCreators = {
    setIsAuth: (isAuth: boolean): SetIsAuthAction => ({type: AuthActionsEnum.SET_AUTH, payload: isAuth}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        if (localStorage.getItem('access_token')) {
            instance.defaults.headers.common['Authorization'] = localStorage.getItem('access_token');
            dispatch<any>(UserActionCreators.LoadUserData())
            dispatch<any>(TicketActionCreators.loadTicket())
            dispatch<any>(FeedActionCreators.loadFeed())
            dispatch<any>(ArchiveActionsCreators.loadArchive())
        } else {
            const response = await instance.request<TokenResponse>({
                method: "POST",
                url: process.env.REACT_APP_BASE_URL + `oauth/token?grant_type=password&username=${username}&password=${password}&scope=read`,
                auth: {
                    username: 'client',
                    password: 'secret'
                },
            })
            if (response) {
                localStorage.setItem('access_token', 'Bearer ' + response.data.access_token);
                instance.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;
                console.log(instance.defaults.headers.common['Authorization'])
                dispatch<any>(UserActionCreators.LoadUserData())
                dispatch<any>(TicketActionCreators.loadTicket())
                dispatch<any>(FeedActionCreators.loadFeed())
                dispatch<any>(ArchiveActionsCreators.loadArchive())
            }
        }


    }
}

export default authReducer;
