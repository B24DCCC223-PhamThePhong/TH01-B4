import React, { useState } from "react";
import "./App.css";

function StudentCard({ name, age, className }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="card">
      <h3>{name}</h3>
      <button onClick={() => setShowDetail(!showDetail)}>
        {showDetail ? "Ẩn chi tiết" : "Xem chi tiết"}
      </button>

      {showDetail && (
        <div className="detail">
          <p>Tuổi: {age}</p>
          <p>Lớp: {className}</p>
        </div>
      )}
    </div>
  );
}

function App() {
  const students = [
    { name: "Nguyễn Văn A", age: 20, className: "D24CQCC01-B" },
    { name: "Trần Thị B", age: 21, className: "D24CQCC02-B" },
    { name: "Lê Văn C", age: 22, className: "D24CQCC03-B" },
  ];

  return (
    <div className="container">
      <h2>Bài 4: Thẻ thông tin sinh viên</h2>
      {students.map((s, index) => (
        <StudentCard
          key={index}
          name={s.name}
          age={s.age}
          className={s.className}
        />
      ))}
    </div>
  );
}

export default App;
