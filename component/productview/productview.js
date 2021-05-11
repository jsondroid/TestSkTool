// component/productview/productview.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //可定义为人意类型（该变量名不能修改）
    productData: null,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

    // 必须实现该事件，可绑定到你需要触发事件的组件上
    onClickCustomeProduct(e) {
      var myEventDetail = e.detail;
      console.error('数据===' + JSON.stringify(e));
      var myEventOption = {
        bubbles: false,
        composed: false,
        capturePhase: false,
      } // 触发
      //组件上存储的参数 回传到触发事件中
      myEventDetail.detail = e.currentTarget.dataset;
      this.triggerEvent('onClickCustomeProduct', myEventDetail, myEventOption)
    }
  }
})