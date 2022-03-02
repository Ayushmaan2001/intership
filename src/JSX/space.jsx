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
    image: require("../image/Space/s10.jpg"),
  },
  {
    image: require("../image/Space/s5.jpg"),
  },
  {
    image: require("../image/Space/s16.jpg"),
  },
  {
    image: require("../image/Space/s15.jpg"),
  },
  {
    image: require("../image/Space/s17.jpg"),
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
