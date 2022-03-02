import "../CSS/Image.css"

const image_arr = [
  {
    image: require("../image/Nature/1.jpg"),
  },
  {
    image: require("../image/Nature/2.jpg"),
  },
  {
    image: require("../image/Nature/15.jpg"),
  },
  {
    image: require("../image/Nature/19.jpg"),
  },
  {
    image: require("../image/Nature/4.jpg"),
  },
  {
    image: require("../image/Nature/10.jpg"),
  },
  {
    image: require("../image/Nature/17.jpg"),
  },
  {
    image: require("../image/Nature/8.jpg"),
  },
  {
    image: require("../image/Nature/9.jpg"),
  },
  {
    image: require("../image/Nature/10.jpg"),
  },
];

function Image() {
  return (
    <>
    <div className="text-center">NATURE</div>
        {image_arr.map((value, index) => {
          return (
              <img
                className="card-img-top"
                src={value.image}
                key={index}
                alt="Card"
              />
          );
        })}
    </>
  );
}

export default Image;
