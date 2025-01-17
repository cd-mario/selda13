import Navbar from './Navbar.jsx'
import ClientsTable from './ClientsTable.jsx'
function App() {

  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <ClientsTable />
      </div>
    </div>
  )
}

export default App
