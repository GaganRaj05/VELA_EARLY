import "./EarlySignUpForm.css";
import {HeartHandshake} from "lucide-react"
import { useEffect, useState } from "react";
import {ClipLoader} from "react-spinners"
import handleSignup from "../../services/signup";
import {toast} from "react-toastify";
const EarlySignUpForm = ({ setIsClicked }) => {
  const [formData, setFormData] = useState({name:'', email:''});
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value});
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    const response = await handleSignup(formData);
    setIsLoading(false);
    if(response?.success) {
      toast.success('Thanks for signing up early ✨ You’re on the list.');
      setIsClicked(false);
    }
    else if(response?.error?.msg === "User exists") {
      toast.error('Email already exists in our database');
    }
    else if(response?.error?.msg ) {
      toast.error('Resource rate limited');
    }
    else {
       toast.error("An unknown network error has occured please try again in sometime")
    }
  }
  return (
    <div className="early-signup-overlay">
      <div className="early-signup-container fade-move-up">
        <button className="early-signup-close" onClick={()=>setIsClicked(false)}>
          ✕
        </button>
        <form className="early-signup-form " onSubmit={(e)=>handleSubmit(e)}>
<HeartHandshake size={50} />            <h1>EARLY SIGNUP</h1>
            <p>Once 1000 members join, VELA officially Launches</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="early-signup-input"
          />
          <input
            type="email"
            name="email"
            value={formData.value}
            onChange={handleChange}
            placeholder="Your Email"
            className="early-signup-input"
          />
          <button type="submit" className="early-signup-submit">
            {isLoading ? <ClipLoader/> : "SIGN UP"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EarlySignUpForm;
