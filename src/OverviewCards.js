import React from "react";
import "./OverviewCards.css";
import { withStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

function OverviewCards(props) {
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
    <div className="overviewcard">
      <div className="card">
        <div className="card__d">{props.details.mediaActivity}</div>
        <div className="card__mediaIcon">{showIcon()}</div>
        <div className="card__todayCount">{props.details.dayActivityCount}</div>
        <div className="card__todayStats">{props.details.mediaGrowth}</div>
      </div>

      <div className="card">
        <div className="card__d">{props.details.mediaActivity2}</div>
        <div className="card__mediaIcon">{showIcon()}</div>
        <div className="card__todayCount">
          {props.details.dayActivityCount2}
        </div>
        <div className="card__todayStats">{props.details.mediaGrowth2}</div>
      </div>
    </div>
  );
}

export default OverviewCards;
