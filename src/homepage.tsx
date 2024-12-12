import { Link } from "react-router-dom";
import { Book, books } from "./utils";
import { useEffect } from "react";

const Homepage = ({
  setSelectedBook,
}: {
  setSelectedBook: (selectedBook: Book) => void;
}) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="w-full h-full flex flex-col pt-[66px] md:pt-[80px]">
      <section className="flex flex-col items-center justify-center h-[90vh] md:h-[85vh] mx-10 md:mx-[130px] gap-5 bg-white">
        <div className="text-black flex flex-col gap-9 md:gap-12 items-center justify-center">
          <h1 className="font-medium md:font-semibold text-[30px] sm:text-[40px] md:text-[50px] w-full md:w-[530px] leading-snug md:leading-[62px] text-center">
            Expert Web & App Development
          </h1>

          <p className="text-center w-[450px] md:w-[600px]">
            From simple websites to complex applications, we deliver tailored
            solutions designed to scale your business. We craft websites that
            are not just visually stunning but also powerful engines for growth.
            Let’s create applications that doesn’t just look good, but leaves
            your competition in the dust.
          </p>

          {/* <Link
            to="/contact-us"
            className="text-base font-medium text-white bg-blue-500 rounded-full px-7 md:px-12 py-4  hover:bg-blue-600 flex items-center justify-center gap-3"
          >
            Ready to get started →
          </Link> */}
        </div>

        {/* Create a separate background element */}
        <div
          className="background-image absolute inset-0 z-0"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1661856607957-32059f8428b2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4
          }}
        />
      </section>
      {/* <section className="flex flex-col-reverse md:flex-row h-[90vh] md:h-[85vh] mx-10 md:mx-[130px] items-center justify-center md:justify-between gap-5 bg-white ">
        <div className=" text-black flex flex-col gap-9 md:gap-12 items-center justify-center md:items-start">
          <h1 className="font-medium md:font-semibold text-[30px] sm:text-[40px] md:text-[50px] md:text-left w-full md:w-[530px] leading-snug md:leading-[62px] text-center">
            Expert Web & App Development
          </h1>

          <p className="text-center md:text-left mt-[-30px] w-[450px] md:w-[600px]">
            From simple websites to complex applications, we deliver tailored
            solutions designed to scale your business. We craft websites that
            are not just visually stunning but also powerful engines for growth.
            Let’s create applications that doesn’t just look good, but leaves
            your competition in the dust.
          </p>

          <Link
            to="/contact-us"
            className="text-base font-medium text-white bg-blue-500 rounded-full px-7 md:px-12 py-4  hover:bg-blue-600 flex items-center justify-center gap-3"
          >
            Ready to get started →
          </Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1661856607957-32059f8428b2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-[300px] md:h-[500px] md:w-[600px] object-cover rounded-xl shadow-lg"
        />
      </section> */}

      <section className="flex w-full flex-col md:flex-row items-center justify-center md:justify-between gap-5 bg-blue-500/30 py-14 md:py-20">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full">
          {books.slice(0, 3).map((book) => (
            <div className="flex flex-col items-center justify-center pt-12 pb-8 px-16 md:px-20 gap-7 bg-white rounded-2xl text-blue-900 round ed-xl">
              <img
                src={book.img}
                alt=""
                className="w-[220px] h-[260px] object-fit rounded-xl drop-shadow-lg"
              />
              <h4 className="font-medium text-[18px] md:text-[20px] md:w-[240px] leading-tight text-center w-[200px] line-clamp-2">
                {book.title}
              </h4>
              <p className="mt-[-15px] text-[12px] md:text-[14px] text-center w-[200px] line-clamp-3 md:w-[240px]">
                {book.summary}
              </p>
              <h4 className="font-bold text-[18px] leading-tight text-center w-[200px] line-clamp-2">
                <span className="font-light">Pricing From </span>
                {book.price}
              </h4>
              <Link
                to="/billing"
                onClick={() => setSelectedBook(book)}
                className="text-base font-medium text-white bg-blue-500 rounded-full px-7 md:px-8 py-2 md:py-3 hover:bg-blue-600 flex items-center justify-center gap-3"
              >
                Get Service
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="flex w-full flex-col items-center justify-center md:justify-between gap-[30px] bg-white py-14 md:py-20 px-10 md:px-[130px]">
        <div className="flex flex-col md:flex-row gap-[30px] w-full items-center justify-center">
          <Link
            to=""
            className="w-full sm:w-[660px] h-[334px] md:w-[760px] md:h-[396px] relative rounded-2xl cursor-pointer group"
          >
            <div className="absolute z-10 opacity-50 w-full h-full  bg-black rounded-2xl group-hover:opacity-60 transition-all"></div>

            <img
              src="https://images.ctfassets.net/5i1m3im8l2b5/4USD6n19mDElNYSVJGb3rS/de02a8a1774953e5429b6dfbadcb0dbf/offset-card-03.jpg?w=856&h=418&q=75&fm=webp&fit=fill"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute top-0 z-20 text-white flex flex-col gap-4 items-start justify-start ml-10 mt-10">
              <h4 className="text-sm leading-[14px] font-medium text-white bg-blue-500 rounded-md md:rounded-md px-[14px] py-[7px] flex items-center justify-center gap-3">
                Discovery & Planning
              </h4>

              <p className="font-light md:font-semibold text-[14px] md:text-[24px] w-full sm:w-[550px] md:w-[400px] leading-tight">
                We begin by understanding your business goals, target audience,
                and project requirements to create a comprehensive plan tailored
                to your needs.{" "}
              </p>
            </div>
          </Link>

          <Link
            to=""
            className="w-full sm:w-[660px] h-[334px] md:w-[470px] md:h-[396px] relative rounded-2xl cursor-pointer group"
          >
            <div className="absolute z-10 opacity-50 w-full h-full  bg-black rounded-2xl group-hover:opacity-60 transition-all"></div>

            <img
              src="https://images.ctfassets.net/5i1m3im8l2b5/1WN9uB05X2ieNVAR5n9UK4/218fda8193a361ca4c5f9e7ea4922ea4/offset-card-04.jpg?w=856&h=418&q=75&fm=webp&fit=fill"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute top-0 z-20 text-white flex flex-col gap-4 items-start justify-start ml-10 mt-10">
              <h4 className="text-sm leading-[14px] font-medium text-white bg-blue-500 rounded-md md:rounded-md px-[14px] py-[7px] flex items-center justify-center gap-3">
                Design & Prototyping
              </h4>

              <p className="font-medium md:font-semibold text-[14px] md:text-[24px] w-full sm:w-[550px] md:w-[400px] leading-tight">
                Our designers craft visually appealing and user-friendly
                prototypes, ensuring the design aligns with your brand and
                provides an excellent user experience.
              </p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-[30px] w-full items-center justify-center">
          <Link
            to=""
            className="w-full sm:w-[660px] h-[334px] md:w-[760px] md:h-[396px] relative rounded-2xl cursor-pointer group"
          >
            <div className="absolute z-10 opacity-50 w-full h-full  bg-black rounded-2xl group-hover:opacity-60 transition-all"></div>

            <img
              src="https://images.ctfassets.net/5i1m3im8l2b5/4USD6n19mDElNYSVJGb3rS/de02a8a1774953e5429b6dfbadcb0dbf/offset-card-03.jpg?w=856&h=418&q=75&fm=webp&fit=fill"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute top-0 z-20 text-white flex flex-col gap-4 items-start justify-start ml-10 mt-10">
              <h4 className="text-sm leading-[14px] font-medium text-white bg-blue-500 rounded-md md:rounded-md px-[14px] py-[7px] flex items-center justify-center gap-3">
                Development & Testing
              </h4>

              <h1 className="font-medium md:font-semibold text-[14px] md:text-[24px] w-full sm:w-[550px] md:w-[400px] leading-tight">
                We develop your website using the latest technologies, followed
                by rigorous testing to ensure functionality, performance, and
                compatibility across all devices.
              </h1>
            </div>
          </Link>

          <Link
            to=""
            className="w-full sm:w-[660px] h-[334px] md:w-[760px] md:h-[396px] relative rounded-2xl cursor-pointer group"
          >
            <div className="absolute z-10 opacity-50 w-full h-full  bg-black rounded-2xl group-hover:opacity-60 transition-all"></div>

            <img
              src="https://images.ctfassets.net/5i1m3im8l2b5/1WN9uB05X2ieNVAR5n9UK4/218fda8193a361ca4c5f9e7ea4922ea4/offset-card-04.jpg?w=856&h=418&q=75&fm=webp&fit=fill"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute top-0 z-20 text-white flex flex-col gap-4 items-start justify-start ml-10 mt-10">
              <h4 className="text-sm leading-[14px] font-medium text-white bg-blue-500 rounded-md md:rounded-md px-[14px] py-[7px] flex items-center justify-center gap-3">
                Launch & Maintenance
              </h4>

              <h1 className="font-medium md:font-semibold text-[14px] md:text-[24px] w-full sm:w-[550px] md:w-[400px] leading-tight">
                After final approval, we launch your site and provide ongoing
                support and maintenance to keep it updated and running smoothly.
              </h1>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
