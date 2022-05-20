import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../context";

const RequiresAuth = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  return user ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace={true} />
  );
};
export { RequiresAuth };
