import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../../app/redux/productsSlice";
import { asyncGetProducts } from "../../app/redux/productsSlice";

import styles from "./ProductsList.module.css";

const ProductsList = () => {
  const productsList = useSelector(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetProducts());
  }, [dispatch]);

  return (
    <div className={styles.ProductsList}>
      {productsList.map((el) => (
        <div className={styles.Card} key={el.id + el.name}>
          <p>{`Category: ${el.bsr_category}`}</p>
          <a href={el.link} className={styles.Link} rel="noreferrer" target="_blank">
            <img src={el.img} alt="" className={styles.Img} />
            <p className={styles.Price}>{`price: ${el.price}$`}</p>
            <p>{`Asin: ${el.asin}`}</p>
            <p className={styles.Title}>{el.name}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
