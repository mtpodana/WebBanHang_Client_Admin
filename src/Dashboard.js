import { Navigate } from "react-router-dom";

export default function Dashboard() {
    return (
      <div>
        <Navigate to="/m" replace={true} />
      </div>
    );
  }