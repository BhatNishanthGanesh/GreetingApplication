import React,{useState,useEffect} from 'react'
import './Greeting.css'
// import img1 from './Images.jpg'
function Greeting(){
    const[time,setTime]=useState(new Date());
    const[greeting,setGreeting]=useState("");

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date());
        },1000);
        if(time.getHours()>=0 && time.getHours()<12){
            
            setGreeting("Hello Sir  GoodMorning");
        }else if(time.getHours()>=12 && time.getHours()<16){

            setGreeting("Hello Sir  GoodAfternoon");
        }else if(time.getHours()>=16 && time.getHours()<19){
            
            setGreeting("Hello Sir  GoodEvening");
        }else{
            
            setGreeting("Hello Sir  GoodNight");
        }
        return()=>clearInterval(interval)},[time]);
    return(
        <div className='Greet'>
        <h1 className={`greeting ${greeting}`}>{greeting}</h1>
        <p style={{fontSize:"30px"}}><div class='One'>{time.toLocaleTimeString()}</div><div class='two'>{time.toLocaleDateString()}</div> </p>
        </div>
    )
}
export default Greeting