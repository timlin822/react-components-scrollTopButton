import {useState,useEffect} from 'react';

import ScrollTopButton from 'components/scrollTopButton/ScrollTopButton';

import './App.css';

function App() {
  const [scrollTopButtonIsShow,setScrollTopButtonIsShow]=useState(false);

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.pageYOffset>250){
        setScrollTopButtonIsShow(true);
      }
      else{
        setScrollTopButtonIsShow(false);
      }
    });
  },[]);

  const scrollToTop=()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <>
      <section className="section-padding bg-height bg-color1">
        <div className="container container-padding">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas asperiores quaerat libero earum repellat rerum ad! Excepturi sunt quasi eum?
        </div>
      </section>
      <section className="section-padding bg-height bg-color2">
        <div className="container container-padding">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas asperiores quaerat libero earum repellat rerum ad! Excepturi sunt quasi eum?
        </div>
      </section>
      <section className="section-padding bg-height bg-color3">
        <div className="container container-padding">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas asperiores quaerat libero earum repellat rerum ad! Excepturi sunt quasi eum?
        </div>
      </section>
      <section className="section-padding bg-height bg-color4">
        <div className="container container-padding">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas asperiores quaerat libero earum repellat rerum ad! Excepturi sunt quasi eum?
        </div>
      </section>
      <ScrollTopButton scrollTopButtonIsShow={scrollTopButtonIsShow} scrollToTop={scrollToTop} />
    </>
  );
}

export default App;