import '../CSS/space.css'
const image_arr = [
  {
    image: require("../image/Space/s1.jpg"),
  },
  {
    image: require("../image/Space/s2.jpg"),
  },
  {
    image: require("../image/Space/s3.jpg"),
  },
  {
    image: require("../image/Space/s4.jpg"),
  },
  {
    image: require("../image/Space/s5.jpg"),
  },
  {
    image: require("../image/Space/s6.jpg"),
  },
  {
    image: require("../image/Space/s7.jpg"),
  },
  {
    image: require("../image/Space/s8.jpg"),
  },
  {
    image: require("../image/Space/s9.jpg"),
  },
  {
    image: require("../image/Space/s10.jpg"),
  },
  {
    image: require("../image/Space/s11.jpg"),
  },
  {
    image: require("../image/Space/s12.jpg"),
  },
  {
    image: require("../image/Space/s13.jpg"),
  },
  {
    image: require("../image/Space/s14.jpg"),
  },
  {
    image: require("../image/Space/s15.jpg"),
  },
];

function Space() {
  return (
    <>
      <div className="text-center">STARS</div>
      {image_arr.map((value, index) => {
        return <img className="card-img-top" src={value.image} alt="Card" />;
      })}
    </>
  );
}

export default Space;
