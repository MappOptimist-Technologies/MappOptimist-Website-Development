"use client"
import InfiniteSlider from "../Sliders/InfiniteSlider";
export default function CompanyListSliderComponent() {
  const data = [
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" },
    { url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" }
  ];
  return (
    <section className="company-list-slider-container">
      <InfiniteSlider speed={1}>
        {data.map((item, index) => (
          <div key={`company-${item.url}-${index}`} className="slide">
            <img loading="lazy" src={item.url} height="100" width="250" alt={`Company ${index}`} />
          </div>
        ))}
      </InfiniteSlider>
    </section>
  );
}