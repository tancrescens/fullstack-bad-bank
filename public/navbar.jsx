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
  // Change the active tab onClick
  function onClick(e) {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
  }

  function logout() {
    ctx.loginName[0].setLoggedInName("");
    ctx.users = [];
    ctx.loginStatus[0].setIsLoggedIn(false);

    console.log("logged out");
    console.log(`login name: ${ctx.loginName[0].loggedInName}`);
    console.log(`ctx users: `);
    console.log(ctx.users);
    console.log(`ctx login status: ${ctx.loginStatus[0].isLoggedIn}`);
  }

  return (
    <>
      {/* Logged Out Navbar */}
      <nav
        id="navLoggedOut"
        className="navbar navbar-expand-lg bg-body-tertiary"
      >
        <div className="container-fluid">
          <a
            className="navbar-brand active"
            href="#"
            onClick={(e) => {
              onClick(e);
            }}
          >
            BadBank
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
                  className="nav-link"
                  aria-current="page"
                  href="#/createAccount"
                  onClick={(e) => {
                    onClick(e);
                  }}
                >
                  Create Account
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#/login/"
                  onClick={(e) => {
                    onClick(e);
                  }}
                >
                  Login
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
          <a
            className="navbar-brand"
            href="#"
            onClick={(e) => {
              onClick(e);
            }}
          >
            BadBank
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
                  className="nav-link"
                  aria-current="page"
                  href="#/deposit/"
                  onClick={(e) => {
                    onClick(e);
                  }}
                >
                  Deposit
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#/withdraw/"
                  onClick={(e) => {
                    onClick(e);
                  }}
                >
                  Withdraw
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#/balance/"
                  onClick={(e) => {
                    onClick(e);
                  }}
                >
                  Balance
                </a>
              </li>
            </ul>
            <span className="navbar-text">
              <a className="nav-link" href="#" onClick={logout}>
                {`${ctx.loginName[0].loggedInName} `}| Logout
              </a>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
