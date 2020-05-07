import React from 'react';
import s from './Header.module.scss';

const Header = () => {
    return(
        <header className={s.head}> 
            <div className={s.head_heading}><span className={s.head_heading_one}>the</span> <span className={s.head_heading_two}>trump</span></div>
            <div className={s.head_visit}>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                <span> See our code</span>
            </div>
        </header>
    )
}

export default Header;