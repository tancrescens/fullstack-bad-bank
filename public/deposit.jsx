function Deposit() {
  const ctx = React.useContext(UserContext);
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  return (
    <Card
      bgcolor="light"
      header="Deposit"
      status={status}
      body={
        show ? (
          <DepositForm setShow={setShow} setStatus={setStatus} ctx={ctx} />
        ) : (
          <DepositMsg setShow={setShow} setStatus={setStatus} ctx={ctx} />
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
    const [amount, setAmount] = React.useState("");
    const [formData, setFormData] = React.useState({
      amount: 0,
    });
    const [errors, setErrors] = React.useState({});

    // ===== START Validations START ===== //
    // Validation
    const validateForm = () => {
      const validations = props.ctx.validations[0];
      let newErrors = {};

      // Validation: email is required + valid format
      if (!formData.amount) {
        newErrors.amount = "Amount is required";
      } else if (!validations.isValidAmount(formData.amount)) {
        newErrors.amount =
          "Invalid amount format (only whole, positive numbers)";
      }

      setErrors(newErrors);
      console.log(`Errors: ${errors}`);
      return Object.keys(newErrors).length === 0;
    };
    // ===== END Validations END ===== //

    // handle input changes
    const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData({
        ...formData,
        [name]: value,
      });
    };

    function handleSubmit(e) {
      e.preventDefault();

      const isValid = validateForm();
      if (isValid) {
        console.log(`Deposit input validation SUCCESS`);
        fetch(
          `/account/update/${props.ctx.loginEmail[0].loggedInEmail}/${formData.amount}`
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
          })
          .catch((err) => err);
      } else return false;
    }

    return (
      <>
        Amount
        <br />
        <input
          type="input"
          className="form-control"
          placeholder="Enter amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          id="depositAmount"
        />
        {errors.amount && (
          <label for="depositAmount" className="error">
            {errors.amount}
          </label>
        )}
        <br />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Deposit
        </button>
      </>
    );
  }
}
