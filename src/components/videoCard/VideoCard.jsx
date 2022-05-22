import "./videoCard.css";
import { AiOutlineFire } from "react-icons/ai";
import { Link } from "react-router-dom";
import { isAlreadyInHistory } from "../../utils/isAlreadyInHistory";
import { useAuth, useVideo } from "../../context";
import { addToHistoryService } from "../../services/historyServices";
const VideoCard = ({ video }) => {
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
  const { encodedToken } = useAuth();
  const { history } = videoState;
  const historyHandler = () => {
    if (!isAlreadyInHistory(_id, history)) {
      addToHistoryService(videoDispatch, video, encodedToken);
    }
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
      <div className="videoText-container ">
        <div className="text-sm video-alt flex-row">
          <span>
            <AiOutlineFire color="#9c9c9c" />
            {views}
          </span>
          <span className="video-uplodaded">{dateUploaded}</span>
        </div>
        <p className="video-title fw-500 text-base">{textOverflow(title)}</p>
        <p className="text-sm  video-alt"> {creator}</p>
      </div>
    </div>
  );
};

export { VideoCard };
