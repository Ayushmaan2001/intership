import "../CSS/wildlife-main.css";
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
  {
    image: require("../image/Wildlife/4.jpg"),
  },
  {
    image: require("../image/Wildlife/5.jpg"),
  },
  {
    image: require("../image/Wildlife/6.jpg"),
  },
  {
    image: require("../image/Wildlife/7.jpg"),
  },
  {
    image: require("../image/Wildlife/8.jpg"),
  },
  {
    image: require("../image/Wildlife/9.jpg"),
  },
  {
    image: require("../image/Wildlife/10.jpg"),
  },
  {
    image: require("../image/Wildlife/11.jpg"),
  },
  {
    image: require("../image/Wildlife/12.jpg"),
  },
  {
    image: require("../image/Wildlife/13.jpg"),
  },
  {
    image: require("../image/Wildlife/14.jpg"),
  },
  {
    image: require("../image/Wildlife/15.jpg"),
  },
  {
    image: require("../image/Wildlife/16.jpg"),
  },
  {
    image: require("../image/Wildlife/17.jpg"),
  },
];

function WildlifeMain() {
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

export default WildlifeMain;
