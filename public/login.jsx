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
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handle() {
    const url = `/account/login/${email}/${password}`;

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
          console.log(`IsLoggedInTry: ${props.ctx.loginStatus[0].isLoggedIn}`);
          props.ctx.users = [];
          props.ctx.users.push(data);
          console.log("After pushing data into ctx.users");
          console.log(props.ctx.users);
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

  return (
    <>
      Email address
      <br />
      <input
        type="input"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <br />
      Password
      <br />
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <br />
      <button type="submit" className="btn btn-primary" onClick={handle}>
        Login
      </button>
    </>
  );
}
