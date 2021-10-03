import React from "react";
import RequestsList from "./RequestsList/RequestsList";
import {WhiteCard, WhiteCardHeader} from "../common/styles/WhiteCard.styles";

const Requests = () => {
    return (
        <WhiteCard>
            <WhiteCardHeader>Действующие заявки</WhiteCardHeader>
            <RequestsList />
        </WhiteCard>
    );
}

export default Requests;