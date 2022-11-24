import React from 'react'
import Heartkagyan from './Heartkagyan'

function Heartrate(props) {
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
            {props.name ? <iframe id="inlineFrameExample"
        
          src="https://thingspeak.com/channels/1951371/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15">
      </iframe> : <Heartkagyan />}
            </div>
  )
}

export default Heartrate