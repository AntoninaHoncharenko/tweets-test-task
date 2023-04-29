import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles.js";
import { Toaster } from "react-hot-toast";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { TweetsPage } from "./pages/TweetsPage/TweetsPage.jsx";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/tweets" element={<TweetsPage />}></Route>
        <Route path="*" element={<HomePage />}></Route>
      </Routes>
      <GlobalStyle />
      <Toaster />
    </div>
  );
};
