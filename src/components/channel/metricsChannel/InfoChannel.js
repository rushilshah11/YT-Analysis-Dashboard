import "../../../App.css";
import React from "react";

function Info(props) {
  return (
    <div className="w-1/4 px-2 rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Info</div>
        <div>
          <strong>Channel Title: </strong>
          <span className="text-gray-700 text-base">{props.channelTitle}</span>
        </div>
        <div>
          <strong>Subscribers: </strong>
          <span className="text-gray-700 text-base">{props.subscribers}</span>
        </div>
        <div>
          <strong>Description: </strong>
          <span className="text-gray-700 text-base">{props.description}</span>
        </div>
        <div>
          <strong>View Count: </strong>
          <span className="text-gray-700 text-base">{props.views}</span>
        </div>
      </div>
    </div>
  );
}

export default Info;
