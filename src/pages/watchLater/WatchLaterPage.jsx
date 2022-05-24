import { ActionVideoCard, Navbar } from "../../components";
import { useVideo } from "../../context";

const WatchLaterPage = () => {
  const { videoState, videoDispatch } = useVideo();
  const { watchLater } = videoState;
  const watchLaterList = watchLater.map((video) => (
    <ActionVideoCard video={video} />
  ));
  return (
    <div>
      <Navbar />
      <div className="continer">
        <div className="flex-row  ml-1 videos-container"> {watchLaterList}</div>
      </div>
    </div>
  );
};

export { WatchLaterPage };
