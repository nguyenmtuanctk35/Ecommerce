import React from "react";
import "./ShoppingCart.css";
import { NavLink } from "react-router-dom";

function formatNumber(num) {
  const nf = Intl.NumberFormat();
  return nf.format(num);
}

const ShoppingCart = (props) => {
  console.log(props.isAuth)
  let total = 0;
  let Cart = JSON.parse(localStorage.getItem("myCart"));
  if (Cart !== null && Cart !== undefined) {
      Cart.map(el=>(
        total += el.counter*el.price
      ))
  }
  
  const removeFromCart =async (id) => {
    let updatedCart=[]
    updatedCart = Cart.filter(el => el.id !== id);
    if(updatedCart===null||updatedCart.length===0){
      await  localStorage.removeItem('myCart');
    }
    else{
        await localStorage.setItem("myCart", JSON.stringify(updatedCart));
    }
    
    window.location.reload(false);
  };
 
  return (
    <div style={{ backgroundColor: " #f4f4f4" }}>
      <div className="container jFkAwY">
        <div className="CartPage__StyledCartPage-sc-1x1qrsb-0 ikWfqC">
          <div className="cart">
          <div className="cart-inners">
          <h2 className="cart-products__title">
          {Cart!==null&&Cart!==undefined ? ('Giỏ hàng ') :null}
                  <span className="cart-products__count">
                  {Cart!==null&&Cart!==undefined ?((Cart.length) +' sản phẩm'):null}
                  </span></h2>
                {Cart!==null&&Cart!==undefined ? (
                  Cart.map((el) => (
                    <div key={el.id} className="cart-inner">
                    <div className="styles__StyledCartProducts-p4m208-0 McNPu">
                    <div key={el.name} className="cart-products-inner">
                      <ul className="cart-products__products">
                        <li className="cart-products__product">
                          <div className="cart-products__inner">
                            <div className="cart-products__img">
                              <NavLink to={'/'+el.uid[1]}>
                                <img
                                  style={{ width: "100%" }}
                                  src={el.thumbnail_url}
                                  alt=""
                                />
                              </NavLink>
                            </div>
                            <div className="cart-products__content">
                              <div className="cart-products__desc">
                                <a
                                  className="cart-products__name"
                                  href="/:productId"
                                >
                                  {el.name}
                                </a>
                                <span className="cart-products__seller">
                                  Cung cấp bởi
                                  <a
                                    href="/ "
                                    style={{ marginLeft: "0.2rem" }}
                                    className="cart-products__seller-name"
                                  >
                                    {el.currentSeller}
                                  </a>
                                </span>
                                <p className="cart-products__actions">
                                  <button
                                    className="cart__submit" style={{width: '30%',height:'4vh',padding:'5px'}}
                                    onClick={() => removeFromCart(el.id)}
                                  >
                                    Xóa
                                  </button>
                                </p>
                              </div>
                              <div className="cart-products__details">
                                <div className="cart-products__pricess">
                                  <p className="cart-products__real-prices">
                                    {formatNumber(el.price)}đ
                                  </p>
                                  <p className="cart-products__discount-prices">
                                  {parseInt(el.list_price, 10) >
                                    parseInt(el.price, 10) ? <del>{formatNumber(el.list_price)}đ</del>:null}
                                    {parseInt(el.list_price, 10) >
                                    parseInt(el.price, 10) ? (
                                      <span className="cart-products__percent-prices">
                                        -
                                        {(
                                          (parseInt(el.list_price, 10) -
                                            parseInt(el.price, 10)) /
                                          parseInt(el.list_price, 10)
                                        ).toFixed(2) * 100}
                                        %
                                      </span>
                                    ) : null}
                                  </p>
                                </div>
                                <div className="group-input">
                                  <p style={{ textAlign: "center",fontWeight:'700',color:'#000000c9' }}>Số lượng: {el.counter}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="cart-products__gift" />
                        </li>
                      </ul>
                    </div>
                    </div>
            </div>
                  ))
                ) : (
                  <div className="cart-inner" style={{width:'100%'}}>
                  <h2 className="cart-products__title">
            Giỏ hàng{" "}
            <span className="cart-products__count">
              (0 sản phẩm)
            </span>
          </h2>
                  <div className="empty">
                    <img
                      src="https://salt.tikicdn.com/desktop/img/mascot@2x.png"
                      alt=""
                      className="empty__img"
                    />
                    <p className="empty__note">
                      Không có sản phẩm nào trong giỏ hàng của bạn.
                    </p>
                    <NavLink to="/" className="empty__btn">
                      Tiếp tục mua sắm
                    </NavLink>
                  </div>
                  </div>
                )}
           
    
          </div>    
          {Cart!==null&&Cart!==undefined?(<div className="cart-total-prices">
              <div className="cart-total-prices__inner">
                <div className="CartPrices__StyledCartPrices-yhdjkc-0 ENgjL">
                  <div className="prices">
                    <ul className="prices__items">
                      <li className="prices__item">
                        <span className="prices__text">Tạm tính</span>
                        <span className="prices__value">
                          {formatNumber(total)}đ
                        </span>
                      </li>
                    </ul>
                    <p className="prices__total">
                      <span className="prices__text">Thành tiền</span>
                      <span className="prices__value prices__value--final">
                        {formatNumber(total)}đ
                        <i
                          style={{
                            fontWeight: "300",
                            display: "block",
                            color: "black",
                          }}
                        >
                          (Đã bao gồm VAT nếu có)
                        </i>
                      </span>
                    </p>
                  </div>
                </div>
                <NavLink to={props.isAuth?("/shipping"):("/login")} className="cart__submit">
                  Tiến hành đặt hàng
                </NavLink>
              </div>
            </div>):null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShoppingCart;
