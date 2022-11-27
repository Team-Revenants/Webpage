import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'


function Calories(props) {

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
    const calorie = Math.trunc(timerange*12*3.5*70)/200;
    console.log(calorie)
   

  return (
    <div><div className="part">
    <div>
    <img className="img-2" src="https://images.unsplash.com/photo-1559235270-2df4dcfb4eca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
      </div>
      <div><div className="calories1" >
        <h1>We got your calories!</h1>
        <br /><br /><br /><br />
        <h4><p>with our device not only you<br />
        get your realtime calorie count <br />but also you can track your <br />
        history.</p></h4>
        </div>
        <div className='rawat'>
          <br />
<h3>{props.name ?"Average-Calorie's Burnt       "+calorie: 
          ""
        }</h3>
        </div></div>     
        </div></div>
  )
}

export default Calories