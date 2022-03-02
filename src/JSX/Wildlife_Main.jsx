import '../CSS/wildlife-main.css'
const image_arr = [
  {
    image: require("../image/Wildlife/1.jpg"),
  },
  {
    image: require("../image/Wildlife/2.jpg"),
  },
  {
    image: require("../image/Wildlife/3.jpg"),
  },
];

function Wildlife_Main() {
    return (
      <>
        <div className="container Wildlife-Main">
          {image_arr.map((val, key) => {
            return (
              <img
                src={val.image}
                className="img-fluid"
                alt="..."
                key={key}
              ></img>
            );
          })}
        </div>
      </>
    );
}

export default Wildlife_Main;