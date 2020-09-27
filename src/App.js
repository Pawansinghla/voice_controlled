import React,{useEffect,useState} from 'react';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey='a102ba52f5167ea0f320c5d7d6d7e9962e956eca572e1d8b807a3e2338fdd0dc/stage';

const App=()=>{
  useEffect(()=>{
    alanBtn({
      key:alanKey,
      onCommand:({command})=>{
        if(command=='testCommand'){
          alert('This code was executed');
        }

      }


    })
  },[])
  return (
    <div>
    <h1>Alan AI App</h1>
    </div>
  );
}

export default App;
