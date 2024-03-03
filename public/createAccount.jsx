function CreateAccount() {
  const ctx = React.useContext(UserContext);
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
    // const [name, setName] = React.useState("");
    // const [email, setEmail] = React.useState("");
    // const [password, setPassword] = React.useState("");
    const [formData, setFormData] = React.useState({
      name: "",
      email: "",
      password: "",
    });
    const [errors, setErrors] = React.useState({});
    const validations = ctx.validations[0];

    // Validation
    const validateForm = () => {
      let newErrors = {};

      // Validation: name is required
      if (!formData.name) {
        newErrors.firstName = "First name is required";
      }
      // Validation: email is required + valid format
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!validations.isValidEmail(formData.email)) {
        newErrors.email = "Invalid email format";
      }

      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (!validations.isValidPassword(formData.password)) {
        newErrors.password = "Password must be at least 8 characters long";
        //"Password must be at least 8 characters long, contains at least one symbol, number, uppercase letter and lowercase letter";
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

    // handle form submit button press
    function handleSubmit(e) {
      e.preventDefault();

      console.log(
        `Account creation attempt for : ${formData.name}, ${formData.email}, ${formData.password}`
      );
      const isValid = validateForm();
      if (isValid) {
        console.log(`Account creation input validation SUCCESS`);

        // creating account in db
        const url = `/account/create/${formData.name}/${formData.email}/${formData.password}`;
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
      } else {
        console.log(`Account creation input validation FAILED`);
      }

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
          name="name"
          value={formData.name}
          onChange={handleChange}
          id="name"
        />
        {errors.name && (
          <label for="name" className="error">
            {errors.name}
          </label>
        )}
        <br />
        Email address
        <br />
        <input
          type="input"
          className="form-control"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          id="email"
        />
        {errors.email && (
          <label for="email" className="error">
            {errors.email}
          </label>
        )}
        <br />
        Password
        <br />
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          id="password"
        />
        {errors.password && (
          <label for="password" className="error">
            {errors.password}
          </label>
        )}
        <br />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Create Account
        </button>
      </>
    );
  }
}
