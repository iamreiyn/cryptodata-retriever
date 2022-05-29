import * as React from 'react';
import Currencies from './Currencies';
import axios from 'axios';
import Navbar from './Navbar';

export default function App() {
  
  const [myArray, setMyArray] = React.useState([]);
  React.useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=false&price_change_percentage=24h%2C7d').then((response) => {
      response.data.forEach((element: any) => {
        setMyArray(oldArray => [...oldArray, element]);
      });
    });
  }, []);

  const renderListing = (param: any) => {
    if (param === 'default') {
      let recordList: any[] = []
    myArray.forEach(element => {
      return recordList.push(<Currencies icon={element.image} name={element.name} shortName={element.symbol.toUpperCase()} price={element.current_price} rate={element.price_change_percentage_24h.toFixed(2)} rate7d={element.price_change_percentage_7d_in_currency.toFixed(2)} marketcap={element.market_cap} volume={element.total_volume} circulatingSupply={element.circulating_supply}/>)
    });
    return recordList; }
    else {
      let recordList: any[] = []
    myArray.forEach(element => {
      return recordList.push(<Currencies icon={element.image} name={element.name} shortName={element.symbol.toUpperCase()} price={element.current_price} rate={element.price_change_percentage_24h.toFixed(2)} rate7d={element.price_change_percentage_7d_in_currency.toFixed(2)} marketcap={element.market_cap} volume={element.total_volume} circulatingSupply={element.circulating_supply}/>)
    });
    return recordList;
    }
  }

  const onSearch = (event: any) => {
    setMyArray([])
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=false&price_change_percentage=24h%2C7d').then((response) => {
        response.data.forEach((element: any) => {
          if (element.name.toLowerCase().match(event.target.value.toLowerCase())) {
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
      <Navbar/>
      <div className="card" style={{height: "40px", borderBottom: "0px"}}>
        <div className="input-group my-2">
    <div className="form-outline">
   <label style={{position: "absolute", marginLeft: "10px", color: "#383838"}}>Latest Data Retrieved: {time()}</label><input placeholder='Search cryptocurrency' onChange={onSearch} style={{height: "25px", width: "300px", marginLeft: "800px", borderColor: "#696969"}} type="search" id="form1" className="form-control" />
    </div>
</div>
        </div>
    <div className="card" style={{width: "100%", height: "100%", backgroundColor: "rgb(7, 7, 6, 0.0)"}}>
      <span style={{color: "white", zIndex: "1", opacity: "1.0", marginBottom: "8px", backgroundColor: "#172645", paddingBottom: "5px"}}><label style={{marginTop: "3px", marginLeft: "30px"}}>Name</label>
      <label style={{marginTop: "3px", marginLeft: "15%"}}>Price</label>
      <label style={{marginTop: "3px", marginLeft: "10%"}}>24h %</label>
      <label style={{marginTop: "3px", marginLeft: "6%"}}>7d %</label>
      <label style={{marginTop: "3px", marginLeft: "8%"}}>Market Cap</label>
      <label style={{marginTop: "3px", marginLeft: "9%"}}>Total Volume</label>
      <label style={{marginTop: "3px", marginLeft: "8%"}}>Circulating Supply</label>
      </span>
{renderListing('default')}
</div>
    </div>
  );
}

