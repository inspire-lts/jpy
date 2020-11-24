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
    title: "别跑",
    media: {
      tyoe: "IMAGE",
      source: {
        url: "https://gitee.com/new_lts/MyImages/raw/master/img/4.jpg"
      }
    }
  } ];

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
