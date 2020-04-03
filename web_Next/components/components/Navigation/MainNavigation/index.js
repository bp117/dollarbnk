import React from 'react';
import NavLink from 'containers/ActiveLink';
import classNames from 'classnames';

import './style.scss';

const MainNavigation = props => {
   let navClasses = classNames({
      'main-nav': true,
      'navigation-visible': props.isMobileNavVisible
   });

   return (
      <nav className={navClasses}>
         <ul>
            <li>
               <NavLink href="/panel">
                   <a>
                      <div className="main-nav-widget">
                         <div className="main-nav-box">
                            <i className="ion-home" />
                         </div>
                         <span>Home</span>
                      </div>
                   </a>
               </NavLink>
            </li>
            <li>
               <NavLink href="/panel/accounts">
                   <a>
                      <div className="main-nav-widget">
                         <div className="main-nav-box">
                            <i className="ion-clipboard" />
                         </div>
                         <span>Accounts</span>
                      </div>
                   </a>
               </NavLink>
            </li>
            <li>
               <NavLink href="/panel/transfers">
                   <a>
                      <div className="main-nav-widget">
                         <div className="main-nav-box">
                            <i className="ion-arrow-swap" />
                         </div>
                         <span>Transfers</span>
                      </div>
                   </a>
               </NavLink>
            </li>
            <li>
               <NavLink href="/panel/cards">
                   <a>
                      <div className="main-nav-widget">
                         <div className="main-nav-box">
                            <i className="ion-card" />
                         </div>
                         <span>Cards</span>
                      </div>
                   </a>
               </NavLink>
            </li>
            <li>
               <NavLink href="/panel/messages">
                   <a>
                      <div className="main-nav-widget">
                         <div className="main-nav-box">
                            <i className="ion-chatbox-working" />
                         </div>
                         <span>Messages</span>
                      </div>
                   </a>
               </NavLink>
            </li>
            <li>
               <NavLink href="/panel/profile">
                   <a>
                      <div className="main-nav-widget">
                         <div className="main-nav-box">
                            <i className="ion-person" />
                         </div>
                         <span>Profile</span>
                      </div>
                   </a>
               </NavLink>
            </li>
            <li>
               <NavLink href="/panel/help">
                   <a>
                      <div className="main-nav-widget">
                         <div className="main-nav-box">
                            <i className="ion-help" />
                         </div>
                         <span>Help</span>
                      </div>
                   </a>
               </NavLink>
            </li>
         </ul>
      </nav>
   );
};

export default MainNavigation;
