import React from 'react';
import NewsList from './NewsList/NewsList';
import {WhiteCard, WhiteCardHeader} from "../common/styles/WhiteCard.styles";

const News = () => {
    return (
        <WhiteCard>
            <WhiteCardHeader>Новости</WhiteCardHeader>
            <NewsList />
        </WhiteCard>
    );
}

export default News;