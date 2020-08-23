import React from "react";
import "./BlockInfor1.css";

const BlockInfor1 = (props) => {
  return (
    <React.Fragment>
      <div className="container" style={{marginTop:'5rem'}}>
        <div className="row">
        <div className="wpb_column">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="wpb_single_image wpb_content_element vc_align_left   normal-effect light-bg responsive_js_composer_custom_css_82549234">
                <figure className="wpb_wrapper vc_figure">
                  <div className="vc_single_image-wrapper   vc_box_border_grey">
                    <img
                      width={558}
                      height={651}
                      src="https://nexio.famithemes.com/wp-content/uploads/2019/03/hsty-img1.jpg"
                      className="vc_single_image-img attachment-full"
                      alt=""
                    />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="wpb_column vc_column_container vc_col-sm-6 responsive_js_composer_custom_css_16838019" style={{paddingLeft:'6rem',width: '50%',float:'right'}}>
          <div className="vc_column-inner vc_custom_1552963854839">
            <div className="wpb_wrapper">
              <div className="nexio-title style-01  nexio_custom_css_1572712180   vc_custom_1553567155410 responsive_js_composer_custom_css_685661153">
                <div className="title-inner">
                  <h3 className="block-title">
                    {" "}
                    See what’s new with up to 50% off online and in stores...
                  </h3>
                  <div className="block-desc">
                    {" "}
                    Shop the latest fashion online at Nicebeats and discover new
                    favourites in women’s clothing. Find everything from casual
                    day dresses to sharp office wear. We have jeans in every
                    fit, premium quality items and the latest fashion
                    essentials. Check out our Conscious collection made out of
                    more sustainable materials, we bring you women’s fashion in
                    a more sustainable way
                  </div>{" "}
                  <a
                    className="button"
                    target="_self"
                    href="https://nexio.famithemes.com/shop"
                  >
                    Read more
                  </a>
                </div>
              </div>
              <div className="wpb_single_image wpb_content_element vc_align_left   normal-effect light-bg responsive_js_composer_custom_css_2035119756">
                <figure className="wpb_wrapper vc_figure">
                  <div className="vc_single_image-wrapper   vc_box_border_grey">
                    <img
                      width={680}
                      height={570}
                      src="https://nexio.famithemes.com/wp-content/uploads/2019/03/hsty-img2.jpg"
                      className="vc_single_image-img attachment-full"
                      alt=""
                      loading="lazy"
                      srcSet="https://nexio.famithemes.com/wp-content/uploads/2019/03/hsty-img2.jpg 680w, https://nexio.famithemes.com/wp-content/uploads/2019/03/hsty-img2-300x251.jpg 300w, https://nexio.famithemes.com/wp-content/uploads/2019/03/hsty-img2-600x503.jpg 600w"
                      sizes="(max-width: 680px) 100vw, 680px"
                    />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlockInfor1;
