import React from 'react';
import LinkNext from 'next/link';
import { Link } from 'routes';
import PropTypes from 'prop-types';

const SingleMultiButton = props => {
   const btnType = props.type ? props.type : 'button';

   if (props.href)
       return (
           <LinkNext href={props.href}>
               <a className="btn btn-primary">
                   {props.text}
               </a>
           </LinkNext>
       )

   if (props.route)
       return (
           <Link route={props.route}>
               <a className="btn btn-primary">
                   {props.text}
               </a>
           </Link>
       )

    return (
        <button className="btn btn-primary" type={btnType}>
            {props.text}
        </button>
    )
};

SingleMultiButton.propTypes = {
   type: PropTypes.string,
   href: PropTypes.string,
   text: PropTypes.string
};

export default SingleMultiButton;
