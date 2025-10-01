import "./CTABanner.css";
import Button from "./Button";
const CTABanner = ()=> {
    return (
        <div className="cta-banner"> 
          <Button
            height="50px"
            width="370px"
            className="primary-btn"
            onClick={() => console.log('clicked')}
            fontSize="12px"
          >
            APPLY FOR A MEMEBERSHIP
          </Button>

        </div>
    )
}
export default CTABanner;