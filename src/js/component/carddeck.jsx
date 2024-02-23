import React from "react";
import ReactDOM from "react-dom";


//include images into your bundle


//create your first component
const CardDeck = (props) => {
  
  return (
    <div className="text-center">
      <div className="card-deck" style={{ display: "flex", justifyContent: 'center', padding: '20px'}}>
        <div className="card">
          <img className="card-img-top" src={props.url}  alt="Card image cap" style={{ display: "flex", justifyContent: 'center', padding: '20px'}} />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CardDeck;