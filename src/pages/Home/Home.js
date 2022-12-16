import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../SharedPages/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData();

    return (
        <div>
            <h3>Dragon News Home: {allNews.length}</h3>
            {
                allNews.map ( news => <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;