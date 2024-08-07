import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { SnackbarProvider } from "notistack";
import AuthenticationPage from "./pages/AuthenticationPage";
import Home from "./pages/Home";
import { useQuery } from "react-query";
import LoadingSpinner from "./components/LoadingSpinner";
import AuthUserQuery from "./queries/AuthUserQuery";

const App = () => {
  const { data: authUserData, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: AuthUserQuery,
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            authUserData?.data?.user ? (
              <Home />
            ) : (
              <Navigate to={"/authentication"} />
            )
          }
        />
        <Route
          path="/authentication"
          element={
            !authUserData?.data?.user ? (
              <AuthenticationPage />
            ) : (
              <Navigate to={"/"} />
            )
          }
        />
      </Routes>
      <SnackbarProvider />
    </Router>
  );
};

export default App;
