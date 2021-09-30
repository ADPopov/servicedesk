import {AppDispatch} from "../index";
import {User} from "../../models/User";
import { instance } from "../../api/instance";

export enum UserActionsEnum {
    SET_USER_DATA = 'SET_USER_DATA',
}

interface UserState {
    user: User
}

let initialState: UserState = {
    user: {} as User,
};

type ActionTypes = setUserAction;

const userReducer = (state = initialState, action: ActionTypes): UserState => {
    switch (action.type) {
        case UserActionsEnum.SET_USER_DATA:
            return {...state, user: action.payload};
        default:
            return state;
    }
};

type setUserAction = { type: UserActionsEnum.SET_USER_DATA, payload: User };

export const UserActionCreators = {
    setUser: (user: User) : setUserAction => ({type: UserActionsEnum.SET_USER_DATA, payload: user}),
    LoadUserData: () => async (dispatch: AppDispatch) => {
        const response = await instance.request<User>({
            method: "GET",
            url: `info/`,
        })
        dispatch(UserActionCreators.setUser(response.data))
    }
}

export default userReducer;
