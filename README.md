# TestSkTool

配置方式：
"plugins": {
    "ceesPlugin": {
      "version": "3.0.0",
      "provider": "wx8554b9e291d36f87",
      "genericsImplementation": {
        "test": {
          "productview_acne": "component/productview/productview",
          "productview_speckle": "component/productview_two/productview_two",
          "productview_mole": "component/productview/productview",
          "productview_wrinkle": "component/productview/productview",
          "productview_eyedarks": "component/productview/productview",
          "productview_eyebags": "component/productview/productview",
          "productview_blackhead": "component/productview/productview",
          "productview_pore": "component/productview/productview"
        }
      }
    }
  },

1、	使用插件内部的ui产品推荐步骤：
（1）先监听分析结果页面的加载，获得8个指标的结果后根据结果自己判断给出什么样的产品（如：痘痘个数超过20个就推荐什么品牌的祛痘产品）。分析结果的数据结构在demo中的log有打印， 

（2）构建推荐产品的数据结构（这些具体的数据需要开发者自己来填写）：如图
 
数据结构必须是以上的这种结构，且字段也必须一样，“data”为自己定义想要的任何类型数据，但不会显示在ui上。“var products”的数组长度必须为8，数组的下标对应8个指标的顺序，如果想某个指标不推荐产品可设置为null（var products=[null,null,null,null,null,null,null,null]）这是所有指标都不推荐产品的方式。Demo中也有这个数据，demo中最后一个没有产品推荐但是也没写null是因为ui中是按顺序来展示的所有最后一个可以写，但是其他的就必须要写null。
（3）完成上面的两个步骤后，再通过plugin.setProducts(products)方法设置（2）步中的数据即可显示内部的ui，“plugin.setCustomeProducts(products)”方法为自定义ui时使用的，所以使用插件内部的ui时可以不调用
 

2、	使用自定义组件UI的方式:
（1）	先创建好自己的组件，demo中只写了2两个自定义组件作为案例，
 
插件是支持每个指标都可以展示不同的ui, 也可以展示一样的，这个由开发者决定，开发者编写的自定义组件长什么样就会在插件上展示什么样，demo中已给出两个案例，只需要注意app.json文件的配置即可
 
以上标记的都是需要注意的地方，“test”是用于调式的页面，正式上线环境时须改为“result”页面。自定义的组件名称可随意取，但必须按照上面的方式配置。使用自定义组件时数据的传递方式也是先监听分析结果页面的加载后再通过自己的分析再进行构建产品推荐数据，然后通过“plugin.setCustomeProducts(products);”方法传递数据，demo中都有案例和注释说明。自定义组件的第一个组件里面也写有注释需要注意的地方，自定义组件可查看官方文档来进行开发。
