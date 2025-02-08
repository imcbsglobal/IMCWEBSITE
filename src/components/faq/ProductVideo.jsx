import React,{useEffect} from 'react'

const ProductVideo = () => {
  useEffect(() => {
      // Scroll to the top of the page on mount
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div>
      <div className="h-[700px] w-[1400px] mt-32 ">
        <div className="text-center text-[50px] textGradient4">
          PRODUCT DEMONSTRATION
        </div>
        <div className="text-white text-center flex items-center justify-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
          voluptates architecto nisi sint sunt maxime eos nobis assumenda optio
          quibusdam? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Quia quae molestias nam, doloribus, alias accusantium eaque fuga rem
          dolorem corrupti nihil quam perferendis error in assumenda tenetur
          atque deserunt sunt cupiditate optio? In ab mollitia ex sed ducimus
          similique, inventore eum accusantium assumenda officia, corrupti,
          saepe illum fugiat veniam dolore!
        </div>
      </div>
    </div>
  );
}

export default ProductVideo
