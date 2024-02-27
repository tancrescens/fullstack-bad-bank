function Balance() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  return (
    <Card
      bgcolor="light"
      header="Balance"
      status={status}
      body={
        show ? (
          <BalanceForm setShow={setShow} setStatus={setStatus} />
        ) : (
          <BalanceMsg setShow={setShow} setStatus={setStatus} />
        )
      }
    />
  );
}

function BalanceMsg(props) {
  return (
    <>
      <h5>Success</h5>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => {
          props.setShow(true);
          props.setStatus("");
        }}
      >
        Check balance again
      </button>
    </>
  );
}

function BalanceForm(props) {
  const [email, setEmail] = React.useState("");
  const [balance, setBalance] = React.useState("");

  function handle() {
    fetch(`/account/findOne/${email}`)
      .then((response) => response.text())
      .then((text) => {
        try {
          const data = JSON.parse(text);
          props.setStatus(text);
          props.setShow(false);
          setBalance(user.balance);
          console.log("JSON:", data);
        } catch (err) {
          props.setStatus(text);
          console.log("err:", text);
        }
      });
  }

  return (
    <>
      Email
      <br />
      <input
        type="input"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <br />
      <button type="submit" className="btn btn-primary" onClick={handle}>
        Check Balance
      </button>
    </>
  );
}
// <div className="card" style="width: 18rem">
//   <div className="card-body">
//     <h5 className="card-title">Balance</h5>
//     <p className="card-text"></p>
//     Email
//     <br />
//     <input
//       type="input"
//       className="form-control"
//       id="balanceEmail"
//       placeholder="Enter email"
//     />
//     <br />
//     <button type="submit" className="btn btn-primary" onClick="">
//       Show Balance
//     </button>
//     <div id="balanceStatus"></div>
//   </div>
// </div>
