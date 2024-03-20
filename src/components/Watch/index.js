import { Component } from "react";

import "./index.css"


class Watch extends Component{

    state={hours:0,minutes:0,seconds:0,year:2024,day:"Monday",month:"",date:""}

    //component Did Mount is called after the component has been rendered in the DOM
    componentDidMount(){
        setInterval(() => {
            let date=new Date()
            let h=(date.getHours() <10 ? "0":"" )+date.getHours()
            let m=(date.getMinutes() <10 ? "0":"" )+date.getMinutes()
            let s=(date.getSeconds()<10 ? "0":"" )+date.getSeconds()
            let month=date.getMonth()
            let day=date.getDay()
            let todayDate=date.getDate()
            console.log(date)
            let days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
            let months=["January","February","March","April","May","June","July","August","september","October","November","December"]

            let year=date.getFullYear()
            this.setState({hours:h,minutes:m,seconds:s,year:year,day:days[day-1],month:months[month],date:todayDate})
        }, 1000);
    }


    render(){
        const {hours,minutes,seconds,day,year,month,date}=this.state
        return(
            <div className="main-container">
                <div className="child-container">
                    <h1>Watch</h1>
                    <div>
                        <div className="time-container">
                            <div>
                                <h1>{hours} :</h1>
                                <p>Hrs</p>
                            </div>
                            <div>
                                <h1>{minutes} :</h1>
                                <p>Min</p>
                            </div>
                            <div>
                                <h1>{seconds}</h1>
                                <p>Sec</p>
                            </div>
                        </div>
                        <h1>{day}</h1>
                        <h1><span>{date}</span> <span>{month}</span> <span>{year}</span></h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Watch