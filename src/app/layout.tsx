import React from 'react';
import { Lenis } from '@studio-freight/lenis';

const Layout = ({ children }) => {
    return (
        <Lenis>
            <div>{children}</div>
        </Lenis>
    );
};

export default Layout;