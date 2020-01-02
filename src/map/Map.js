import React, { useEffect } from "react";

const Map = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=1848eeb438b6dcf0dc8ac00ef7a3893f&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                const el = document.getElementById('map');
                const map = new kakao.maps.Map(el, {
                    center: new kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3
                });
                el.style.width = '100%';
                el.style.height = '650px';

                // 마커를 생성합니다
                const marker = new kakao.maps.Marker({
                    position: new kakao.maps.LatLng(33.450701, 126.570667)
                });

                // 마커가 지도 위에 표시되도록 설정합니다
                marker.setMap(map);
                var markerPosition = marker.getPosition();
                map.relayout();
                map.setCenter(markerPosition);

            });
        };
    }, []);
    return <div id="map"></div>;
}

export default Map;