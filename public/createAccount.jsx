function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  return (
    <Card
      bgcolor="light"
      header="Create Account"
      status={status}
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
          Add another account
        </button>
      </>
    );
  }

  function CreateForm(props) {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handle() {
      console.log(`Creation attempt for : ${name}, ${email}, ${password}`);

      // creating account in db
      const url = `/account/create/${name}/${email}/${password}`;
      fetch(url)
        .then((res) => {
          res.data;
        })
        .then((data) => {
          if (data == "") {
            setStatus(data);
          } else {
            console.log(`Creation success for ${JSON.stringify(data)}`);
            props.setShow(false);
          }
        })
        .catch((err) => {
          console.error(err);
        });
      //   (async () => {
      //   var res = await fetch(url);
      //   var data = await res.json();
      //   console.log(`Creation success for ${JSON.stringify(data)}`);
      // })();
    }

    return (
      <>
        Name
        <br />
        <input
          type="input"
          className="form-control"
          placeholder="Enter name"
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <br />
        Email address
        <br />
        <input
          type="input"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <br />
        Password
        <br />
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <br />
        <button type="submit" className="btn btn-primary" onClick={handle}>
          Create Account
        </button>
      </>
    );
  }
}
