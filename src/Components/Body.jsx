import React, { useContext } from "react";
import { mycontext } from "../App";
import Card from "./Card";

const Body = () => {
  const [data, setData] = useContext(mycontext);


  return (
    <div className="d-flex justify-content-center">

      <div className="row container justify-content-center">

        {data.map((item, index) => {
          return (
            <>
              <Card item={item} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
