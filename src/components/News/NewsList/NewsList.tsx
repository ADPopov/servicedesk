import React from 'react';
import {Stack} from "../../common/styles/Stack.styled";
import NewsCard from "../NewsCard/NewsCard";

const NewsList = () => {
    return (
        <Stack>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </Stack>
    );
};

export default NewsList;