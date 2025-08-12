// import React from "react";
// import Slider from "react-slick";

// const testimonialData = [
//   {
//     id: 1,
//     name: "Emi amalia",
//     text: "Ini sangat membatu saya dalam membuat logo sacco untuk kompetisi yang mau kami buat untuk logo nya juga keren dinamis dan simpel tapi elegan.",
//     img: "",
//   },
//   {
//     id: 1,
//     name: "rudy",
//     text: "Untuk website tim basket sudah cukup bagus sesuai apa yang saya ingin kan keren.",
//     img: "",
//   },
//   {
//     id: 1,
//     name: "Anna",
//     text: "Saya order desain flyer media sosial menurut saya suda cukup baik dari segi desain da penggunaan onjek2 sangat bagus!",
//     img: "",
//   },
// ];

// const Testimonial = () => {
//   var settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//     pauseOnHover: true,
//     pauseOnFocus: true,
//   };
//   return (
//     <>
//       <div data-aos="fade-up" data-aos-duration="300" className="py-10">
//         <div className="container">
//           <div className="text-center mb-20 max-w-[400px] mx-auto">
//             <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-editprimary to-editsecondary">
//               Testimoni
//             </p>
//             <h1 className="text-3xl font-bold">Testimonial</h1>
//             <p className="text-xs text-gray-400">
//               Berikut merupakan beberapa testimoni dari client kami
//             </p>
//           </div>
//           <div
//             data-aos="zoom-in"
//             data-aos-duration="300"
//             className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
//           >
//             <Slider {...settings}>
//               {testimonialData.map((data) => {
//                 return (
//                   <div className="my-6">
//                     <div
//                       key={data.id}
//                       className="flex flex-col justify-center items-center gap-4 text-center   shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
//                     >
//                       <img
//                         className="rounded-full block mx-auto"
//                         src={data.img}
//                         alt=""
//                       />
//                       <p className="text-gray-500 text-sm">{data.text}</p>
//                       <h1 className="text-xl font-bold">{data.name}</h1>
//                       <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
//                         ,,
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Testimonial;
