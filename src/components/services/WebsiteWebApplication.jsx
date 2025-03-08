import React,{useEffect} from "react";
import Footer from "../Footer";
import websiteandweb from "../../assets/websiteandweb.jpg";
import website1 from '../../assets/website1.jpg'
import website2 from '../../assets/website2.jpg'
import website from '../../assets/website.jpg'
const WebsiteWebApplication = () => {
  useEffect(() => {
      // Scroll to the top of the page on mount
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  const WebData = [
    {
      title: "Responsive Web Design",
      description:
        "In today's mobile-first world, having a website that works seamlessly on any device is crucial. Our responsive web design services ensure that your website is accessible and functional on any screen size, from smartphones to desktops.",
    },
    {
      title: "Interactive Web Designing",
      description:
        "We believe that websites should be more than just pretty pictures - it should engage and delight your audience. Our interactive web design services focus on creating memorable user experiences that keep visitors engaged and coming back for more",
    },
    {
      title: "E-commerce Website Development",
      description:
        "Our e-commerce solutions help businesses of all sizes sell their products and services online. We'll design and develop an online store that's tailored to your needs and easy for customers to use, with features like secure payment processing and inventory management.",
    },
    {
      title: "Search Engine Optimization",
      description:
        "Search engine optimization (SEO) is critical for improving your website's visibility and ranking on search engine results pages (SERPs). Our SEO services help you attract more organic traffic to your website and improve your overall online presence.",
    },
    {
      title: "Content Management System",
      description:
        "Managing website content can be a hassle, but with our custom CMS solutions, it doesn't have to be. We'll design and develop a CMS that makes it easy for you to add, edit, and publish content on your website. B2B platform",
    },
    {
      title: "B2B Platforms",
      description:
        "If you're looking to connect with other businesses and grow your network, our B2B platform services can help. We'll design and develop a platform that's easy for businesses to use and navigate, with features like messaging and user profiles",
    },
    {
      title: "ERP / CRM",
      description:
        "We help businesses to manage their operations and customer interactions more effectively. We'll design and develop a custom solution that meets your specific needs and streamlines your workflow.",
    },
    {
      title: "Backend Solutions",
      description:
        "We understand that behind every great website is a powerful backend infrastructure. Our backend solutions ensure that your website's backend is robust, secure, and scalable, with features like database management and server optimization.",
    },
    {
      title: "Corporate Websites",
      description:
        "A professional and engaging online presence is crucial for businesses to stand out in a crowded market. Our corporate website designing services help you create a website that reflects your brand's personality, values, and goals.",
    },
  ];

  const ChooseUsList = [
    {
      titile: "Customer-Centric Approach",
      description:
        "Our solutions are tailored to meet client needs, ensuring personalized support and ongoing enhancements.",
    },
    {
      titile: "Innovative IT Solutions",
      description:
        "Our cutting-edge software solutions empower hospitals, pharmacies, schools, and businesses with seamless digital management.",
    },
    {
      titile: "Customizable & Scalable Platforms",
      description:
        "Every institution is unique — that's why our software adapts to your specific needs, whether it's healthcare, education, or retail.",
    },
    {
      titile: "Exceptional Support & Maintenance",
      description:
        "Our dedicated customer support team ensures smooth software implementation and continued assistance.",
    },
    {
      titile: "Data Security & Compliance",
      description:
        "Built with robust security features to protect sensitive data and maintain industry compliance.",
    },
    {
      titile: "Cost-Effective Solutions",
      description:
        "Affordable options tailored to fit businesses of every size without compromising quality.",
    },
    {
      titile: "User-Friendly Interfaces",
      description:
        "Designed with simplicity and efficiency in mind, our platforms provide intuitive experiences for every user.",
    },
    {
      titile: "End-to-End Solutions",
      description:
        "From initial setup to post-implementation support, we provide comprehensive services for seamless operations.",
    },
  ];

  const processList = [
    {
      titile: "Discovery Phase",
      description:
        "During the discovery phase, we work closely with our clients to understand their business objectives and gather project requirements. We identify the target audience and user personas, and conduct extensive research on industry trends and competitor websites to gain insights and ideas.",
      img: "img",
    },
    {
      titile: "Planning Phase",
      description:
        "In the planning phase, we create a sitemap to organise website content and develop wireframes to outline the website's structure and layout. We define the website's visual identity, including the colour palette and typography.",
      img: "img",
    },
    {
      titile: "Design Phase",
      description:
        "The design phase involves creating mockups and prototypes of the website design, based on the wireframes and visual identity defined in the planning phase. We refine the design based on feedback from stakeholders and obtain final approval of the website design.",
      img: "img",
    },
    {
      titile: "Development Phase",
      description:
        "In the development phase, our team of developers code the website using HTML, CSS, and JavaScript. We implement the content management system (CMS) and database, and conduct rigorous testing to ensure the website is functional and user-friendly.",
      img: "img",
    },
    {
      titile: "Launch Phase",
      description:
        "Once the website is complete, we deploy it on the hosting server, conduct final testing and debugging, and launch the website. We also provide maintenance and support services to ensure the website remains secure and functional.",
      img: "img",
    },
    {
      titile: "Maintenance Phase",
      description:
        "In the maintenance phase, we provide ongoing support and maintenance services to ensure the website remains secure and up-to-date. We perform regular updates to the website's content, plugins, and security features, and conduct regular backups to ensure data is protected.",
      img: "img",
    },
  ];

  return (
    <div className="pt-[100px] flex flex-col justify-center items-center">
      <section className="max-w-[1400px] mx-auto w-full mb-20 px-4">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="w-full h-[300px] md:h-[600px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333] backdrop-blur-3xl rounded-3xl">
            <div className="rounded-3xl w-full h-full bg-[#000] overflow-hidden">
              <img
                src={websiteandweb}
                alt="websiteandweb"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl h-[200px] md:h-[300px] w-full">
              <div className="rounded-3xl w-full h-full bg-[#000] overflow-hidden">
                <img
                  src={website}
                  alt="website"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl h-[200px] md:h-[300px] w-full">
              <div className="rounded-3xl w-full h-full bg-[#000] overflow-hidden">
                <img
                  src={website1}
                  alt="website1"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl h-[200px] md:h-[300px] w-full">
              <div className="rounded-3xl w-full h-full bg-[#000] overflow-hidden">
                <img
                  src={website2}
                  alt="website2"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto w-full mb-20 px-4">
        <div className="flex flex-col gap-5 mb-10 text-center md:text-left">
          <div className="text-[#fff] text-[30px] md:text-[50px] textGradient4 leading-tight text-center">
            Best Web Design and Development
            <span className="block">Company Wayanad, Kerala</span>
          </div>
          <div className="max-w-[900px] text-[#fff] textGradient6 mx-auto text-center">
            As a leading web design and development company in Wayanad, Kerala,
            India, IMC Business Solutions specializes in creating custom web
            solutions that help businesses of all sizes succeed online. We
            understand that your website is your business's online face, and we
            work hard to make sure it makes a lasting impression on your
            visitors.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
          {WebData.map((item, index) => (
            <div
              key={index}
              className="w-full h-[250px] md:h-[300px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333] backdrop-blur-3xl rounded-3xl"
            >
              <div className="rounded-3xl w-full h-full bg-[#000] p-5">
                <div className="text-[#fff] text-lg md:text-xl textGradient mb-3 font-black text-center pt-10">
                  {item.title}
                </div>
                <div className="textGradient6 text-[#fff] text-sm md:text-base">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20 max-w-[1400px] w-full mx-auto px-4">
        <div>
          <div className="text-[#fff] text-[30px] md:text-[50px] textGradient4 text-center mb-5">
            Why Choose Us?
          </div>
          <div className="text-center max-w-[900px] mx-auto text-[#fff] textGradient6 mb-10">
            We offer innovative, scalable IT solutions tailored for healthcare,
            education, and business sectors. Our user-friendly platforms and
            dedicated support ensure seamless operations and lasting success.
          </div>

          <div className="flex flex-col gap-2">
            {ChooseUsList.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Background Glow */}
                <div className="absolute w-[300px] h-[150px] bg-gradient-to-r from-[#ffdd9e] to-[#ffffff] blur-3xl opacity-50"></div>

                {/* Content Box */}
                <div
                  className="relative max-w-[600px] p-6 rounded-[30px] bg-[#000] shadow-2xl border border-[#ffdd9e] 
          transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,221,158,0.5)]"
                >
                  <h3 className="text-lg font-bold textGradient mb-2">
                    {item.titile}
                  </h3>
                  <p className="textGradient">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#fff] py-10">
        <Footer />
      </section>
    </div>
  );
};

export default WebsiteWebApplication;
