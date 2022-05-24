import axios from "axios";

const addPlaylistService = async (
  playlistName,
  videoDispatch,
  token,
  showToast
) => {
  try {
    const {
      data: { playlists },
    } = await axios.post(
      "/api/user/playlists",
      {
        playlist: { title: playlistName },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    videoDispatch({ type: "UPDATE_PLAYLISTS", payload: playlists });
    showToast("success", "Playlist added ");
  } catch (error) {
    showToast("error", error);
  }
};

const removePlaylistService = async (
  playlistId,
  videoDispatch,
  token,
  showToast
) => {
  try {
    const {
      data: { playlists },
    } = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: {
        authorization: token,
      },
    });
    videoDispatch({ type: "UPDATE_PLAYLISTS", payload: playlists });
    showToast("success", "Playlist deleted");
  } catch (error) {
    showToast("error", error);
  }
};

const addVideoToPlaylistService = async (
  playlistId,
  video,
  videoDispatch,
  token,
  showToast
) => {
  try {
    const {
      data: { playlist },
    } = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );
    videoDispatch({ type: "UPDATE_PLAYLIST_VIDEOS", payload: playlist });
    showToast("success", "Video added to playlist");
  } catch (e) {
    console.error(e);
  }
};

const removeVideoFromPlaylistService = async (
  playlistId,
  videoId,
  videoDispatch,
  token,
  showToast
) => {
  try {
    const {
      data: { playlist },
    } = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
      headers: {
        authorization: token,
      },
    });
    videoDispatch({ type: "UPDATE_PLAYLIST_VIDEOS", payload: playlist });
    showToast("success", "Video removed from playlist");
  } catch (error) {
    showToast("error", error);
  }
};

export {
  addPlaylistService,
  removePlaylistService,
  addVideoToPlaylistService,
  removeVideoFromPlaylistService,
};
