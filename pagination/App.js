import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import pagination from './pagination';

const App =()  => {
  const [data,setData] = useState([]);
  const [perpage,setPerpage] = useState([]);
  useEffect(() =>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then(
      res => {setData(res.data);setPerpage(res.data.slice(0,10));}
    )
  },[])
  return (
    <div className="App">
     {data.length>=1?
     <div>
       {perpage.map(post => <div className='post'>{post.title}</div>)} <br />
       <pagination />
       </div>
     :
     <p>Data not loaded</p>
    }
    </div>
  );
}

export default App;
