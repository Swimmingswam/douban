const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const getMovies=function(url) {
  const that = this;
  wx.request({
    url: url,
    method: 'GET',
    header: {
      'content-type': 'json'
    },
    success: function (res) {
      //console.log(res.data)
      that.processData(res);
    },
    fail: function (error) {
      console.log(error);
    }
  })
}
const processData=function(res) {
  that.setData({ movies_data: res.data.subjects })
}

module.exports = {
  formatTime: formatTime,
  getMovies: getMovies,
  processData: processData

}
