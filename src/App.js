import React,{useEffect,useState} from 'react';
import './App.css';

import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles';
import wordsToNumbers from 'words-to-numbers';
const alanKey='a102ba52f5167ea0f320c5d7d6d7e9962e956eca572e1d8b807a3e2338fdd0dc/stage';

const App=()=>{
  const [newsArticles,setNewsArticles]=useState([]);
  const [activeArticle, setActiveArticle]=useState(-1);
  const classes=useStyles();
  useEffect(()=>{
    alanBtn({
      key:alanKey,
      onCommand:({command,articles,number})=>{
        if(command==='newHeadlines'){
          
        
         setNewsArticles(articles);
         setActiveArticle(-1);
        

        }
        else if(command==='highlight'){
          setActiveArticle((prevActiveArticle)=>prevActiveArticle+1);

        }
        else if(command==='open'){
          //three=3
          //four, twenty
         const parsedNumber=number.length>2? wordsToNumbers():number;
         const article=articles[parsedNumber-1];
         if(parsedNumber>20){
           alanBtn().playText("Please try that again.")
         }
         else if(article){
          window.open(article.url,'_blank');
          alanBtn().playText('Opening..');
         }
          
        }

      }


    })
  },[])


  return (
    <div>
      <div className={classes.logoContainer}> 
      <img  src="./alanlogo.png" alt="alanlogo" className={classes.alanLogo}/>

      </div>
   
    <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
    </div>
  );
}

export default App;
