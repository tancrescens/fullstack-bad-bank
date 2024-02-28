function NavBar() {
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
        </div>
      </div>
    </nav>
  );
}

// 5 <a className="navbar-brand" href="#" onClick="">
// 23 <a className="nav-link active" aria-current="page" href="#" onClick="">

// 27
//   <li className="nav-item">
//   <a className="nav-link" href="#" onClick="">
//     {" "}
//     Login{" "}
//   </a>
// </li>
// <li className="nav-item">
//   <a className="nav-link" href="#" onClick="">
//     {" "}
//     Deposit{" "}
//   </a>
// </li>
// <li className="nav-item">
//   <a className="nav-link" href="#" onClick="">
//     {" "}
//     Withdraw{" "}
//   </a>
// </li>
// <li className="nav-item">
//   <a className="nav-link" href="#" onClick="">
//     {" "}
//     Balance{" "}
//   </a>
// </li>
// <li className="nav-item">
//   <a className="nav-link" href="#" onClick="">
//     {" "}
//     AllData{" "}
//   </a>
// </li>
