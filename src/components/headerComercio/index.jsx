import styles from '../headerComercio/style.css';
import {BsFillPeopleFill} from 'react-icons/bs'


 function HeaderComercio(){   
    return(  
            <div className='divBorda'>
            <div className='divTitulo'>
                <div className='titulo'>
                    <h1>Lorem Ipsum</h1> 
                    <h3>Rua lorem, 0000 - 12345-678</h3>
                </div>
                <div className='checkin'>
                    <h3><BsFillPeopleFill className='iconeCheckin'/>Check-in</h3>
                    <h1>Restaurante - 1km</h1>
                </div>
            </div>
            </div>            
    )
}   

export default HeaderComercio;