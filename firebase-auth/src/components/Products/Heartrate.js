import React from 'react'
import Heartkagyan from './Heartkagyan'
import axios from 'axios'
import {useState,useEffect} from 'react'
import "./heartrate.css"
import Calories from './Calories'

function Heartrate(props) {
  const [feed, setFeed] = useState([]);
  const [sum, setSum] = useState(0);
  let valuearr = [];
  let sum1=0;
  const [timerange,settimerange] = useState(0);

    useEffect(() => {
      try {
        axios.get("https://api.thingspeak.com/channels/1951371/fields/1.json?results=10").then((response)=>{
          // console.log(response.data.feeds);
          // setFeed(response.data.feeds);
          const responsearray = [];
          (response.data.feeds).forEach(e => {
            responsearray.push(parseInt(e.field1));
          });
          setFeed(responsearray)
          console.log(responsearray);
          const starttime = response.data.feeds[0].created_at;
          const endtime = response.data.feeds[9].created_at;
          console.log(starttime)
          console.log(endtime)
          var d1 = new Date(starttime);
          var d2 = new Date(endtime);
          var diff = d2-d1;
          if (diff > 60e3)
          { 
            Math.floor(diff / 60e3);
            settimerange(diff/60e3);
        }


        });
      }
      catch (error) {
        console.log(error);
      }
    }, [])
    useEffect(() => {
      let sum2 =0;
      feed.forEach(e => {
        sum2+=e
      });
      setSum(sum2)
    }, [feed])

    const avgBeat = sum/feed.length ;
    console.log(avgBeat); 
    console.log(timerange);
    const caloriecalculator = (timerange*12*3.5*70)/200;
    
   
    
  return (
    <div className="heartrate">
        <div>
        <img className="dil" src="https://images.unsplash.com/photo-1618939304347-e91b1f33d2ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
          </div>
          {/* <div className="heartkagyan">
          if ({props.name}?) {
          <iframe id="inlineFrameExample"
          title="Inline Frame Example"
          width="300"
          height="200"
          src="https://thingspeak.com/channels/1951371/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15">
      </iframe>    
  } 
  else{
    <Heartkagyan />
  }
            </div> */}
            <div>

            {props.name ? <iframe id="inlineFrameExample"
        
        src="https://thingspeak.com/channels/1951371/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15">
      </iframe> : <Heartkagyan />}
      {props.name ?  <div className='harsh'>Average-Heart-rate                   {avgBeat}</div> : ""}
    </div>
            </div>
  )
}

export default Heartrate