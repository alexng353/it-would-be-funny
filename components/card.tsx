export default function Card(props: any) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.image} className="object-contain w-64 h-64" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}
