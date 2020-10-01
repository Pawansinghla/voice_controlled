import React from 'react' 
import {Grid,Grow,Typography} from '@material-ui/core';
import NewsCard from '../NewsCards/NewsCards';
import useStyles from './styles';
const NewsCards=({articles})=>{
    const classes=useStyles();
    if(!articles.length){
    return (
        
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                
           {articles.map((article,i)=>(
               <Grid item XS={12} sm={6} md={4} lg={3} style={{display:'flex'}}>
               <NewsCard article={article} i={i}/>
               </Grid>
           ))}

            </Grid>
           
        </Grow>
           
    );
           }

}
export default NewsCards;