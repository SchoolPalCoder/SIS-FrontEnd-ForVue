// export let types = keyMirror({
//   LOCATION_INIT: null,
// })




class MutationType {
  constructor(props) {
    /**
     * 初始化面包屑
     * */
    this.LOCATION_INIT = null;
    return this.keyMirror(this);
  }
  keyMirror(obj) {
    if (obj instanceof Object) {
      var _obj = Object.assign({}, obj)
      var _keyArray = Object.keys(obj)
      console.log(_keyArray);
      _keyArray.forEach(key => _obj[key] = key)
      return _obj
    }
  }
}

export let types = new MutationType();








