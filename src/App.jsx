import FormInput from "./components/FormInput";
import "./app.css";
import { useState } from "react";

const App = () => {
  //since using useState() re-render it with every time a key is entered, we can also use useRef()
  // making object of type useState to remove repitition of coding lines
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  //an Input Array to remove repitition of Inputs
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special characters!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Invalid Email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be be 8-20 characters including 1 letter, 1 number and one special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];
  // we will use <form> and its data
  // const usernameRef = useRef();

  const handleSubmit = (e) => {
    //e.preventDefault makes sure that the page does not gets refreshed, every time submit button is clicked.
    e.preventDefault();
    // console.log(usernameRef);

    //we can also access data using forms

    // const data = new FormData(e.target);
    // console.log(Object.fromEntries(data.entries()));
  };

  const onChange = (e) => {
    //e.target.name is from inputs array, e.target.value is from live form values
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
        {/* <FormInput refer={usUsernameeRef} placeholder="Username" /> used for useRef() */}
        {/* <FormInput name="username" placeholder="Username" />  used to get data from Form directly*/}
        {/* <FormInput placeholder="Username" setUsername={setUsername} />
        <FormInput name="email" placeholder="Email" /> since using array on inputs */}
      </form>
    </div>
  );
};

export default App;
