import React from 'react';
import {CardHeader} from '../../common/styles/Card.styled';
import {NewsDate, NewsDescriptionBox, NewsInfo, NewsItem, NewsPicture} from './NewsCard.styled';

const NewsCard = () => {
    return (
        <NewsItem>
            <div>
                <CardHeader>Проверка пожарных систем</CardHeader>
                <NewsDescriptionBox>
                    Будут отключены лифты слева от главного входа
                </NewsDescriptionBox>
                <NewsInfo>
                    <NewsDate>Сегодня, с 12:00 до 13:00</NewsDate>
                </NewsInfo>
            </div>
            <NewsPicture src={'http://pngimg.com/uploads/extinguisher/extinguisher_PNG47.png'} />
        </NewsItem>
    );
};

export default NewsCard;