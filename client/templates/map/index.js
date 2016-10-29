import Hook from '/react-hook'

const index = () => <div style={{ height: '100%' }}>
  <div id='map-container' style={{ height: '100%' }}></div>
  <Hook didMount={baidu} />
</div>

function baidu() {


  var baiduMap = 'http://api.map.baidu.com/getscript?v=2.0&ak=jDhQn9BmUIE0TaGA0oDheEi5w6Xmbr60'
DocHead.loadScript(baiduMap, function() {

  navigator.geolocation.getCurrentPosition(function (pos) {
    console.log(pos)
    var map = new BMap.Map("map-container"); // 创建Map实例
    var point = new BMap.Point(pos.coords.longitude, pos.coords.latitude);  // 创建点坐标
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom();
    map.addControl(new BMap.NavigationControl());
  })
})



    //     var options = {'query':'天安门','region':'北京'};
    // bdmap.search(options,function(err,reuslt){})

}

export default index
