import React from "react";
import RequestsList from "./RequestsList/RequestsList";
import {WhiteCard } from "../common/styles/WhiteCard.styles";
import { CardHeader } from "../common/styles/CardHeader.styled";


const Requests = () => {
    return (
        <WhiteCard>
            <CardHeader>Действующие заявки</CardHeader>
            <RequestsList />
        </WhiteCard>
    );
}

export default Requests;