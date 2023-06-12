import React, { Component } from "react";
import InfoChannel from "./metricsChannel/InfoChannel.js";
import "../../App.css";
import TopVids from "./metricsChannel/TopVids.js";

class ResultsChannel extends Component {
  render() {
    return (
      <div className="w-full container mx-auto m-24">
        <div id="tags">
          <div className="flex mx-2">
            <InfoChannel
              channelTitle={this.props.channelTitle}
              subscribers={this.props.subscribers}
              description={this.props.description}
              views={this.props.views}
            />
            <TopVids channelId={this.props.channelId} />
          </div>
        </div>
      </div>
    );
  }
}

export default ResultsChannel;
