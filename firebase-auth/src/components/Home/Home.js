import React from "react";
import { Link } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import Calories from "../Products/Calories";
import Distance from "../Products/Distance";
import Heartrate from "../Products/Heartrate";
import "./Home.css"
import {useRef} from "react"
import { getAuth, signOut } from "firebase/auth";

function Home(props) {
  const Logout = ()=>{

    const auth = getAuth();
    
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  const location = useLocation();
  const calories = useRef(null);
  const heartrate = useRef(null);
  const distance = useRef(null);
  const handleClick = ()=>{
    calories.current?.scrollIntoView({behavior:"smooth"});
  };
  const handleClick1 = ()=>{
    heartrate.current?.scrollIntoView({behavior:"smooth"});
  };
  const handleClick2 = ()=>{
    distance.current?.scrollIntoView({behavior:"smooth"});
  };
  return (
    // <div>
    //   <div>
    //     <h1>
    //       {/* <Link to="/login">Login</Link> */}
    //     </h1>
    //     <br />
    //     <h1>
    //       {/* <Link to="/signup">Signup</Link> */}
    //     </h1>
    //   </div>

    //   <br />
    //   <br />
    //   <br />

    //   {/* <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2> */}
    // </div>
    <>
    {/* <div className="header">
      <div>
        <h1 className="name">REVENANTS</h1>
      </div>
      <div>
      <button onClick={logout}>Log-out</button>
      </div>
    </div> */}
    {/* <div className="ALL"> */}
    {/* <div className="mainm">
    <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
      <h2 style={{ height: 100 }}>Please select one of the options below.</h2>
    </div> */}
    {/* <div className="maincard"> */}
    {/*  */}
    <div>
      <div className="a1"><div className="teamname">
        <div className="teamname1" ><h2 className="revenants">REVENANTS</h2></div>
        <div className="teamname1" ><Link  style={{textDecoration: 'none'}} to={props.name ? '/' : '/login'}><h2 onClick={Logout} className="logout">{props.name ? `Welcome - ${props.name}` : "Log-in"}</h2></Link></div>
        </div><div className="textmain"><div className="record"><h1 className="record1">Record.Sweat.</h1><h1 className="record1"> Share.Kudos.</h1></div></div></div>
      {/* <img className="img-1" src="https://images.pexels.com/photos/258045/pexels-photo-258045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
      <div className="bet">
        <div 
        onClick={handleClick} 
        className="categories" id="one" ><img className="icon" src="https://img.icons8.com/ios/512/caloric-energy--v2.png" alt="" /><h1>Calorie</h1></div>
        <div
        onClick={handleClick1} 
        className="categories" id="two"><img className="icon" src="https://img.icons8.com/dotty/512/heart-with-pulse.png" alt="" /><h1>HeartRate count</h1></div>
        <div
        onClick={handleClick2} 
        className="categories" id="three"><img className="icon" src="https://img.icons8.com/ios/512/cycling-road.png" alt="" /><h1>Distance</h1></div>
        <div className="categories" id="four"><img className="icon" src="https://img.icons8.com/ios/512/conference-call.png" alt="" /><h1><a href="http://localhost:3005/">CommunityPage</a></h1></div>
      </div>
      <div className="a2"><div className="recordc"><h1 className="record1">Track and analyze</h1><h1 className="record1">every aspect of</h1><h1 className="record1">your activity</h1></div></div>
      {/* <img className="img-1" src="https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" alt="" /> */}
      <div className="pehlagap"></div>
      {/* <div className="part">
        <div>
        <img className="img-2" src="https://images.unsplash.com/photo-1559235270-2df4dcfb4eca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          </div>
          <div className="calories1" >
            <h1>We got your calories!</h1>
            <br /><br /><br /><br />
            <h4><p>with our device not only you<br />
            get your realtime calorie count <br />but also you can track your <br />
            history.</p></h4>
            </div>
            </div> */}
            <div id="calories" ref ={calories}><Calories /></div>
            <div className="pehlagap"></div>
            {/* <div className="heartrate">
        <div>
        <img className="dil" src="https://images.unsplash.com/photo-1618939304347-e91b1f33d2ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
          </div>
          <div className="heartkagyan">
            <div className="heartkagyan1"><h1>Best heart tracking system.</h1>
            <br /><br /><br /><br />
            <h4><p>here at revenants you <br /> can get
            a real time update of <br /> your heart 
            rate and <br /> can analyse your performance.</p></h4></div>
            <div className="heartkagyan2"></div>
            </div>
            </div> */}
            <div id="heartrate" ref ={heartrate}><Heartrate name = {props.name} /></div>
      <div className="pehlagap"></div> 
      {/* <div className="partanother">
        <div>
        <img className="img-2" src="https://images.unsplash.com/photo-1512203492609-972c16baa28b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" />
          </div>
          <div>
          <div className="distancekagyan"><h1>You have achieved <br />a gread distance</h1>
            <br /><br /><br /><br />
            <h4><p>here at revenants you <br /> can get
            a real time update of <br /> your distance
            covered and <br /> can analyse your performance.</p></h4></div>
            </div>
            </div> */}
            <div id="distance" ref ={distance}><Distance /></div>
      {/* </div> */}
    {/* </div> */}
    </div>
    <div className="mail">
      <h1 className="mailTitle">Don't Stop , Explore your limits!</h1>
      <span className="mailDesc">We are Revenants</span> 
    </div>
  </>
  );
}

export default Home;
