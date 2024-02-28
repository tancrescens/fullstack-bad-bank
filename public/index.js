// Coordinator of modules
function Spa() {
  return (
    <>
      <AuthProvider>
        <Dashboard></Dashboard>
      </AuthProvider>

      <HashRouter>
        <div>
          <NavBar />
          <UserContext.Provider
            value={{
              users: [
                {
                  name: "abel",
                  email: "abel@mit.edu",
                  password: "secret",
                  balance: 100,
                },
              ],
            }}
          >
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
          </UserContext.Provider>
        </div>
      </HashRouter>
    </>
  );
}
ReactDOM.render(<Spa />, document.getElementById("root"));
