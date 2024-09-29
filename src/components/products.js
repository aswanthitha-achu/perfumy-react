import perfume from "../assets/images/perfume.jpg"
import perfume1 from "../assets/images/perfume1.jpg"
import perfume2 from "../assets/images/perfume2.jpg"


// Product component
function Product() {
  

    return (
      <div className="product">
        <div className="box">
          <img src={perfume} alt="Fruitylight Mist" />
          <p>Fruitylight Mist</p>
        </div>
  
        <div className="box">
          <img src={perfume1} alt="Salsa Mist" />
          <p>Salsa Mist</p>
        </div>
  
        <div className="box">
          <img src={perfume2} alt="Shine Mist" />
          <p>Shine Mist</p>
        </div>
      </div>
    );
  }

  export default Product