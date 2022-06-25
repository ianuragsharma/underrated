import "./playlistCard.css";
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { useAuth, useVideo } from "../../context";
import { useToast } from "../../hooks";
import { removePlaylistService } from "../../services";
const PlaylistCard = ({ playlist }) => {
  const noOfVideos = playlist.videos.length;
  const { videoDispatch } = useVideo();
  const { encodedToken } = useAuth();
  const { showToast } = useToast();
  const deletePlaylistHandler = () => {
    removePlaylistService(playlist._id, videoDispatch, encodedToken, showToast);
  };
  console.log(playlist.videos.length);
  return (
    <div>
      <div className="videoCard-container">
        <Link to={`/playlist/${playlist._id}`}>
          <div className="videoImg-container">
            <img
              className="image-responsive playlist-img video-img"
              src={
                noOfVideos > 0
                  ? playlist?.videos[0].thumbnailURL
                  : "https://github.com/ianuragsharma/hostedIMG/blob/main/empty.png?raw=true"
              }
            />
          </div>
        </Link>

        <div className=" flex-row justify-spacebw">
          <p className="fw-400 text-xl">{playlist.title}</p>
          <p className="fw-400 text-xl">Videos({playlist.videos.length})</p>
          <div className="playlist-delete-btn" onClick={deletePlaylistHandler}>
            <AiOutlineDelete title="Delete Playlist" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { PlaylistCard };
