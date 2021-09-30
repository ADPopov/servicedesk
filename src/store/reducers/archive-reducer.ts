import {AppDispatch} from "../index";
import {instance} from "../../api/instance";
import {Ticket} from "../../models/Ticket";

export enum ArchiveActionsEnum {
    SET_ARCHIVE = 'SET_ARCHIVE',
}

interface ArchiveState {
    archive: Ticket[]
}

let initialState: ArchiveState = {
    archive: {} as Ticket[],
};

type ActionTypes = SetArchiveAction;

const archiveReducer = (state = initialState, action: ActionTypes): ArchiveState => {
    switch (action.type) {
        case ArchiveActionsEnum.SET_ARCHIVE:
            return {...state, archive: action.payload};
        default:
            return state;
    }
};

export type SetArchiveAction = { type: ArchiveActionsEnum.SET_ARCHIVE, payload: Ticket[] };

export const ArchiveActionsCreators = {
    setArchive: (ticket: Ticket[]): SetArchiveAction => ({type: ArchiveActionsEnum.SET_ARCHIVE, payload: ticket}),
    loadArchive: () => async (dispatch: AppDispatch) => {
        const response = await instance.request<Ticket[]>({
            method: "GET",
            url: `user/tickets/archive/`,
        })
        dispatch(ArchiveActionsCreators.setArchive(response.data));
    }
}

export default archiveReducer;
