import React from 'react' 
import NewsCard from '../NewsCards/NewsCards';
const NewsCards=({articles})=>{
    if(articles==null){
        return(
            <h1> Empty</h1>

        );
    }
    return (
        
        <div>
           
           {articles.map((article,i)=>(
               <NewsCard/>
           ))}
        </div>
           
    );

}
export default NewsCards;