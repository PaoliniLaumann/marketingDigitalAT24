import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Conocenos({ onDataChanged }) {
  const location = useLocation();

  useEffect(() => {
    onDataChanged(location.pathname);
  });

  return <header>
        <div className="divConocenos">
            <img  className="box1" src="./logos/LOGO03.jpg" alt="" />
          <div className="box2">
              <h1 className="">¡Nos presentamos!</h1>
              <h5 className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Sunt, ut facilis non, rem quos aliquam earum, dolorum repellat cupiditate illo ducimus quae commodi ipsum magni unde nemo a deserunt vitae <br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, numquam repellat consequatur aut sit unde laudantium sequi possimus, delectus debitis est ut ipsam vero. Autem enim explicabo harum iure vel..</h5>
          </div>
        </div>
  </header>;
}

export default Conocenos;
