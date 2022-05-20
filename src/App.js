import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  ExplorePage,
  HistoryPage,
  HomePage,
  LikedVideosPage,
  LoginPage,
  PlaylistPage,
  ProfilePage,
  SignupPage,
  WatchLaterPage,
} from "./pages";
import { Toast } from "./components";
import { RequiresAuth } from "./components/requiresAuth/RequiresAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/explore" exact element={<ExplorePage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/signup" exact element={<SignupPage />} />
        <Route
          path="/playlists"
          element={
            <RequiresAuth>
              <PlaylistPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/watchlater"
          element={
            <RequiresAuth>
              <WatchLaterPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/likedvideos"
          element={
            <RequiresAuth>
              <LikedVideosPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/history"
          element={
            <RequiresAuth>
              <HistoryPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <ProfilePage />
            </RequiresAuth>
          }
        />
      </Routes>
      <Toast />
    </div>
  );
}

export default App;
