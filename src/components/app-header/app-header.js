import React from 'react';

import './app-header.css'
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'pink' : 'black'};
        :hover {
            color: purple;
            cursor: pointer;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: #17a2b8;
    }
`;

const AppHeader = ({liked, allPosts}) => {
    return (
        <Header as='a'>
            <h1>Evgeniy Antoshin</h1>
            <h2>{allPosts} записи, из них понравилось {liked}</h2>
        </Header>
    )
}

export default AppHeader;