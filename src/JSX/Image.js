import "../CSS/Image.css"

const image_arr = [
  {
    image: require("../image/1.jpg"),
  },
  {
    image: require("../image/2.jpg"),
  },
  {
    image: require("../image/3.jpg"),
  },
  {
    image: require("../image/4.jpg"),
  },
  {
    image: require("../image/5.jpg"),
  },
  {
    image: require("../image/6.jpg"),
  },
  {
    image: require("../image/7.jpg"),
  },
];

function Image() {
  return (
    <>
        {image_arr.map((value, index) => {
          return (
              <img
                className="card-img-top"
                src={value.image}
                alt="Card image cap"
              />
          );
        })}
    </>
  );
}

export default Image;
