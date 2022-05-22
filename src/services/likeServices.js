import axios from "axios";

const addToLikedService = async (videoDispatch, video, token, showToast) => {
  try {
    const {
      data: { likes },
    } = await axios.post(
      "/api/user/likes",
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );

    videoDispatch({ type: "UPDATE_LIKED", payload: likes });
    showToast("success", "Video added to liked");
  } catch (error) {
    showToast("error", error);
  }
};

const removeFromLikedService = async (videoDispatch, _id, token, showToast) => {
  try {
    const {
      data: { likes },
    } = await axios.delete(`/api/user/likes/${_id}`, {
      headers: { authorization: token },
    });
    videoDispatch({ type: "UPDATE_LIKED", payload: likes });
    showToast("success", "Removed from Liked Videos");
  } catch (error) {
    showToast("error", error);
  }
};

export { addToLikedService, removeFromLikedService };
