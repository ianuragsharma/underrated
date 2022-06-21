import "./homepage.css";
import { Link } from "react-router-dom";
import { Category } from "../../components";
import { useAuth, useVideo } from "../../context";
import { useDocumentTitle } from "../../hooks";
const HomePage = () => {
  useDocumentTitle("Home");
  const { user } = useAuth();
  const { videoState, videoDispatch } = useVideo();
  return (
    <div>
      <nav className="nav-container flex-row ">
        <Link to="/">
          <div className="flex-row heading-container">
            <h4 className="fw-500 text-xl ml-4">Underrated</h4>
            <img
              src="/favicon.png"
              class="image-responsive logo-img ml-1"
              alt=""
            />
          </div>
        </Link>

        <Link
          className="text-xl ml-6  fw-300"
          to="./explore"
          onClick={() =>
            videoDispatch({
              type: "SET_SELECTED_CATEGORY",
              payload: "All",
            })
          }
        >
          Explore
        </Link>

        <ul className="flex-row">
          {user ? (
            <li>
              <Link to="/profile" className="mr-5" title="Profile">
                <i className="fa-solid fa-user "></i>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login" className="mr-5" title="Login">
                <i className="fa-solid fa-user "></i>
              </Link>
            </li>
          )}
        </ul>
      </nav>

      <section className="hero-banner">
        <div className="text-center">
          <div className="loader-container  ">
            <div className="loader flex-row">
              {[...Array(80)].map((item, idx) => (
                <span key={idx} className="stroke"></span>
              ))}
            </div>
          </div>
          <h3 className="text-black  hero-heading fw-300">
            Discover the most underrated beats
          </h3>
          <button className="btn  btn-outlined-secondary explore-btn text-white  my-5">
            <Link
              to="/explore"
              onClick={() =>
                videoDispatch({
                  type: "SET_SELECTED_CATEGORY",
                  payload: "All",
                })
              }
            >
              Explore{" "}
            </Link>
          </button>
        </div>
      </section>

      <section className="container">
        <h4 className="flex-row section-heading fw-400">Browse Category</h4>
        <Link to="/explore" className="product-list flex-row">
          <Category />
        </Link>
      </section>
    </div>
  );
};

export { HomePage };
