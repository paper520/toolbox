
/*************************** [bundle] ****************************/
// Original file:./src/pages/computer/index.js
/*****************************************************************/
window.__pkg__bundleSrc__['81']=function(){
    var __pkg__scope_bundle__={};
    var __pkg__scope_args__;
    __pkg__scope_args__=window.__pkg__getBundle('246');
var template =__pkg__scope_args__.default;

__pkg__scope_args__=window.__pkg__getBundle('247');


__pkg__scope_args__=window.__pkg__getBundle('30');
var urlFormat =__pkg__scope_args__.default;


__pkg__scope_bundle__.default= function (obj, props) {
    return {
        name: "computer",
        render: template,
        data: {
            nav: obj.ref("")
        },
        beforeFocus: function () {
            document.getElementsByTagName('title')[0].innerText = "我的电脑" + window.systeName;
            document.getElementById('icon-logo').setAttribute('href', './computer.png');
        },
        mounted: function () {
            if (props.init) {
                this.changeNav(props.init);
            } else {
                var urlObj = urlFormat();
                this.changeNav(urlObj.router[1] || "application", true);
            }
        },
        methods: {
            openApp: function (event, target) {
                this.$openView(target.getAttribute('tag'));
            },
            openDialog: function (event, target) {
                this.$openDialog(target.getAttribute('tag'));
            },
            clickNav: function (event, target) {
                this.changeNav(target.getAttribute('tag'));
            },
            changeNav: function (navname, isInit) {
                if (!isInit) window.location.href = "#/computer/" + navname;
                this.nav = navname;
            }
        }
    };
};

    return __pkg__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/computer/index.html
/*****************************************************************/
window.__pkg__bundleSrc__['246']=function(){
    var __pkg__scope_bundle__={};
    var __pkg__scope_args__;
    __pkg__scope_bundle__.default= [{"type":"tag","name":"root","attrs":{},"childNodes":[1,7]},{"type":"tag","name":"div","attrs":{"class":"left"},"childNodes":[2,4]},{"type":"tag","name":"header","attrs":{"ui-dragdrop:desktop":""},"childNodes":[3]},{"type":"text","content":"我的电脑","childNodes":[]},{"type":"tag","name":"nav","attrs":{},"childNodes":[5]},{"type":"tag","name":"div","attrs":{"class":"item","ui-on:click":"clickNav","tag":"application","ui-bind:active":"nav=='application'?'yes':'no'"},"childNodes":[6]},{"type":"text","content":"应用程序","childNodes":[]},{"type":"tag","name":"div","attrs":{"class":"right"},"childNodes":[8,15]},{"type":"tag","name":"header","attrs":{"ui-dragdrop:desktop":""},"childNodes":[9,10]},{"type":"tag","name":"input","attrs":{"type":"text","placeholder":"搜索功能维护中..."},"childNodes":[]},{"type":"tag","name":"div","attrs":{"class":"win-btns"},"childNodes":[11,13]},{"type":"tag","name":"button","attrs":{"class":"min","ui-on:click.stop":"$minView"},"childNodes":[12]},{"type":"text","content":"最小化","childNodes":[]},{"type":"tag","name":"button","attrs":{"class":"close","ui-on:click.stop":"$closeView"},"childNodes":[14]},{"type":"text","content":"关闭","childNodes":[]},{"type":"tag","name":"div","attrs":{"class":"content application"},"childNodes":[16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48]},{"type":"tag","name":"div","attrs":{"tag":"model-editor","ui-on:dblclick":"openApp","ui-right-menu:app":""},"childNodes":[17]},{"type":"text","content":"3D模型编辑器","childNodes":[]},{"type":"tag","name":"div","attrs":{"tag":"code-editor","ui-on:dblclick":"openApp","ui-right-menu:app":""},"childNodes":[19]},{"type":"text","content":"代码编辑器","childNodes":[]},{"type":"tag","name":"div","attrs":{"tag":"format-json","ui-on:dblclick":"openApp","ui-right-menu:app":""},"childNodes":[21]},{"type":"text","content":"格式化JSON字符串","childNodes":[]},{"type":"tag","name":"div","attrs":{"tag":"geo-json","ui-on:dblclick":"openApp","ui-right-menu:app":""},"childNodes":[23]},{"type":"text","content":"geoJSON查看器","childNodes":[]},{"type":"tag","name":"div","attrs":{"tag":"browser","ui-on:dblclick":"openApp","ui-right-menu:app":""},"childNodes":[25]},{"type":"text","content":"Internet Explorer","childNodes":[]},{"type":"tag","name":"div","attrs":{"tag":"scss","ui-on:dblclick":"openApp","ui-right-menu:app":""},"childNodes":[27]},{"type":"text","content":"scss转css","childNodes":[]},{"type":"tag","name":"div","attrs":{"tag":"image-editor","ui-on:dblclick":"openApp","ui-right-menu:app":""},"childNodes":[29]},{"type":"text","content":"图片编辑器","childNodes":[]},{"type":"tag","name":"div","attrs":{"tag":"regexper-visualization","ui-on:dblclick":"openApp","ui-right-menu:app":""},"childNodes":[31]},{"type":"text","content":"正则表达式可视化","childNodes":[]},{"type":"tag","name":"div","attrs":{"tag":"api","ui-on:dblclick":"openDialog","ui-right-menu:app":"dialog"},"childNodes":[33]},{"type":"text","content":"开发文档","childNodes":[]},{"type":"tag","name":"div","attrs":{"tag":"snake-eating","ui-on:dblclick":"openApp","ui-right-menu:app":""},"childNodes":[35]},{"type":"text","content":"贪吃蛇","childNodes":[]},{"type":"tag","name":"div","attrs":{"tag":"audio-editor","ui-on:dblclick":"openApp","ui-right-menu:app":""},"childNodes":[37]},{"type":"text","content":"音频编辑器","childNodes":[]},{"type":"tag","name":"div","attrs":{"tag":"debugger","ui-on:dblclick":"openDialog","ui-right-menu:app":"dialog"},"childNodes":[39]},{"type":"text","content":"调试工具","childNodes":[]},{"type":"tag","name":"div","attrs":{"tag":"recorder-screen","ui-on:dblclick":"openApp","ui-right-menu:app":""},"childNodes":[41]},{"type":"text","content":"录屏软件","childNodes":[]},{"type":"tag","name":"div","attrs":{"tag":"snipping-tool","ui-on:dblclick":"openApp","ui-right-menu:app":""},"childNodes":[43]},{"type":"text","content":"截图工具","childNodes":[]},{"type":"tag","name":"div","attrs":{"tag":"echarts","ui-on:dblclick":"openApp","ui-right-menu:app":""},"childNodes":[45]},{"type":"text","content":"可视化图表","childNodes":[]},{"type":"tag","name":"div","attrs":{"tag":"type-practice","ui-on:dblclick":"openApp","ui-right-menu:app":""},"childNodes":[47]},{"type":"text","content":"金山打字通","childNodes":[]},{"type":"tag","name":"div","attrs":{"tag":"excel","ui-on:dblclick":"openApp","ui-right-menu:app":""},"childNodes":[49]},{"type":"text","content":"Excel 表格","childNodes":[]}]

    return __pkg__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/computer/index.scss
/*****************************************************************/
window.__pkg__bundleSrc__['247']=function(){
    var __pkg__scope_bundle__={};
    var __pkg__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n [page-view=\"computer\"]{\n\nwidth: calc(100vw - 160px);\n\nheight: calc(100vh - 70px);\n\nleft: 80px;\n\ntop: 20px;\n\nfont-size: 0;\n\nwhite-space: nowrap;\n\nbackground-color: white;\n\nuser-select: none;\n\n}\n\n [page-view=\"computer\"][focus=\"no\"]>.left{\n\nbackground-color: rgba(158, 196, 233, 0.85);\n\n}\n\n [page-view=\"computer\"]>div{\n\nheight: 100%;\n\nvertical-align: top;\n\nfont-size: 16px;\n\nwhite-space: normal;\n\ndisplay: inline-block;\n\n}\n\n [page-view=\"computer\"]>div.left{\n\nbackground-color: rgba(183, 218, 253, 0.85);\n\nwidth: 260px;\n\n}\n\n [page-view=\"computer\"]>div.left>header{\n\nbackground-repeat: no-repeat;\n\nbackground-position: 15px center;\n\nbackground-size: auto 20px;\n\nbackground-image: url('./computer.png');\n\nline-height: 40px;\n\npadding: 10px;\n\npadding-left: 40px;\n\ncursor: pointer;\n\ncolor: #4b4a4a;\n\nfont-weight: 400;\n\nfont-size: 14px;\n\n}\n\n [page-view=\"computer\"]>div.left>nav{\n\npadding: 20px;\n\n}\n\n [page-view=\"computer\"]>div.left>nav>.item{\n\nfont-size: 14px;\n\npadding: 10px;\n\ncursor: pointer;\n\n}\n\n [page-view=\"computer\"]>div.left>nav>.item[active=\"yes\"]{\n\nbackground-color: #0000000a;\n\nfont-weight: 800;\n\nborder-radius: 5px;\n\n}\n\n [page-view=\"computer\"]>div.right{\n\nwidth: calc(100% - 260px);\n\n}\n\n [page-view=\"computer\"]>div.right>header{\n\nline-height: 40px;\n\nmargin: 10px;\n\n}\n\n [page-view=\"computer\"]>div.right>header>input{\n\nbackground-color: rgb(230 230 230);\n\nwidth: 260px;\n\nheight: 30px;\n\nborder-radius: 15px;\n\npadding: 0 10px;\n\nfont-size: 12px;\n\nborder: none;\n\noutline: none;\n\n}\n\n [page-view=\"computer\"]>div.right>div.content{\n\nwidth: 100%;\n\nheight: calc(100% - 60px);\n\noverflow: auto;\n\n}\n\n [page-view=\"computer\"]>div.right>div.content.application>div{\n\nwidth: 70px;\n\npadding-top: 60px;\n\nmargin: 10px;\n\nfont-size: 12px;\n\ncolor: rgb(0, 0, 0);\n\nbackground-size: 45px auto;\n\nbackground-repeat: no-repeat;\n\nbackground-position: center 10px;\n\ntext-align: center;\n\nline-height: 1.6em;\n\nheight: 100px;\n\nvertical-align: top;\n\ncursor: pointer;\n\ndisplay: inline-block;\n\n}\n\n [page-view=\"computer\"]>div.right>div.content.application>div:hover{\n\noutline: 1px dashed rgb(185, 183, 183);\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);

    return __pkg__scope_bundle__;
}
