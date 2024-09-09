import home from "../../img/home.png";
import './home.css'; // Create and use this CSS file for custom styles if needed

const Home = () => {
  return (
    <div className="container-fluid d-flex flex-column flex-lg-row align-items-center justify-content-around" style={{ height: "100vh", marginBottom: 10 }}>
      <div className="text-center text-lg-start flex-1">
        <span className="display-3 fw-bold">Hello!!!</span>
        <br />
        <span className="display-3 fw-bold">We Are Creative</span>
        <br />
        <span className="display-3 fw-bold">Digital Agency.</span>
        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        </p>
        <p>labore et dolore magna aliqua</p>
        <button className="btn btn-warning text-dark rounded" style={{ height: 40, width: 'auto', maxWidth: '100%' }}>
          Send message
        </button>
      </div>
      <div className="flex-1 d-flex justify-content-center mt-4 mt-lg-0">
        <img src={home} className="img-fluid" alt="Home" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};

export default Home;
