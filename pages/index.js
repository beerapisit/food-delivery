import React from 'react';
import DefaultButton from '../components/Button/DefaultButton';
import CardMenu from '../components/Card/CardMenu';
import CardMenuItem from '../components/Card/CardMenuItem';

import MainLayout from '../components/Layouts/MainLayout';
import Container from '../components/Panel/Container';

const MenuHighlight = [{
  name: 'Burger',
  desc: 'description',
  price: 5.5,
  imageUrl: "/images/cheeseburger.png",
}, {
  name: 'Burger',
  desc: 'description',
  price: 5.5,
  imageUrl: "/images/cheeseburger.png",
}, {
  name: 'Burger',
  desc: 'description',
  price: 5.5,
  imageUrl: "/images/cheeseburger.png",
}, {
  name: 'Burger',
  desc: 'description',
  price: 5.5,
  imageUrl: "/images/cheeseburger.png",
}]

export default function Home() {
  return <>
    <MainLayout>
      <Container>
        <div className="home-banner">
          <div className="home-banner-box box1">
            <div className="banner-text">
              <p>The Fastest</p>
              <p>Delivery</p>
              <p>in <span className="banner-text-spacial">Your City</span></p>
            </div>
            <p className="home-text-detail">
              Laboris aute Lorem incididunt magna ex consequat voluptate aute anim ea. Duis magna laboris esse laborum sunt cillum ad officia commodo minim quis in cillum. Dolor eu est est amet commodo do tempor fugiat cillum cillum. Ullamco aute laborum proident enim mollit quis proident aliqua enim voluptate adipisicing ut ipsum. Magna labore incididunt cillum non excepteur irure.
            </p>
            <DefaultButton>Order Now</DefaultButton>
          </div>
          <div className="home-banner-box box2">
            <div className="box-grid">
              {MenuHighlight.map((menu, index) => <CardMenu key={index} name={menu.name} desc={menu.desc} price={menu.price} imageUrl={menu.imageUrl} />)}
            </div>
          </div>
        </div>
        <div className="home-menu-list">
          <div><CardMenuItem name="Orange" star={3.2} price={7.5} imageUrl={"/images/grapefruit.png"} onClick={(name) => console.log('click menu:', name)} /></div>
          <div><CardMenuItem name="Orange" star={3.3} price={7.5} imageUrl={"/images/grapefruit.png"} /></div>
          <div><CardMenuItem name="Orange" star={3.4} price={7.5} imageUrl={"/images/grapefruit.png"} /></div>
        </div>
      </Container>
    </MainLayout>
    <style jsx>{`
    .home-banner {
      display: flex;
    }
    .home-banner-box {
      flex: 1;
    }
    .banner-text {
      font-size: 62px;
      margin-bottom: 10px;
    }
    .banner-text-spacial {
      color: orange;
    }
    .home-text-detail {
      margin-bottom: 10px;
    }
    .box2 {
      background-image: url(/images/bg_gray.png);
      background-size: cover;
      padding: 2rem;
    }
    .box-grid {
      width: 50%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-left: auto;
      margin-right: auto;
    }
    .home-menu-list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    `}</style>
  </>
}
