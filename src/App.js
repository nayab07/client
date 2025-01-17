import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import TechStack from "./pages/TechStack/TechStack";

function App() {
  return (
   <>
   <Layout/>
   <div className="w-full">
  <About />
  <TechStack/>
</div>
   </>
  );
}

export default App;
