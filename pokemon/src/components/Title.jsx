import "../styles/Title.scss";

function Title(props) {
  return (
    <div className="titleContainer">
      {props.page === "index" ? (
        <div>
          <h1>Choose your team</h1>
        </div>
      ) : (
        <div>
          <h1>Ash's party</h1>
        </div>
      )}
    </div>
  );
}

export default Title;
