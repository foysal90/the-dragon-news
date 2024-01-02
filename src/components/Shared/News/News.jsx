import { key } from 'localforage';
import React, { useEffect, useState } from 'react';
import NewsDetails from '../NewsDetails/NewsDetails';

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/news')
        .then(res => res.json())
        .then(data => setNews(data))
    },[])
    return (
        <div>

            {
                news.map((bulletin, idx) => <NewsDetails
                key={idx}
                bulletin={bulletin}
                />
               
                    
                    )
            }
            
        </div>
    );
};

export default News;