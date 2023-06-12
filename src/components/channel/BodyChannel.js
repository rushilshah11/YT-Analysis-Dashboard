import React, { Component } from "react";
import FormChannel from "./FormChannel.js";
import ResultsChannel from "./ResultsChannel.js";
import youtube from "../../supports/youtube.js";
import "../../App.css";

class BodyChannel extends Component {
  state = {
    channelTitle: "",
    subscribers: "",
    description: "",
    views: "",
    channelId: ""
  };
  handleSubmit = async (term) => {
    const response = await youtube.get("/channels", {
      params: {
        id: term,
      },
    });
    this.setState({
      everything: response.data.items,
      channelTitle: response.data.items[0].snippet.title,
      subscribers: response.data.items[0].statistics.subscriberCount,
      description: response.data.items[0].snippet.description,
      views: response.data.items[0].statistics.viewCount,
      channelId: term,
    });
  };

  render() {
    return (
      <div>
        <FormChannel handleFormSubmit={this.handleSubmit} />
        <ResultsChannel
          channelTitle={this.state.channelTitle}
          subscribers={this.state.subscribers}
          description={this.state.description}
          views={this.state.views}
          tags={this.state.tags}
          channelId={this.state.channelId}
        />
      </div>
    );
  }
}

export default BodyChannel;
