function Home() {
  return (
    <>
      {" "}
      <div className="card" style={{ width: 18 + "em" }}>
        <div className="card-header">BadBank Landing Module</div>{" "}
        <div className="card-body">
          <h5 className="card-title">Welcome to the bank</h5>{" "}
          <p className="card-text">
            You can move around using the navigation bar.{" "}
          </p>{" "}
          <img src="imgs/bank.png" className="card-img-top" alt="Bank Image" />{" "}
        </div>{" "}
      </div>
    </>
  );
}
