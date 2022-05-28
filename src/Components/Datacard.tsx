import * as React from "react";

export default function Datacard(props: { icon: string; name: string; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal; rate: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment; marketcap: { toLocaleString: (arg0: string) => string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal; }; }) {
    return (
<>
<div>
<div className="card" style={{width: "100%", height: "60px", borderWidth: "0px", backgroundColor: "rgb(7, 7, 6, 0.0)"}}>
    <span className='my-2'><img src={props.icon} height='50px' width='50px' className='coinValue' alt={props.name}/> <label className='coinValue'>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</label> <label className='coinValue'><label className="label">Price:</label> ${props.price}</label> <label className='coinValue' style={{color: props.rate<0?"red":"green"}}><label className="label">24h Rate: </label> {props.rate}</label> <label className='coinValue'><label className="label">Mkt. Cap:</label> ${props.marketcap.toLocaleString('en-US')}</label>
    </span></div>
</div>
</>
    );
}