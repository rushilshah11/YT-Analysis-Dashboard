import React, { Component } from "react";
import Form from "./FormVideo.js";
import Results from "./ResultsVideo.js";
import youtube from "../../supports/youtube.js";
import "../../App.css";

class Body extends Component {
  state = {
    tags: [],
    title: "",
    channelTitle: "",
    views: "",
  };
  handleSubmit = async (term) => {
    const response = await youtube.get("/videos", {
      params: {
        id: term,
      },
    });
    this.setState({
      everything: response.data.items,
      tags: response.data.items[0].snippet.tags,
      title: response.data.items[0].snippet.title,
      channelTitle: response.data.items[0].snippet.channelTitle,
      views: response.data.items[0].statistics.viewCount,
    });
  };

  render() {
    return (
      <div>
        <Form handleFormSubmit={this.handleSubmit} />
        <Results
          tags={this.state.tags}
          title={this.state.title}
          channelTitle={this.state.channelTitle}
          views={this.state.views}
        />
      </div>
    );
  }
}

export default Body;
