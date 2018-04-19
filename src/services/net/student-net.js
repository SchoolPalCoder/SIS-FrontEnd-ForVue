import net from '../base/net'
var getList = function () {
    return net.get("https://cnodejs.org/api/v1/topics")
}

var getErrorList = function () {
    return net.get("http://test.sis03.1course.cn/api/Notices/GetNoticeTitle")
}

export default {
    getList,
    getErrorList
}