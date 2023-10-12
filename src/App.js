import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div>
      <section className="layers">
		  <div className="layers__container">
			  <div className="layers__item layer-1"></div>
			  <div className="layers__item layer-2" ></div>
          <div className="layers__item layer-3">
               <div className="hero-content">
                 <h1>WELCOME</h1><span>BRAINFANSC</span>
                                                 ^
                <div className="hero-content__p"></div>
                    <button className="button-start">Start Learning</button>  
              </div>
		  	</div>
		    	<div className="layers__item layer-4">
		  		<canvas className="rain"></canvas>
		  	</div>
		  	<div className="layers__item layer-5"></div>
		  	<div className="layers__item layer-6"></div>
		  </div>
	  </section>
  </div> 
  );
}

export default App;
