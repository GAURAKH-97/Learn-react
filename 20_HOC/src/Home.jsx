import React from "react";
import withLogger from "./Hoc/withLogge";

function Home() {
  return <h1>Home Component</h1>;
}

const EnhancedHome = withLogger(Home);
export default EnhancedHome;