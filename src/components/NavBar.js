import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className='nav-content animate__animated  animate__fadeIn'>
      <div>
        {/* esta div se muestra en dispositivos pequenios */}
        <div className='nav-dropdown'>
          <i className='fa fa-bars fa-2x'></i>
          <a href='/'>
            <span className='span'> Yogia</span>
          </a>
          <div className='nav-dropdown-content animate__animated  animate__fadeIn'>
            <ul className='nav-dropdown-ul'>
              <li className='nav-dropdown-li'>
                <Link className='links-auth pointer' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-dropdown-li'>
                <Link className='links-auth pointer' to='/yoga'>
                  Yoga
                </Link>
              </li>
              <li className='nav-dropdown-li'>
                <Link className='links-auth' to='/meditation'>
                  Meditation
                </Link>
              </li>
              <li className='nav-dropdown-li'>
                <Link className='links-auth pointer' to='/'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* y se termina acá */}

        {/* esta div se muestra en dispositivos medianos */}
        <div className='nav-medium'>
          <a href='/'>
            <span className='span'> Yogia</span>
          </a>

          <ul className='nav-medium-ul'>
            <li className='nav-medium-li'>
              <Link className='links-auth pointer' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-medium-li'>
              <Link className='links-auth pointer' to='/yoga'>
                Yoga
              </Link>
            </li>

            <li className='nav-medium-li'>
              <Link className='links-auth' to='/meditation'>
                Meditation
              </Link>
            </li>

            <li className='nav-medium-li'>
              <Link className='links-auth pointer' to='/'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* y se termina acá */}
      </div>

      <div className='nav-content-buttons'>
        <span>...</span>
        <button type='button' className='btn-logout'>
          <Link className='links-auth pointer' to='/auth/login'>
            Logout
          </Link>
        </button>
      </div>
    </nav>
  );
};
