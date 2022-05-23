import axios from "axios";

const addToHistoryService = async (videoDispatch, video, token) => {
  try {
    const {
      data: { history },
    } = await axios.post(
      "/api/user/history",
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );
    videoDispatch({ type: "UPDATE_HISTORY", payload: history });
  } catch (error) {
    console.log(error);
  }
};

const removeFromHistoryService = async (
  videoDispatch,
  _id,
  token,
  showToast
) => {
  try {
    const {
      data: { history },
    } = await axios.delete(`/api/user/history/${_id}`, {
      headers: {
        authorization: token,
      },
    });
    videoDispatch({ type: "UPDATE_HISTORY", payload: history });
    showToast("success", "Video removed from history");
  } catch (error) {
    showToast("error", error);
  }
};

const clearHistoryService = async (videoDispatch, token, showToast) => {
  try {
    await axios.delete(`/api/user/history/all`, {
      headers: {
        authorization: token,
      },
    });
    videoDispatch({ type: "UPDATE_HISTORY", payload: [] });
    showToast("success", "All videos deleted from history");
  } catch (error) {
    showToast("error", error);
  }
};

export { addToHistoryService, removeFromHistoryService, clearHistoryService };
