function NavBar() {
  let ctx = React.useContext(UserContext);

  React.useEffect(() => {
    displayLoggedInNav();
  }, [ctx.loginStatus[0].isLoggedIn]);

  function displayLoggedInNav() {
    // check if loggedIn
    if (ctx.loginStatus[0].isLoggedIn) {
      // logged in: display logged in nav bar
      document.getElementById("navLoggedOut").setAttribute("hidden", "hidden");
      document.getElementById("navLoggedIn").removeAttribute("hidden");
    } else {
      // logged out: display logged out nav bar
      document.getElementById("navLoggedOut").removeAttribute("hidden");
      document.getElementById("navLoggedIn").setAttribute("hidden", "hidden");
    }
  }

  const logout = function () {
    ctx.loginStatus[0].setIsLoggedIn(false);
  };

  /* AuthProvider */
  // const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  // const logIn = (e) => {
  //   e.preventDefault();
  //   setIsLoggedIn(true);
  //   setAuthUser({
  //     Name: "John Doe",
  //   });
  // };
  // const logOut = (e) => {
  //   e.preventDefault();
  //   setIsLoggedIn(false);
  //   setAuthUser(null);
  // };

  return (
    <>
      {/* AuthProvider */}
      {/* {" "}
      <span>User is currently: {isLoggedIn ? "Logged-In" : "Logged Out"}.</span>
      {isLoggedIn ? <span>User name: {authUser.Name}</span> : null}
      <br />
      {isLoggedIn ? (
        <button
          onClick={(e) => {
            logOut(e);
          }}
        >
          Log Out
        </button>
      ) : (
        <button
          onClick={(e) => {
            logIn(e);
          }}
        >
          Log In
        </button>
      )} */}

      {/* Logged Out Navbar */}
      <nav
        id="navLoggedOut"
        className="navbar navbar-expand-lg bg-body-tertiary"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {" "}
            BadBank{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#/createAccount"
                >
                  Create Account
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#/login/">
                  {" "}
                  Login{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#/allData/">
                  {" "}
                  AllData{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Logged In Navbar */}
      <nav
        id="navLoggedIn"
        className="navbar navbar-expand-lg bg-body-tertiary"
        hidden
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {" "}
            BadBank{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#/deposit/">
                  {" "}
                  Deposit{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#/withdraw/">
                  {" "}
                  Withdraw{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#/balance/">
                  {" "}
                  Balance{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#/allData/">
                  {" "}
                  AllData{" "}
                </a>
              </li>
            </ul>
            <span className="navbar-text">
              <a className="nav-link" href="#" onClick={logout}>
                Logout
              </a>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
