import React from "react";

export default function Propsdrilling() {
  const user = "Gaurakh";
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <h1>Hello {user}</h1>;
}
