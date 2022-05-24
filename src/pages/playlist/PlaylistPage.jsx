import React from "react";
import { Navbar, PlaylistCard } from "../../components";
import { useVideo } from "../../context";

const PlaylistPage = () => {
  const { videoState, videoDispatch } = useVideo();
  const { playlists } = videoState;
  const allPlaylist = playlists.map((playlist) => (
    <PlaylistCard playlist={playlist}></PlaylistCard>
  ));

  return (
    <div>
      <Navbar />
      <div className="continer">
        <div className="flex-row  ml-1 videos-container"> {allPlaylist}</div>
      </div>
    </div>
  );
};

export { PlaylistPage };
