import { Outlet } from "react-router-dom"




import "./App.scss"

const App=()=>{

  return(
    <div className="app">
     <Outlet/>
    </div>
  )

}

export default App;