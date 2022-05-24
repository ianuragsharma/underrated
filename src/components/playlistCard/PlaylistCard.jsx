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
  return (
    <div>
      <div className="videoCard-container ">
        <Link to={`/playlist/${playlist._id}`}>
          <div className="videoImg-container">
            <img
              className="image-responsive video-img"
              src={
                noOfVideos > 0
                  ? playlist?.videos[0].tumbnailURL
                  : "https://github.com/ianuragsharma/hostedIMG/blob/main/empty.png?raw=true"
              }
            />
          </div>
        </Link>

        <div className="videoText-container flex-row ">
          <h5 className="fw-400 ">{playlist.title}</h5>
          <div className="playlist-delete-btn" onClick={deletePlaylistHandler}>
            <AiOutlineDelete title="Delete Playlist" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { PlaylistCard };
