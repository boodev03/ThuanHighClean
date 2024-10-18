import { BrowserRouter, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./config/Route";
import "./App.css";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route) => {
            const Page = route.component;
            return <Route path={route.path} element={<Page />} />;
          })}
        </Routes>
        <Routes>
          {privateRoutes.map((route) => {
            const Page = route.component;
            return <Route path={route.path} element={<Page />} />;
          })}
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
