import React from 'react'
import { Chrono} from 'react-chrono'

const Home = () => {
  const items = [{
    title: "小时候",
    media: {
      type: "IMAGE",
      source: {
        url: "https://gitee.com/new_lts/MyImages/raw/master/img/QQ图片20201123140229.jpg"
      }
    },
  },{
    title: "高中",
    media: {
      type: "IMAGE",
      source: {
        url: "https://gitee.com/new_lts/MyImages/raw/master/img/1.jpg"
      }
    },
  }, {
    title: "大学",
    media:  {
      type: "IMAGE",
      source: {
        url: "https://gitee.com/new_lts/MyImages/raw/master/img/3.jpg"
      }
    }
  },{
    title: "相遇",
    media: {
      type: "IMAGE",
      source: {
        url: "https://gitee.com/new_lts/MyImages/raw/master/img/QQ图片20201124135833.jpg"
      }
    }
  }, {
    title: "阳光正好",
    media: {
      type: "IMAGE",
      source: {
        url: "https://gitee.com/new_lts/MyImages/raw/master/img/20201124144013.png"
      }
    }
  },{
    title: "想有个家",
    media: {
      type: "IMAGE",
      source: {
        url: "https://gitee.com/new_lts/MyImages/raw/master/img/20201124144156.png"
      }
    }
  },{
    title: "别跑",
    media: {
      type: "IMAGE",
      source: {
        url: "https://gitee.com/new_lts/MyImages/raw/master/img/20201124143223.png"
      }
    }
  }];

  return (
    <div>
      <Chrono 
      items={items}
      slideShow
      mode='VERTICAL_ALTERNATING'/>
    </div>
  )
}

export default Home
