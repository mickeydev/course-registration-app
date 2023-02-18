import React from "react";
import axios from "axios";

function App() {

  React.useEffect(() => {
    axios("http://localhost:8080/admin/api/v1/view-courses").then(response => console.log(response));
  }, [])

  return <div>Hello</div>
}

export default App;