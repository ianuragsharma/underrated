import React from "react";
import { Navbar, PlaylistCard } from "../../components";
import { useVideo } from "../../context";
import { useDocumentTitle } from "../../hooks";

const PlaylistPage = () => {
  useDocumentTitle("Playlists");
  const { videoState, videoDispatch } = useVideo();
  const { playlists } = videoState;
  const allPlaylist = playlists.map((playlist) => (
    <PlaylistCard playlist={playlist}></PlaylistCard>
  ));

  return (
    <div>
      <Navbar />
      <div className="continer">
        <h5 className="text-center fw-500 my-7">
          All Playlists ({playlists.length})
        </h5>
        <div className="flex-row  ml-1 videos-container">{allPlaylist}</div>
      </div>
    </div>
  );
};

export { PlaylistPage };
