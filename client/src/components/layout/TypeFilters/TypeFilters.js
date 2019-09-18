import React, { useContext } from 'react';
import Earth from '../../assets/images/elements/Earth.png';
import Fire from '../../assets/images/elements/Fire.png';
import None from '../../assets/images/elements/None.png';
import Water from '../../assets/images/elements/Water.png';
import Wind from '../../assets/images/elements/Wind.png';
import Staff from '../../assets/images/weapons/Staff.png';
import Sword from '../../assets/images/weapons/Sword.png';
import Katana from '../../assets/images/weapons/Katana.png';
import Ax from '../../assets/images/weapons/Ax.png';
import Lance from '../../assets/images/weapons/Lance.png';
import Bow from '../../assets/images/weapons/Bow.png';
import Fists from '../../assets/images/weapons/Fists.png';
import Hammer from '../../assets/images/weapons/Hammer.png';
import Ring from '../../assets/images/accessory/Ring.png';
import Necklace from '../../assets/images/accessory/Necklace.png';
import Bangle from '../../assets/images/accessory/Bangle.png';
import Light from '../../assets/images/type/Light.png';
import Shadow from '../../assets/images/type/Shadow.png';

import CharacterContext from '../../../context/character/characterContext';
import './TypeFilters.css';

const TypeFilters = () => {
  const characterContext = useContext(CharacterContext);

  const {
    filtered,
    filterType,
    weaponType,
    accessoryType,
    lsType,
    clearFilter
  } = characterContext;
  return (
    <div className='main-filter-section'>
      <div className='element-types'>
        <h3 className='text-center'>Elements</h3>
        <ul className='icons'>
          <li onClick={() => filterType('None')}>
            <img src={None} alt='None' />
          </li>
          <li onClick={() => filterType('Water')}>
            <img src={Water} alt='Water' />
          </li>
          <li onClick={() => filterType('Fire')}>
            <img src={Fire} alt='Fire' />
          </li>
          <li onClick={() => filterType('Earth')}>
            <img src={Earth} alt='Earth' />
          </li>
          <li onClick={() => filterType('Wind')}>
            <img src={Wind} alt='Wind' />
          </li>
        </ul>
      </div>
      <div className='ls-types'>
        <h3 className='text-center'>L/S</h3>
        <ul className='icons'>
          <li onClick={() => lsType('Light')}>
            <img src={Light} alt='Light' />
          </li>
          <li onClick={() => lsType('Shadow')}>
            <img src={Shadow} alt='Shadow' />
          </li>
        </ul>
      </div>
      <div className='weapon-types'>
        <h3 className='text-center'>Weapons</h3>
        <ul className='icons'>
          <li onClick={() => weaponType('Staff')}>
            <img src={Staff} alt='Staff' />
          </li>
          <li onClick={() => weaponType('Sword')}>
            <img src={Sword} alt='Sword' />
          </li>
          <li onClick={() => weaponType('Katana')}>
            <img src={Katana} alt='Katana' />
          </li>
          <li onClick={() => weaponType('Ax')}>
            <img src={Ax} alt='Ax' />
          </li>
          <li onClick={() => weaponType('Lance')}>
            <img src={Lance} alt='Lance' />
          </li>
          <li onClick={() => weaponType('Bow')}>
            <img src={Bow} alt='Bow' />
          </li>
          <li onClick={() => weaponType('Fists')}>
            <img src={Fists} alt='Fists' />
          </li>
          <li onClick={() => weaponType('Hammer')}>
            <img src={Hammer} alt='Hammer' />
          </li>
        </ul>
      </div>
      <div className='accessory-types'>
        <h3 className='text-center'>Accessories</h3>
        <ul className='icons'>
          <li onClick={() => accessoryType('Ring')}>
            <img src={Ring} alt='Ring' />
          </li>
          <li onClick={() => accessoryType('Necklace')}>
            <img src={Necklace} alt='Necklace' />
          </li>
          <li onClick={() => accessoryType('Bangle')}>
            <img src={Bangle} alt='Bangle' />
          </li>
        </ul>
      </div>
      {filtered === null ? (
        ''
      ) : (
        <button type='button' className='btn' onClick={clearFilter}>
          RESET
        </button>
      )}
    </div>
  );
};

export default TypeFilters;
