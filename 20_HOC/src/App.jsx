import EnhancedHome from "./Home"
import withAuth from "./Hoc/withAuth"
import Dashboard from "./Dashboard"
import PostListWithData from "./PostListWithData"
const Enhaceddashoard = withAuth(Dashboard)
function App() {
 

  return (
    // <EnhancedHome/>
    // <Enhaceddashoard/>
    <PostListWithData/>
  )
}

export default App
