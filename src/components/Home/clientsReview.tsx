import { clientReviews } from "@/constants";
import InfiniteSlider from "../Sliders/InfiniteSlider";
import reviewImg1 from "../../../public/assets/review-images/images1.jpeg";
import reviewImg2 from "../../../public/assets/review-images/images2.jpeg";
import reviewImg3 from "../../../public/assets/review-images/images3.jpeg";
import reviewImg4 from "../../../public/assets/review-images/images4.jpeg";
import reviewImg5 from "../../../public/assets/review-images/images5.jpeg";
import reviewImg6 from "../../../public/assets/review-images/Client009.png";
import Image from "next/image";

export default function ClientsReviewComponent() {
  return (
    <section className="client-review-container">
      <div className="client-review-body">
        <div className="client-review-big-circle">
          <div className="client-review-big-circle-inside">
            <div className="client-review-profile-block-outside">
              <Image src= {reviewImg1.src} alt="Clients reviews about the MappOptimist Technologies"></Image>
            </div>
            <div className="client-review-profile-block-outside">
              <Image src={reviewImg2.src} alt="Clients reviews about the MappOptimist Technologies" />
            </div>
            <div className="client-review-profile-block-outside">
              <Image src={reviewImg3.src} alt="Clients reviews about the MappOptimist Technologies" />
            </div>
          </div>
        </div>
        <div className="client-review-circle">
          <div className="client-review-profile-block">
            <Image src={reviewImg4.src} alt="Clients reviews about the MappOptimist Technologies" />
          </div>
          <div className="client-review-profile-block">
            <Image src={reviewImg5.src} alt="Clients reviews about the MappOptimist Technologies" />
          </div>
          <div className="client-review-profile-block">
            <Image src={reviewImg6.src} alt="Clients reviews about the MappOptimist Technologies" />
          </div>
        </div>
        <div className="center-logo">
          <h1>What clients say about us?</h1>
        </div>
      </div>
      <div className="client-review-slider">
        <InfiniteSlider speed={1}>
          <>
            {clientReviews?.map((item: { name: string, comment: string, img: { src: string } }, index) => (
              <div key={`company-reviews-${item?.name}-${index}`} className="py-4">
                <div className="reviewer-comment-container">
                  <h3 className="reviewer-comment-name">{item?.name}</h3>
                  <p className="reviewer-comment-description">{item?.comment}</p>
                  <div className="reviewer-profile">
                    <Image src={item?.img?.src} height="48" width="48" alt={item?.name + " " + item?.comment} />
                  </div>
                </div>
              </div>
            ))}
          </>
        </InfiniteSlider>
      </div>
    </section>
  );
}