import "./App.css";
import Tabs from "./components/TabsComponent";
import { Routes, Route } from "react-router-dom";
import ElementSection from "./components/TabsContent/Elements";
import SectionsSection from "./components/TabsContent/Sections";
import DetailsSection from "./components/TabsContent/Details";
import ElementForm from "./components/TabsContent/Elements/ElementForm";

const App = () => {
  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column port-preview">
              <div className="box has-text-centered">
                <h1 className="title">Hello</h1>
              </div>
            </div>

            <div className="column port-config">
              <Tabs />
              <Routes>
                <Route exact path="/elements" element={<ElementSection />}>
                  <Route path=":id" element={<ElementForm />} />
                </Route>
                <Route exact path="/sections" element={<SectionsSection />} />
                <Route path="/" element={<DetailsSection />} />
              </Routes>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
