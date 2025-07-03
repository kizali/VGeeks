
import React from "react";

const renderStars = (rating) => {
  const totalStars = 5;
  const fullStar = "★";
  const emptyStar = "☆";
  return (
    <span style={{ color: "#f1c40f", fontSize: "1.2rem" }}>
      {fullStar.repeat(rating)}
      {emptyStar.repeat(totalStars - rating)}
    </span>
  );
};

const UserExperience = () => {
  const userReviews = [
    {
      id: 1,
      name: "Fatima",
      rating: 5,
      comment: "The service is super easy to use, I got my visa quickly!",
    },
    {
      id: 2,
      name: "Youssef",
      rating: 4,
      comment: "Very good service, just a bit slow to respond sometimes.",
    },
    {
      id: 3,
      name: "Khadija",
      rating: 3,
      comment: "Decent service, but customer support could be improved.",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Segoe UI",
        padding: "3rem",
        width: "100%",
        background: "linear-gradient(to bottom,rgba(53, 98, 181, 0.4),rgb(7, 45, 156))",
        color: "white",
      }}
    >
      <h1
        style={{
          color: "#2c3e50",
          marginBottom: "2rem",
          fontSize: "1.8rem",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        User Reviews
      </h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "1.5rem" }}>
        {userReviews.map(({ id, name, rating, comment }) => (
          <div
            key={id}
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e0e0e0",
              borderRadius: "10px",
              padding: "1.5rem",
              boxShadow: "0 4px 6px rgba(10, 19, 199, 0.89)",
              display: "flex",
              flexDirection: "column",
              width: "50%",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 600, color: "#34495e" }}>
                {name}
              </h3>
              <div>
                {renderStars(rating)}{" "}
                <span style={{ fontSize: "0.9rem", color: "#7f8c8d" }}>({rating}/5)</span>
              </div>
            </div>
            <p style={{ marginTop: "0.8rem", color: "#555", lineHeight: "1.5" }}>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserExperience;



