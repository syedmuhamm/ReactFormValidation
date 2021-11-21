import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, onChange, errorMessage, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}

        // name={props.name} it was used to get data directly via forms
        // ref={props.refer} it was used to get data using useRef()
        // placeholder={props.placeholder used for useState() without object of type array for useState()}

        //it was used for useState(), in App.jsx while it was simple without object of type array
        // onChange={(e) => props.setUsername(e.target.value)}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
