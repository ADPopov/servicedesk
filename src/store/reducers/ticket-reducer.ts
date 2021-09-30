import {Ticket} from "../../models/Ticket";
import {AppDispatch} from "../index";
import {instance} from "../../api/instance";

export enum TicketActionsEnum {
    SET_TICKETS = "SET_TICKETS"
}

interface TicketState {
    tickets: Ticket[]
}

let initialState: TicketState = {
    tickets: [] as Ticket[]
};

type ActionTypes = setTicketsAction;

const ticketReducer = (state = initialState, action: ActionTypes): TicketState => {
    switch (action.type) {
        case TicketActionsEnum.SET_TICKETS:
            return {...state, tickets: action.payload};
        default:
            return state;
    }
};

type setTicketsAction = { type: TicketActionsEnum.SET_TICKETS, payload: Ticket[] };

export const TicketActionCreators = {
    setTicket: (ticket: Ticket[]) : setTicketsAction => ({type: TicketActionsEnum.SET_TICKETS, payload: ticket}),
    loadTicket: () => async (dispatch: AppDispatch) => {
        const response = await instance.request<Ticket[]>({
            method: "GET",
            url: `user/tickets/`,
        })
        dispatch(TicketActionCreators.setTicket(response.data));
    }
}

export default ticketReducer;
