import React from 'react';
import RMDBLogo from './../images/reactMovie_logo.png'
import TMDBLogo from './../images/tmdb_logo.svg'
import {StyledHeader,StyledRMDBLogo, StyledTMDBLogo} from './../styles/StyledHeader'



const Header = () => (

    <StyledHeader >
        <div className = 'header-content'>
            <StyledRMDBLogo src={RMDBLogo} alt=""/>
            <StyledTMDBLogo src={TMDBLogo} alt=""/>

        </div>
    </StyledHeader>
)

export default Header