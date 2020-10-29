import React from "react";
import AccountTiles from "./AccountTiles";
import Accounts from "./SocialAccounts";
import Cards from "./OverviewCards";

const styleBigCards = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "35px",
};

const styleOverview = {
  marginTop: "50px",
  marginBottom: "10px",
  color: "#ffffff",
};

const styleSmallCards = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
};

const bigCards = Accounts.map((item) => <AccountTiles details={item} />);
const smallCards = Accounts.map((item) => <Cards details={item} />);

function MainTiles() {
  return (
    <div>
      <div style={styleBigCards}>{bigCards}</div>
      <div style={styleOverview}>
        <h1>Overview - Today</h1>
      </div>
      <div style={styleSmallCards}>{smallCards}</div>
    </div>
  );
}

export default MainTiles;
