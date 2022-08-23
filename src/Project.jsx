export function Project(props) {
  console.log("Component called");
  return (
    <div className="project">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
}
;
