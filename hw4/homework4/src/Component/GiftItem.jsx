import React from 'react';
import './GiftItem.css';
import { FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ image, title, price, discount, onClick }) => (
  <div className="product-card" onClick={onClick}>
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

const ProductGrid = ({ products, onProductClick }) => (
  <div className="product-grid">
    {products.map((product, index) => (
      <ProductCard
        key={index}
        image={product.image}
        title={product.title}
        price={product.price}
        discount={product.discount}
        onClick={() => onProductClick(product)}
      />
    ))}
  </div>
);

const GiftItem = () => {
  const products = [
    {
      image: "./public/1.png",
      title: "Granola siêu hạt ăn kiêng 15% yến mạch",
      price: "133.000 VND",
      discount: "-99%"
    },
    {
      image: "./public/2.png",
      title: "Hạnh nhân rang muối biển, 240g, hũ",
      price: "150.000 VND",
      discount: "-99%"
    },
    {
      image: "./public/1.png",
      title: "Granola siêu hạt ăn kiêng 15% yến mạch",
      price: "133.000 VND",
      discount: "-99%"
    },
    {
      image: "./public/2.png",
      title: "Hạnh nhân rang muối biển, 240g, hũ",
      price: "150.000 VND",
      discount: "-99%"
    },
    {
      image: "./public/1.png",
      title: "Granola siêu hạt ăn kiêng 15% yến mạch",
      price: "133.000 VND",
      discount: "-99%"
    },
    {
      image: "./public/2.png",
      title: "Hạnh nhân rang muối biển, 240g, hũ",
      price: "150.000 VND",
      discount: "-99%"
    },
    {
      image: "./public/1.png",
      title: "Granola siêu hạt ăn kiêng 15% yến mạch",
      price: "133.000 VND",
      discount: "-99%"
    },
    {
      image: "./public/2.png",
      title: "Hạnh nhân rang muối biển, 240g, hũ",
      price: "150.000 VND",
      discount: "-99%"
    },
  ];

  const handleProductClick = (product) => {
    alert(`Tên sản phẩm: ${product.title}\nGiá: ${product.price}`);
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1 className="title">Quà tặng</h1>
        <button className="create-button">Tạo</button>
      </div>
      <ProductGrid products={products} onProductClick={handleProductClick} />
      <div className="pagination">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>...</span>
      </div>
    </div>
  );
};

export default GiftItem;
