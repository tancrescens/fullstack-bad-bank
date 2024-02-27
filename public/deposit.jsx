function Deposit() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  return (
    <Card
      bgcolor="light"
      header="Deposit"
      status={status}
      body={
        show ? (
          <DepositForm setShow={setShow} setStatus={setStatus} />
        ) : (
          <DepositMsg setShow={setShow} setStatus={setStatus} />
        )
      }
    />
  );

  function DepositMsg(props) {
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
          Deposit Again
        </button>
      </>
    );
  }

  function DepositForm(props) {
    const [email, setEmail] = React.useState("");
    const [amount, setAmount] = React.useState("");

    function handle() {
      fetch(`/account/update/${email}/${amount}`)
        .then((response) => response.text())
        .then((text) => {
          try {
            const data = JSON.parse(text);
            props.setStatus(JSON.stringify(data.value));
            props.setShow(false);
            console.log("JSON:", data);
          } catch (err) {
            props.setStatus("Deposit failed");
            console.log("err:", text);
          }
        })
        .catch((err) => err);
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
          Deposit
        </button>
      </>
    );
  }

  //   <div className="card" style="width: 18rem">
  //   <div className="card-body">
  //     <h5 className="card-title">Deposit</h5>
  //     <p className="card-text"></p>
  //     Email
  //     <br />
  //     <input
  //       type="input"
  //       className="form-control"
  //       id="depositEmail"
  //       placeholder="Enter email"
  //     />
  //     <br />
  //     Amount
  //     <br />
  //     <input
  //       type="password"
  //       className="form-control"
  //       id="depositAmount"
  //       placeholder="Enter amount"
  //     />
  //     <br />
  //     <button type="submit" className="btn btn-primary" onClick="">
  //       Deposit
  //     </button>
  //     <div id="depositStatus"></div>
  //   </div>
  // </div>
}
