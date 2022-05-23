import "./videopage.css";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../../components";
import { useAuth, useVideo } from "../../context";
import { AiOutlineFire, AiOutlineLike, AiFillLike } from "react-icons/ai";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { RiPlayListLine } from "react-icons/ri";
import {
  addToLikedService,
  removeFromLikedService,
} from "../../services/likeServices";
import { useToast } from "../../hooks";
import { isAlreadyIn } from "../../utils";
import {
  addToWatchLaterService,
  removeFromWatchLaterService,
} from "../../services/watchLaterServices";
const VideoPage = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const { videoState, videoDispatch } = useVideo();
  const { liked, watchLater } = videoState;
  const { showToast } = useToast();
  const { user, encodedToken } = useAuth();
  const currentVideo = videoState.videos.filter(
    (video) => video._id === _id
  )[0];
  const { title, description, creator, views, dateUploaded, avatar } =
    currentVideo;

  const isLiked = isAlreadyIn(liked)(_id);
  const isInWatchlater = isAlreadyIn(watchLater)(_id);

  const likeHandler = () => {
    if (user) {
      isLiked
        ? removeFromLikedService(videoDispatch, _id, encodedToken, showToast)
        : addToLikedService(
            videoDispatch,
            currentVideo,
            encodedToken,
            showToast
          );
    } else {
      showToast("error", "Login to add the video to your liked videos.");
      navigate("/login");
    }
  };
  const watchLaterHandler = () => {
    if (user) {
      isInWatchlater
        ? removeFromWatchLaterService(
            videoDispatch,
            _id,
            encodedToken,
            showToast
          )
        : addToWatchLaterService(
            videoDispatch,
            currentVideo,
            encodedToken,
            showToast
          );
    } else {
      showToast("error", "Login to add the video to your Watch later videos.");
      navigate("/login");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="continer">
        <iframe
          className="video-iframe"
          src={`https://www.youtube.com/embed/${_id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h4 className="mt-3 fw-500 text-xl">{title}</h4>
        <div className="flex-row  video-title-links">
          <div className=" video-alt">
            <AiOutlineFire color="#9c9c9c" />
            {views}
            <span className="mx-1"> |</span>
            {dateUploaded}
          </div>
          <div className="video-action ">
            {isLiked ? (
              <AiFillLike onClick={likeHandler} />
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

            <RiPlayListLine title="Save to playlist" />
          </div>
        </div>
        <div className="video-divider"></div>
        <div>
          <div className="flex-row">
            <img alt="profile" className="avatar avatar-lg" src={avatar} />
            <div className="ml-2 mt-1 fw-700">
              {creator}
              <div className="mt-5  video-alt">
                Discription:
                <div className="video-discription mt-1 mb-7 fw-300">
                  {description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { VideoPage };
