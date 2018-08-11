### 各种API资源

#### 1. 可用在线API

- **数字货币行情Coin Market Cap**：https://coinmarketcap.com/zh/api/
  - 描述：全球的加密货币价格走势，每五分钟更新一次，网站有给出详细的API调用方法，有中文版
- **豆瓣API V2**：https://developers.douban.com/wiki/?title=api_v2
  - 描述：豆瓣官方给定的API，分类全面（图书、电影、音乐、同城、广播、用户、日记、相册、线上活动、论坛、回复、我去），官方也有给出详细的调用方法以及状态码，使用时需要详细学习
  - 例如搜索图书：`https://api.douban.com/v2/book/search?q=javascript&count=1`
- **动图GIPHY API**：https://developers.giphy.com/docs/
  - 描述：由GIPHY提供的API，GIPHY的GIF库是世界上最大的GIF动画库，此API**实现了CORS跨域**，可以直接在JavaScript或者网页浏览器中使用，提供了多种文件大小、尺寸、格式
  - **权限**：使用此API需要秘钥，获取秘钥的方式也很简单，[在这里Create an App](https://developers.giphy.com/),每个App都有自己的秘钥，**免费**
  - 端口细节：详细见文档的Technical Documentation
    - Search端点：搜索
    - Trending端点：最新的资源，由真人编辑。返回的结果是GIPHY首页上展示的GIF，一般默认返回25个值
    - Translate端点：
    - Random端点：随机返回一个动图
    - StickerAPI：只提供带有透明背景的GIF动画，包含的终端：Sticker Search、Sticker Roulette (Random)、Sticker Trending、Sticker Translate，还有Sticker Packs: Listing Endpoint、Sticker Packs: Individual Sticker Pack Endpoint、Sticker Packs: Stickers Endpoint、Sticker Packs: Children Pack Listing Endpoint
  - Code Examples：提供了多种语言的使用方式，这里只详细描述JavaScript的方式
  - 使用方式：可以参考<https://ftgibran.github.io/#/vue-api-request> 学习
    1. 搜关键字“funny cat”：`http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=YOUR_API_KEY `
    2. 搜ID “ffeqkVgjJpYtjy ”：`http://api.giphy.com/v1/gifs/feqkVgjJpYtjy?api_key=YOUR_API_KEY `
  - gif参数渲染建议：


| 适用场景                         | 高度                     | 宽度                    |
| -------------------------------- | ------------------------ | ----------------------- |
| **mobile**                       | fixed_height             | fixed_width             |
| **mobile静态预览图像**           | fixed_height_still       | fixed_width_still       |
| **mobile无限滚动和普通动画预览** | fixed_height_downsampled | fixed_width_downsampled |
| **mobile键盘**                   | fixed_height_small       | fixed_width_small       |
| **mobile键盘静态预览图像**       | fixed_width_small_still  | fixed_width_still       |

| 适用场景                    | 属性             |
| --------------------------- | ---------------- |
| 缩略图和预览                | preview          |
| 文件尺寸小于200kb           | downsized_small  |
| 文件尺寸小于2MB             | downsized        |
| 文件尺寸小于5MB             | downsized_medium |
| 文件尺寸小于8MB             | downsized_large  |
| 下载文件的预览图像          | downsized_still  |
| desktop，原始尺寸和大小     | original         |
| desktop，原始尺寸的预览图像 | original_still   |
| 持续时间设置为15s           | looping          |

- JSONPlaceholder伪造的在线API：http://jsonplaceholder.typicode.com/
  - 描述：非常简单的模拟在线API，网页上有清晰的展示调用方法