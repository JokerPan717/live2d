const live2d_path = "http://www.jokerpan.cn/js/";

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
    return new Promise((resolve, reject) => {
        let tag;

        if (type === "css") {
            tag = document.createElement("link");
            tag.rel = "stylesheet";
            tag.href = url;
        }
        else if (type === "js") {
            tag = document.createElement("script");
            tag.src = url;
        }
        if (tag) {
            tag.onload = () => resolve(url);
            tag.onerror = () => reject(url);
            document.head.appendChild(tag);
        }
    });
}

//加载背景特效
function initBackgroundEffects() {
    $( document ).ready( function() {

        //------------------------------------------------------------------------

        //Settings - params for WarpDrive
        var settings = {

            width: 2000,
            height: 1000,
            autoResize: false,
            autoResizeMinWidth: null,
            autoResizeMaxWidth: null,
            autoResizeMinHeight: null,
            autoResizeMaxHeight: null,
            addMouseControls: true,
            addTouchControls: true,
            hideContextMenu: true,
            starCount: 6666,
            starBgCount: 2222,
            starBgColor: { r:0, g:204, b:255 },
            starBgColorRangeMin: 20,
            starBgColorRangeMax: 80,
            starColor: { r:0, g:204, b:255 },
            starColorRangeMin: 50,
            starColorRangeMax: 100,
            starfieldBackgroundColor: { r:5, g:5, b:14 },
            starDirection: -1,
            starSpeed: 1,
            starSpeedMax: 10,
            starSpeedAnimationDuration: 2,
            starFov: 300,
            starFovMin: 200,
            starFovAnimationDuration: 2,
            starRotationPermission: true,
            starRotationDirection: 1,
            starRotationSpeed: 0.0,
            starRotationSpeedMax: 1.0,
            starRotationAnimationDuration: 2,
            starWarpLineLength: 2.0,
            starWarpTunnelDiameter: 100,
            starFollowMouseSensitivity: 0.025,
            starFollowMouseXAxis: true,
            starFollowMouseYAxis: true

        };

        //------------------------------------------------------------------------

        //standalone

        //init

        //var warpdrive = new WarpDrive( document.getElementById( 'holder' ) );
        var warpdrive = new WarpDrive( document.getElementsByTagName( 'body' )[0], settings );

        //------------------------------------------------------------------------

        //jQuery

        //init

        //$( '#holder' ).warpDrive();
        //$( '#holder' ).warpDrive( settings );

        //------------------------------------------------------------------------

    } );
}

//加载鼠标特效
function initMouseEffects() {
    /* 鼠标特效 */
    var a_idx = 0;
    jQuery(document).ready(
        function($) {
            $("body").click(
                function(e) {
                    var a = new Array("💗","富强","💗","民主","💗","文明","💗","和谐","💗","自由","💗","平等","💗","公正","💗","法治","💗","爱国","💗","敬业","💗","诚信","💗","友善");
                    var $i = $("<span />").text(a[a_idx]); a_idx = (a_idx + 1) % a.length;
                    var x = e.pageX, y = e.pageY;
                    $i.css({ "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
                        "top": y - 20, "left": x, "position": "absolute", "font-weight": "bold", "color": "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"});
                    $("body").append($i); $i.animate({ "top": y - 180, "opacity": 0 }, 1500, function() { $i.remove(); }); }); });
}

(function init(){
    Promise.all([
        loadExternalResource(live2d_path + "jquery.min.js", "js"),
        loadExternalResource(live2d_path + "jquery.warpdrive.min.js", "js")
    ]).then(() => {
        initBackgroundEffects();
        initMouseEffects();
        let tag = document.getElementById("login");
        tag.style.position = "absolute";
        tag.style.left = "41%";
    });
})();
