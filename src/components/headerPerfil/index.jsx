import styles from '../headerPerfil/style.css';
import CommerceLogo from '../../img/commerceLogo.png';
import React, { useState } from 'react';

export default function HeaderPerfil() {
  
const estabelecimentos = [
  { id: 1, nome: 'Estabelecimento 1', imagem: CommerceLogo },
  { id: 2, nome: 'Estabelecimento 2', imagem: CommerceLogo },
  { id: 3, nome: 'Estabelecimento 3', imagem: CommerceLogo },
];
  const [selectedEstabelecimento, setSelectedEstabelecimento] = useState(estabelecimentos[0]);

  const handleEstabelecimentoChange = (event) => {
    const estabelecimentoId = parseInt(event.target.value);
    const selected = estabelecimentos.find((estabelecimento) => estabelecimento.id === estabelecimentoId);
    setSelectedEstabelecimento(selected);
  };
  return(
      <>
        <div className='HPerfil'>
        <select value={selectedEstabelecimento.id} onChange={handleEstabelecimentoChange} className='unidade'>
          {estabelecimentos.map((estabelecimento) => (
            <option key={estabelecimento.id} value={estabelecimento.id}>
              {estabelecimento.nome}
            </option>
          ))}
        </select>
        <div className="estabelecimento-info">
          <img src={selectedEstabelecimento.imagem} alt={selectedEstabelecimento.nome} className='fotoPerfilCommerce'/>
          <span className='nome'>{selectedEstabelecimento.nome}</span>
        </div>
      </div>
        
      </>

  )
}
