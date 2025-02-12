import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLettterBox from "../components/NewsLettterBox";
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="m-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] "
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w--2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            accusamus cupiditate obcaecati cumque, recusandae architecto
            deserunt veniam natus quis esse, id numquam exercitationem aliquam
            iste odit dignissimos necessitatibus minima? Nobis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem vitae, repudiandae error necessitatibus velit commodi
            modi delectus ullam laudantium optio voluptatem quis vel,
            praesentium id quibusdam, provident placeat cupiditate dignissimos.
          </p>
          <b className="text-gray-800">Our Mission</b>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quos nam
          incidunt similique consectetur harum itaque, accusantium ratione.
          Voluptatibus voluptates pariatur molestiae! Nisi, eius. Sequi quos
          nobis blanditiis dicta nesciunt.
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm md-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            rerum quas aliquid labore eaque quidem molestias minima,
            exercitationem alias deleniti adipisci, nostrum dolorem quos
            explicabo soluta nemo eligendi molestiae dolore!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            rerum quas aliquid labore eaque quidem molestias minima,
            exercitationem alias deleniti adipisci, nostrum dolorem quos
            explicabo soluta nemo eligendi molestiae dolore!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Excceptional Customer Service</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            rerum quas aliquid labore eaque quidem molestias minima,
            exercitationem alias deleniti adipisci, nostrum dolorem quos
            explicabo soluta nemo eligendi molestiae dolore!
          </p>
        </div>
      </div>
  <NewsLettterBox/>
    </div>
  );
};

export default About;
