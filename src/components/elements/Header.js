import React from 'react';
import RMDBLogo from './../images/reactMovie_logo.png'
import TMDBLogo from './../images/tmdb_logo.svg'
import {StyledHeader,StyledRMDBLogo, StyledTMDBLogo} from './../styles/StyledHeader'
import {Link} from '@reach/router'



const Header = () => (

    <StyledHeader >
        <div className = 'header-content'>
            <Link to ="/">
                <StyledRMDBLogo src={RMDBLogo} alt=""/>
            </Link>
            <StyledTMDBLogo src={TMDBLogo} alt=""/>

        </div>
    </StyledHeader>
)

export default Header