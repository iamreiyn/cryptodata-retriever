import * as React from "react";

export default function Currencies(props: {
  icon: string;
  name: string;
  shortName: string;
  price:
    | string
    | number
    | boolean;
  rate:
    | string
    | number
    | boolean;
    rate7d:
    | string
    | number
    | boolean;
  marketcap: {
    toLocaleString: (
      arg0: string
    ) =>
      | string
      | number
      | boolean;
  };
  volume:
    | string
    | number
    | boolean;
    circulatingSupply:
    | string
    | number
    | boolean;
}) {
  return (
    <>
      <div>
        <div
          className="card"
          style={{
            width: "100%",
            height: "60px",
            borderWidth: "0px",
            backgroundColor: "rgb(7, 7, 6, 0.0)",
          }}
        >
          <span className="my-1 mx-3">
            <img
              src={props.icon}
              height="35px"
              width="35px"
              className="coinValue"
              alt={props.name}
            />{" "}
            <label className="coinValue">
              {props.name}
            </label>{" "}
            <label style={{color: "#696969", fontSize: "11px"}}> {props.shortName}</label>{" "}
            <label id="coinPrice" className="coinValue">
              ${props.price}
            </label>{" "}
            <label
              id="coin24hRate"
              className="coinValue"
              style={{ color: props.rate < 0 ? "red" : "green" }}
            >
              {props.rate}%
            </label>{" "}
            <label id="coinMktCap" className="coinValue">
              ${props.marketcap.toLocaleString("en-US")}
            </label>
            <label id='coin7dRate' style={{color: props.rate7d < 0 ? "red":"green"}}>
                {props.rate7d}%
            </label>
            <label id='coinVolume'>
                ${props.volume.toLocaleString("en-US")}
            </label>
            <label id='coinSupply'>
                {props.circulatingSupply.toLocaleString("en-US")} {props.shortName}
            </label>
          </span>
        </div>
      </div>
    </>
  );
}
