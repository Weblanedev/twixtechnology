import { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",

    });
  }, []);

  return (
    <div className="w-full h-full flex flex-col pt-[66px] md:pt-[80px]">
      <section className="flex flex-col-reverse md:flex-row h-[90vh] md:h-[55vh] mx-10 md:mx-[130px] items-center justify-center md:justify-between gap-5 bg-white">
        <div className=" text-black flex flex-col gap-9 md:gap-12 items-center justify-center md:items-start">
          <h1 className="font-medium md:font-semibold text-[50px] sm:text-[40px] md:text-[50px] md:text-left w-full md:w-[530px] leading-snug md:leading-[62px] text-center">
            About Twix Technology
          </h1>

          <p className="text-center md:text-left mt-[-30px] w-[450px] md:w-[330px]">
            Creativity That Solves Big Problems. Let us serve you to grow your
            businesses.
          </p>

          {/* <Link
            to="/products"
            className="text-base font-medium text-white bg-blue-500 rounded-full px-7 md:px-12 py-4 md:py-5 hover:bg-blue-600 flex items-center justify-center gap-3"
          >
            Explore Products
          </Link> */}
        </div>

        <img
          src="https://images.unsplash.com/photo-1560277090-46659724a489?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-[300px] md:h-[300px] md:w-[500px] object-cover rounded-xl shadow-lg"
        />
      </section>

      <section className="flex flex-col-reverse md:flex-row-reverse mx-10 md:mx-[130px] items-center justify-center md:justify-between gap-5 bg-white py-14 md:py-20">
        <div className=" text-black flex flex-col gap-9 md:gap-12 items-center justify-center md:items-start">
          <h1 className="font-medium md:font-semibold text-[50px] sm:text-[40px] md:text-[50px] md:text-left w-full md:w-[530px] leading-snug md:leading-[62px] text-center">
            Who We Are
          </h1>

          <p className="text-center md:text-left mt-[-10px]  w-full md:w-[550px] leading-relaxed">
            We are a digital solutions company dedicated to helping businesses
            thrive in the digital age. With a team of experienced designers,
            developers, and digital strategists, we provide a wide range of
            services, including website development, online store design, mobile
            app development, and digital marketing. Our goal is to create
            innovative and effective digital solutions that drive growth and
            success for our clients.
            <br />
            Is your brand working for you? Is your website a tool to help build
            your business and brand? Does it tell your story in a creative way?
            Does it present a great first impression? At Lucidity, we use
            strategy-led design throughout the entire process to ensure your
            brand tells your story in a meaningful way and guides site visitors
            to actions you have planned for them.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1696431621200-9068cdb0a1bd?q=80&w=2826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-[300px] md:h-[500px] md:w-[600px] object-cover rounded-xl shadow-lg"
        />
      </section>

      {/* <section className="flex w-full flex-col items-center justify-center md:justify-between gap-16 bg-blue-500/30 py-14 md:py-20">
        <h2 className="font-medium md:font-semibold text-[50px] sm:text-[40px] md:text-[50px] md:text-left leading-snug md:leading-[62px] text-center text-blue-950">
          What we value
        </h2>
        <div className="px-10 md:px-[130px] flex flex-col md:flex-row justify-center items-center w-full gap-5">
          <div className="flex gap-[20px] flex-col sm:flex-row">
            <div className="flex flex-col gap-5 items-start justify-start bg-white p-8 rounded-2xl w-full md:w-[300px] h-[400px]">
              <h3 className="font-medium text-[28px] leading-tight">
                Delighting Our Customers, Globally
              </h3>
              <p className="">
                Listening to and acting on customer feedback drives all that we
                do. It's reflected in our 2,000+ 5-star reviews.
              </p>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start p-8 bg-white rounded-2xl w-full md:w-[300px] h-[400px]">
              <h3 className="font-medium text-[28px] leading-tight">
                Delivering the Best Value
              </h3>
              <p className="">
                We offer our best-in-class solutions at competitive prices. Our
                clear, consistent and stable subscription pricing means no
                hidden conditions and no surprises.
              </p>
            </div>
          </div>
          <div className="flex gap-[20px] flex-col sm:flex-row">
            <div className="flex flex-col gap-5 items-start justify-start bg-white p-8 rounded-2xl w-full md:w-[300px] h-[400px]">
              <h3 className="font-medium text-[28px] leading-tight">
                Focusing on Security and Compliance
              </h3>
              <p className="">
                We comply with and support the latest security standards and
                regulations, including GDPR, HIPAA, SOC 2 and PCI. Our Security
                Advisory Council guides us toward our ever-more-rigorous
                security and compliance goals.
              </p>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start p-8 bg-white rounded-2xl w-full md:w-[300px] h-[400px]">
              <h3 className="font-medium text-[28px] leading-tight">
                Providing Reliable, High Performing User Experiences
              </h3>
              <p className="">
                Our products' award-winning reliability and performance
                translate directly into our customers' abilities to achieve
                their goals in work, school or entertainment.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="flex flex-col-reverse md:flex-row mx-10 md:mx-[130px] items-center justify-center md:justify-between gap-5 bg-white py-14 md:py-20">
        <div className=" text-black flex flex-col gap-9 md:gap-12 items-center justify-center md:items-start">
          <h1 className="font-medium md:font-semibold text-[50px] sm:text-[40px] md:text-[50px] md:text-left w-full md:w-[530px] leading-snug md:leading-[62px] text-center">
            Why Twix
          </h1>

          <p className="text-center md:text-left mt-[-10px]  w-full md:w-[550px] leading-relaxed">
            With an experience of 16+ years, we deliver quality and reliability
            to our clients. We craft customized solutions as per the needs of
            your business. Our interactive web and ecommerce development
            solutions have helped our clients climb the ladder of success in an
            agile way.
          </p>

          <p className="text-center md:text-left mt-[-25px]  w-full md:w-[550px] leading-relaxed">
            We have helped countries from all over the world – clients grow
            tremendously. With us, you get a perfect blend of experience and
            creativity. We help you to get complete guidance to select the type
            of service suitable for your business. The web and ecommerce
            development is done by our expert developers in their fields.
          </p>
          <Link
            to="/contact-us"
            className="text-base font-medium text-white bg-blue-500 rounded-full px-7 md:px-12 py-4 md:py-5 hover:bg-blue-600 flex items-center justify-center gap-3"
          >
            Contact Us
          </Link>
        </div>

        <img
          src="https://tis-tis-io-asset-prd.s3.eu-central-1.amazonaws.com/Meet_the_Team_0cce546d6a.png"
          alt=""
          className="w-full h-[300px] md:h-[500px] md:w-[600px] object-cover rounded-xl shadow-lg"
        />
      </section> */}
    </div>
  );
};

export default About;
