import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    // const {id} = useParams()
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2> The Total Number of News {categoryNews.name}  {categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsCard
                key={news._id}
                news={news}Ï
                
                >

                </NewsCard>)
            }
        </div>
    );
};

export default Category;