import React, {FC} from 'react';
import {CardHeader} from '../../common/styles/Card.styled';
import {NewsDate, NewsDescriptionBox, NewsInfo, NewsItem, NewsPicture} from './NewsCard.styled';
import {Feed} from "../../../models/Feed";

const NewsCard: FC<{ feed: Feed }> = ({feed}) => {
    return (
        <NewsItem>
            <div>
                <CardHeader>{feed.title}</CardHeader>
                <NewsDescriptionBox>
                    {feed.description}
                </NewsDescriptionBox>
                <NewsInfo>
                    <NewsDate>{feed.customDate}</NewsDate>
                </NewsInfo>
            </div>
            <NewsPicture src={'http://140.82.32.146/' + feed.pictureUrl}/>
        </NewsItem>
    );
};

export default NewsCard;