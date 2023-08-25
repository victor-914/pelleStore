import React from "react";
import styled from "styled-components";
import heroBanner from "../../assets/banner-01.jpg"
import asideBanner from "../../assets/banner-02.jpg"
import asideBanner2 from "../../assets/banner-03.jpg"
import Image from "next/image";

function HomePageBanner() {
  return (
    <StyledBanner>
      <main className="heroBanner">
        <div className="banner-content">
            <h4 className="entry-subtitle">NEW SEASON</h4>
            <h2 className="entry-title size-42 bold">
              Big patterns are back in fashion
            </h2>
          
              <button className="shopNow">
              Shop Now
              </button>
        </div>
        <main className="heroBannerImgCont">
        <Image src={heroBanner} layout="fill"/>
        </main>
      </main>

      <aside className="asideBanner">
        <div className="asideOne aside">
          
        <div className="banner-content">
            <h4 className="entry-subtitle">NEW SEASON</h4>
            <h2 className="entry-title size-42 bold">
            Tha latest men's trends this season
            </h2>
          
              <button className="shopNow">
              Shop Now
              </button>
        </div>
        <main className="heroBannerImgCont">
        <Image src={asideBanner} layout="fill"/>
        </main>
          
          </div>
        <div className="asideTwo aside">
          
           
        <div className="banner-content">
            <h4 className="entry-subtitle">NEW SEASON</h4>
            <div className="entry-title size-42 bold">
            Show your fashion with summer shoes
            </div>
          
              <button className="shopNow">
              Shop Now
              </button>
        </div>
        <main className="heroBannerImgCont">
        <Image src={asideBanner2} layout="fill"/>
        </main>
          
          </div>
      </aside>
    </StyledBanner>
  );
}

export default HomePageBanner;

const StyledBanner = styled.section`
width: 90%;
height:100vh;
display: flex;
justify-content: space-between;
margin: auto;

.heroBanner{
  width: 48%;
  position: relative;
  height: 100vh;
}

.banner-content{
position: absolute;
width: 70%;
z-index: 10;
padding: 10px;
}

.entry-subtitle{
  font-size: 12px;
  font-weight: 600;
  padding: 10px;
}

.entry-title{
  font-size:35px;
  font-weight: 600;
  padding-bottom: 10px;
}



.shopNow{
 width: 200px;
 border: 2px solid "#09932";
}


.asideBanner{
  width: 48%;
  height: 100vh;
  display:flex;
  flex-direction: column;
  position: relative;
   justify-content: space-between;

}


.aside{
 width: 100%;
 height: 45%;
 position: relative;
 background-color: orange;
}

.shopNow{
 width: 200px;
 height: 50px;
 font-size: 16px;
 font-weight:400;
 border: 3px solid #901D78;
}

.shopNow:hover{
  background-color: #901D78;
  color: #fff;
  border: 3px solid #fff;
}




`;
