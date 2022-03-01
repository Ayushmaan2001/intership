import '../CSS/About_me.css'

function AboutUs() {
    return (
      <>
        <div className="text-center">About</div>
        <span class="title-divider"></span>
        <div>
          <img
            src={require("../image/DP.jpg")}
            className="img-fluid"
            alt="img"
          />
        </div>
      </>
    );
}

export default AboutUs;