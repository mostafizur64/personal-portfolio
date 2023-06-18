import React from 'react';
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css'
const Testimonial = () => {

    const clients = [
        {
            "img": "https://img.freepik.com/free-photo/newcomer-get-know-teammates-pleased-good-looking-businesswoman-transparent-glasses-blue-collar-shirt-smiling-broadly-assuring-good-quality-product-gray-wall_176420-25024.jpg?w=740&t=st=1687096379~exp=1687096979~hmac=5b1f961639aed82b55ed5189b0b6cee37ab61400ee9c6b02cf23d2baabaab44a",
            "review": "This product is absolutely amazing! The quality is top-notch, and it has exceeded all my expectations. I highly recommend it to anyone looking for a reliable and efficient solution. The design is sleek and modern, and it fits perfectly into my daily routine. The customer service was also exceptional, providing prompt and helpful assistance. I couldn't be happier with my purchase!"
        },
        {
            "img": "https://img.freepik.com/free-photo/boyfriend-supports-girlfriend-match-happy-attractive-european-guy-with-bristle-trendy-clothes-smiling-cheerfully-showing-thumbs-up-gesture_176420-44512.jpg?w=740&t=st=1687096427~exp=1687097027~hmac=dd523c10839518f29359be708d41416b730685fbe02f5737af019a75f38ef190",
            "review": "I am blown away by the exceptional quality of this item. It's sturdy, well-crafted, and performs flawlessly. I've tried similar products in the past, but this one stands out from the crowd. The attention to detail is impressive, and it's evident that the manufacturer put a lot of thought into every aspect of its design. I'm extremely satisfied with my purchase and would highly recommend it to others!"
        },
        {
            "img": "https://img.freepik.com/free-photo/close-up-cheerful-man-say-yes-showing-thumbs-up-approval-praise-good-job-smiling-approvingly-standing-white-background_1258-77184.jpg?w=740&t=st=1687096469~exp=1687097069~hmac=32de7616972e59738939d2ad811f448f53793140d01fb19e8aad3167089d4d96",
            "review": "I purchased this item a few weeks ago, and it has quickly become an indispensable part of my daily routine. The functionality is outstanding, and it has significantly improved my productivity. The build quality is excellent, ensuring its durability. The intuitive interface and user-friendly features make it easy to use for everyone. I can confidently say that this product has exceeded my expectations, and I'm thrilled with my decision to buy it!"
        },
        {
            "img": "https://img.freepik.com/free-photo/photo-attractive-bearded-young-man-with-cherful-expression-makes-okay-gesture-with-both-hands-likes-something-dressed-red-casual-t-shirt-poses-against-white-wall-gestures-indoor_273609-16239.jpg?w=740&t=st=1687096508~exp=1687097108~hmac=cc7df12f71b0a89c08f08ace60defb9c98dc0e0f2aa8aef31a8246584eb82aad",
            "review": "Unfortunately, I'm not entirely satisfied with this product. It didn't meet my expectations and fell short in several aspects. The build quality is subpar, and it feels flimsy. Additionally, the performance is lackluster, and it doesn't deliver the promised results. I encountered multiple issues with its functionality, which was frustrating. Overall, I'm disappointed with my purchase and wouldn't recommend it to others."
        }
    ]

    return (
        <div className="t-wrapper">
            <div className="t-heading">
                <span>Clients Always get</span>
                <span> Exceptional Work </span>
                <span>from me ....</span>
                <div className="blur t-blur1" style={{ background: 'var(--purple)' }}></div>
                <div className="blur t-blur2" style={{ background: 'skyblue)' }}></div>
            </div>
            {/* slider  */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, index) => {
                    return <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={client.img} alt="" />
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    );
};

export default Testimonial;