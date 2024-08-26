import React from 'react';
import './GiftItem.css';
import { FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ image, title, price, discount }) => (
  <div className="product-card">
    <img src={image} alt={title} />
    <div className="title-cart">
      <h2>{title}</h2>
      <FaShoppingCart />
    </div>
    <div className="price-discount">
      <p className="price">{price}</p>
      <p className="discount">{discount}</p>
    </div>
  </div>
);

const ProductGrid = () => (
  <div className="product-grid">
    <ProductCard
      image="./public/1.png"
      title="Granola siêu hạt ăn kiêng 15% yến mạch"
      price="133.000 VND"
      discount="-99%"
    />
    <ProductCard
      image="./public/2.png"
      title="Hạnh nhân rang muối biển, 240g, hũ"
      price="150.000 VND"
      discount="-99%"
    />
    <ProductCard
      image="./public/3.png"
      title="Ngũ hạt thập cẩm, 135g, hũ"
      price="42.000 VND"
      discount="-99%"
    />
    <ProductCard
      image="./public/4.png"
      title="Đậu hòa lan wasabi, 150g, hũ"
      price="42.000 VND"
      discount="-99%"
    />
    <ProductCard
      image="./public/5.png"
      title="Nước cốt dâu tằm, 300ml, chai"
      price="54.000 VND"
      discount="-99%"
    />
    <ProductCard
      image="./public/6.png"
      title="Trà sencha hoa hồng, 86g, hộp"
      price="109.000 VND"
      discount="-99%"
    />
    <ProductCard
      image="./public/7.png"
      title="Bột trà xanh matcha túi 4g"
      price="36.000 VND"
      discount="-99%"
    />
    <ProductCard
      image="./public/8.png"
      title="Bột rau má, 100g, bích"
      price="100.000 VND"
      discount="-99%"
    />
  </div>
);

const GiftItem = () => (
  <div className="app-container">
    <div className="header">
      <h1 className="title">Quà tặng</h1>
      <button className="create-button">Tạo</button>
    </div>
    <ProductGrid />
    <div className="pagination">
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>...</span>
    </div>
  </div>
);

export default GiftItem;
