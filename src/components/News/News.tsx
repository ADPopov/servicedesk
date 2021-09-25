import React from 'react';
import NewsList from './NewsList/NewsList';
import {WhiteCard} from '../common/styles/WhiteCard.styles';
import {CardHeader} from '../common/styles/CardHeader.styled';

const News = () => {
    return (
        <WhiteCard>
            <CardHeader>Новости</CardHeader>
            <NewsList/>
        </WhiteCard>
    );
}

export default News;