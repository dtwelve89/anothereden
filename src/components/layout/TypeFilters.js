import React from 'react';
import './TypeFilter.css';

import Earth from '../../img/elements/Earth.png';
import Fire from '../../img/elements/Fire.png';
import None from '../../img/elements/None.png';
import Water from '../../img/elements/Water.png';
import Wind from '../../img/elements/Wind.png';

import Staff from '../../img/weapons/Staff.png';
import Sword from '../../img/weapons/Sword.png';
import Katana from '../../img/weapons/Katana.png';
import Ax from '../../img/weapons/Ax.png';
import Lance from '../../img/weapons/Lance.png';
import Bow from '../../img/weapons/Bow.png';
import Fists from '../../img/weapons/Fists.png';
import Hammer from '../../img/weapons/Hammer.png';

import Ring from '../../img/accessory/Ring.png';
import Necklace from '../../img/accessory/Necklace.png';
import Bangle from '../../img/accessory/Bangle.png';

import Light from '../../img/type/Light.png';
import Shadow from '../../img/type/Shadow.png';

const TypeFilters = ({
  filtered,
  filterType,
  weaponType,
  accessoryType,
  lsType,
  resetFilter
}) => {
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
        <button type='button' className='btn' onClick={resetFilter}>
          RESET
        </button>
      )}
    </div>
  );
};

export default TypeFilters;
