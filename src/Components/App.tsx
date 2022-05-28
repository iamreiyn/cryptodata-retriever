import * as React from 'react';
import Datacard from './Datacard';
import axios from 'axios';
import Footer from './Footer';

export default function App() {
  
  const [myArray, setMyArray] = React.useState([]);
  React.useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=false').then((response) => {
      response.data.forEach((element: any) => {
        setMyArray(oldArray => [...oldArray, element]);
      });
    });
  }, []);

  const renderListing = (param: any) => {
    if (param === 'default') {
      let recordList: any[] = []
    myArray.forEach(element => {
      return recordList.push(<Datacard icon={element.image} name={element.id} price={element.current_price} rate={element.price_change_percentage_24h.toFixed(2)} marketcap={element.market_cap}/>)
    });
    return recordList; }
    else {
      let recordList: any[] = []
    myArray.forEach(element => {
      return recordList.push(<Datacard icon={element.image} name={element.id} price={element.current_price} rate={element.price_change_percentage_24h.toFixed(2)} marketcap={element.market_cap}/>)
    });
    return recordList;
    }
  }

  const onSearch = (event: any) => {
    setMyArray([])
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=false').then((response) => {
        response.data.forEach((element: any) => {
          if (element.id.toLowerCase().match(event.target.value.toLowerCase())) {
          setMyArray(oldArray => [...oldArray, element]); }
        });
      });
  }
  
  const time = () => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+ ' ' +today.getHours() + ":" + today.getMinutes();
    return date;
  }

  return (
    <div>
    <div className="card my-4" style={{width: "50rem", height: "37rem", marginLeft: "15rem", borderWidth: "0px", overflowY: "scroll", backgroundColor: "rgb(7, 7, 6, 0.8)"}}>
    <div className="input-group">
    <div className="form-outline"><label style={{color: "#d3d3d3", marginLeft: "5px"}}>Time: {time()} </label><label style={{position: "absolute", marginLeft: "67%", marginTop: "5px", color: "#d3d3d3"}}>by <a style={{cursor: "pointer", color: "#5674e3", textDecoration: "none"}} href='https://github.com/renisal' target='_blank' rel="noreferrer" >renisal</a></label>
    <input placeholder='Enter cryptocurrency name here' onChange={onSearch} style={{marginLeft: "12rem", backgroundColor: "#171712", color: "white", borderColor: "#696969"}} type="search" id="form1" className="form-control my-3" />
  </div>
</div>
{renderListing('default')}
</div>
<Footer/>
    </div>
  );
}

