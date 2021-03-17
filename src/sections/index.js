import React from 'react';

import TopLeft from './TopLeft';
import Top from './Top';
import TopRight from './TopRight';
import Left from './Left';
import Centre from './Centre';
import Right from './Right';
import BottomLeft from './BottomLeft';
import Bottom from './Bottom';
import BottomRight from './BottomRight';

export default [
    [
        <TopLeft />,
        <Top />,
        <TopRight />,
    ],

    [
        <Left />,
        <Centre />,
        <Right />,
    ],

    [
        <BottomLeft/>,
        <Bottom/>,
        <BottomRight/>,
    ],
];