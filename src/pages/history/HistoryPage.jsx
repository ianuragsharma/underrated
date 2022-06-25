import { useDocumentTitle, useToast } from "../../hooks";
import { ActionVideoCard, Navbar } from "../../components";
import { useAuth, useVideo } from "../../context";
import "./history.css";
import { clearHistoryService } from "../../services/historyServices";
const HistoryPage = () => {
  useDocumentTitle("History");
  const { videoState, videoDispatch } = useVideo();
  const { history } = videoState;
  const { encodedToken } = useAuth();
  const { showToast } = useToast();
  const historyList = history.map((video) => <ActionVideoCard video={video} />);
  const clearHistoryHandler = () => {
    clearHistoryService(videoDispatch, encodedToken, showToast);
  };
  return (
    <div>
      <Navbar />
      <div className="continer ">
        <h5 className="text-center fw-500 ">History ({history.length})</h5>
        <button
          className="btn btn-solid-primary text-base text-white my-2 "
          onClick={clearHistoryHandler}
        >
          Clear history
        </button>

        <div className="flex-row  ml-1 videos-container"> {historyList}</div>
      </div>
    </div>
  );
};

export { HistoryPage };
