import { useState } from "react"
import Bloglist from "./Bloglist";

const Home = () => {
    // const func=()=>{fire('mario')}
    // const fire=(name)=>{console.log("hello"+name)}
//    const [name,setName]=useState('name');
      
   const [blogs,setblogs]=useState([{title:'First blog',body:'it goes like ...',author:"krish1",id:1},
               {title:'second blog',body:'it goes like...',author:"krish2",id:2},
               {title:'third blog',body:'it goes like...',author:'krish3',id:3}]);
               
    return ( <div className="home">
         
       <Bloglist blogs={blogs} title="ALL blogs"/>
       <Bloglist blogs={blogs.filter((blog)=>{return (blog.author==="krish3")})} title="Latest"/>
     
        {/* <button onClick={func}>clickme</button>
        <button onClick={(e)=>console.log(fire('react'),e.target)}>event object</button> */}
     {/* <p>{name}</p> */}
     {/* <button onClick={()=>{setName('krish')}}>click me</button> */}
    </div> );
}

export default Home;