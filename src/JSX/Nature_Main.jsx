import "../CSS/nature-main.css";
const image_arr = [
  {
    image: require("../image/Nature/1.jpg"),
  },
  {
    image: require("../image/Nature/2.jpg"),
  },
  {
    image: require("../image/Nature/3.jpg"),
  },
  {
    image: require("../image/Nature/4.jpg"),
  },
  //   {
  //     image: require("../image/Nature/5.jpg"),
  //   },
  //   {
  //     image: require("../image/Nature/6.jpg"),
  //   },
  //   {
  //     image: require("../image/Nature/7.jpg"),
  //   },
  //   {
  //     image: require("../image/Nature/8.jpg"),
  //   },
  //   {
  //     image: require("../image/Nature/9.jpg"),
  //   },
  //   {
  //     image: require("../image/Nature/10.jpg"),
  //   },
  //   {
  //     image: require("../image/Nature/11.jpg"),
  //   },
  //   {
  //     image: require("../image/Nature/12.jpg"),
  //   },
  //   {
  //     image: require("../image/Nature/13.jpg"),
  //   },
  //   {
  //     image: require("../image/Nature/14.jpg"),
  //   },
  //   {
  //     image: require("../image/Nature/15.jpg"),
  //   },
  //   {
  //     image: require("../image/Nature/16.jpg"),
  //   },
  //   {
  //     image: require("../image/Nature/17.jpg"),
  //   },
  //   {
  //     image: require("../image/Nature/18..jpg"),
  //   },
  //   {
  //     image: require("../image/Nature/19.jpg"),
  //   },
  //   {
  //     image: require("../image/Nature/20.jpg"),
  //   },
];

function Nature_Main() {
  return (
    <>
      <div className="container Nature-Main">
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

export default Nature_Main;
