import './testimonies.css';
import AVR1 from '../../assets/avatar1.jpg';
import AVR2 from '../../assets/avatar2.jpg';
import AVR3 from '../../assets/avatar3.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
    {
        avatar : AVR1,
        testifier: 'Awodele Blessing',
        description: '  Problem-solving software engineering professional with a positive attitude. Promotes excellent communication and organisational skills. Seeking a software engineering position that builds tools and services, which make a positive impact in the daily environment.'
    },
    {
        avatar : AVR2,
        testifier: 'Awodele Blessing',
        description: '  Problem-solving software engineering professional with a positive attitude. Promotes excellent communication and organisational skills. Seeking a software engineering.'
    },
    {
        avatar : AVR3,
        testifier: 'Awodele Blessing',
        description: '  Problem-solving software engineering professional with a positive attitude. Promotes excellent communication and organisational skills. Seeking a software engineering.'
    },
]

const Testimonies = () => {
    return (
        <section id="testimonies">
            <h5>Review from client</h5>
            <h2>Testimonials</h2>

            <div className="container testimonies__container">
            <Swiper pagination={true} modules={[Pagination]} slidesPerView={1} spaceBetween={40} className="mySwiper">
                {
                  data.map((datas, index) => (
                    <SwiperSlide key={index} className='testimonies'>
                    <div className='client__avatar'>
                        <img src={datas.avatar} alt='avatar 1' />
                    </div>
                    <h5 className='client__name'>{datas.testifier}</h5>
                        <small className='client__talk'>
                            {datas.description}
                        </small>
                     </SwiperSlide>
                  ))
                }
              </Swiper>

            </div>
        </section>
    )
}



export default Testimonies;