import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
export function ProtectedRoute({ children }) {
  // Get the current user from context
  const { currentUser } = useContext(CurrentUserContext);

  // If there's no user, redirect to the main page
  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  // If there is a user, render the protected content
  return children;
}
export default ProtectedRoute;
