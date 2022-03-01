import '../CSS/space.css'
const image_arr = [
  {
    image: require("../image/s1.jpg"),
  },
  {
    image: require("../image/s2.jpg"),
  },
  {
    image: require("../image/s3.jpg"),
  },
  {
    image: require("../image/s4.jpg"),
  },
  {
    image: require("../image/s5.jpg"),
  },
];

function Space() {
  return (
    <>
      {image_arr.map((value, index) => {
        return (
          <img
            className="card-img-top"
            src={value.image}
            alt="Card"
          />
        );
      })}
    </>
  );
}

export default Space;
