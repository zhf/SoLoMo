import Hook from '/react-hook'

const index = () => <div style={{ height: '100%' }}>
  <div id='map-container' style={{ height: '100%' }}></div>
  <Hook didMount={baidu} />
</div>

function baidu() {


  var baiduMap = 'http://api.map.baidu.com/getscript?v=2.0&ak=jDhQn9BmUIE0TaGA0oDheEi5w6Xmbr60'
DocHead.loadScript(baiduMap, function() {
  console.log(111)

  $('map-container')

      var map = new BMap.Map("map-container"); // 创建Map实例

      var point = new BMap.Point(116.403694,39.927552);  // 创建点坐标
  map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
  map.enableScrollWheelZoom();
  map.addControl(new BMap.NavigationControl());
  // // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
  // map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
  // map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

  // map.setCurrentCity("哈尔滨");

  // var local = new BMap.LocalSearch(map, {
  //   renderOptions: { map: map }
  // });
  // local.search('轩辕东路');
})



    //     var options = {'query':'天安门','region':'北京'};
    // bdmap.search(options,function(err,reuslt){})

}

export default index
