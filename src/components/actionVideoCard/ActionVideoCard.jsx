import "./actionVideoCard.css";
import React from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BiTimeFive, BiHistory } from "react-icons/bi";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { RiPlayListLine, RiChatHistoryFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useVideo } from "../../context";
import {
  addToHistoryService,
  removeFromHistoryService,
} from "../../services/historyServices";
import { isAlreadyIn } from "../../utils";
import {
  addToWatchLaterService,
  removeFromWatchLaterService,
} from "../../services/watchLaterServices";
import {
  addToLikedService,
  removeFromLikedService,
} from "../../services/likeServices";
import { useToast } from "../../hooks";
<BiTimeFive />;
const ActionVideoCard = ({ video }) => {
  const {
    _id,
    title,
    description,
    creator,
    views,
    dateUploaded,
    runTime,
    alt,
    tumbnailURL,
    avatar,
    category,
  } = video;
  const textOverflow = (title) => {
    let newTitle = "";
    if (title.length >= 75) {
      newTitle = title.substring(0, 73) + "...";
    }
    return newTitle ? newTitle : title;
  };
  const { videoState, videoDispatch } = useVideo();
  const { user, encodedToken } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const { liked, watchLater, history } = videoState;

  const isLiked = isAlreadyIn(liked)(_id);
  const isInWatchlater = isAlreadyIn(watchLater)(_id);
  const isInHistory = isAlreadyIn(history)(_id);

  const historyHandler = () => {
    if (!isInHistory) {
      addToHistoryService(videoDispatch, video, encodedToken);
    }
  };
  const likeHandler = () => {
    isLiked
      ? removeFromLikedService(videoDispatch, _id, encodedToken, showToast)
      : addToLikedService(videoDispatch, video, encodedToken, showToast);
  };
  const watchLaterHandler = () => {
    isInWatchlater
      ? removeFromWatchLaterService(videoDispatch, _id, encodedToken, showToast)
      : addToWatchLaterService(videoDispatch, video, encodedToken, showToast);
  };
  const removeFromHistoryHandler = () => {
    removeFromHistoryService(videoDispatch, _id, encodedToken, showToast);
  };
  return (
    <div className="videoCard-container ">
      <Link to={`/watch/${_id}`} onClick={historyHandler}>
        <div className="videoImg-container">
          <img className="image-responsive video-img" src={tumbnailURL} />
          <img
            alt="profile-picture"
            className="avatar avatar-sm"
            src={avatar}
          />
          <div className="video-runtime text-sm text-white">{runTime}</div>
        </div>
      </Link>
      <div className="video-action-container flex-row  mt-3">
        {isInHistory ? (
          <RiChatHistoryFill onClick={removeFromHistoryHandler} />
        ) : (
          <BiHistory title="History" onClick={historyHandler} />
        )}

        {isLiked ? (
          <AiFillLike title="Remove from Liked" onClick={likeHandler} />
        ) : (
          <AiOutlineLike title="Like" onClick={likeHandler} />
        )}
        {isInWatchlater ? (
          <MdWatchLater
            title="Remove Watch later"
            onClick={watchLaterHandler}
          />
        ) : (
          <MdOutlineWatchLater
            title="Watch later"
            onClick={watchLaterHandler}
          />
        )}

        <RiPlayListLine title="Playlists" />
      </div>
    </div>
  );
};

export { ActionVideoCard };
