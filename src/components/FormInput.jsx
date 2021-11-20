import "./formInput.css";

const FormInput = (props) => {
  const { label, onChange, id, ...inputProps } = props;
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}

        // name={props.name} it was used to get data directly via forms
        // ref={props.refer} it was used to get data using useRef()
        // placeholder={props.placeholder used for useState() without object of type array for useState()}

        //it was used for useState(), in App.jsx while it was simple without object of type array
        // onChange={(e) => props.setUsername(e.target.value)}
      />
    </div>
  );
};

export default FormInput;
