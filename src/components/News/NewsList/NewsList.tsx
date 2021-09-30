import React from 'react';
import {Stack} from "../../common/styles/Stack.styled";
import NewsCard from "../NewsCard/NewsCard";
import {useTypeSelector} from "../../../hooks/useTypeSelector";

const NewsList = () => {
    const {feed} = useTypeSelector(state => state.feedReducer);

    return (
        <Stack>
            {feed.map(f => <NewsCard feed={f}/>
            )}
        </Stack>
    );
};

export default NewsList;