import "./App.css";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import routes from "./routes/router";
import { Suspense } from "react";
import Loader from "./components/ui/Loader";
export default function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="255, 255, 255"
        outerAlpha={0}
        innerScale={1}
        outerScale={2}
        outerStyle={{
          border: "1px solid white",
          backgroundColor: "transparent",
        }}
        innerStyle={{
          backgroundColor: "white",
        }}
        clickables={["a", "button", ".link"]}
      />
      <Suspense fallback={<Loader />}>
        <RouterProvider router={routes} />
      </Suspense>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastStyle={{
          background: "#1e1e1e",
          border: "1px solid #333",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        }}
        progressStyle={{
          background: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
          height: "3px",
        }}
      />{" "}
    </>
  );
}
