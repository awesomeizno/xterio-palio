var sensors = window['sensorsDataAnalytic201505']

const init = () => {
  sensors.init({
    show_log: window.__NEXT_PUBLIC_ENV !== 'prod' ? 'true' : false, //test mode, show eventTrack in console log
    server_url: window.sensorsapi,
    web_url: 'https://resources.xter.io',
    heatmap: {
      // 是否开启点击图，default 表示开启，自动采集 $WebClick 事件，可以设置 'not_collect' 表示关闭。
      // 默认只有点击 a input button textarea 四种元素时，才会触发 $WebClick 元素点击事件
      clickmap: 'default',
      custom_property: function (element_target) {
        const extraParamStr = element_target.getAttribute('data-sensors-param')
        if (extraParamStr) {
          try {
            return JSON.parse(extraParamStr)
          } catch (error) {}
        }
      },
      // 是否开启触达图，not_collect 表示关闭，不会自动采集 $WebStay 事件，可以设置 'default' 表示开启。
      //需要 Web JS SDK 版本号大于 1.9.1
      scroll_notice_map: 'default'
    },
    is_track_single_page: true,
    use_client_time: true,
    send_type: 'beacon'
  })
  // 注册公共属性
  sensors.registerPage({})
  // 设置之后，SDK 就会自动收集页面浏览事件 $pageview，以及设置初始来源。
  sensors.quick('autoTrack')
  // 页面浏览时长
  sensors.use('PageLeave')
  sensors.use('PageLoad')

  // 前端方式获取匿名 ID
  sensors.quick('isReady', function () {
    sensors.quick('getAnonymousID')
  })
  window.sensors = sensors
}

sensors && init()
