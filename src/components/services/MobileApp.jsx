import React,{useEffect} from 'react'
import Footer from '../Footer'
import mobileapp from '../../assets/mobileapp1.jpeg'
import app1 from '../../assets/app1.jpg'
import app2 from '../../assets/app2.jpg'
import app from '../../assets/app.jpg'
const MobileApp = () => {
  useEffect(() => {
      // Scroll to the top of the page on mount
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  const MobileAppData = [
    { title: "Custom Mobile App Development", description: "We design and develop mobile apps tailored to meet the unique needs of your business. From user interfaces to backend systems, we build apps that provide seamless experiences." },
    { title: "Cross-Platform App Development", description: "Our cross-platform mobile app development ensures that your app works flawlessly on both Android and iOS, saving time and cost while maintaining high performance." },
    { title: "Mobile App UI/UX Design", description: "We focus on creating intuitive and engaging user interfaces and experiences that ensure your mobile app stands out and provides users with a smooth, enjoyable journey." },
    { title: "Mobile App Integration", description: "We integrate mobile apps with your existing systems, enabling seamless communication between platforms and delivering a cohesive experience across all touchpoints." },
    { title: "Mobile App Testing", description: "We conduct thorough testing for every mobile app we build, ensuring that the app functions smoothly, with no bugs or performance issues, across all devices and platforms." },
    { title: "App Maintenance and Support", description: "Our post-launch services include ongoing maintenance and support to keep your app updated, secure, and running efficiently, providing you peace of mind." },
    { title: "App Security Features", description: "We prioritize security in mobile app development, implementing robust encryption, authentication, and data protection features to safeguard your app and user information." },
    { title: "App Store Optimization (ASO)", description: "Our ASO services help your app gain visibility and rank higher in app stores, optimizing keywords, metadata, and visuals to attract more downloads and users." },
    { title: "Mobile App Analytics", description: "We integrate advanced analytics into your mobile app, enabling you to track user behavior, app performance, and make data-driven decisions for continuous improvement." },

  ]


  const ChooseUsList = [
    { titile : "Customer-Centric Approach", description : "We put your business goals and users at the center of everything we do. Our solutions are tailored to meet your specific needs, ensuring seamless experiences and ongoing improvements."},
    { titile : "Innovative Mobile Solutions", description : "We leverage the latest technologies to create cutting-edge mobile apps that empower your business, offering smart, scalable, and future-proof solutions for all industries."},
    { titile : "Customizable & Scalable Platforms", description : "We understand that each business is unique. Our mobile apps are designed to be flexible, scalable, and customizable to meet your evolving business needs as you grow."},
    { titile : "End-to-End Mobile Solutions", description : "From initial app concept to post-launch maintenance, we provide complete mobile app development services to ensure your app remains secure, updated, and effective long-term."},
    { titile : "Dedicated Support & Maintenance", description : "We offer continuous support and maintenance, ensuring that your app runs smoothly and is always up-to-date with the latest features and security enhancements."},

    { titile : "Expert Development Team", description : "Our skilled development team excels in creating high-performance mobile apps for Android, iOS, and cross-platform solutions. We ensure smooth functionality and optimal performance, no matter the device."},

    { titile : "On-Time Delivery", description : "We value your time. Our development process is streamlined to ensure that your mobile app is delivered within the agreed timeframe, without compromising quality."},

  ]

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
        "In this phase, we map out the app's functionalities, define the user experience (UX) flow, and create wireframes to outline the app’s structure and key features. We also finalize the app's visual design, ensuring alignment with your brand identity.",
      img: "img",
    },
    {
      titile: "Design Phase",
      description:
        "We develop the app’s visual design, focusing on an intuitive user interface (UI) and seamless experience. Our team creates interactive prototypes and refines the design based on your feedback. The goal is to ensure that the design is both functional and visually appealing to your users.",
      img: "img",
    },
    {
      titile: "Development Phase",
      description:
        "In the development phase, we bring the app to life by coding it with the latest technologies. Our skilled developers use frameworks and tools to create high-performance mobile apps, whether for Android, iOS, or both. We ensure that the app is secure, fast, and capable of delivering a smooth user experience.",
      img: "img",
    },
    {
      titile: "Launch Phase",
      description:
        "Once the app is developed, we prepare for launch. We test the app thoroughly to eliminate any bugs, ensure compatibility with multiple devices, and perform final quality assurance checks. We then deploy the app to app stores, ensuring a smooth release and visibility.",
      img: "img",
    },
    { titile: "Maintenance Phase", description: "Post-launch, we provide ongoing support and maintenance services. We ensure that the app is updated regularly, fix any issues that arise, and offer continuous improvements to meet evolving user needs and keep the app up-to-date with the latest OS versions", img: "img" },
   
  ];
  return (
    <div className="pt-[150px] flex flex-col justify-center items-center">
      {/* intro */}
      <section className="max-w-[1400px] mx-auto w-full mb-20 px-4">
        <div>
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="w-full h-[300px] md:h-[600px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333] backdrop-blur-3xl rounded-3xl">
              <div className="rounded-3xl w-full h-full bg-[#000] overflow-hidden">
                <img
                  src={mobileapp}
                  alt="mobileapp"
                  className="w-full h-full rounded-3xl object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
              <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl h-[200px] md:h-[300px] w-full">
                <div className="rounded-3xl w-full h-full bg-[#000] overflow-hidden">
                  <img
                    src={app}
                    alt="app"
                    className="w-full h-full rounded-3xl object-cover"
                  />
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl h-[200px] md:h-[300px] w-full">
                <div className="rounded-3xl w-full h-full bg-[#000] overflow-hidden">
                  <img
                    src={app1}
                    alt="app1"
                    className="w-full h-full rounded-3xl object-cover"
                  />
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl h-[200px] md:h-[300px] w-full">
                <div className="rounded-3xl w-full h-full bg-[#000] overflow-hidden">
                  <img
                    src={app2}
                    alt="app2"
                    className="w-full h-full rounded-3xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* mobile app DEVELOPMENT */}
      <section className="max-w-[1400px] mx-auto w-full mb-20 px-4">
        <div>
          <div className="flex flex-col gap-5 mb-10 text-center">
            <h2 className="text-[#fff] text-[30px] sm:text-[40px] lg:text-[50px] textGradient4 leading-tight">
              MOBILE APP DEVELOPMENT
            </h2>
            <p className="text-[#fff] textGradient6">
              In today's fast-paced world, every entrepreneur seeks real-time
              insights into their business. That's why mobile solutions have
              become essential. We are committed to delivering affordable,
              high-quality mobile applications while also offering tailored
              solutions designed to meet unique business needs and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MobileAppData.map((item) => (
              <div className="w-full h-[220px] md:h-[200px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] backdrop-blur-3xl rounded-3xl">
                <div className="rounded-3xl w-full h-full bg-[#000] p-5">
                  <h3 className="text-[#fff] text-xl textGradient mb-3 font-black">
                    {item.title}
                  </h3>
                  <p className="textGradient6 text-[#fff]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* why choose */}
      <section className="mb-20 max-w-[1400px] w-full mx-auto px-4">
        <div>
          <h2 className="text-[#fff] text-[30px] sm:text-[40px] lg:text-[50px] textGradient4 text-center mb-5">
            Why Choose Us?
          </h2>
          <p className="text-center max-w-[900px] mx-auto text-[#fff] textGradient6 mb-10">
            At IMC Business Solutions, we specialize in creating innovative,
            user-friendly mobile applications that deliver exceptional user
            experiences. Here's why you should choose us for your mobile app
            development needs:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {ChooseUsList.map((item) => (
              <div className="w-full h-[215px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] backdrop-blur-3xl rounded-3xl">
                <div className="rounded-3xl w-full h-full bg-[#000] p-5">
                  <h3 className="text-[#fff] mb-3 textGradient text-xl font-bold">
                    {item.titile}
                  </h3>
                  <p className="text-[#fff] textGradient">{item.description}</p>
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
}

export default MobileApp
