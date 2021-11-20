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
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 3,
      name: "birthday",
      type: "text",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
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
