import "./homepage.css";
import { Link } from "react-router-dom";
import { Category } from "../../components";
const HomePage = () => {
  return (
    <div>
      <nav className="nav-container flex-row ">
        <Link to="/">
          <h4 className="fw-500 text-xl m-4">Underrated</h4>
        </Link>

        <Link className="text-xl ml-2  fw-300" to="./explore">
          Explore
        </Link>

        <ul className="flex-row">
          <li>
            <Link to="/login">
              <i className="fa-solid fa-user"></i>
            </Link>
          </li>
        </ul>
      </nav>

      <section className="hero-banner">
        <div className="text-center">
          <div className="loader-container  ">
            <div className="loader flex-row">
              {[...Array(40)].map((item, idx) => (
                <span key={idx} className="stroke"></span>
              ))}
            </div>
          </div>
          <h3 className="text-black  hero-heading fw-300">
            Discover the most underrated beats
          </h3>
          <button className="btn  btn-outlined-secondary explore-btn text-white  my-5">
            <Link to="/explore">Explore </Link>
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
