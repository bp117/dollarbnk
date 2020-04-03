import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'next/router';
import CardsListEl from '../ListElement';

const CardsList = ({ cards, router }) => {
   const cardsList = cards.map(card => (
      <CardsListEl key={card._id} {...card} matchUrl={router.asPath} />
   ));

   return (
      <Fragment>
         <h1>Cards</h1>

         <p>You have {cardsList.length} active cards</p>
         <div className="list-group">{cardsList}</div>
      </Fragment>
   );
};

const mapStateToProps = state => {
   return {
      cards: state.cards.data
   };
};

export default connect(mapStateToProps)(withRouter(CardsList));
