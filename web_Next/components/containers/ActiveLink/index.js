import { withRouter } from 'next/router';
import { Link } from 'routes'
import React, { Children } from 'react';

const ActiveLink = ({ router, children, ...props }) => {
    const child = Children.only(children);
    const activeClassName = props.activeClassName || 'active'

    let className = child.props.className || '';
    if (router.asPath === props.href && activeClassName) {
        className = `${className} ${activeClassName}`.trim();
    }

    const route = props.href

    delete props.activeClassName;
    delete props.href

    return <Link {...{ ...props, route}}>{React.cloneElement(child, { className })}</Link>;
};

export default withRouter(ActiveLink);