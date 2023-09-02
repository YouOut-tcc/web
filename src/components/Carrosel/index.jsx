import styles from './style.css'
import{useState, useEffect} from 'react'
import Header from '../Header/index'
import comercio1 from '../../img/comercio1.jpg'
import comercio2 from '../../img/comercio2.jpg'
import comercio3 from '../../img/comercio3.jpg'
import {BsFillPeopleFill} from 'react-icons/bs'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Swiper, SwiperSlide} from 'swiper/react';


import { register } from 'swiper/element/bundle';
register();




function Slider() {
    const [slidePerView, setSlidePerView] = useState (3)

    const data = [
        { image: comercio1},
        { image: comercio2},
        { image: comercio3},
        { image: 'https://galeria.people.com.br/noticia/20160510115025610.jpg'},
        { image: 'https://www.ideianoar.com.br/wp-content/uploads/2021/05/programador-marketplace.jpg'},
        { image: 'https://prodaly.com.br/wp-content/uploads/2021/09/blog-setembro-2-1.jpg'},
        { image: 'https://galeria.people.com.br/noticia/20160510115025610.jpg'},
        { image: 'https://www.ideianoar.com.br/wp-content/uploads/2021/05/programador-marketplace.jpg'},
        { image: 'https://prodaly.com.br/wp-content/uploads/2021/09/blog-setembro-2-1.jpg'}
        
    ]


    useEffect(()=>{

        function tamanhoTela(){
            if(window.innerWidth < 720){
                setSlidePerView(1);
            }else{
                setSlidePerView(3);
            }
        }

        tamanhoTela();

        window.addEventListener("resize", tamanhoTela)

        return () => {
            window.removeEventListener("resize",tamanhoTela)
        }
        
    },[])

    return(
        <div>
            <Header />
            <div className='divBorda'>
            <div className='divTitulo'>
                <div className='titulo'>
                    <h1>Lorem Ipsum</h1> 
                    <h3>Rua lorem, 0000 - 12345-678</h3>
                </div>
                <div className='checkin'>
                    <h1><BsFillPeopleFill/>Check-in</h1>
                    <h3>Restaurante - 1km</h3>
                </div>
            </div>
            <Swiper
                slidesPerView={slidePerView}
                navigation={{clickable: true}}
                autoplay={true}
                autoplayTimeout={5}
                
            
            >
                {data.map( (item)=>(
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            alt= "Imagens Estabelecimento"
                            className='sliderItem'
                        />
                    </SwiperSlide>   
                ))}
            </Swiper>
            </div>      
        </div>
    )
}

export default Slider;