import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import { privateRoutes, publicRoutes } from "./config/Route";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import { Toaster } from "./components/ui/sonner";
import NotFound from "./components/NotFound";

function App() {
  return (
    <main className="overflow-hidden">
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              {publicRoutes.map((route) => {
                const Page = route.component;
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<Page />}
                  />
                );
              })}
              <Route element={<NotFound />} path="*" />
            </Route>
          </Routes>
          <Routes>
            {privateRoutes.map((route) => {
              const Page = route.component;
              return (
                <Route key={route.path} path={route.path} element={<Page />} />
              );
            })}
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
      <Toaster />
    </main>
  );
}

export default App;
