import "./videoCard.css";
import { AiOutlineFire } from "react-icons/ai";
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
  return (
    <div>
      <div className="videoCard-container ">
        <div className="videoImg-container">
          <img className="image-responsive video-img" src={tumbnailURL} />
          <img
            alt="profile-picture"
            className="avatar avatar-sm"
            src={avatar}
          />
          <div className="video-runtime text-sm text-white">{runTime}</div>
        </div>
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
    </div>
  );
};

export { VideoCard };
