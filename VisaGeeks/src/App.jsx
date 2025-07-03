
  import UserExperience from "./UserExperience";

const avisUtilisateurs = [
  {
    id: 1,
    nom: "Fatima",
    note: 5,
    commentaire: "Le service est super facile à utiliser, j'ai eu mon visa rapidement !",
  },
  {
    id: 2,
    nom: "Mohamed",
    note: 4,
    commentaire: "Bonne expérience, juste un peu lent au niveau du traitement.",
  },
  {
    id: 3,
    nom: "Sara",
    note: 5,
    commentaire: "Très clair, j'ai bien aimé le suivi de ma demande en ligne.",
  },
];


function Etoiles({ note }) {
  const etoiles = [];
  for (let i = 1; i <= 5; i++) {
    etoiles.push(
      <span
        key={i}
        style={{ color: i <= note ? "#FFD700" : "#CCC", fontSize: "20px" }}
      >
        ★
      </span>
    );
  }
  return <div>{etoiles}</div>;
}


function Avis({ avis }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        marginBottom: "15px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{avis.nom}</h3>
      <Etoiles note={avis.note} />
      <p style={{ fontStyle: "italic" }}>{avis.commentaire}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <UserExperience/>
    </div>
  );
}


