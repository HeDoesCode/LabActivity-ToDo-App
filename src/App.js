import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <div className="container text-center py-5">
      <Header />
      <Form />
      <List />
    </div>
  );
}

export default App;
