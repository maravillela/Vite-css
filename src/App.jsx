import Cards from "./components/Cards";

export default function App() {
  return (
    <>
    <div className="contenedorPrincipal">
      <div> 
      <h1 className="tituloV">
      <span className="vitee">Vite</span></h1>
    <h1 className="nG">Next Generation </h1>
    <h1 className="fT">Frontend Tooling</h1>
    <h2 className="getR">Get ready for a development environment that</h2>
    <h2 className="canF">can finally catch up with you. </h2>
    <button className="getS">Get Started</button>  <button className="wV">Why Vite?</button>  <button className="voG">View on GitHub</button>
      </div>
        <div> <img className="logo" src="https://vitejs.dev/logo-with-shadow.png"></img> </div>
    </div>
    <section className="viteList">
      <Cards 
      emoji={"💡" }
      title={"Instant Server Start" }
      text={"On demand file serving over native ESM, no bundling required!" }/>
      
      <Cards 
      emoji="⚡️" 
      title="Lightning Fast HMR" 
      text="Hot Module Replacement (HMR) that stays fast regardless of app size." />
            
            <Cards 
      emoji="🛠️" 
      title="Rich Features" 
      text="Out-of-the-box support for TypeScript, JSX, CSS and more." />
            
            <Cards 
      emoji="📦" 
      title="Optimized Build" 
      text="Pre-configured Rollup build with multi-page and library mode support." />
            
            <Cards 
      emoji="🔩" 
      title="Universal Plugins" 
      text="Rollup-superset plugin interface shared between dev and build." />
            
            <Cards 
      emoji="🔑" 
      title="Fully Typed APIs" 
      text="Flexible programmatic APIs with full TypeScript typing." />
      
    </section>
  
    </>
  );
}
