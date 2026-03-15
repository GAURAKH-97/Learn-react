import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <h1>My React App</h1>

      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/dashboard">Dashboard</Link> | 
        <Link to="/user/102">User 101</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default Layout;