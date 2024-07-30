import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import AuthenticationPage from "./pages/AuthenticationPage";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <SnackbarProvider />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<AuthenticationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
