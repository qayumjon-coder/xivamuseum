import BigSwiper from "../components/BigSwiper";
import Header from "../components/Header";

const Landing = () => {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <div className="container">
        <BigSwiper />
      </div>
    </div>
  );
};

export default Landing;
