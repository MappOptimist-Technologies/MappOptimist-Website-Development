import React from "react";
import Navbar from "@/components/header/navbar";
import Footer from "@/components/Home/footer";
import Link from "next/link";
import Image from "next/image";


const data = [
  {
    title: "Semiconductor Chip : The Backbone of Modern Technology",
    slug: "Semiconductor-Chip-The-Backbone-of-Modern-Technology",
    icon: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1753860530/blog_1_zjgwfm.jpg",
  },
  {
    title:
      "Understanding AI and Generative AI: Transforming Computer Programming",
    slug: "Understanding-AI-and-Generative-AI-Transforming-Computer-Programming",
    icon: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1753860529/blog_2_xhuim6.webp",
  },
  {
    title: "Veo: Google DeepMind's Advanced Video Generation Model",
    slug: "Veo-Google-DeepMind's-Advanced-Video-Generation-Model",
    icon: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1753860531/blog_3_b2csef.png",
  },
  {
    title: "Reinforcement Learning and Generative AI:The Future of OCR & ICR",
    slug: "Reinforcement-Learning-and-Generative-AI-The-Future-of-OCR-ICR",
    icon: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1753860530/blog_4_iyaitv.jpg",
  },
];

export const metadata = {
  title: "MappOptimist Technologies Blogs",
  description: "Read about real-world success stories and insights on leveraging AI, cloud computing, and digital strategies to drive business growth.",
  openGraph: {
    title: "MappOptimist Technologies Blogs",
    description: "Read about real-world success stories and insights on leveraging AI, cloud computing, and digital strategies to drive business growth.",
    url: `${process.env.NEXT_WEBSITE_BASE_URL}/blogs`,
    siteName: "MappOptimist Technologies",
    images: [
      {
        url: "https://res.cloudinary.com/dxlkwdlnh/image/upload/v1752553844/AdobeStock_239289862_1_dmoasl.jpg",
        width: 1200,
        height: 630,
        alt: "Our Blogs | MappOptimist Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_WEBSITE_BASE_URL}/blogs`,
  },
};

export default function BlogsPage() {

  return (
    <div className="bg-red-300">
      <div className="w-100 position-relative">
        <div className='blogs-container mb-3'>
          <div className='industries-serve-overlay' />
          <Navbar />
          <div className='career-content-container' data-aos="fade-up">
            <h1>Our Blogs</h1>
            <h6>Read about real-world success stories and insights on leveraging AI, cloud computing, and digital strategies to drive business growth.</h6>
          </div>
        </div>
        <section className="container py-4">
          <div className="row g-4">
            {data.map((item, index) => (
              <div key={item.title + index} className="col-12 col-sm-6 col-lg-4">
                <Link href={`/blogs/${item.slug}`}>
                  <div className="blog-card pe-auto">
                    <div className="card_image">
                    <Image
                        src={item.icon}
                        alt={item?.title || "icon"}
                        fill
                        className="fit-image object-contain"
                      />
                    </div>
                    <div className="blog-card-content">
                      <h2 className="blog-card-title">{item.title}</h2>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="common-footer-container">
        <Footer />
      </div>
    </div>
  );
}
