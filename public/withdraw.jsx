function Withdraw() {
  const ctx = React.useContext(UserContext);
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  return (
    <Card
      bgcolor="light"
      header="Withdraw"
      status={status}
      body={
        show ? (
          <WithdrawForm setShow={setShow} setStatus={setStatus} ctx={ctx} />
        ) : (
          <WithdrawMsg setShow={setShow} setStatus={setStatus} ctx={ctx} />
        )
      }
    />
  );

  function WithdrawMsg(props) {
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
          Withdraw again
        </button>
      </>
    );
  }

  function WithdrawForm(props) {
    const [email, setEmail] = React.useState("");
    const [amount, setAmount] = React.useState("");

    function handle() {
      fetch(
        `/account/update/${props.ctx.loginEmail[0].loggedInEmail}/-${amount}`
      )
        .then((response) => response.text())
        .then((text) => {
          try {
            const data = JSON.parse(text);
            props.setStatus(`Balance: ${JSON.stringify(data.value.balance)}`);
            props.setShow(false);
            console.log("JSON:", data);
          } catch (err) {
            props.setStatus("Deposit failed");
            console.log("err:", text);
          }
        });
    }

    return (
      <>
        {/* Email address
        <br />
        <input
          type="input"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <br /> */}
        Amount
        <br />
        <input
          type="input"
          className="form-control"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.currentTarget.value)}
        />
        <br />
        <button type="submit" className="btn btn-primary" onClick={handle}>
          Withdraw
        </button>
      </>
    );
  }
}
// <div className="card" style="width: 18rem">
//   <div className="card-body">
//     <h5 className="card-title">Withdraw</h5>
//     <p className="card-text"></p>
//     Email
//     <br />
//     <input
//       type="input"
//       className="form-control"
//       id="withdrawEmail"
//       placeholder="Enter email"
//     />
//     <br />
//     Amount
//     <br />
//     <input
//       type="password"
//       className="form-control"
//       id="withdrawAmount"
//       placeholder="Enter amount"
//     />
//     <br />
//     <button type="submit" className="btn btn-primary" onClick="">
//       Withdraw
//     </button>
//     <div id="withdrawStatus"></div>
//   </div>
// </div>
