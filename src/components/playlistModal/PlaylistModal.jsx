import "./playlistModal.css";
import React from "react";
import { useVideo } from "../../context/video-context";
import { useState } from "react";
import { useAuth } from "../../context";
import { useToast } from "../../hooks";
import { isVideoAlreadyInPlaylist } from "../../utils";
import {
  addPlaylistService,
  addVideoToPlaylistService,
  removeVideoFromPlaylistService,
} from "../../services/";
const PlaylistModal = ({ video }) => {
  const { videoState, videoDispatch, playlistModal, toggleModal } = useVideo();
  const { encodedToken } = useAuth();
  const { showToast } = useToast();
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const { playlists } = videoState;
  const newPlaylistHandler = (event, comingFrom = "") => {
    if (comingFrom !== "btn") event.preventDefault();
    if (newPlaylistName) {
      addPlaylistService(
        newPlaylistName,
        videoDispatch,
        encodedToken,
        showToast
      );
      setNewPlaylistName("");
    } else {
      showToast("error", "Enter a valid name");
    }
  };

  const handlerPlaylistCheckChange = (event, playlistId) => {
    if (event.target.checked) {
      addVideoToPlaylistService(
        playlistId,
        video,
        videoDispatch,
        encodedToken,
        showToast
      );
    } else {
      removeVideoFromPlaylistService(
        playlistId,
        video._id,
        videoDispatch,
        encodedToken,
        showToast
      );
    }
  };
  return (
    <div>
      <div
        className={`modal-continer flex-row  {/* ${
          playlistModal ? "open" : ""
        } */}`}
      >
        <div className="modal-window flex-column ">
          <h5 className="fw-400 text-xl  text-center flex-row">
            Save to..
            <span onClick={() => toggleModal()} className="close-btn">
              &#x2715;
            </span>
          </h5>

          <div className="modal-playlist my-3">
            {playlists.map((playlist) => (
              <div>
                <input
                  type="checkbox"
                  id={`${playlist._id}`}
                  checked={isVideoAlreadyInPlaylist(playlist.videos)(video._id)}
                  onChange={(event) =>
                    handlerPlaylistCheckChange(event, playlist._id)
                  }
                />
                <label htmlFor={`${playlist._id}`}> {playlist.title}</label>
              </div>
            ))}
          </div>
          <form className="flex-column" onSubmit={newPlaylistHandler}>
            <input
              className="playlist-input text-sm"
              placeholder="Enter playlist name"
              type="text"
              value={newPlaylistName}
              onChange={(event) => setNewPlaylistName(event.target.value)}
            />
          </form>
          <button
            className="btn btn-solid-primary playlist-btn text-base text-white"
            onClick={(event) => newPlaylistHandler(event, "btn")}
          >
            + Create
          </button>
        </div>
      </div>
    </div>
  );
};

export { PlaylistModal };
