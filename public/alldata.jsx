function AllData() {
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    fetch("account/all")
      .catch((err) => console.error(err))
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(JSON.stringify(data));
      });
  }, []);

  return (
    <>
      <h5>All Data in Store</h5>
      {data}
    </>
  );
}
