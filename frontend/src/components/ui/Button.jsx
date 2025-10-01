import "./Button.css";

const Button = ({
  children,
  height,
  width,
  onClick,
  className,
  fontSize,
  margin,
  borderRadius,
  type
}) => {
  return (
    <button
    type={type}
      className={className}
      onClick={onClick}
      style={{
        height: height,
        width: width,
        fontSize: fontSize,
        margin: margin,
        borderRadius:borderRadius
      }}
    >
      {children}
    </button>
  );
};

export default Button;