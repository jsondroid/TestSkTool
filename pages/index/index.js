// index.js
// 获取应用实例
const app = getApp()
//导入插件
const plugin = requirePlugin('ceesPlugin')

//使用插件内的产品推荐的模拟数据
var products = [{
    "product_title": "产品推荐",
    "products": [{
        "product_image": "http://www.kk.com/img.jpg",
        "product_name": "产品名称1",
        "product_lable": [
          "lable1",
          "lable2"
        ],
        "product_price": "¥10000.00",
        "button": "立即购买1",
        "data": "任意数据"
      },
      {
        "product_image": "http://www.kk.com/img.jpg",
        "product_name": "产品名称2",
        "product_lable": [
          "lable1",
          "lable2"
        ],
        "product_price": "¥10000.00",
        "button": "立即购买2",
        "data": "任意数据"
      },
      {
        "product_image": "http://www.kk.com/img.jpg",
        "product_name": "产品名称3",
        "product_lable": [
          "lable1",
          "lable2"
        ],
        "product_price": "¥10000.00",
        "button": "立即购买3",
        "data": "任意数据"
      }
    ]
  },
  {
    "product_title": "产品推荐",
    "products": [{
        "product_image": "http://www.kk.com/img.jpg",
        "product_name": "产品名称1",
        "product_lable": [
          "lable1",
          "lable2"
        ],
        "product_price": "¥10000.00",
        "button": "立即购买1",
        "data": "任意数据"
      },
      {
        "product_image": "http://www.kk.com/img.jpg",
        "product_name": "产品名称2",
        "product_lable": [
          "lable1",
          "lable2"
        ],
        "product_price": "¥10000.00",
        "button": "立即购买2",
        "data": "任意数据"
      },
      {
        "product_image": "http://www.kk.com/img.jpg",
        "product_name": "产品名称3",
        "product_lable": [
          "lable1",
          "lable2"
        ],
        "product_price": "¥10000.00",
        "button": "立即购买3",
        "data": "任意数据"
      }
    ]
  },
  {
    "product_title": "产品推荐",
    "products": [{
        "product_image": "http://www.kk.com/img.jpg",
        "product_name": "产品名称1",
        "product_lable": [
          "lable1",
          "lable2"
        ],
        "product_price": "¥10000.00",
        "button": "立即购买1",
        "data": "任意数据"
      },
      {
        "product_image": "http://www.kk.com/img.jpg",
        "product_name": "产品名称2",
        "product_lable": [
          "lable1",
          "lable2"
        ],
        "product_price": "¥10000.00",
        "button": "立即购买2",
        "data": "任意数据"
      },
      {
        "product_image": "http://www.kk.com/img.jpg",
        "product_name": "产品名称3",
        "product_lable": [
          "lable1",
          "lable2"
        ],
        "product_price": "¥10000.00",
        "button": "立即购买3",
        "data": "任意数据"
      }
    ]
  },
  {
    "product_title": "产品推荐",
    "products": [{
        "product_image": "http://www.kk.com/img.jpg",
        "product_name": "产品名称1",
        "product_lable": [
          "lable1",
          "lable2"
        ],
        "product_price": "¥10000.00",
        "button": "立即购买1",
        "data": "任意数据"
      },
      {
        "product_image": "http://www.kk.com/img.jpg",
        "product_name": "产品名称2",
        "product_lable": [
          "lable1",
          "lable2"
        ],
        "product_price": "¥10000.00",
        "button": "立即购买2",
        "data": "任意数据"
      },
      {
        "product_image": "http://www.kk.com/img.jpg",
        "product_name": "产品名称3",
        "product_lable": [
          "lable1",
          "lable2"
        ],
        "product_price": "¥10000.00",
        "button": "立即购买3",
        "data": "任意数据"
      }
    ]
  },
  {
    "product_title": "产品推荐",
    "products": [{
        "product_image": "http://www.kk.com/img.jpg",
        "product_name": "产品名称1",
        "product_lable": [
          "lable1",
          "lable2"
        ],
        "product_price": "¥10000.00",
        "button": "立即购买1",
        "data": "任意数据"
      },
      {
        "product_image": "http://www.kk.com/img.jpg",
        "product_name": "产品名称2",
        "product_lable": [
          "lable1",
          "lable2"
        ],
        "product_price": "¥10000.00",
        "button": "立即购买2",
        "data": "任意数据"
      },
      {
        "product_image": "http://www.kk.com/img.jpg",
        "product_name": "产品名称3",
        "product_lable": [
          "lable1",
          "lable2"
        ],
        "product_price": "¥10000.00",
        "button": "立即购买3",
        "data": "任意数据"
      }
    ]
  },
  {
    "product_title": "产品推荐",
    "products": [{
        "product_image": "http://www.kk.com/img.jpg",
        "product_name": "产品名称1",
        "product_lable": [
          "lable1",
          "lable2"
        ],
        "product_price": "¥10000.00",
        "button": "立即购买1",
        "data": "任意数据"
      },
      {
        "product_image": "http://www.kk.com/img.jpg",
        "product_name": "产品名称2",
        "product_lable": [
          "lable1",
          "lable2"
        ],
        "product_price": "¥10000.00",
        "button": "立即购买2",
        "data": "任意数据"
      },
      {
        "product_image": "http://www.kk.com/img.jpg",
        "product_name": "产品名称3",
        "product_lable": [
          "lable1",
          "lable2"
        ],
        "product_price": "¥10000.00",
        "button": "立即购买3",
        "data": "任意数据"
      }
    ]
  },
  {
    "product_title": "产品推荐",
    "products": [{
        "product_image": "http://www.kk.com/img.jpg",
        "product_name": "产品名称1",
        "product_lable": [
          "lable1",
          "lable2"
        ],
        "product_price": "¥10000.00",
        "button": "立即购买1",
        "data": "任意数据"
      },
      {
        "product_image": "http://www.kk.com/img.jpg",
        "product_name": "产品名称2",
        "product_lable": [
          "lable1",
          "lable2"
        ],
        "product_price": "¥10000.00",
        "button": "立即购买2",
        "data": "任意数据"
      },
      {
        "product_image": "http://www.kk.com/img.jpg",
        "product_name": "产品名称3",
        "product_lable": [
          "lable1",
          "lable2"
        ],
        "product_price": "¥10000.00",
        "button": "立即购买3",
        "data": "任意数据"
      }
    ]
  }
]

Page({

  data: {

  },

  onLoad() {

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {


    //以下方法可放在app.js中
    
    //设置导航栏标题名称
    plugin.setNavigationBarTitle('测试demo');

    //监听产品点击事件回调
    plugin.setOnClickProduct((e) => {
      console.error('监听到:  ' + JSON.stringify(e))
    });

    //监听结果页面的加载完成
    plugin.setOnLoadResultListener((res) => {
      console.debug('监听加载页面:  ' + JSON.stringify(res))
      // 在该方法中获得每个指标的结果数据后分析，然后根据自己的分析去推荐产品
      //必须在该回调中设置产品数据
      plugin.setProducts(products); //使用插件内部固定的ui时调用
      plugin.setCustomeProducts(products); //使用自定义的组件时调用

    });
  },


  onclick(e) {

    //进入拍照页面（正式上线时使用）
    // wx.navigateTo({
    //   url: 'plugin://ceesPlugin/camera',
    // })

    // 进入测试页面 (测试专用)
    wx.navigateTo({
      url: 'plugin://ceesPlugin/test',
    })

  },


})