import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Loader from "./ui/Loader";

const Layout = lazy(() => import('./ui/Layout'));
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div className="h-screen grid place-content-center"><Loader /></div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/Elevate-task-simple-Ecommerce" element={<Layout />} >
              <Route index element={<Home />} />
              <Route path="products/" element={<Products />} />
              <Route path="about/" element={<About />} />
              <Route path="contact/" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </QueryClientProvider >
  );
}

export default App;
