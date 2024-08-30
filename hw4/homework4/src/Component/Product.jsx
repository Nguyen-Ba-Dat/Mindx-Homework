import React, { useState } from "react";
import "./Product.css";

const Product = () => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div className="container">
      {/* Header with Delete and Close Icons */}
      <div className="product-header">
        <div className="delete-icon">
          <div className="icon">🗑️</div>
        </div>
        <div className="close-icon">
          <div className="icon">❌</div>
        </div>
      </div>

      {/* Product Image and Information */}
      <div className="product-info">
        <img
          src="./public/3.png"
          alt="Ngũ hạt thập cẩm"
          className="product-image"
        />
        <div className="product-details">
          <h2>Ngũ hạt thập cẩm, hũ trang trí ý nghĩa</h2>
          <div className="rating">
            <span>⭐⭐⭐⭐⭐</span>
          </div>
          <p className="price">
            Giá: <b>42.000 VND</b> <del>60.000 VND</del> <span>-30%</span>
          </p>

          {/* Size Selection */}
          <div className="size-selection">
            <h4>Phân Loại</h4>
            <div className="size-buttons">
              <button>Nhỏ</button>
              <button className="active">Vừa</button>
              <button>Lớn</button>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="quantity-selector">
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
            <button className="choose-btn">Chọn mua</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
