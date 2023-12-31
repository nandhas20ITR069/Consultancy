import React from "react";

const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4  ">
      <br />
      <br />
      <p style={{ fontSize: "40px" }} className="text-bblue">
        <b>Bringing Convenience Straight To Your Homes!!!</b>
      </p>
      <br />
      <div className="flex flex-col lg:flex-row justify-between gap-8  transition  duration-75 ">
        <div
          className="w-full lg:w-5/12 flex flex-col justify-center "
          style={{
            position: "relative",
            transition: "2s  width 2s, height 4s",
          }}
        >
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            About Us
          </h1>
          <p className="font-normal text-base leading-8 text-gray-600 ">
            Vinayaga Agency was Established in the year 2007. The aim
            of the company is to provide good quality products . The product
            range includes pesticides company product like Glycel, Quit, SumiGold, Gunther, 
            Hijack etc..,and Seeds.The goods are available at the low cost and with high
            quaility.
          </p>
          <br />
          <p>
            {" "}
            <b>Living Doesn't Have To Be Hard.</b>
          </p>
        </div>
        <div className="w-full lg:w-6/12">
          <img
            className="w-full h-full"
            src="https://static.businessworld.in/article/article_extra_large_image/1594113196_DUYgeA_Agritech_FINAL.jpg"
            alt="A group of Products"
          />
        </div>
      </div>
      <br />
      <br />

      <div>
        <br />

        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <div className="rounded overflow-hidden shadow-lg hover:shadow-xl">
            <img
              className="w-full transform h-64 bg-blue-400 w-100   transition duration-500 hover:scale-125  hover:bg-blue-600 flex justify-center items-center"
              src="https://media.istockphoto.com/id/524541622/photo/new-life-growing-before-blackboard.jpg?s=612x612&w=0&k=20&c=N-DB-miHcenHdpQsmYPZNP-vxUk_GXIUx5_g6TTgjOo="
              alt="Mountain"
            />
            <div className="px-6 py-9 ">
              <div className="font-bold text-xl mb-2">
                Plant To Grow 
              </div>

              {/* <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p> */}
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>

          <div className="rounded overflow-hidden shadow-lg hover:shadow-2xl">
            <img
              className="w-full transform h-64 bg-blue-400 w-100 transition duration-500 hover:scale-125  hover:bg-blue-600 flex justify-center items-center"
              src="https://site.samunnati.com/wp-content/uploads/2022/03/unlocking-agri-sector.jpg"
              alt="River"
            />
            <div className="px-6 py-9">
              <div className="font-bold text-xl mb-2">
                Doctor Of Plant
              </div>
              {/* <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p> */}
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #brand
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #innovation
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #inspiration
              </span>
            </div>
          </div>

          <div className="rounded overflow-hidden shadow-lg hover:shadow-2xl">
            <img
              className="w-full transform h-64 bg-blue-400 w-100 transition duration-500 hover:scale-125  hover:bg-blue-600 flex justify-center items-center"
              src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
              alt="Forest"
            />
            <div className="px-6 py-9">
              <div className="font-bold text-xl mb-2">Have To Eat</div>
              {/* <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p> */}
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #life_hacks
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #social_value
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tips
              </span>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div>
        <div className="w-full  flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Our Goals
          </h1>
          <br />
          <p className="font-normal text-base leading-6 text-gray-600 ">
            Our Good and Green philosophy emanates from a strong belief in the
            value of the triple bottom line - protection of people and the
            planet while creating value for shareholders.
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            <br />
            <pre> </pre>
            {/* <hr /> */}
            <p>
              {" "}
              <b>Living Doesn't Have To Be Hard.</b>
            </p>
            {/* <hr /> */}
            <br /> <br />
            We strive to deliver the greatest possible customer benefit through
            our products and services with the highest safety standards, minimal
            adverse environmental impact and optimum social compatibility.{" "}
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <center>
        <div className="w-full lg:w-8/12 lg:pt-8 scale-75 transition duration-500 hover:scale-100">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4  rounded-md">
            <div className="p-1 pb-2 h-1 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVyN0UzuuH0BtzxabGzH9QKpguiNR87Cwcg&usqp=CAU"
                alt="Alexa featured Img"
              />
              <img
                className="md:hidden block"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVyN0UzuuH0BtzxabGzH9QKpguiNR87Cwcg&usqp=CAU"
                alt="Alexa featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Quality
              </p>
            </div>
            <div className="p-7 pb-2 h-0.10  flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp3LXUVMFamOWqApEj0Q8EbFlnP1kbe8RcQ&usqp=CAU"
                alt="Olivia featured Img"
              />
              <img
                className="md:hidden block"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp3LXUVMFamOWqApEj0Q8EbFlnP1kbe8RcQ&usqp=CAU"
                alt="Olivia featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Assurance
              </p>
            </div>
            <div className="p-0 pb-2 h-1 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDyaG28oOricgvCtIXN9KgLUJOpdeLtyMrYg&usqp=CAU"
                alt="Liam featued Img"
              />
              <img
                className="md:hidden block"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDyaG28oOricgvCtIXN9KgLUJOpdeLtyMrYg&usqp=CAU"
                alt="Liam featued Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Trust
              </p>
            </div>
            <div className="p-1 pb-2 h-0.25  flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMsmNLJIvVAfSl0BcVN2y8v6UCQs5OnfO7vQ&usqp=CAU"
                alt="Elijah featured img"
              />
              <img
                className="md:hidden block"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMsmNLJIvVAfSl0BcVN2y8v6UCQs5OnfO7vQ&usqp=CAU"
                alt="Elijah featured img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Optimize
              </p>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default About;
