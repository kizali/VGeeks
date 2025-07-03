
import React from "react";

const renderStars = (note) => {
  const totalStars = 5;
  const fullStar = "★";
  const emptyStar = "☆";
  return (
    <span style={{ color: "#f1c40f", fontSize: "1.2rem" }}>
      {fullStar.repeat(note)}
      {emptyStar.repeat(totalStars - note)}
    </span>
  );
};

const UserExperience = () => {
  const avisUtilisateurs = [
    {
      id: 1,
      nom: "Fatima",
      note: 5,
      commentaire: "Le service est super facile à utiliser, j'ai eu mon visa rapidement !",
    },
    {
      id: 2,
      nom: "Youssef",
      note: 4,
      commentaire: "Très bon service, juste un peu lent à répondre parfois.",
    },
    {
      id: 3,
      nom: "Khadija",
      note: 3,
      commentaire: "Service correct, mais le support client peut être amélioré.",
    },
  ];

  return (
    <div
  style={{
    fontFamily: "Segoe UI",
    padding: "3rem",
    width: "100%",  
    background: "linear-gradient(to bottom, #003366,rgba(0, 140, 179, 0.38))",
    color: "white",
  }}
>

      <h1 style={{ color: "#2c3e50", marginBottom: "2rem", fontSize: "1.8rem", fontWeight: 700, textAlign: "center" }}>
        Avis des Utilisateurs
      </h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "1.5rem" }}>
        {avisUtilisateurs.map(({ id, nom, note, commentaire }) => (
          <div
            key={id}
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e0e0e0",
              borderRadius: "10px",
              padding: "1.5rem",
              boxShadow: "0 4px 6px rgba(40, 174, 200, 0.89)",
              display: "flex",
              flexDirection: "column",
              width: "50%",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 600, color: "#34495e" }}>
                {nom}
              </h3>
              <div>{renderStars(note)} <span style={{ fontSize: "0.9rem", color: "#7f8c8d" }}>({note}/5)</span></div>
            </div>
            <p style={{ marginTop: "0.8rem", color: "#555", lineHeight: "1.5" }}>{commentaire}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserExperience;

