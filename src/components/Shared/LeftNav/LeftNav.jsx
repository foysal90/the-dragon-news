import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://the-news-dragon-server-five-iota.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <h4 className='font-bold mb-2 text-1xl hover:underline'>All Category</h4>
            <div >
            {
                categories.map((category, idx) => <p 
                key={idx}>
                    <Link className='mb-2 text-md hover:underline' to={`/category/${category.id}`}>{category.name}</Link>

                </p>
                       
                    
                )
            }
            </div>
            
        </div>
    );
};

export default LeftNav;