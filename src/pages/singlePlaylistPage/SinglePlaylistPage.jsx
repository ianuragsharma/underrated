import React from "react";
import { useParams } from "react-router-dom";
import { ActionVideoCard, Navbar } from "../../components";
import { useVideo } from "../../context";

const SinglePlaylistPage = () => {
  const { playListId } = useParams();
  const { videoState } = useVideo();
  const { playlists } = videoState;
  const currentPlaylist = playlists.filter(
    (playlist) => playListId === playlist._id
  );
  const allVideos = currentPlaylist[0].videos;
  return (
    <div>
      <Navbar />
      <div className="continer">
        {allVideos.length > 0 ? (
          <div className="flex-row  ml-1 videos-container">
            {allVideos.map((video) => (
              <ActionVideoCard video={video} />
            ))}
          </div>
        ) : (
          <div>No videos</div>
        )}
      </div>
    </div>
  );
};

export { SinglePlaylistPage };
