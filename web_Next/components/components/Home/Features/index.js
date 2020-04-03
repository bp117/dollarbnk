import React from 'react';

import './style.scss';
import SingleButton from 'components/UI/Buttons/SingleButton';

const HomeFeatures = () => (
   <section className="home-features">
      <div className="home-image">
         <img src="https://placehold.it/400x300" className="img-responsive" alt="Dollar-bank home" />
      </div>

      <section className="home-text">
       
         <div className="home-cta">
            <SingleButton text="Click here to log in" href="/login" size="lg" />
         </div>
      </section>
   </section>
);

export default HomeFeatures;
