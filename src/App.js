import React,{useEffect,useState} from 'react';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
const alanKey='a102ba52f5167ea0f320c5d7d6d7e9962e956eca572e1d8b807a3e2338fdd0dc/stage';

const App=()=>{
  const [newsArticles,setNewsArticles]=useState([]);
  useEffect(()=>{
    alanBtn({
      key:alanKey,
      onCommand:({command,articles})=>{
        if(command==='newHeadlines'){
          
        
         setNewsArticles(articles);
        

        }

      }


    })
  },[])
  return (
    <div>
    <h1>Alan AI App</h1>
    <NewsCards articles={newsArticles}/>
    </div>
  );
}

export default App;
