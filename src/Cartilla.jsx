import './App.css'

function Cartilla(props) {
  return (
    <>
      <div className="cards" >
        <div  className="ima">
          <img src={props.Images} alt=""/>
        </div>
        <div className="titulobody">
          <h2 >
            {props.titulo}
          </h2>
        </div>
      </div>
    </>
  );
}

export default Cartilla;