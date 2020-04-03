import React from 'react';
import { Link } from 'routes';
import PropTypes from 'prop-types';

const SingleButton = props => {
   const btnColor = props.color ? `btn-${props.color}` : 'btn-primary';
   const btnSize = props.size ? `btn-${props.size}` : '';
   const btnType = props.type ? props.type : 'button';

   return props.href ? (
      <Link route={props.href} >
         <a className={`btn ${btnColor} ${btnSize}`}>
             {props.text}
         </a>
      </Link>
   ) : (
      <button className={`btn ${btnColor} ${btnSize}`} type={btnType}>
         {props.text}
      </button>
   );
};

SingleButton.propTypes = {
   color: PropTypes.string,
   size: PropTypes.string,
   type: PropTypes.string,
   href: PropTypes.string,
   text: PropTypes.string
};

export default SingleButton;
