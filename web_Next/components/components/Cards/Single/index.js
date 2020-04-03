import React from 'react';
import { connect } from 'react-redux';
import CardInfobox from 'components/Infobox/CardInfobox';
import {withRouter} from 'next/router';

const SingleCard = ({ singleCard, router }) => {

    return (
      <div className="row">
         <div className="col">
            <CardInfobox {...singleCard} currentUrl={router.asPath} />
         </div>
      </div>
   );
};

const mapStateToProps = (state, ownProps) => {
   const cardId = ownProps.accId;

   return {
      singleCard: state.cards.data.find(el => el._id === cardId)
   };
};

export default connect(mapStateToProps)(withRouter(SingleCard));
