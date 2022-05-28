import * as React from "react";

function Footer() {

    return (
        <div>

  <ul className="list-group" style={{fontSize: "15px", marginTop: "1rem", marginLeft: "30rem"}}>
    <label style={{marginLeft: "-4rem", color: "white"}}><a target="_blank" rel="noreferrer" href="https://github.com/renisal/cryptodata-retriever" style={{color: "#f5f50f", textDecoration: "none"}}> CryptoData Retriever:</a> An open source and personal project</label>
    <img
              className="mx-3 my-2"
              src="https://skillicons.dev/icons?i=html,css,bootstrap,js,nodejs,react,ts"
              width="250"
              height="35"
              alt="langs"
            />
  </ul>
  
</div>
    );
}

export default Footer;