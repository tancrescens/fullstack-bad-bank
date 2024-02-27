function Balance() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  return (
    <Card
      bgcolor="light"
      header="Balance"
      status=""
      body={
        show ? (
          <CreateForm setShow={setShow} />
        ) : (
          <CreateMsg setShow={setShow} />
        )
      }
    />
  );

  function CreateMsg(props) {
    return (
      <>
        <h5>Success</h5>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => props.setShow(true)}
        >
          Go back to Balance Page
        </button>
      </>
    );
  }

  function CreateForm(props) {
    const [email, setEmail] = React.useState("");
    const [amount, setAmount] = React.useState(0);
    const ctx = React.useContext(UserContext);

    function handle() {
      console.log(`You have ${amount} in account ${email}`);
      alert(`You have ${amount} in account ${email}`);
      props.setShow(false);
    }

    return (
      <>
        Email address
        <br />
        <input
          type="input"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <br />
        <button type="submit" className="btn btn-primary" onClick={handle}>
          Show Balance
        </button>
      </>
    );
  }
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
