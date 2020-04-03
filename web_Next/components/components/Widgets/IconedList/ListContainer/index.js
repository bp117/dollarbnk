import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

// Change default <div> container to <a> if a link is requested
const ListContainer = props => {
    return props.href ? <Link href={props.href}><a>{props.children}</a></Link> : <div>{props.children}</div>;
};

ListContainer.propTypes = {
   href: PropTypes.string
};

export default ListContainer;
