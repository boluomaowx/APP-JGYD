﻿$axure.loadCurrentPage({
  "url":"自我测试.html",
  "generationDate":new Date(1503998489071.33),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable",
"jvbao",
"yiche",
"mianfenquan"],
  "page":{
    "packageId":"e751fb30e9674a0fb44ece9eba3ad163",
    "type":"Axure:Page",
    "name":"自我测试",
    "notes":{
},
    "style":{
      "baseStyle":"627587b6038d43cca051c114ac41ad32",
      "pageAlignment":"near",
      "fill":{
        "fillType":"solid",
        "color":0xFFFFFFFF},
      "image":null,
      "imageHorizontalAlignment":"near",
      "imageVerticalAlignment":"near",
      "imageRepeat":"auto",
      "favicon":null,
      "sketchFactor":"0",
      "colorStyle":"appliedColor",
      "fontName":"应用字体",
      "borderWidth":"0"},
    "adaptiveStyles":{
},
    "interactionMap":{
},
    "diagram":{
      "objects":[{
          "id":"ca4c339cc6884361a84bcb5413f27d9d",
          "label":"答题前",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "size":{
              "width":375,
              "height":647}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"1fc2634b725b448b83b6cbd406c0e91c",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "size":{
                  "width":375,
                  "height":647}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/模拟考试/题目_u0.png"}},
{
          "id":"f27431d0aa2843aa9717a54e9b52bbea",
          "label":"显示答案",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":false,
          "style":{
            "size":{
              "width":375,
              "height":647},
            "visible":false},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"5aefe592ddc34c50829e7c515f6f2217",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":false,
              "style":{
                "size":{
                  "width":375,
                  "height":647},
                "visible":false},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"fadeWidget",
                      "description":"显示 (形状),<br>(形状),<br>蒙版",
                      "objectsToFades":[{
                          "objectPath":["3a3c2dc4636d453995a5e9ff86060c0f"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["b1623451d8f04c63a181cf37a83e2773"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["2bc35c238bb8487bb03378600c5fce5f"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}}]},
{
                      "action":"fadeWidget",
                      "description":"隐藏 进入视频学习,<br>选择答案,<br>返回上页2,<br>显示答案,<br>答题前,<br>This",
                      "objectsToFades":[{
                          "objectPath":["e6e0881ffcf146e79bb62b4db21625a4"],
                          "fadeInfo":{
                            "fadeType":"hide",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["e24604b75f52486383038586aa815826"],
                          "fadeInfo":{
                            "fadeType":"hide",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["2b836a814bb24e72b73ecea9c1aa2b04"],
                          "fadeInfo":{
                            "fadeType":"hide",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["f27431d0aa2843aa9717a54e9b52bbea"],
                          "fadeInfo":{
                            "fadeType":"hide",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["ca4c339cc6884361a84bcb5413f27d9d"],
                          "fadeInfo":{
                            "fadeType":"hide",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["f27431d0aa2843aa9717a54e9b52bbea"],
                          "fadeInfo":{
                            "fadeType":"hide",
                            "options":{
                              "showType":"none"}}}]}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/模拟考试/答案_u4.png"}},
{
          "id":"2b836a814bb24e72b73ecea9c1aa2b04",
          "label":"返回上页2",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fill":{
              "fillType":"solid",
              "color":0xFFFFFF},
            "size":{
              "width":120,
              "height":40},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"35a8cec18d614fa8840b737a8e3fe0f4",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "size":{
                  "width":120,
                  "height":40},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 审验学习须知",
                      "target":{
                        "targetType":"page",
                        "url":"审验学习须知.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"e24604b75f52486383038586aa815826",
          "label":"选择答案",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fill":{
              "fillType":"solid",
              "color":0xFFFFFF},
            "location":{
              "x":0,
              "y":280},
            "size":{
              "width":380,
              "height":50},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"cb8bec73033c41c4814c972eded745c2",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "location":{
                  "x":0,
                  "y":280},
                "size":{
                  "width":380,
                  "height":50},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"fadeWidget",
                      "description":"显示 返回上页2,<br>显示答案,<br>进入视频学习",
                      "objectsToFades":[{
                          "objectPath":["2b836a814bb24e72b73ecea9c1aa2b04"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["f27431d0aa2843aa9717a54e9b52bbea"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["e6e0881ffcf146e79bb62b4db21625a4"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}}]}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"e6e0881ffcf146e79bb62b4db21625a4",
          "label":"进入视频学习",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fill":{
              "fillType":"solid",
              "color":0xFFFFFF},
            "size":{
              "width":361,
              "height":647},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"36c9537b547b4c6a954b3626cfc76967",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "size":{
                  "width":361,
                  "height":647},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"fadeWidget",
                      "description":"显示 蒙版,<br>确认按钮,<br>(形状),<br>(形状),<br>(形状),<br>(水平线),<br>(垂直线)",
                      "objectsToFades":[{
                          "objectPath":["2bc35c238bb8487bb03378600c5fce5f"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["a0d479473cbf4443af070fde703047f6"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["b1623451d8f04c63a181cf37a83e2773"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["3a3c2dc4636d453995a5e9ff86060c0f"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["6aa6e8825bb74f24aea77b8a9050dcdc"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["a9bf96314b584b8abd740f55031a131a"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["fbac4b6737a147f88e531d1781b2e2a8"],
                          "fadeInfo":{
                            "fadeType":"show",
                            "options":{
                              "showType":"none"}}}]},
{
                      "action":"fadeWidget",
                      "description":"隐藏 进入视频学习,<br>选择答案,<br>返回上页2,<br>显示答案,<br>答题前,<br>This",
                      "objectsToFades":[{
                          "objectPath":["e6e0881ffcf146e79bb62b4db21625a4"],
                          "fadeInfo":{
                            "fadeType":"hide",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["e24604b75f52486383038586aa815826"],
                          "fadeInfo":{
                            "fadeType":"hide",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["2b836a814bb24e72b73ecea9c1aa2b04"],
                          "fadeInfo":{
                            "fadeType":"hide",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["f27431d0aa2843aa9717a54e9b52bbea"],
                          "fadeInfo":{
                            "fadeType":"hide",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["ca4c339cc6884361a84bcb5413f27d9d"],
                          "fadeInfo":{
                            "fadeType":"hide",
                            "options":{
                              "showType":"none"}}},
{
                          "objectPath":["e6e0881ffcf146e79bb62b4db21625a4"],
                          "fadeInfo":{
                            "fadeType":"hide",
                            "options":{
                              "showType":"none"}}}]}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"5ed03da287354937a49843454822918d",
          "label":"返回上页",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fill":{
              "fillType":"solid",
              "color":0xFFFFFF},
            "size":{
              "width":120,
              "height":40},
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"5414563855074ee4a98ee1b657c16449",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFFFF},
                "size":{
                  "width":120,
                  "height":40},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 审验学习须知",
                      "target":{
                        "targetType":"page",
                        "url":"审验学习须知.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"2bc35c238bb8487bb03378600c5fce5f",
          "label":"蒙版",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":false,
          "style":{
            "opacity":"0.7",
            "fill":{
              "fillType":"solid",
              "color":0xFF000000},
            "size":{
              "width":375,
              "height":647},
            "visible":false,
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"32967515c70247bd820b6ef1dc2cf08e",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":false,
              "style":{
                "opacity":"0.7",
                "fill":{
                  "fillType":"solid",
                  "color":0xFF000000},
                "size":{
                  "width":375,
                  "height":647},
                "visible":false,
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/举报资料/蒙版_u8.png"}},
{
          "id":"a0d479473cbf4443af070fde703047f6",
          "label":"确认按钮",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":false,
          "style":{
            "fontName":"'微软雅黑 Bold', '微软雅黑'",
            "fontSize":"16px",
            "fontWeight":"700",
            "verticalAlignment":"top",
            "lineSpacing":"28px",
            "paddingTop":"15",
            "location":{
              "x":34,
              "y":213},
            "size":{
              "width":306,
              "height":92},
            "visible":false,
            "borderFill":{
              "fillType":"solid",
              "color":0xFFE5E5E5},
            "cornerRadiusTopLeft":"5"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"bd4c648a7cc245cf90170a83df151052",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":false,
              "style":{
                "fontName":"'微软雅黑 Bold', '微软雅黑'",
                "fontSize":"16px",
                "fontWeight":"700",
                "verticalAlignment":"top",
                "lineSpacing":"28px",
                "paddingTop":"15",
                "location":{
                  "x":34,
                  "y":213},
                "size":{
                  "width":306,
                  "height":92},
                "visible":false,
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFE5E5E5},
                "cornerRadiusTopLeft":"5"},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 链接",
                      "target":{
                        "targetType":"page",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/自我测试/确认按钮_u14.png"}},
{
          "id":"b1623451d8f04c63a181cf37a83e2773",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":false,
          "style":{
            "fontName":"'微软雅黑 Regular', '微软雅黑'",
            "fontSize":"14px",
            "location":{
              "x":190,
              "y":260},
            "size":{
              "width":150,
              "height":45},
            "visible":false,
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"4a29b67e482148738fa8b648d17c6eb2",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":false,
              "style":{
                "fontName":"'微软雅黑 Regular', '微软雅黑'",
                "fontSize":"14px",
                "location":{
                  "x":190,
                  "y":260},
                "size":{
                  "width":150,
                  "height":45},
                "visible":false,
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 选择收取回执方式",
                      "target":{
                        "targetType":"page",
                        "url":"选择收取回执方式.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/自我测试/u16.png"}},
{
          "id":"3a3c2dc4636d453995a5e9ff86060c0f",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":false,
          "style":{
            "fontName":"'Arial Negreta', 'Arial'",
            "fontSize":"16px",
            "fontWeight":"700",
            "location":{
              "x":84,
              "y":222},
            "size":{
              "width":215,
              "height":28},
            "visible":false,
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"8b19a0cbd1574b8280be0dcb4278dda4",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":false,
              "style":{
                "fontName":"'Arial Negreta', 'Arial'",
                "fontSize":"16px",
                "fontWeight":"700",
                "location":{
                  "x":84,
                  "y":222},
                "size":{
                  "width":215,
                  "height":28},
                "visible":false,
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/学习视频/u8.png"}},
{
          "id":"6aa6e8825bb74f24aea77b8a9050dcdc",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":false,
          "style":{
            "fontName":"'微软雅黑 Regular', '微软雅黑'",
            "fontSize":"14px",
            "location":{
              "x":34,
              "y":260},
            "size":{
              "width":146,
              "height":45},
            "visible":false,
            "borderFill":{
              "fillType":"solid",
              "color":0xFFFFFF}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"a06b71ccb83b4785ba23c1bd567f43fc",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":false,
              "style":{
                "fontName":"'微软雅黑 Regular', '微软雅黑'",
                "fontSize":"14px",
                "location":{
                  "x":34,
                  "y":260},
                "size":{
                  "width":146,
                  "height":45},
                "visible":false,
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFFFFF}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 审验学习须知",
                      "target":{
                        "targetType":"page",
                        "url":"审验学习须知.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/自我测试/u20.png"}},
{
          "id":"a9bf96314b584b8abd740f55031a131a",
          "label":"",
          "type":"horizontalLine",
          "styleType":"horizontalLine",
          "visible":false,
          "style":{
            "location":{
              "x":52,
              "y":254},
            "size":{
              "width":278,
              "height":10},
            "visible":false,
            "borderFill":{
              "fillType":"solid",
              "color":0xFFE5E5E5}},
          "adaptiveStyles":{
},
          "images":{
            "start~":"resources/images/transparent.gif",
            "end~":"resources/images/transparent.gif",
            "line~":"images/自我测试/u22_line.png"}},
{
          "id":"fbac4b6737a147f88e531d1781b2e2a8",
          "label":"",
          "type":"verticalLine",
          "styleType":"verticalLine",
          "visible":false,
          "style":{
            "location":{
              "x":182,
              "y":260},
            "size":{
              "width":10,
              "height":40},
            "visible":false,
            "borderFill":{
              "fillType":"solid",
              "color":0xFFE5E5E5}},
          "adaptiveStyles":{
},
          "images":{
            "start~":"resources/images/transparent.gif",
            "end~":"resources/images/transparent.gif",
            "line~":"images/自我测试/u23_line.png"}}]}},
  "masters":{
},
  "objectPaths":{
    "ca4c339cc6884361a84bcb5413f27d9d":{
      "scriptId":"u0"},
    "1fc2634b725b448b83b6cbd406c0e91c":{
      "scriptId":"u1"},
    "f27431d0aa2843aa9717a54e9b52bbea":{
      "scriptId":"u2"},
    "5aefe592ddc34c50829e7c515f6f2217":{
      "scriptId":"u3"},
    "2b836a814bb24e72b73ecea9c1aa2b04":{
      "scriptId":"u4"},
    "35a8cec18d614fa8840b737a8e3fe0f4":{
      "scriptId":"u5"},
    "e24604b75f52486383038586aa815826":{
      "scriptId":"u6"},
    "cb8bec73033c41c4814c972eded745c2":{
      "scriptId":"u7"},
    "e6e0881ffcf146e79bb62b4db21625a4":{
      "scriptId":"u8"},
    "36c9537b547b4c6a954b3626cfc76967":{
      "scriptId":"u9"},
    "5ed03da287354937a49843454822918d":{
      "scriptId":"u10"},
    "5414563855074ee4a98ee1b657c16449":{
      "scriptId":"u11"},
    "2bc35c238bb8487bb03378600c5fce5f":{
      "scriptId":"u12"},
    "32967515c70247bd820b6ef1dc2cf08e":{
      "scriptId":"u13"},
    "a0d479473cbf4443af070fde703047f6":{
      "scriptId":"u14"},
    "bd4c648a7cc245cf90170a83df151052":{
      "scriptId":"u15"},
    "b1623451d8f04c63a181cf37a83e2773":{
      "scriptId":"u16"},
    "4a29b67e482148738fa8b648d17c6eb2":{
      "scriptId":"u17"},
    "3a3c2dc4636d453995a5e9ff86060c0f":{
      "scriptId":"u18"},
    "8b19a0cbd1574b8280be0dcb4278dda4":{
      "scriptId":"u19"},
    "6aa6e8825bb74f24aea77b8a9050dcdc":{
      "scriptId":"u20"},
    "a06b71ccb83b4785ba23c1bd567f43fc":{
      "scriptId":"u21"},
    "a9bf96314b584b8abd740f55031a131a":{
      "scriptId":"u22"},
    "fbac4b6737a147f88e531d1781b2e2a8":{
      "scriptId":"u23"}}});