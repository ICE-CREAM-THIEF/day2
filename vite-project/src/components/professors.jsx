import "./professors.css";

function Professors({ professor }) { 
  return (
    <div className="professor-container">
      <div className="professor-content">
        <h2>Professors</h2>
        <p>Name: {professor.name}</p>
        <p>Department: {professor.department}</p>
        <p>Email: {professor.email}</p>
      </div>
    </div>
  );
}

export default Professors;