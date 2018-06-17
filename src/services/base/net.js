//引入axios
import axios from 'axios'
import store from '../../store'



let cancel, promiseArr = {}
const CancelToken = axios.CancelToken;
//请求拦截器
axios.interceptors.request.use(config => {
  console.log(config);

  !config.noLoading && store.commit("increment");
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  //发起请求时，取消掉当前正在进行的相同请求
  if (promiseArr[config.url]) {
    promiseArr[config.url]('操作取消')
    promiseArr[config.url] = cancel
  } else {
    promiseArr[config.url] = cancel
  }
  return config
}, error => {
  return Promise.reject(error)
})

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
  console.log(response);
  !response.config.noLoading && store.commit("increment");
  if (response.status === 200) {
    return response.data.data
  } else {

  }
}, error => {
  !error.config.noLoading && store.commit("increment");
  if (error && err.response) {
    //这里可以引用一个对应后端errortype的json，全局提示错误信息
    switch (err.response.status) {
      case 400:
        err.message = '错误请求'
        break;
      case 401:
        err.message = '未授权，请重新登录'
        break;
      default:
        err.message = `连接错误${err.response.status}`
    }
  } else {
    err.message = "连接到服务器失败"
  }
  message.error(err.message)
  return Promise.resolve(error.response)
})

axios.defaults.baseURL = '/api'
//设置默认请求头
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest'
}
axios.defaults.timeout = 10000

export default {
  //get请求
  get(url, param, noLoading) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: param,
        cancelToken: new CancelToken(c => {
          cancel = c
        }),
        noLoading
      }).then(res => {
        resolve(res)
      })
    })
  },
  //post请求
  post(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: param,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        resolve(res)
      })
    })
  }
}
