function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  return (
    <Card
      bgcolor="light"
      header="Withdraw"
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
          Go back to Withdraw Page
        </button>
      </>
    );
  }

  function CreateForm(props) {
    const [email, setEmail] = React.useState("");
    const [amount, setAmount] = React.useState(0);
    const ctx = React.useContext(UserContext);

    function handle() {
      console.log(`Withdrew ${amount} from ${email}`);
      alert(`Withdrew ${amount} from ${email}`);
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
        Amount
        <br />
        <input
          type="input"
          className="form-control"
          placeholder="Enter amount"
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
