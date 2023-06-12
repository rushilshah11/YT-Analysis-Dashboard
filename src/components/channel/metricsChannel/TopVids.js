import "../../../App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const KEY = process.env.REACT_APP_API_KEY;

function TopVids(props) {
   const [topVideos, setTopVideos] = useState([]);

   useEffect(() => {
     const fetchTopVideos = async () => {
       try {
         const response = await axios.get(
           "https://www.googleapis.com/youtube/v3/search",
           {
             params: {
               key: KEY,
               channelId: props.channelId,
               type: "video",
               order: "viewCount",
               maxResults: 50,
               part: "snippet",
             },
           }
         );

         const videos = response.data.items;
         setTopVideos(videos);
       } catch (error) {
         console.error(error);
       }
     };

     fetchTopVideos();
   }, [props.channelId]);

  return (
    <div className="w-3/4 px-2 rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-4">Top X YouTube Videos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {topVideos.map((video) => (
              <div key={video.id.videoId} className="bg-white rounded-lg shadow p-4">
                <a
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={video.snippet.thumbnails.default.url}
                    alt={video.snippet.title}
                    className="mb-2"
                  />
                  <p className="text-gray-800 font-semibold">
                    {video.snippet.title}
                  </p>
                </a>
                <p>Video ID: {video.id.videoId}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopVids;
