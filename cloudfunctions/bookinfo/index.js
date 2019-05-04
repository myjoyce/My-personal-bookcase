// 云函数入口文件
const cloud = require('wx-server-sdk')

var rp = require('request-promise')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  var res = rp('https://api.douban.com/v2/book/isbn/' + event.isbn + '?apikey=0b2bdeda43b5688921839c8ecb20399b').then(html => {
    return html;
  }).catch(err => {
    console.log(err);
  })
  return res
}