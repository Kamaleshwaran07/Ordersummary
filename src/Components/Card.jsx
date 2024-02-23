import React, { useContext } from "react";
import { mycontext } from "../App";

const Card = ({ item }) => {
  const [data, setData] = useContext(mycontext);
  // const price = item.price;
  // const [, , cartValue, setCartValue] = useContext(mycontext);
  // const discount = item.discountPercentage;
  // const discountPercentage = item.discountPercentage.toFixed(0);
  // const discountedPrice = (price - price * (discount / 100)).toFixed(0);

  const handleAdd = (id, quantity) => {
    setData((predata) => {
      return predata.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 || quantity + 1 };
        }
        return item;
      });
    });
  };
  // Handling the Quantity and Price

  const handleSub = (id, quantity) => {
    setData((predata) => {
      return predata.map((item) => {
        if (item.id === id && quantity > 0) {
          return { ...item, quantity: item.quantity - 1 || quantity - 1 };
        }
        return item;
      });
    });
  };

  return (
    <div className="card  m-3 col-xxl-3 col-md-4 p-0">
      <div key={item.id} > 
        {/*To display the images in Carousel*/}
        <div id={`carouselExampleAutoplaying-${item.id}`} data-bs-ride="carousel" className="carousel">
          <div className="carousel-inner slide ">
            {item.images.map((img, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={img} className="d-block w-100 " id="image" alt={`Slide ${index}`} />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#carouselExampleAutoplaying-${item.id}`}
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#carouselExampleAutoplaying-${item.id}`}
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="card-body" id="textarea">

          <h4 className="text-3xl">{item.title}</h4>
          <h3 className="text-xl">{item.brand}</h3>
          <p>{item.description}</p>

          <div className="d-flex flex-row">
            <h5 className="text-lg me-2">
              Rs. {item.price}
            </h5>
            {/* <h5 className="text-lg text-red-400 font-bold">
              {discountPercentage}% Off
            </h5>
          <h3 className="text-xl">Rs. {discountedPrice}/-</h3> */}
          </div>
          <div className="fs-6">

            <span className="me-2">Rating: {item.rating}</span>
            <span>
              <i className="fa-solid fa-star checked"></i>
            </span>
          </div>
          <br />
          <div className="d-flex card-footer flex-row p-0 align-items-center justify-content-center">
            <button
              className="btn btn-danger m-3 d-flex align-items-center justify-content-center"
              onClick={() => handleSub(item.id, item.quantity || 0)}
            >
              -
            </button>
            <b className=" d-flex mt-0 align-items-center justify-content-center" id="quantity">{item.quantity}</b>
            <button
              className="btn btn-success m-3 d-flex align-items-center justify-content-center"
              onClick={() => handleAdd(item.id, item.quantity || 0)}
            >
              +
            </button>
          </div>
        </div>
        <div>

        </div>

      </div>
    </div>


  );
};

export default Card;
