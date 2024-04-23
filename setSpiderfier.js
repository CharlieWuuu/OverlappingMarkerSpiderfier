// 點位資料：沒有重複點位的
let pCases_single = [[{ name: '十四張1號出口', company: 'NewTaipeiMetro', lat: 24.9842, lng: 121.528 }], [{ name: '新店站1號出口', company: 'TaipeiMetro', lat: 24.9582, lng: 121.5377 }]];
// 點位資料：有重複點位的
let pCases_sameCenter = [
    [
        { name: '大坪林站1號出口', company: 'TaipeiMetro', lat: 24.9822, lng: 121.5417 },
        { name: '大坪林站2號出口', company: 'TaipeiMetro', lat: 24.9822, lng: 121.5417 },
        { name: '大坪林站3號出口', company: 'TaipeiMetro', lat: 24.9822, lng: 121.5417 },
        { name: '大坪林站4號出口', company: 'TaipeiMetro', lat: 24.9822, lng: 121.5417 },
        { name: '大坪林站5號出口', company: 'NewTaipeiMetro', lat: 24.9822, lng: 121.5417 },
    ],
    [
        { name: '七張站1號出口', company: 'TaipeiMetro', lat: 24.9749, lng: 121.5431 },
        { name: '七張站2號出口', company: 'TaipeiMetro', lat: 24.9749, lng: 121.5431 },
    ],
    [
        { name: '新店區公所站1號出口', company: 'TaipeiMetro', lat: 24.9674, lng: 121.5411 },
        { name: '大坪林站2號出口', company: 'TaipeiMetro', lat: 24.9674, lng: 121.5411 },
    ],

    [
        { name: '小碧潭站1號出口', company: 'TaipeiMetro', lat: 24.9716, lng: 121.5309 },
        { name: '小碧潭站2號出口', company: 'TaipeiMetro', lat: 24.9716, lng: 121.5309 },
    ],
];

let pCases_differentCenter = [
    [
        { name: '台北車站M1出口', company: 'TaipeiMetro', lat: 25.04824, lng: 121.51834 },
        { name: '台北車站M2出口', company: 'TaipeiMetro', lat: 25.04811, lng: 121.51894 },
        { name: '台北車站M3出口', company: 'TaipeiMetro', lat: 25.04632, lng: 121.51781 },
        { name: '台北車站M4出口', company: 'TaipeiMetro', lat: 25.0465, lng: 121.51728 },
        { name: '台北車站M5出口', company: 'TaipeiMetro', lat: 25.04675, lng: 121.51624 },
        { name: '台北車站M6出口', company: 'TaipeiMetro', lat: 25.0461, lng: 121.51678 },
        { name: '台北車站M7出口', company: 'TaipeiMetro', lat: 25.04614, lng: 121.51857 },
        { name: '台北車站M8出口', company: 'TaipeiMetro', lat: 25.04587, lng: 121.51756 },
        { name: '北門站1號出口', company: 'TaipeiMetro', lat: 25.04898, lng: 121.51 },
        { name: '北門站2號出口', company: 'TaipeiMetro', lat: 25.0494, lng: 121.51058 },
        { name: '北門站3號出口', company: 'TaipeiMetro', lat: 25.04985, lng: 121.51009 },
        { name: '中山站1號出口', company: 'TaipeiMetro', lat: 25.05239, lng: 121.52031 },
        { name: '中山站2號出口', company: 'TaipeiMetro', lat: 25.05237, lng: 121.52116 },
        { name: '中山站3號出口', company: 'TaipeiMetro', lat: 25.05262, lng: 121.52112 },
        { name: '中山站4號出口', company: 'TaipeiMetro', lat: 25.05291, lng: 121.52032 },
        { name: '中山站5號出口', company: 'TaipeiMetro', lat: 25.05307, lng: 121.51925 },
        { name: '中山站6號出口', company: 'TaipeiMetro', lat: 25.05278, lng: 121.51914 },
        { name: '西門站1號出口', company: 'TaipeiMetro', lat: 25.04213, lng: 121.50762 },
        { name: '西門站2號出口', company: 'TaipeiMetro', lat: 25.04146, lng: 121.50837 },
        { name: '西門站3號出口', company: 'TaipeiMetro', lat: 25.04185, lng: 121.50876 },
        { name: '西門站4號出口', company: 'TaipeiMetro', lat: 25.04226, lng: 121.50888 },
        { name: '西門站5號出口', company: 'TaipeiMetro', lat: 25.04257, lng: 121.50776 },
        { name: '西門站6號出口', company: 'TaipeiMetro', lat: 25.04257, lng: 121.50776 },
    ],
];

let map; // 地圖物件
let markerList_single = []; // 包含所有 marker 的陣列，設定自動展開時需要用
let markerList_sameCenter = []; // 包含所有 marker 的陣列，設定自動展開時需要用
let markerList_differentCenter = []; // 包含所有 marker 的陣列，設定自動展開時需要用

// 初始化地圖
function initMap() {
    // 創建地圖並設置屬性
    // 1. 將 div 元素轉換為地圖
    map = new google.maps.Map(document.getElementById('map'), {
        // 2. 設定地圖中心點
        center: { lat: 24.9719, lng: 121.535 },
        // 3. 設定地圖縮放層級
        zoom: 14,
        // 4. 設定地圖樣式
        styles: [
            {
                // 5. 設定樣式：點位（poi）不顯示
                featureType: 'poi',
                stylers: [
                    {
                        visibility: 'off',
                    },
                ],
            },
        ],
    });

    // 創建資訊視窗
    let iw = new google.maps.InfoWindow();

    // 創建各組資料的展開功能
    createMarker_single(pCases_single, iw);
    createOMS_sameCenter(pCases_sameCenter, iw);
    createOMS_differentCenter(pCases_differentCenter, iw);

    // 設定自動展開功能
    automaticSpiderfier();
}

/**
 * 創建各組資料的展開功能
 *
 * 對每一組資料 pCases_single，
 * 遍歷 pCase_single 中的每個點位 point，
 * 創建一個 Google Map Marker 並設置其屬性，包含：
 *   - 位置：point.lat, point.lng
 *   - 圖標：以 pCase_single, point 為參數，呼叫 setIcon() 函式來取得圖標 URL，並將圖標大小調整為 32x44，並將透明度調整為 0.2
 *
 * 將每個 marker 加入地圖中，並將 marker 與 InfoWindow 綁定：
 *   - 將 InfoWindow 的內容設為 point.name
 *   - 當 marker 被點擊時，將 InfoWindow 顯示出來
 */
function createMarker_single(pCases_single, iw) {
    pCases_single.forEach(function (pCase_single) {
        // 遍歷 pCase_single 中的每個點位 point
        pCase_single.forEach(function (point) {
            // 取得圖標 URL
            let iconURL = setIcon(pCase_single, point);
            // 創建 Marker 並設置位置
            let marker = new google.maps.Marker({
                position: { lat: point.lat, lng: point.lng },
                icon: {
                    url: iconURL,
                    scaledSize: new google.maps.Size(32, 44),
                    opacity: 0.2,
                },
            });
            // 將 marker 加入地圖中
            marker.setMap(map);

            // 將 marker 與 InfoWindow 綁定
            google.maps.event.addListener(marker, 'click', function () {
                // 將 InfoWindow 的內容設為 point.name
                iw.setContent(point.name);
                // 當 marker 被點擊時，將 InfoWindow 顯示出來
                iw.open(map, marker);
            });
        });
    });
}

// 創建各組資料的展開功能
function createOMS_sameCenter(pCases_sameCenter, iw) {
    let markers = [];
    // 創建 Marker 到 oms 物件中

    pCases_sameCenter.forEach(function (pCase_sameCenter) {
        // 創建 OverlappingMarkerSpiderfier 物件
        let oms = new OverlappingMarkerSpiderfier(map, {
            markersWontMove: true, // 點位是否不會更改：是
            markersWontHide: true, // 點位是否不會隱藏：是
            basicFormatEvents: true, // 點位只紀錄基本的事件屬性：是
            nearbyDistance: 0.001, // 多少距離內的點位會一同展開：0.001px
            spiralFootSeparation: 48, // 螺旋展開時的展開幅度：48px
            circleFootSeparation: 48, // 圓形展開時的展開幅度：48px
            keepSpiderfied: true, // 點已展開的點位不會收合：是
            ignoreMapClick: true, // 忽略點空白處時關閉展開：是
        });

        pCase_sameCenter.forEach(function (point, i) {
            createCenterMarker(point, i, oms);

            let iconURL = setIcon(pCase_sameCenter, point);
            let marker = new google.maps.Marker({
                position: { lat: point.lat, lng: point.lng },
                icon: { url: iconURL, scaledSize: new google.maps.Size(32, 44), opacity: 0.2 },
            }); // 創建 Marker 並設置位置

            google.maps.event.addListener(marker, 'spider_click', function () {
                iw.setContent(point.name);
                iw.open(map, marker);
            });

            oms.addMarker(marker).forgetMarker(marker); // 將 Marker 添加到 oms 物件上；預設先不要有散開功能
            // 當層級大於 14 再打開 spiderfier 功能
            google.maps.event.addListener(map, 'idle', function () {
                if (pCase_sameCenter.length > 1) {
                    if (map.getZoom() >= 16) {
                        oms.addMarker(marker); // addMarker 才會有展開功能
                    } else {
                        oms.forgetMarker(marker); // forgetMarker 會移除展開功能
                    }
                    marker.icon.url = setIcon(pCase_sameCenter, point);
                }
            });

            markers.push(marker); // 將 Marker 放到 markerList，之後設定自動展開時需要用
        });

        markerList_sameCenter.push(markers);
        oms.addListener('format', function (marker, status) {
            thisStatus = status;
            marker.status = status;
        });
    });
}

function createOMS_differentCenter(pCases_differentCenter, iw) {
    let markers = [];
    // 創建 Marker 到 oms 物件中

    pCases_differentCenter.forEach(function (pCase_differentCenter) {
        // 創建 OverlappingMarkerSpiderfier 物件
        let oms = new OverlappingMarkerSpiderfier(map, {
            markersWontMove: true, // 點位是否不會更改：是
            markersWontHide: true, // 點位是否不會隱藏：是
            basicFormatEvents: true, // 點位只紀錄基本的事件屬性：是
            nearbyDistance: 50, // 多少距離內的點位會一同展開：1px
            spiralFootSeparation: 48, // 螺旋展開時的展開幅度：48px
            circleFootSeparation: 48, // 圓形展開時的展開幅度：48px
            keepSpiderfied: true, // 點已展開的點位不會收合：是
            ignoreMapClick: true, // 忽略點空白處時關閉展開：是
        });

        pCase_differentCenter.forEach(function (point, i) {
            let marker = new google.maps.Marker({
                position: { lat: point.lat, lng: point.lng },
                icon: { url: `../${point.company}.png`, scaledSize: new google.maps.Size(32, 44), opacity: 0.2 },
            }); // 創建 Marker 並設置位置

            google.maps.event.addListener(marker, 'spider_click', function () {
                iw.setContent(point.name);
                iw.open(map, marker);
            });

            oms.addMarker(marker); // 將 Marker 添加到 oms 物件上；預設先不要有散開功能
            // 當層級大於 14 再打開 spiderfier 功能
            google.maps.event.addListener(map, 'idle', function () {
                if (pCase_differentCenter.length > 1) {
                    if (map.getZoom() >= 14) {
                        oms.addMarker(marker); // addMarker 才會有展開功能
                    } else {
                        oms.forgetMarker(marker); // forgetMarker 會移除展開功能
                    }
                }
            });

            markers.push(marker); // 將 Marker 放到 markerList，之後設定自動展開時需要用
        });

        markerList_differentCenter.push(markers);
        oms.addListener('format', function (marker, status) {
            thisStatus = status;
            marker.status = status;
        });
    });
}

/**
 * 為每個 pCase 創建一個中央點位的 Marker 物件，並將其添加到 oms 物件上；
 * 並將其隱藏，當地圖縮放等級大於等於 16 時才顯示，用於畫面調整。
 * @param {Object} point - 點位物件
 * @param {Number} i - 目前點位在 pCase 中的索引
 * @param {Object} oms - OverlappingMarkerSpiderfier 物件
 * @return {Object} centerMarker - 中央點位的 Marker 物件
 */
function createCenterMarker(point, i, oms) {
    let centerMarker; // 中央點位的 Marker 物件

    if (i === 0) {
        // 如果是第一個點位
        centerMarker = new google.maps.Marker({
            position: { lat: point.lat, lng: point.lng },
            icon: {
                // 中央點位的標記圖示
                url: `../spiderfiedCenter.png`, // 標記圖檔路徑
                scaledSize: new google.maps.Size(8, 8), // 縮放大小
                anchor: new google.maps.Point(4, 4), // 標記圖檔的中心點
            },
        });
        oms.addMarker(centerMarker).forgetMarker(centerMarker); // 將其添加到 oms 物件上，並忽略展開功能
        centerMarker.setVisible(false); // 隱藏中央點位

        google.maps.event.addListener(map, 'idle', function () {
            centerMarker.setVisible(map.getZoom() >= 16); // 當地圖 >= 16 層級時顯示中央點位
        });
    }

    return centerMarker; // 將中央點位的 Marker 物件回傳
}

// 設定自動展開功能。當地圖停止移動時，執行自動展開的程式碼
function automaticSpiderfier() {
    // 當地圖停止移動時執行以下程式碼
    google.maps.event.addListener(map, 'idle', function () {
        // 延遲 10 毫秒後執行以下程式碼（等待套件判斷 marker 是否在視窗內，時間可自己調）
        setTimeout(function () {
            // 如果目前地圖縮放等級大於等於 16
            if (map.getZoom() >= 16) {
                // 對所有點位模擬點擊
                markerList_sameCenter.forEach(function (markers, i) {
                    // 針對每個 markers[] 陣列，逐一對 marker 模擬點擊

                    markers.forEach(function (marker) {
                        // 當 marker 狀態不是 SPIDERFIED 時（也就是 marker 尚未展開），則模擬點擊此 marker

                        if (marker.status !== 'SPIDERFIED') {
                            google.maps.event.trigger(marker, 'click');
                        }
                    });
                });
            }
        }, 10);
    });
}

/**
 * 設定 icon 的 url
 *
 * @param {array} pCase 一組資料
 * @param {object} point 單筆資料
 * @return {string} icon 的 url
 */
function setIcon(pCase, point) {
    let iconURL = `../${point.company}.png`; // 預設 icon 的 url
    if (pCase.length > 1 && map.getZoom() < 16) {
        // 如果資料數大於 1 且地圖縮放等級小於 16
        iconURL = '../SPIDERFIABLE.png'; // 將 icon 的 url 設為 SPIDERFIABLE.png
    }
    return iconURL; // 傳回 icon 的 url
}

window.initMap = initMap; // 執行初始化地圖
