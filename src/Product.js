import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";



function Product1() {
  return (
    <div className="product">
      <h3>Revamp your home in style</h3>
      <div className="product__info">
        <div className="product_one">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_furnishings_2._SY116_CB584596691_.jpg"
            className="product___image"
            alt=""
          />
          <p>
            Cushion covers, <br /> bedsheets & more
          </p>
        </div>
        <div className="product_two">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg"
            className="product___image"
            alt=""
          />
          <p>
            Figurines, vases and
            <br /> more
          </p>
        </div>
        <div className="product_three">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_storage_1._SY116_CB584596691_.jpg"
            className="product___image"
            alt=""
          />
          <p>Home Storage</p>
        </div>
        <div className="product_four">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_lighting_2._SY116_CB584596691_.jpg"
            className="product___image"
            alt=""
          />
          <p>Lighting Solutions</p>
        </div>{" "}
        <br />
      </div>
      <a href="hello.com">See more</a>
    </div>
  );
}

function Product2() {
  return (
    <div className="product">
      <h3>Up to 60% off | Styles for men</h3>
      <div className="product__info">
        <div className="product_one">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg"
            className="product___image"
            alt=""
          />
          <p> Clothing</p>
        </div>
        <div className="product_two">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg"
            className="product___image"
            alt=""
          />
          <p>Footwear</p>
        </div>
        <div className="product_three">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg"
            className="product___image"
            alt=""
          />
          <p>Watches</p>
        </div>
        <div className="product_four">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg"
            className="product___image"
            alt=""
          />
          <p>Bags & Wallets</p>
        </div>{" "}
        <br />
      </div>
      <a href="hello.com" className="product__link">
        End Of Season Sale
      </a>
    </div>
  );
}

function Product3() {
  return (
    <div className="product">
      <h3>
        Appliances for your home | Up <br /> to 55% off
      </h3>
      <div className="product__info">
        <div className="product_one">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
            className="product___image"
            alt=""
          />
          <p>Air Conditioners</p>
        </div>
        <div className="product_two">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
            className="product___image"
            alt=""
          />
          <p>Refrigerators</p>
        </div>
        <div className="product_three">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
            className="product___image"
            alt=""
          />
          <p>MicroWaves</p>
        </div>
        <div className="product_four">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
            className="product___image"
            alt=""
          />
          <p>Washing Machines</p>
        </div>{" "}
        <br />
      </div>
      <a href="hello.com" className="product__link">
        See more
      </a>
    </div>
  );
}

function Product4() {
  return (
    <div className="product">
      <h3>
        Starting ₹99 | All your home
        <br /> improvement needs
      </h3>
      <div className="product__info">
        <div className="product_one">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_4._SY116_CB600489960_.jpg"
            className="product___image"
            alt=""
          />
          <p> Spin mops,wipes & more</p>
        </div>
        <div className="product_two">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_3._SY116_CB600489960_.jpg"
            className="product___image"
            alt=""
          />
          <p>
            Bathroom hardware &<br /> accessories
          </p>
        </div>
        <div className="product_three">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_7._SY116_CB600489960_.jpg"
            className="product___image"
            alt=""
          />
          <p>
            Hammers, screwdrivers &<br /> more
          </p>
        </div>
        <div className="product_four">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_5._SY116_CB600489960_.jpg"
            className="product___image"
            alt=""
          />
          <p>
            Extension boards, plugs &<br /> more
          </p>
        </div>{" "}
        <br />
      </div>
      <a href="hello.com" className="product__link">
        Explore All
      </a>
    </div>
  );
}

function Product5() {
  return (
    <div className="product">
      <h3>Up to 60% off | Styles for women</h3>
      <div className="product__info">
        <div className="product_one">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg"
            className="product___image"
            alt=""
          />
          <p>Women's Clothing</p>
        </div>
        <div className="product_two">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg"
            className="product___image"
            alt=""
          />
          <p>Footwear+Handbags</p>
        </div>
        <div className="product_three">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg"
            className="product___image"
            alt=""
          />
          <p>Watches</p>
        </div>
        <div className="product_four">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg"
            className="product___image"
            alt=""
          />
          <p>Fashion jewellery</p>
        </div>{" "}
        <br />
      </div>
      <a href="hello.com" className="product__link">
        End Of Season Sale
      </a>
    </div>
  );
}

function Product6() {
  return (
    <div className="product">
      <h3>
        Shop TVs by Your Preferred
        <br /> Size | Starting ₹6,999
      </h3>
      <div className="product__info">
        <div className="product_one">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Manish/BAU/MARCH/low/32._SY116_CB580539018_.jpg"
            className="product___image"
            alt=""
          />
          <p>
            Budget TVs | Up to 60%
            <br /> off
          </p>
        </div>
        <div className="product_two">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Manish/BAU/MARCH/low/43._SY116_CB580539018_.jpg"
            className="product___image"
            alt=""
          />
          <p>
            4K TVs | Up to 24 months
            <br /> No Cost EMI
          </p>
        </div>
        <div className="product_three">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Manish/BAU/MARCH/low/55._SY116_CB580539018_.jpg"
            className="product___image"
            alt=""
          />
          <p>
            Big Screens | Up to 60%
            <br /> off
          </p>
        </div>
        <div className="product_four">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Manish/BAU/MARCH/low/65._SY116_CB580539018_.jpg"
            className="product___image"
            alt=""
          />
          <p>
            Ultra Premium TVs | Up to
            <br /> 50% off
          </p>
        </div>
      </div>
      <a href="hello.com" className="product__link">
        See All
      </a>
    </div>
  );
}

function Product7() {
  return (
    <div className="product">
      <h3>
        Automotive essentials | Up to
        <br /> 60% off
      </h3>
      <div className="product__info">
        <div className="product_one">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg"
            className="product___image"
            alt=""
          />
          <p>Cleaning Accessories</p>
        </div>
        <div className="product_two">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg"
            className="product___image"
            alt=""
          />
          <p>Tyre & rim care</p>
        </div>
        <div className="product_three">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg"
            className="product___image"
            alt=""
          />
          <p>Helmets</p>
        </div>
        <div className="product_four">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg"
            className="product___image"
            alt=""
          />
          <p>Vacuum Cleaner</p>
        </div>{" "}
        <br />
      </div>
      <a href="hello.com" className="product__link">
        See more
      </a>
    </div>
  );
}
function Product8() {
  return (
    <div className="product">
      <h3>Up to 75% off | Headphones</h3>
      <div className="product__info">
        <div className="product_one">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boat_Desktop_Qc_1x._SY116_CB577919562_.jpg"
            className="product___image"
            alt=""
          />
          <p>Up to 75% off | boAt</p>
        </div>
        <div className="product_two">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boult_Desktop_Qc_1x._SY116_CB577919562_.jpg"
            className="product___image"
            alt=""
          />
          <p>Up to 75% off | boult</p>
        </div>
        <div className="product_three">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Noise_Desktop_Qc_1x._SY116_CB577919562_.jpg"
            className="product___image"
            alt=""
          />
          <p>Up to 75% off | Noise</p>
        </div>
        <div className="product_four">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Zebronics_Desktop_Qc_1x._SY116_CB577919562_.jpg"
            className="product___image"
            alt=""
          />
          <p>Up to 75% off | Zebronics</p>
        </div>{" "}
        <br />
      </div>
      <a href="hello.com" className="product__link">
        See All Offers
      </a>
    </div>
  );
}

function Product9() {
  return (
    <div className="product">
      <h3>
        Never before offers from
        <br /> Small businesses
      </h3>

      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/GW/BAU/Desktop/Deals_CC_379x304_1x._SY304_CB580162467_.jpg"
        className="product9__image"
        alt=""
      />
      <br />
      <a href="hello.com" className="product__link">
        See More
      </a>
    </div>
  );
}

function Product10() {
  return (
    <div className="product">
      <h3>
        Customers’ Most-Loved
        <br /> Fashion for you
      </h3>
      <div className="product__info">
        <div className="product_one">
          <img
            src="https://m.media-amazon.com/images/I/616iBhe2roL._AC_SY145_.jpg"
            className="product10_image"
            alt=""
          />
        </div>
        <div className="product_two">
          <img
            src="https://m.media-amazon.com/images/I/61N9KZKj78L._AC_SY145_.jpg"
            className="product___image"
            alt=""
          />
        </div>
        <div className="product_three">
          <img
            src="https://m.media-amazon.com/images/I/61dtCfEcB+L._AC_SY145_.jpg"
            className="product10_image"
            alt=""
          />
        </div>
        <div className="product_four">
          <img
            src="https://m.media-amazon.com/images/I/71ZAiUjsNWL._AC_SY145_.jpg"
            className="product10_image"
            alt=""
          />
        </div>{" "}
        <br />
      </div>
      <a href="hello.com" className="product__link">
        Explore More
      </a>
    </div>
  );
}

function Product11() {
  return (
    <div className="product">
      <h3>
        Bestsellers in Women's Indian
        <br /> Clothing
      </h3>
      <div className="product__info">
        <div className="product_one">
          <img
            src="https://m.media-amazon.com/images/I/51LfzsMZAWL._AC_SY170_.jpg"
            className="product11_image"
            alt=""
          />
        </div>
        <div className="product_two">
          <img
            src="https://m.media-amazon.com/images/I/61SgADmAyDL._AC_SY170_.jpg"
            className="product11_image"
            alt=""
          />
        </div>
        <div className="product_three">
          <img
            src="https://m.media-amazon.com/images/I/61ooTKgAodL._AC_SY170_.jpg"
            className="product11_image"
            alt=""
          />
        </div>
        <div className="product_four">
          <img
            src="https://m.media-amazon.com/images/I/61kIVnGChCL._AC_SY170_.jpg"
            className="product11_image"
            alt=""
          />
        </div>{" "}
        <br />
      </div>
      
    </div>
  );
}

function Product12() {
  return (
    <div className="product">
      <h3>Bestsellers | Up to 60% off</h3>
      <div className="product__info">
        <div className="product_one">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/GW/BAU/Desktop/NSS_Deo_186x116_1x._SY116_CB580162184_.jpg"
            className="product___image"
            alt=""
          />
          <p>Skin Care</p>
        </div>
        <div className="product_two">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/GW/BAU/Desktop/NSS_Haircare_186x116_1x._SY116_CB580162184_.jpg"
            className="product___image"
            alt=""
          />
          <p>Hair Care</p>
        </div>
        <div className="product_three">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/GW/BAU/Desktop/NSS_Grooming_186x116_1x._SY116_CB580162184_.jpg"
            className="product___image"
            alt=""
          />
          <p>Grooming Devices & More</p>
        </div>
        <div className="product_four">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/GW/BAU/Desktop/NSS_Skincare_186x116_1x._SY116_CB580162184_.jpg"
            className="product___image"
            alt=""
          />
          <p>Deos & Fragrance</p>
        </div>{" "}
        <br />
      </div>
      <a href="hello.com" className="product__link">
        See More
      </a>
    </div>
  );
}

function Product13() {
  return (
    <div className="product">
      <h3>
        Under ₹499 | Pocket-friendly
        <br /> fashion
      </h3>
      <div className="product__info">
        <div className="product_one">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-1-186-116._SY116_CB636055991_.jpg"
            className="product___image"
            alt=""
          />
          <p> Clothing</p>
        </div>
        <div className="product_two">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-3-186-116._SY116_CB636055991_.jpg"
            className="product___image"
            alt=""
          />
          <p>Backpacks</p>
        </div>
        <div className="product_three">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-2-186-116._SY116_CB636055991_.jpg"
            className="product___image"
            alt=""
          />
          <p>Footwear</p>
        </div>
        <div className="product_four">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-4-186-116._SY116_CB636055991_.jpg"
            className="product___image"
            alt=""
          />
          <p>View All</p>
        </div>{" "}
        <br />
      </div>
      <a href="hello.com" className="product__link">
        See all offers
      </a>
    </div>
  );
}

function Product14() {
  return (
    <div className="product">
      <h3>
        Up to 50% off | International
        <br /> brands
      </h3>

      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/OOC/Gateway/wk11/desktop-CC379x304._SY304_CB580685658_.jpg"
        className="product9__image"
        alt=""
      />
      <br />
      <a href="hello.com" className="product__link">
        See all offers
      </a>
    </div>
  );
}

function Product15() {
  return (
    <div className="product">
      <h3>
        Hustlers: Jugaad ka khel |<br /> Watch only on miniTV
      </h3>

      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Hustlers/PC_CC/DeskCC-379x304_V1._SY304_CB582438464_.jpg"
        className="product9__image"
        alt=""
      />
      <br />
      <a href="hello.com" className="product__link">
        Watch more FREE content | only on miniTV
      </a>
    </div>
  );
}

function Product16() {
  return (
    <div className="product">
      <h3>Bestsellers | Up to 60% off</h3>
      <div className="product__info">
        <div className="product_one">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/March/BTF/6th/Sports-low._SY116_CB581842641_.jpg"
            className="product___image"
            alt=""
          />
          <p> Sport Shoes</p>
        </div>
        <div className="product_two">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/March/BTF/6th/PCQC_Jewl_low_res._SY116_CB581841164_.png"
            className="product___image"
            alt=""
          />
          <p>jewellery & Accessories</p>
        </div>
        <div className="product_three">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/March/BTF/6th/Pcqc2-4-low._SY116_CB581841164_.jpg"
            className="product___image"
            alt=""
          />
          <p>Watches & smartwatches</p>
        </div>
        <div className="product_four">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/March/BTF/6th/Pcqc1-4-low._SY116_CB581841164_.png"
            className="product___image"
            alt=""
          />
          <p>Bags, Wallets & Luguages</p>
        </div>{" "}
        <br />
      </div>
      <a href="hello.com" className="product__link">
        See all offers
      </a>
    </div>
  );
}

function Product17() {
  return (
    <div className="product">
      <h3>
        Top rated products from Small
        <br /> businesses
      </h3>
      <div className="product__info">
        <div className="product_one">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/GW/BAU/Desktop/NAM_Fans_186x116_1x._SY116_CB580162149_.jpg"
            className="product___image"
            alt=""
          />
          <p>Fans</p>
        </div>
        <div className="product_two">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/GW/BAU/Desktop/NAM_AC_186x116_1x._SY116_CB580162149_.jpg"
            className="product___image"
            alt=""
          />
          <p>Coolers & Heaters</p>
        </div>
        <div className="product_three">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/GW/BAU/Desktop/NAM_Water_Purifiers_186x116_1x._SY116_CB580162149_.jpg"
            className="product___image"
            alt=""
          />
          <p>Water Purifiers</p>
        </div>
        <div className="product_four">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/GW/BAU/Desktop/NAM_Oven_186x116_1x._SY116_CB580162149_.jpg"
            className="product___image"
            alt=""
          />
          <p>Oven, Toaster & Grill</p>
        </div>{" "}
        <br />
      </div>
      <a href="hello.com" className="product__link">
        See all offers
      </a>
    </div>
  );
}

function Product18() {
  return (
    <div className="product">
      <h3>
        Starting ₹99 | Start your fitness
        <br /> journey
      </h3>

      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Sports/GW_Desktop/1199101_379x304_Compressed._SY304_CB448278349_.jpg"
        className="product9__image"
        alt=""
      />
      <br />
      <a href="hello.com" className="product__link">
        See More
      </a>
    </div>
  );
}

function Product19() {
  return (
    <div className="product">
      <h3>
        Minimum 50% off | Top styles
        <br /> for her
      </h3>
      <div className="product__info">
        <div className="product_one">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/kids/WRS_Dec22/PC_QC/WA/1_1X._SY116_CB618751254_.jpg"
            className="product19_image"
            alt=""
          />
          <p>
            {" "}
            Allen Solly, Fort Collins &<br /> more
          </p>
        </div>
        <div className="product_two">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/kids/WRS_Dec22/PC_QC/WA/2_1X._SY116_CB618751254_.jpg"
            className="product19_image"
            alt=""
          />
          <p>Biba, Aurelia & more</p>
        </div>
        <div className="product_three">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/kids/WRS_Dec22/PC_QC/WA/3_1X._SY116_CB618751254_.jpg"
            className="product19_image"
            alt=""
          />
          <p>Womanista, Mimosa & more</p>
        </div>
        <div className="product_four">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/kids/WRS_Dec22/PC_QC/WA/4_1X._SY116_CB618751254_.jpg"
            className="product19_image"
            alt=""
          />
          <p>Harpa, Only & more</p>
        </div>{" "}
        <br />
      </div>
      <a href="hello.com" className="product__link">
        See all offers
      </a>
    </div>
  );
}

function Product20() {
  return (
    <div className="product">
      <h3>
        Under ₹699 | Combo packs |<br /> Amazon brands & more
      </h3>

      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2024/GW_Mar/11th/Combo_low_res_2_1_1_1._SY304_CB580849417_.jpg"
        className="product9__image"
        alt=""
      />
      <br />
      <a href="hello.com" className="product__link">
        See all offers
      </a>
    </div>
  );
}


  

function Product({ id, title,description,description2, image, price, rating }) {

  const[{basket}, dispatch]=useStateValue();

  


const addToBasket = () => {
  //dispatch items to data layer
 dispatch({
   type: "ADD_TO_BASKET",
   item:{
    id: id,
    title: title,
    image: image,
    price: price,
    rating:rating,
   },
   
 });
};

  return (
    <div className="products">
      <img
        src={image}
        alt=""
      />
      <div className="product___info">
        <p>{title}</p>
        <p>{description}</p>
        <p>{description2}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
         {Array.from({ length: rating }, (_, i) => (
         <p key={i}>⭐</p>
         ))}
       </div>
      </div>
      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
}

export {
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
  Product6,
  Product7,
  Product8,
  Product9,
  Product10,
  Product11,
  Product12,
  Product13,
  Product14,
  Product15,
  Product16,
  Product17,
  Product18,
  Product19,
  Product20,
  Product
};
