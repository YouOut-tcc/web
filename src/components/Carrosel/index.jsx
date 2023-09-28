import styles from '../Carrosel/style.css'
import{useState, useEffect} from 'react'
import comercio1 from '../../img/comercio1.jpg'
import comercio2 from '../../img/comercio2.jpg'
import comercio3 from '../../img/comercio3.jpg'
import {BsPlusCircleFill} from 'react-icons/bs'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Swiper, SwiperSlide,} from 'swiper/react';


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
        <div className='carrosel'>
            <div className='divBtnAdd'>
                <h1><BsPlusCircleFill className='btnAdd'/></h1>
            </div>
            <Swiper
               slidesPerView={slidePerView}
               navigation={{clickable: true}}
               autoplay={true}
               autoplayTimeout={5}
               className='slider'
                
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
    )
}

export default Slider;