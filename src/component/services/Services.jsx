import React from "react";
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Web Development",
    description:
      "I specialize in creating custom web solutions tailored to meet your unique needs. ",
  },
  {
    id: 2,
    image: Image2,
    title: "UI/UX Design",
    description:
      "I specialize in creating intuitive and user-friendly UI/UX designs for web and mobile applications. I work diligently to understand the needs of users and craft designs that enhance the overall user experience.",
  },
  {
    id: 3,
    image: Image3,
    title: "Artificial Intelegence",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section_title">Services</h2>

      <div className="services_container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services_card" key={id}>
              <img src={image} alt="" className="services_img" />

              <h3 className="services_title">{title}</h3>
              <p className="services_description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
