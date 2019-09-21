Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj:[
      {
        id:"1",
        title: "周杰倫【說好不哭 Won't Cry】with 五月天阿信 (Mayday Ashin) MV",
        bofang:"1523582",
        shijian:"2019/9.16",
        imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569570034&di=81fc6a54e3289723834bd0cb10c4cab1&imgtype=jpg&er=1&src=http%3A%2F%2Fn.sinaimg.cn%2Ftranslate%2F19%2Fw1024h595%2F20190920%2Ff48b-iewtemz4172127.jpg"
      },
      {
        id: "2",
        title: "五月天《突然好想你》万人合唱震撼现场，听哭了都是有故事的人",
        bofang: "51123111",
        shijian: "2017/5.22",
        imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568977300132&di=93e9c902b449192e21f8df2fefe3788a&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201401%2F09%2F20140109163646_T85jR.thumb.700_0.jpeg"
      },
      {
        id: "3",
        title: "【2019.7.6】许嵩北京演唱会《清明雨上》",
        bofang: "511133",
        shijian: "2019/7/20",
        imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568978195861&di=f6a960457a270c64418f7200d9ea0ccd&imgtype=0&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20131125%2F20131125134703-224571491.jpg"
      },
      {
        id: "4",
        title: "《将故事写成我们》MV 林俊杰x方文山 全新单曲！！！！！",
        bofang: "2312411",
        shijian: "2019/9.19",
        imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568977863220&di=11fd29cf08e24abba73bc4aa9aeb6460&imgtype=0&src=http%3A%2F%2Fimg2.utuku.china.com%2F650x0%2Fnews%2F20190920%2F3b70a4f7-dcfe-4200-8133-359d8f7d2694.jpg"
      }
    ],
    obj2:[
      {
        id:"21",
        title: "《晴天》------周杰伦",
        bofang: "642598",
        shijian: "2018/6/2",
        imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568979070807&di=499931c658f582fdc0fefa728355cf46&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F06898c3179e9756cf1f2d649b031dfeef2d4129e.png"
      },
      {
        id: "22",
        title: "《等你下课》------周杰伦",
        bofang: "234234",
        shijian: "2015/3/9",
        imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568979129287&di=6eb06a5396d42c815a892f8869930741&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h360%2F20180126%2F450a-fyqzcxf9393182.jpg"
      },
      {
        id: "23",
        title: "《兰亭序》--------周杰伦",
        bofang: "7574447",
        shijian: "2012/7/29",
        imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568979288434&di=5ca6aa47aa4de00877792e7b76026b3e&imgtype=0&src=http%3A%2F%2Fimg9.ph.126.net%2F32Tfl1kA9u-5lJCOMoVHxg%3D%3D%2F64739244660730629.jpg"
      },
      {
        id: "24",
        title: "《彩虹》--------周杰伦",
        bofang: "532522",
        shijian: "2014/4/20",
        imgurl: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4044628543,1784895330&fm=26&gp=0.jpg"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
  ,
  search:(e)=> {
    console.log(e.currentTarget)
  }
  
})