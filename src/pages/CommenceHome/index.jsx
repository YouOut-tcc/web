import { Link } from "react-router-dom"

import "./styles.css"

export default function CommenceHome() {
  return(
    <div>
      <li key={1} className="commerceList">
      <Link to={'comercio'} className="commerceLink">
        <div className="cardCommerce">
          <div className="commerceListImg">
            <img src={'https://galeria.people.com.br/noticia/20160510115025610.jpg'}/>
          </div>
          <div className="divTextCommerce">
            <p>Nome do commercio</p>
            <p>cep e endereço do lugar</p>
          </div>
        </div>
      </Link>
      </li>
      <li key={1} className="commerceList">
      <Link className="commerceLink">
        <div className="cardCommerce">
          <div className="commerceListImg">
            <img src={'https://galeria.people.com.br/noticia/20160510115025610.jpg'}/>
          </div>
          <div className="divTextCommerce">
            <p>Nome do commercio</p>
            <p>cep e endereço do lugar</p>
          </div>
        </div>
      </Link>
      </li>
      <li key={1} className="commerceList">
      <Link className="commerceLink">
        <div className="cardCommerce">
          <div className="commerceListImg">
            <img src={'https://galeria.people.com.br/noticia/20160510115025610.jpg'}/>
          </div>
          <div className="divTextCommerce">
            <p>Nome do commercio</p>
            <p>cep e endereço do lugar</p>
          </div>
        </div>
      </Link>
      </li>
      <li key={1} className="commerceList">
      <Link className="commerceLink">
        <div className="cardCommerce">
          <div className="commerceListImg">
            <img src={'https://galeria.people.com.br/noticia/20160510115025610.jpg'}/>
          </div>
          <div className="divTextCommerce">
            <p>Nome do commercio</p>
            <p>cep e endereço do lugar</p>
          </div>
        </div>
      </Link>
      </li>
      <li key={1} className="commerceList">
      <Link className="commerceLink">
        <div className="cardCommerce">
          <div className="commerceListImg">
            <img src={'https://galeria.people.com.br/noticia/20160510115025610.jpg'}/>
          </div>
          <div className="divTextCommerce">
            <p>Nome do commercio</p>
            <p>cep e endereço do lugar</p>
          </div>
        </div>
      </Link>
      </li>
      <div className="cardCommerce">
      <p>Teste</p>
        </div>
    </div>
  )
}