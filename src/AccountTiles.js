import React from "react";
import "./AccountTiles.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

function AccountTiles(props) {
  const showIcon = () => {
    switch (props.details.mediaCode) {
      case "fb":
        return <FacebookIcon fontSize="large" className="facebookIcon" />;
      case "tw":
        return <TwitterIcon fontSize="large" className="tweeterIcon" />;
      case "ig":
        return <div className="igMediaIcon"></div>;
      case "yt":
        return <div className="ytMediaIcon"></div>;
      default:
        return "";
    }
  };

  return (
    <div className={props.details.classes}>
      <div className="accountTile">
        <div className="accountTile__user">
          {showIcon()}
          <span>@rceballos</span>
        </div>
        <div className="accountTile__count">
          <span>{props.details.follower_count}</span>
        </div>
        <div className="accountTile__follower">
          <span>{props.details.follow}</span>
        </div>
        <div className="accountTile__todayCount">
          <span>
            <ArrowDropUpIcon />
            {props.details.user_dayCount} Today
          </span>
        </div>
      </div>
    </div>
  );
}

export default AccountTiles;
