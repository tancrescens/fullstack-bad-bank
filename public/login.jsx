function Login() {
  let ctx = React.useContext(UserContext);
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  return (
    <>
      <Card
        bgcolor="light"
        header="Login"
        status={status}
        body={
          show ? (
            <LoginForm setShow={setShow} setStatus={setStatus} ctx={ctx} />
          ) : (
            <LoginMsg setShow={setShow} setStatus={setStatus} ctx={ctx} />
          )
        }
      />
    </>
  );
}

function LoginMsg(props) {
  const history = ReactRouterDOM.useHistory();

  const handleProceed = () => {
    // Redirect to the home page
    history.push("/");
  };

  return (
    <>
      <h5>Success</h5>
      <button type="submit" className="btn btn-primary" onClick={handleProceed}>
        Proceed to home page
      </button>
    </>
  );
}

function LoginForm(props) {
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});

  // ===== START Validations START ===== //
  // Validation
  const validateForm = () => {
    const validations = props.ctx.validations[0];
    let newErrors = {};

    // Validation: email is required + valid format
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validations.isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    console.log(`Errors: ${errors}`);
    return Object.keys(newErrors).length === 0;
  };
  // ===== END Validations END ===== //

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // handle submit form
  function handleSubmit(e) {
    e.preventDefault();
    const url = `/account/login/${formData.email}/${formData.password}`;

    console.log(
      `Account creation attempt for : ${formData.email}, ${formData.password}`
    );
    const isValid = validateForm();
    if (isValid) {
      console.log(`Account creation input validation SUCCESS`);
      // Login Attempt
      fetch(url)
        .then((response) => response.text())
        .then((text) => {
          try {
            // data/user info received
            const data = JSON.parse(text);
            props.setStatus("");
            props.setShow(false);
            console.log("JSON:", data);

            props.ctx.loginStatus[0].setIsLoggedIn(true);
            console.log(
              `IsLoggedInTry: ${props.ctx.loginStatus[0].isLoggedIn}`
            );
            props.ctx.users = [];
            props.ctx.users.push(data);
            console.log("After pushing data into ctx.users");
            console.log(props.ctx.users);
            // setting loggedInName & loggedInEmail state
            props.ctx.loginName[0].setLoggedInName(props.ctx.users[0].name);
            props.ctx.loginEmail[0].setLoggedInEmail(props.ctx.users[0].email);
          } catch (err) {
            props.setStatus(text);
            console.log("err:", text);

            props.ctx.loginStatus[0].setIsLoggedIn(false);
            console.log(
              `IsLoggedInCatch: ${props.ctx.loginStatus[0].isLoggedIn}`
            );
          }
        });
    }
  }

  return (
    <>
      Email address
      <br />
      <input
        type="input"
        className="form-control"
        placeholder="Enter email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        id="loginName"
      />
      {errors.email && (
        <label for="createAccountemail" className="error">
          {errors.email}
        </label>
      )}
      <br />
      Password
      <br />
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        id="loginPassword"
      />
      {errors.password && (
        <label for="loginPassword" className="error">
          {errors.password}
        </label>
      )}
      <br />
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Login
      </button>
    </>
  );
}
