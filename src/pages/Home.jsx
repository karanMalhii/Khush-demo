import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      Home back to <Link to="/contact">contact</Link>
    </div>
  );
}
