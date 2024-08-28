import home from "../../img/home.png";
const Home = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-around  align-items-center "
      style={{ height: "100vh", marginBottom: 10 }}
    >
      <div className="flex-1 ">
        <span className="display-3 " style={{ fontWeight: "bold" }}>
          Hello!!!
        </span>
        <br></br>
        <span className="display-3" style={{ fontWeight: "bold" }}>
          We Are Creative
        </span>{" "}
        <br></br>
        <span className="display-3" style={{ fontWeight: "bold" }}>
          Digital Agency.
        </span>
        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod
          tempor incididunt ut{" "}
        </p>
        <p>labore et dolore magna aliqua</p>
        <button
          className="rounded bg-warning text-dark"
          style={{ height: 30, width: 200, border: "none" }}
        >
          Send messege
        </button>
      </div>
      <div className="flex-1">
        <img src={home}></img>
      </div>
    </div>
  );
};
export default Home;
