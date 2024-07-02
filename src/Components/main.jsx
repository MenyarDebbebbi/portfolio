import Nav from "./nav";
import Hero from "./hero";
import Footer from "./footer";
import Service from "./services";
import Project from "./project";
const main = () => {
  return (
    <div className="bg-indigo-500">
      <Nav />
      <Hero />
      <Project />
      <Service />
      <Footer />
    </div>
  );
};
export default main;
