import { Link, Outlet} from "react-router-dom";
function Dashboard() {
  return (
    <div>
      <h2>Dashboard Pages</h2>
      <p>This is dashboard content.</p>
      <nav>
            <Link to="phone">Phone</Link> | 
            <Link to="laptop">Laptop</Link> | 
        </nav>
        <Outlet />
    </div>
    
  );
}

export default Dashboard;