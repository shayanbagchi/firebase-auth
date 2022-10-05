import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { signOutUser } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../contexts/user.context';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  
    return(
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='nav-links-container'>
                {
                  currentUser ? (
                    <span className='nav-link' onClick={signOutUser}>
                      Sign Out
                    </span>
                  ) : (
                    <Link className='nav-link' to='/auth'>
                      Sign In
                    </Link>
                  )
                }
            </div>
        </div>
        <Outlet/>
      </Fragment>
    );
  }

export default Navigation;