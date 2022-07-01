import React from "react";
import { useParams } from "react-router-dom";
import { ActionVideoCard, Navbar } from "../../components";
import { useVideo } from "../../context";
import { useDocumentTitle } from "../../hooks";

const SinglePlaylistPage = () => {
  useDocumentTitle("Video");
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
        <h5 className="text-center fw-500 my-7">
          {currentPlaylist[0].title} ({currentPlaylist[0].videos.length})
        </h5>
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
