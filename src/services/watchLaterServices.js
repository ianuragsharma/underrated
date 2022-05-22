import axios from "axios";

const addToWatchLaterService = async (
  videoDispatch,
  video,
  token,
  showToast
) => {
  try {
    const {
      data: { watchlater },
    } = await axios.post(
      "/api/user/watchlater",
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );
    videoDispatch({ type: "UPDATE_WATCH_LATER", payload: watchlater });
    showToast("success", "Video added to Watch Later");
  } catch (error) {
    showToast("error", error);
  }
};

const removeFromWatchLaterService = async (
  videoDispatch,
  _id,
  token,
  showToast
) => {
  try {
    const {
      data: { watchlater },
    } = await axios.delete(`/api/user/watchlater/${_id}`, {
      headers: {
        authorization: token,
      },
    });
    videoDispatch({ type: "UPDATE_WATCH_LATER", payload: watchlater });
    showToast("success", "Video removed from Watch Later");
  } catch (error) {
    showToast("error", error);
  }
};

export { addToWatchLaterService, removeFromWatchLaterService };
