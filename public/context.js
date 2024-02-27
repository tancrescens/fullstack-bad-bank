const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Card(props) {
  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text-dark";
    return "card mb-3 " + bg + txt;
  }

  // <Card
  //    txtcolor="black"
  //    header="BadBank Landing Module"
  //    title="Welcome to the bank"
  //    text="You can move around using the navigation bar."
  //    body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
  //    status=""
  // />

  return (
    <div className={classes()} style={{ maxWidth: "18rem" }}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <p className="card-text">{props.text}</p>}
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    </div>
  );
}
