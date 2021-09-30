import {AuthActionsCreators} from "./reducers/auth-reducer";
import {UserActionCreators} from "./reducers/user-reducer";
import {TicketActionCreators} from "./reducers/ticket-reducer";
import {FeedActionCreators} from "./reducers/feed-reducer";
import {ArchiveActionsCreators} from "./reducers/archive-reducer";


export const allActionCreators = {
    ...AuthActionsCreators,
    ...UserActionCreators,
    ...TicketActionCreators,
    ...FeedActionCreators,
    ...ArchiveActionsCreators
}