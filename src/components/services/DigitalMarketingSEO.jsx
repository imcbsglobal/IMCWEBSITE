import React ,{useEffect}from 'react'
import digi from "../../assets/digi.png"
import digi1 from "../../assets/dig1.png"
import Footer from '../Footer'
import decision from '../../assets/decision.jpeg'
import customereg from '../../assets/customereg.jpeg'
import seo from '../../assets/seo.jpg'
import seo1 from '../../assets/seo2.jpg'
const DigitalMarketingSEO = () => {
  useEffect(() => {
      // Scroll to the top of the page on mount
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  const data = [
    { label: "Increased Website Traffic:", value: "Boosts organic search visibility, driving more potential customers to your site." },
    { label: "Improved User Experience", value: "Enhances website usability with faster loading times, mobile-friendly design, and better navigation." },
    { label: "Higher Credibility and Trust:", value: "Appearing at the top of search results builds brand authority and consumer trust." },
    { label: "Cost-Effective Marketing", value: "Reduces dependency on paid ads by generating consistent organic traffic." },
    { label: "Better Conversion Rates:", value: "Targets highly relevant audiences, increasing engagement and sales conversions" },
   
  ];
  return (
    <div className="pt-[150px] flex flex-col justify-center items-center">
      <section className="max-w-[1400px] mx-auto">
        <div>
          <div className="text-[#fff] text-[50px] textGradient4 mb-5 text-center leading-tight">
            Digital Marketing And SEO{" "}
            <span className="block">A Glimpse of Success</span>
          </div>
          <div className="textGradient6 text-[#fff] text-center max-w-[700px] mb-10 mx-auto">
            Harness the power of Digital Marketing and SEO to elevate your
            brand’s online presence. Our integrated approach blends targeted
            campaigns with optimized SEO strategies to drive traffic and enhance
            visibility. From boosting social media engagement to improving
            search rankings, we provide the expertise to help you succeed.
          </div>
        </div>
      </section>

      <section className="mb-20 max-w-[1400px] mx-auto">
        <div>
          <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="h-[500px] w-[350px] p-2 rounded-3xl relative lg:pt-10 flex flex-col justify-center items-center SEOBox">
              <div className="absolute top-0 h-[300px] w-full flex justify-center items-center z-20">
                <img
                  src={digi1}
                  className="w-full h-full object-cover drop-shadow-sm"
                  alt=""
                />
              </div>
              <div className="w-full h-full bg-[#643d3d] rounded-3xl relative">
                <div className="w-full bg-[#fff] p-5 z-30 absolute bottom-32 text-center textGradient5 font-bold">
                  Integrated Digital Campaigns
                </div>
                <div className="absolute bottom-5 textGradient6 text-[#ffff] px-2 text-center">
                  Leverage targeted digital marketing campaigns across platforms
                  to reach your ideal audience and boost brand awareness. Our
                  campaigns are designed to engage, convert, and drive
                  measurable results.
                </div>
              </div>
            </div>

            <div className="h-[550px] w-[400px] p-2 rounded-3xl relative pt-10 flex flex-col justify-center items-center SEOBox mt-[150px]">
              <div className="absolute top-0 h-[380px] w-full flex justify-center items-center z-20">
                <img
                  src={digi}
                  className="w-full h-full object-contain drop-shadow-sm"
                  alt=""
                />
              </div>
              <div className="w-full h-full bg-[#643d3d]  rounded-3xl relative">
                <div className="w-full bg-[#fff]   p-5 z-30 absolute bottom-28 text-center textGradient5 font-bold">
                  Optimized SEO Strategies
                </div>
                <div className="absolute bottom-5 textGradient6 text-[#ffff] px-2 text-center">
                  Improve your website’s search engine ranking with our SEO
                  expertise. We focus on optimizing your website to increase
                  visibility, attract more organic traffic, and ensure long-term
                  growth.
                </div>
              </div>
            </div>

            <div className="h-[500px] w-[350px] p-2 rounded-3xl relative pt-10 flex flex-col justify-center items-center SEOBox">
              <div className="absolute top-0 w-full h-[300px] flex justify-center items-center z-20">
                <img
                  src={digi1}
                  className="w-full h-full object-cover drop-shadow-sm"
                  alt=""
                />
              </div>
              <div className="w-full h-full bg-[#643d3d] rounded-3xl relative">
                <div className="w-full bg-[#fff] p-5 z-30 absolute bottom-32 text-center textGradient5 font-bold">
                  Comprehensive Online Success
                </div>
                <div className="absolute bottom-5 textGradient6 text-[#ffff] px-2 text-center">
                  Achieve a strong online presence with our tailored approach,
                  combining SEO and digital marketing to boost social media
                  engagement and search engine performance.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 max-w-[1400px] w-full mx-auto">
        <div>
          <div className="textGradient4 mb-5 text-[#fff] text-[50px] text-center leading-tight">
            How The Digital Works To{" "}
            <span className="block">Grow Your Business</span>
          </div>
          <div className="text-center max-w-[700px] mx-auto text-[#fff] textGradient6 mb-10">
            Digital technologies play a vital role in transforming traditional
            business models and driving growth by enhancing customer
            experiences, optimizing operations, and enabling innovative
            services. For businesses in sectors like healthcare, education, and
            IT services, embracing digital tools is essential for remaining
            competitive.
          </div>

          <div className="md:flex justify-center items-center w-full gap-5 max-w-[1000px] mx-auto">
            <div className="md:w-[50%] h-[500px] w-full pt-20 px-2 lg:px-6">
              <div className="text-[#fff] textGradient6 mb-5 text-lg">
                <b>Enhanced Customer Engagement:</b> Strengthening customer
                relationships through real-time interactions, personalized
                experiences, and improved communication across digital
                platforms.
              </div>
              <div className="w-full h-full">
                <img
                  className="h-full w-full object-cover"
                  src={customereg}
                  alt="customereg"
                />
              </div>
            </div>
            <div className="md:w-[50%] h-[500px] px-2 lg:px-6">
              <div className="text-[#fff] textGradient6 mb-5 text-lg">
                <b>Data-Driven Decision Making:</b> Leveraging analytics to
                gather insights for informed decisions, optimizing strategies,
                and enhancing business performance.
              </div>
              <div className="w-full h-full">
                <img
                  className="h-full w-full object-cover"
                  src={decision}
                  alt="decision"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10 max-w-[1400px] w-full mx-auto pt-20">
        <div>
          <div className="flex justify-between w-full mb-10">
            <div className="textGradient4 text-[45px] md:w-[60%] text-[#fff] leading-tight">
              Maximize Online Visibility{" "}
              <span className=" block">with SEO</span>
            </div>
            <div className="md:w-[40%] text-[#fff] textGradient6">
              SEO (Search Engine Optimization) helps improve your website’s
              visibility on search engines, driving more organic traffic. It
              focuses on optimizing content, keywords, and technical elements to
              rank higher.SEO not only boosts your website traffic but also
              enhances brand credibility and user experience.
            </div>
          </div>
          <div className="flex justify-center items-center gap-5 w-full">
            <div className="w-[70%] h-[300px] bg-[#fff] rounded-3xl">
              <img
                src={seo1}
                alt="seo"
                className="h-full w-full rounded-3xl object-cover "
              />
            </div>
            <div className="w-[30%] h-[300px] bg-[#fff] rounded-3xl">
              <img
                src={seo}
                alt="seo1"
                className="h-full w-full rounded-3xl object-cover "
              />
            </div>
          </div>
        </div>
      </section>
      {/* benefits of seo and digital marketing */}
      <section className="mb-10 max-w-[1400px] w-full mx-auto pt-10">
        <div className="min-h-screen flex items-center justify-center  p-4">
          <div className="w-full  shadow-xl rounded-2xl p-8">
            <h1 className=" font-bold text-white mb-6 textGradient4 text-[50px] text-center">
              Unlocking the Key Benefits of SEO for Business Growth
            </h1>
            <table className="w-full border-collapse">
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="border-b last:border-none">
                    <td className="py-4 px-2 text-white font-semibold w-1/2">
                      {item.label}
                    </td>
                    <td className="py-4 px-2 text-white">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#fff] py-10">
        <Footer />
      </section>
    </div>
  );
}

export default DigitalMarketingSEO
