import React from 'react';
import Link from 'next/link';

import './style.scss';

const NavigationHeader = props => {
   return (
      <header className="navigation-header">
         <div className="user-profile-box">
            <Link href="/panel/profile">
               <a>
                   <img src="https://placehold.it/60x60" alt="User profile" />
                   <span>
                      {props.user.firstName} {props.user.lastName}
                   </span>
               </a>
            </Link>
         </div>

         <ul className="navigation-header-links">
            <li>
               <Link href="/logout"><a>Logout</a></Link>
            </li>
            <li className="toggle-menu">
               <button onClick={props.toggleMobileNav}>
                  <i className="ion-navicon-round" />
               </button>
            </li>
         </ul>
      </header>
   );
};

export default NavigationHeader;
