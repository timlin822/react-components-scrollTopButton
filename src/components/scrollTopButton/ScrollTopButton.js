import {FaAngleUp} from 'react-icons/fa';

import './ScrollTopButton.css';

const ScrollTopButton=({scrollTopButtonIsShow,scrollToTop})=>{
    return (
        <div className={scrollTopButtonIsShow?"btn-scroll-top btn-scroll-top-show":"btn-scroll-top"} onClick={scrollToTop}><FaAngleUp /></div>
    );
}

export default ScrollTopButton;