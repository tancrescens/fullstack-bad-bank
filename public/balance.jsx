function Balance() {
  const ctx = React.useContext(UserContext);
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  return (
    <Card
      bgcolor="light"
      header="Balance"
      status={status}
      body={
        show ? (
          <BalanceForm setShow={setShow} setStatus={setStatus} ctx={ctx} />
        ) : (
          <BalanceMsg setShow={setShow} setStatus={setStatus} ctx={ctx} />
        )
      }
    />
  );
}

function BalanceForm(props) {
  const [email, setEmail] = React.useState("");
  const [balance, setBalance] = React.useState("");

  function handle() {
    fetch(`/account/findOne/${props.ctx.loginEmail[0].loggedInEmail}`)
      .then((response) => response.text())
      .then((text) => {
        try {
          const data = JSON.parse(text);
          if (data.balance == 0) {
            props.setStatus(`Balance: ${0}`);
            setBalance(data.balance);
          } else {
            props.setStatus(`Balance: ${JSON.stringify(data.balance)}`);
            setBalance(data.balance);
          }
          // props.setShow(false);

          console.log("JSON:", data);
        } catch (err) {
          props.setStatus(text);
          console.log("err:", text);
        }
      });
  }

  return (
    <>
      <button type="submit" className="btn btn-primary" onClick={handle}>
        Check Balance/ Refresh
      </button>
    </>
  );
}
