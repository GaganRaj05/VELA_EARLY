// src/components/Loader.jsx
import { ClipLoader } from "react-spinners";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <ClipLoader color="#ffffff" size={50} />
    </div>
  );
};

export default Loader;
