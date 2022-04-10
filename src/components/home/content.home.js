import React, { Component } from "react";
import ProductItem from "./product.item";
import { Link } from "react-router-dom";
class ContentHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagination: [],
      check_1: true,
      check_2: false,
      check_3: false,
      check_4: false,
      check_5: false
    };
  }
  resetCheck = () => {
    this.setState({
      check_1: false,
      check_2: false,
      check_3: false,
      check_4: false,
      check_5: false
    });
  };

  render() {
    return (
      <section id="aa-product">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="row">
                <div class="aa-product-area">
                  <div class="aa-product-inner">
                    <ul class="nav nav-tabs aa-products-tab">


                      <li><a href="/">Mới Nhất</a></li>
                      <li><a href="#">Vật Phẩm</a></li>
                      <li><a href="#">Tượng Đá</a></li>
                      <li><a href="#">Trang Sức</a></li>

                    </ul>
                    <div className="panel-group category-products" id="accordian">
                      {this.props.category?.map((element, index) => {
                        return (
                          <div
                            key={index}
                            onClick={() => {
                              this.resetCheck()
                              this.props.setTitle(element.name);
                              this.props.setBranch("category");
                              this.props.setIDBranch(element._id);
                              this.props.branchClick("category", element._id);
                            }}
                            className="panel panel-default"
                          >
                            <div className="panel-heading">
                              <h4 className="panel-title item-custom">
                                <a key={index}>{element.name}</a>
                              </h4>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div class="tab-content">
                      <div class="tab-pane fade in active" id="sanphammoi">
                        <ul class="aa-product-catg">

                          <li>
                            <figure>
                              <a class="aa-product-img" href="details/{{ $data1->id}}"><img src="../resources/Content/images/{{ $data1->image_link }}" /> </a>
                              <a class="aa-add-card-btn" href="~/Home/Details?id=@item.id"><span class="fa fa-shopping-cart"></span>Thêm vào giỏ hàng</a>
                              <figcaption>
                                <h4 class="aa-product-title"><a href="~/Home/Details?id=@item.id">Tên Sản Phẩm</a></h4>

                                <span class="aa-product-price">500000 VND</span><br />
                              </figcaption>
                            </figure>

                          </li>
                        </ul>

                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}
export default ContentHome;
