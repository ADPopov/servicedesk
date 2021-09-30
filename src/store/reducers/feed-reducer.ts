import {AppDispatch} from "../index";
import {instance} from "../../api/instance";
import {Feed} from "../../models/Feed";

export enum FeedActionsEnum {
    SET_FEED = "SET_FEED"
}

interface FeedState {
    feed: Feed[]
}

let initialState: FeedState = {
    feed: [] as Feed[]
};

type ActionTypes = setFeedAction;

const feedReducer = (state = initialState, action: ActionTypes): FeedState => {
    switch (action.type) {
        case FeedActionsEnum.SET_FEED:
            return {...state, feed: action.payload};
        default:
            return state;
    }
};

type setFeedAction = { type: FeedActionsEnum.SET_FEED, payload: Feed[] };

export const FeedActionCreators = {
    setFeed: (feed: Feed[]) : setFeedAction => ({type: FeedActionsEnum.SET_FEED, payload: feed}),
    loadFeed: () => async (dispatch: AppDispatch) => {
        const response = await instance.request<Feed[]>({
            method: "GET",
            url: `feed/`,
        })
        dispatch(FeedActionCreators.setFeed(response.data));
    }
}

export default feedReducer;
