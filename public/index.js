// Coordinator of modules
function Spa() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [loggedInName, setLoggedInName] = React.useState("");
  const [loggedInEmail, setLoggedInEmail] = React.useState("");

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
  };

  return (
    <>
      <UserContext.Provider value={contextValue}>
        {/* <AuthProvider> */}
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
        {/* </AuthProvider> */}
      </UserContext.Provider>
    </>
  );
}
ReactDOM.render(<Spa />, document.getElementById("root"));
