import React, { lazy, Suspense } from "react";
import { Router, Routes, Route, Outlet, Link } from "react-router-dom";

const Home = lazy(() => wait(1000).then(() => import("./components/Home")));
const About = lazy(() => wait(1000).then(() => import("./components/About")));
const Store = lazy(() => wait(1000).then(() => import("./components/Store"))); // Uncomment if using Store

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route index element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

function NavWrapper() {
  return (
    <>
      <nav className="w-full my-2">
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
      </nav>
      <Suspense fallback={<h1>Loading...</h1>}>
        {" "}
        {/* Replace with a better loading indicator */}
        <Outlet />
      </Suspense>
    </>
  );
}

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export default App;

// This code has come error in React-Router part --> Need to find and fixed it

// This project aims to enhance the performance of a React application by implementing code splitting using React Router. Code splitting is a powerful feature that allows you to split your code into various bundles which can then be loaded on demand or in parallel. This can significantly reduce the initial load time of your application, improving user experience, especially for large applications.
