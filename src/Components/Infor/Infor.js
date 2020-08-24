import React, { useEffect, useState, useRef } from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { useHistory,Link,useParams } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import "./Infor.css";
import SubFooter from "../MainComponents/SubFooter/SubFooter";
import htmlToFormattedText from "html-to-formatted-text";

function formatNumber(num) {
  const nf = Intl.NumberFormat();
  return nf.format(num);
}

const Infor = (props) => {
  const [product, setProduct] = useState([""]);
  const [counter, setCounter] = useState(1);
  const [state, setState] = useState(false);
  const history = useHistory();
  let count = useRef(1);
  const plusCount = () => {
    count.current.value++;
    setCounter(count.current.value);
  };
  const minusCount = () => {
    if (count.current.value >= 2) {
      count.current.value--;
      setCounter(count.current.value);
    }
  };
  let params=useParams()
  let productId=params.productId
  const loadProduct = async () => {
        if(productId!=="signup"&&productId!=="login"&&productId!=="payment"&&productId!=="shipping"&&productId!=="cart"&&!productId.includes('shop&price=')){
        await fetch('https://personalecommerce.herokuapp.com'+"/products/productsShop/" + productId)
        .then((res) => {
          if (res.status !== 200) {
            throw new Error("Failed to fetch!");
          }
          return res.json();
        })
        .then((resData) => {
          setState(true);
          setProduct(resData.result);
        });
        } 
    };
  useEffect(() => {
    loadProduct();
    window.scrollTo(0,0)
  }, [productId]);

  let currentSeller = "";
  let otherSeller = [];
  let attributes = [];
  let Descriptions = [];
  let brand = "";
  let myCart = [];
  let CartElement = {};
  let setMyCart;
  
  if (
    state &&
    product.current_seller !== null &&
    product.current_seller !== undefined
  ) {
    const seller = Object.values(product.current_seller);
    currentSeller = seller[3];
  }
  if (
    state &&
    product.other_sellers !== null &&
    product.other_sellers !== undefined
  ) {
    for (let el of product.other_sellers) {
      otherSeller.push({
        name: el.name,
        logo: el.logo,
        price: el.price,
      });
    }
  }
  if (
    state &&
    product.specifications !== null &&
    product.specifications !== undefined
  ) {
    const parents = product.specifications[0];
    if (parents) {
      for (let el of product.specifications[0].attributes)
        attributes.push({
          name: el.name,
          value: el.value,
        });
    }
  }
  if (
    state &&
    product.description !== null &&
    product.description !== undefined
  ) {
    Descriptions = product.description;
  }
  if (state && product.brand !== null && product.brand !== undefined) {
    const Brand = Object.values(product.brand);
    brand = Brand[1];
  }
  
 
  if (state) {
    CartElement = {
      id: product._id,
      name: product.name,
      currentSeller: currentSeller,
      price: product.price,
      list_price: product.list_price,
      counter: counter,
      thumbnail_url:product.thumbnail_url,
      uid:(productId[1]!=="signup"&&productId[1]!=="login")?productId:null
    };
    myCart = myCart.concat(CartElement);

    setMyCart = async () => {
      let prevCart = JSON.parse(localStorage.getItem("myCart"));
      if (prevCart === null) {
        await localStorage.setItem("myCart", JSON.stringify(myCart));
        window.location.reload(false);
      } else if (prevCart.indexOf(CartElement) === -1) {
        prevCart = prevCart.concat(CartElement);
        localStorage.setItem("myCart", JSON.stringify(prevCart));
        window.location.reload(false);
      }
      prevCart = prevCart.map((item) => {
        if (item.id === product._id && item.counter === counter) {
          window.location.reload(false);
          return { ...item };
        } else if (item.id === product._id && item.counter !== counter) {
          return {
            ...item,
            counter: counter,
          };
        }
        return item;
      });
      localStorage.setItem("myCart", JSON.stringify(prevCart));
    };
  }
  return (
    <div style={{ background: "rgb(239, 239, 239)" }}>
      <div className="container jFkAwY">
        <div className="indexstyle__Wrapper-qd1z2k-0 gQLVSm">
          <div className="indexstyle__ProductImages-qd1z2k-1 kQvKqX">
            <div className="group-images">
              <div className="images">
                
               {(product.configurable_products!==null&&product.configurable_products!==undefined)?product.configurable_products[0].images.slice(0,4).map(el=>(
                       <Link  to={el.medium_url} key={el.medium_url}>
                    <div alt="">
                  <img
                    src={el.medium_url}
                    alt=""
                    className="PictureV2__StyledImage-tfuu67-1 Dozqv"
                  />
                </div>   
                  </Link> 
                  
                  )):null}
              </div>

              <div className="thumbnail">
                <div className="ImageLens__Wrapper-uaw433-0 jcyqbC">
                  <div className="container">
                    <img
                      src={product.thumbnail_url}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="indexstyle__ProductContent-qd1z2k-2 XlJje">
            <div className="header border-bottom">
              <h3 className="title" itemProp="name">
                {product.name}
              </h3>
              {product.rating_aveerage ? (
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Rating
                    name="read-only"
                    value={product.rating_aveerage}
                    precision={0.1}
                    readOnly
                  />
                </Box>
              ) : null}

              <div className="bestseller">
                <i className="icon prize" />
              </div>
              <div className="brand">
                <h6>
                  Thương hiệu: <a href="/">{brand}</a>
                </h6>
                <h6>
                  SKU: <span itemProp="sku">{product.sku}</span>
                </h6>
              </div>
            </div>

            <div className="body">
              <div className="summary">
                <div className="left">
                  <div className="WidgetInfo__StyledWidgetInfo-sc-1c6m8v4-0 HhfBq">
                    <div className="widget-info__icon">
                      <img
                        style={{ width: "100%" }}
                        src="https://salt.tikicdn.com/ts/upload/cd/74/0a/862aa1925b1d4c8b837c544e40e5d4cb.png"
                        alt="free shipping"
                      />
                    </div>
                    <div className="widget-info__content">
                      <div className="widget-info__title">
                        Miễn phí giao hàng (tối đa 88k)
                      </div>
                      <div className="widget-info__description">
                        cho đơn hàng từ 250k.{" "}
                        <a href="https://hotro.tiki.vn/hc/vi/articles/360041890732-C%C3%A1ch-t%C3%ADnh-ph%C3%AD-v%E1%BA%ADn-chuy%E1%BB%83n-%C3%A1p-d%E1%BB%A5ng-t%E1%BB%AB-th%C3%A1ng-6-2020">
                          Xem chi tiết
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <p className="price">
                      {formatNumber(product.price)}
                      {/* */} ₫
                    </p>
                    <p className="original-price first-child">
                      Tiết kiệm:{" "}
                      <span>
                        {(
                          (parseInt(product.list_price, 10) -
                            parseInt(product.price, 10)) /
                          parseInt(product.list_price, 10)
                        ).toFixed(2) * 100}
                        %
                      </span>{" "}
                      ({/* */}
                      {formatNumber(product.list_price - product.price)}
                      {/* */} ₫)
                    </p>
                    <p className="original-price">
                      Giá thị trường: {/* */}
                      {formatNumber(product.list_price)}
                      {/* */} ₫
                    </p>
                  </div>
                  <div className="group border-top">
                    <ul className="list">
                      <li>Đầm chấm bi trắng trên nền xanh</li>
                      <li>Sản phẩm hot 2019</li>
                      <li>Phù hợp đi chơi, đi dạo, tiệc, đi làm ....</li>
                    </ul>
                  </div>
                  <div className="group border-top">
                    <div className="indexstyle__AddToCart-qd1z2k-8 dJbIjB">
                      <div
                        style={{ marginTop: "-7px", marginRight: "20px" }}
                        className="QualityInput__Wrapper-sc-15mlmyf-0 fXfceZ"
                      >
                        <p className="label">Số lượng:</p>
                        <div className="group-input">
                          <button onClick={() => minusCount()}>-</button>
                          <input
                            style={{ textAlign: "center" }}
                            type="text"
                            ref={count}
                            placeholder={counter}
                            defaultValue={counter}
                            className="input"
                          />
                          <button onClick={() => plusCount()}>+</button>
                        </div>
                      </div>
                      <div className="group-button">
                        <button
                          className="btn btn-add-to-cart"
                          onClick={setMyCart}
                        >
                          <span>
                            <ShoppingCartOutlinedIcon />
                          </span>
                          Chọn mua
                        </button>
                      </div>
                      <button className="btn-add-favorite">
                        <span>
                          <FavoriteBorderOutlinedIcon />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="group">
                    <div className="indexstyle__CurrentSeller-qd1z2k-9 joYxsO">
                      <div className="seller-info">
                        <i className="tikicon icon-store" />
                        <div>
                          <a
                            href="https://tiki.vn/cua-hang/mila-dam-thiet-ke"
                            className="seller-name"
                          >
                            {currentSeller}
                          </a>
                          <p className="seller-description">
                            Cam kết chính hiệu 100%
                          </p>
                        </div>
                      </div>
                      <a
                        href="https://tiki.vn/cua-hang/mila-dam-thiet-ke"
                        className="btn-view-shop"
                      >
                        Xem shop
                      </a>
                      <div className="seller-specification">
                        <i className="tikicon icon-hoan-tien-2" />
                        <div>
                          <div className="text">
                            <b>Tiki hoàn tiền 111% </b>
                            <div className="tooltip">
                              <i
                                className="tikicon icon-info-grey"
                                style={{ marginRight: 0 }}
                              />
                              <p className="view">
                                Chính sách bồi thường -{/* */}{" "}
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href="https://drive.google.com/file/d/1po3r6qApp-q7JDB5kwGKujVtvInfO-ih/view?usp=sharing"
                                >
                                  Xem thêm
                                </a>
                              </p>
                            </div>
                          </div>
                          <p className="text">Nếu phát hiện hàng giả</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="social-buttons">
                    <div>
                      <span
                        style={{
                          verticalAlign: "bottom",
                          width: "128px",
                          height: "20px",
                        }}
                      ></span>
                    </div>
                  </div>
                  {otherSeller !== null
                    ? otherSeller.map((el) => (
                        <div
                          key={el.name}
                          className="OtherSellers__StyledOtherSellers-sc-1kb5m6r-0 iGcHhb"
                        >
                          <div className="title">Nhà Bán Khác</div>
                          <div className="seller">
                            <span className="seller__name">{el.name}</span>
                            <div className="seller__price">
                              {formatNumber(el.price)} ₫
                            </div>
                            <button className="seller__view">Chọn</button>

                            <div className="delivery">
                              <div className="delivery__options">
                                <div className="delivery__option">
                                  <div className="delivery__time">
                                    Giao vào Thứ 5, ngày 13 tháng 08
                                  </div>
                                  <div className="delivery__wrap">
                                    <span className="delivery__text">
                                      Giao hàng tiêu chuẩn
                                    </span>
                                  </div>
                                  <span className="delivery__fee ">
                                    30.000 ₫
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    : null}
                </div>
              </div>
              <div className="promotions">
                <h2 className="group-title">
                  DỊCH VỤ &amp; KHUYẾN MÃI LIÊN QUAN
                </h2>
                <ul className="list" style={{ height: "auto" }}>
                  <li>
                    <p>
                      Đăng kí gói <b style={{ color: "red" }}>TikiNOW</b> để
                      nhận giao hàng miễn phí và nhiều ưu đãi dành riêng cho
                      thành viên -{" "}
                      <a
                        href=" https://tiki.vn/tikinow?src=pdp"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Xem chi tiết
                      </a>
                    </p>
                  </li>
                  <li>
                    Hoàn tiền 15% cho mọi chi tiêu với Thẻ Tín Dụng Liên Kết
                    Sacombank Tiki Platinum -{" "}
                    <a
                      href="https://tiki.vn/chuong-trinh/mo-the-tikicard"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: "rgb(255, 255, 255)",
                        color: "rgb(230, 0, 0)",
                      }}
                    >
                      Mở thẻ ngay
                    </a>
                  </li>
                  <li className="SaveCouponListItem__StyledSaveCouponListItem-zfsrmp-0 fppNFB">
                    <span className="name">
                      <span>
                        Nhập mã FAAUG19 giảm ngay 19k cho đơn hàng các sản phẩm{" "}
                        <a
                          href="https://tiki.vn/chuong-trinh/khuyen-mai-hot-thoi-trang-phu-kien"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          thuộc ngành hàng Thời trang
                        </a>{" "}
                        từ 299k trở lên.Không áp dụng cho sản phẩm cũng cấp bởi
                        Hàng Quốc TếSố lượng có han!!!
                      </span>
                    </span>
                    <span className="save-coupon">Lưu mã</span>
                  </li>
                  <li>
                    Miễn phí giao hàng cho đơn hàng từ 250k, tối đa 88k cho mỗi
                    Đơn hàng. Áp dụng tối đa 3 lượt/khách hàng từ 29/07 -
                    12/08/2020 (Số lượng có hạn)
                  </li>
                  <li>
                    Nhận Quà Tặng 17.3tr &amp; Gói TikiNOW 1 Năm với thẻ Citi.{" "}
                    <a
                      href="https://tiki.vn/chuong-trinh/mo-the-citibank-2020"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Mở thẻ ngay
                    </a>
                  </li>
                  <li>
                    Nhập mã TIKIMOMO khi tải và đăng kí MoMo để được: Coupon 50K
                    cho đơn từ 300K, Thêm 2 coupon 30K cho đơn hàng tiếp theo từ
                    300K.{" "}
                    <a
                      href="https://tiki.vn/chuong-trinh/momo-tiki-now?src=pdp"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ backgroundColor: "rgb(255, 255, 255)" }}
                    >
                      Xem chi tiết
                    </a>
                  </li>
                  <li className="SaveCouponListItem__StyledSaveCouponListItem-zfsrmp-0 fppNFB">
                    <span className="name">
                      <span>
                        Nhập mã FAAUG69 giảm ngay 69k cho đơn hàng các sản phẩm{" "}
                        <a
                          href="https://tiki.vn/chuong-trinh/khuyen-mai-hot-thoi-trang-phu-kien"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          thuộc ngành hàng Thời trang
                        </a>{" "}
                        từ 599k trở lên.Không áp dụng cho sản phẩm cũng cấp bởi
                        Hàng Quốc TếSố lượng có han!!!
                      </span>
                    </span>
                    <span className="save-coupon">Lưu mã</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container Container-itwfbd-0 jFkAwY">
        <div className="ProductDescription__Wrapper-fuzaih-0 khHtLW">
          <div className="left">
            <h4 className="BlockTitle__Wrapper-qpz3fo-0 cfpgte">
              Thông tin chi tiết
            </h4>
            <div className="group">
              <div className="content has-table">
                <table>
                  {attributes.map((el) => (
                    <tbody key={el.name}>
                      <tr>
                        <td>{el.name}</td>
                        <td>
                          {typeof el.value === "number"
                            ? el.value
                            : htmlToFormattedText(el.value)}
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
            <div className="group">
              <h4 className="BlockTitle__Wrapper-qpz3fo-0 cfpgte">
                MÔ TẢ SẢN PHẨM
              </h4>
              <div className="content">
                <div className="ToggleContent__Wrapper-sc-1hm81e2-1 iGyNLs">
                  <div className="ToggleContent__View-sc-1hm81e2-0 eIzUuC">
                    <div>
                      <p>
                        <span
                          style={{
                            color: "rgba(0, 0, 0, 0.8)",
                            fontFamily: "Open Sans,san-serif",
                            whiteSpace: "pre-wrap",
                          }}
                        >
                          {htmlToFormattedText(Descriptions)}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right ">
            <a
              href="https://tiki.vn/chuong-trinh/uu-dai-nha-ban-sach?src=product_detail_right_banner"
              target="_blank"
              rel="noopener noreferrer"
              className="RightBanner__Link-gunpug-0 cYhFsH"
            >
              <img
                src="https://salt.tikicdn.com/ts/banner/57/f1/fd/c255bc71b597e978e13b7839c8e5ef62.jpg"
                alt="BOOK SALE 8K"
                className="LazyLoadImage__Wrapper-sc-12s4rj6-0 dqgcDn"
                style={{ opacity: 1 }}
              />
            </a>
          </div>
        </div>
      </div>
      <SubFooter />
    </div>
  );
};

export default Infor;
