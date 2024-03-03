// Coordinator of modules
function Spa() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [loggedInName, setLoggedInName] = React.useState("");
  const [loggedInEmail, setLoggedInEmail] = React.useState("");
  const [loggedInBalance, setLoggedInBalance] = React.useState("");

  // ===== START Validations START===== //
  // check if valid password, returns true if valid
  const isValidPassword = (password) => {
    // Regular expressions for password validation
    const passwordRegex =
      /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,}$/;
    // const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
    // const numberRegex = /[0-9]/;
    // const upperCaseRegex = /[A-Z]/;
    // const lowerCaseRegex = /[a-z]/;
    return password.length >= 8;
    // && symbolRegex.test(password) &&
    // numberRegex.test(password) &&
    // upperCaseRegex.test(password) &&
    // lowerCaseRegex.test(password)
  };

  // check if valid email, returns true if valid
  const isValidEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  const isValidAmount = (amount) => {
    const amountRegex = /^\d+$/;
    return amountRegex.test(amount);
  };

  // ===== CONTEXT VALUES =====
  let contextValue = {
    users: [
      {
        name: "abel",
        email: "abel@mit.edu",
        password: "secret",
        balance: 100,
      },
    ],
    loginStatus: [{ isLoggedIn: isLoggedIn, setIsLoggedIn: setIsLoggedIn }],
    loginName: [
      { loggedInName: loggedInName, setLoggedInName: setLoggedInName },
    ],
    loginEmail: [
      { loggedInEmail: loggedInEmail, setLoggedInEmail: setLoggedInEmail },
    ],
    loginBalance: [
      {
        loggedInBalance: loggedInBalance,
        setLoggedInBalance: setLoggedInBalance,
      },
    ],
    validations: [
      {
        isValidPassword: isValidPassword,
        isValidEmail: isValidEmail,
        isValidAmount: isValidAmount,
      },
    ],
  };

  return (
    <>
      <UserContext.Provider value={contextValue}>
        <HashRouter>
          <div>
            <NavBar />

            <div className="container" style={{ padding: "20px" }}>
              <Route path="/" exact component={Home} />
              <Route
                path="/createAccount/"
                exact
                component={CreateAccount}
              />{" "}
              <Route path="/login/" exact component={Login} />
              <Route path="/deposit/" exact component={Deposit} />
              <Route path="/withdraw/" exact component={Withdraw} />
              <Route path="/balance/" exact component={Balance} />
              <Route path="/allData/" exact component={AllData} />
            </div>
          </div>
        </HashRouter>
      </UserContext.Provider>
    </>
  );
}
ReactDOM.render(<Spa />, document.getElementById("root"));
