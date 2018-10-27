import React, {Component} from 'react';
import './App.css';
import { googleMapsConfig } from "./config/googleMapsConfig";
import $ from 'jquery'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Map from './components/Map';
import dollarIconLight from './assets/icons/dollarIconLight.png'
import dollarIconDark from './assets/icons/dollarIconDark.png'
import ListExampleCelled from "./components/ListExampleCelled";
import MenuExamplePointing from "./components/MenuExamplePointing";



let markers = [];
let trasactions = [
    {
        title: 'zabka',
        adr: 'Basztowa 21 Kraków',
        date: '21.10.18 18:23',
        price: 26.43
    },
    {
        title: 'zabka1',
        adr: 'Basztowa 10 Kraków',
        date: '21.10.18 18:23',
        price: 26.43
    },
    {
        title: 'zabka2',
        adr: 'Basztowa 1 Kraków',
        date: '21.10.18 18:23',
        price: 26.43
    }
];
let lastFocused = 0;



class App extends Component {
    componentDidMount() {
        this.renderMap();
    }

    renderMap = () => {
        loadScript(`https://maps.googleapis.com/maps/api/js?key=${googleMapsConfig}&callback=initMap`);
        window.initMap = this.initMap
    };

    // unfocusPoint = () =>
    // {
    //     markers[lastFocused].setIcon(dollarDarkIcon);
    // };
    //
    // focusPoint(index)
    // {
    //     markers[lastFocused].setIcon(dollarDarkIcon);
    //     markers[index].setIcon(dollarLightIcon);
    //     lastFocused = index;
    // };
    //
    // loadPoints = (points, map, window) =>
    // {
    //     points.forEach(function(p, index){
    //         var marker = new window.google.maps.Marker({
    //             position: p,
    //             icon: dollarDarkIcon,
    //             map: map,
    //             title: ""
    //         });
    //
    //         marker.addListener('click', () => {
    //             markers[lastFocused].setIcon(dollarDarkIcon);
    //             marker.setIcon(dollarLightIcon);
    //             lastFocused = index;
    //             new window.google.maps.InfoWindow({
    //                 content: '<div id="content" style="width: 400px; margin: 15px; color: #fff;" >'+
    //                     '<div id="user_box">'+
    //                     '<div id="user_desc">User</div>'+
    //                     '<div id="user">towelchorizo21</div>'+
    //                     '</div>'+
    //
    //                     '<div id="rating_box">'+
    //                     '<div id="rating_desc">Rate</div>'+
    //                     '<div id="rating">*****</div>'+
    //                     '</div>'+
    //                     '<div style="clear: both"></div>'+
    //                     '<div id="line"> <hr/></div>'+
    //                     '<div id="description_desc">Description</div>'+
    //                     '<div id="description">I broke my leg and I need someone to do my shopping. Who\'s got time?</div>'+
    //                     '<div id="price">17 $</div>'+
    //                     '<div id="button"><a href="#" class="myButton">Accept</a></div>'+
    //
    //                     '</div>'
    //             }).open(map, marker);
    //         });
    //
    //         markers[index] = marker;
    //
    //         if(index > 0)
    //         {
    //             var line = new window.google.maps.Polyline({
    //                 path: [points[index-1], p],
    //                 strokeColor: '#428cf4',
    //                 strokeOpacity: 2.0,
    //                 strokeWeight: 3,
    //                 map: map
    //             });
    //         }
    //     });
    // };
    //
    // translate(adr, window, callback)
    // {
    //     var g = new window.google.maps.Geocoder();
    //     g.geocode( { 'address': adr }, function(results, status) {
    //         if (status == window.google.maps.GeocoderStatus.OK) {
    //             console.log(results[0]);
    //             callback(results[0].geometry.location);
    //
    //         } else {
    //             alert('Geocode was not successful for the following reason: ' + status);
    //             console.log("err");
    //         }
    //     });
    // }
    //
    // autocomplete(adr)
    // {
    //     fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${adr}&key=${googleMapsConfig}&sessiontoken=1234567890`)
    //         .then(response => console.log(response))
    // }
    //


    initMap = () => {
        let map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 50.062370, lng: 19.935040},
            zoom: 14
        });


        var contentString1 = '<div id="content" style="width: 400px; margin: 15px; color: #fff;" >'+
            '<div id="seller"> McDonalds </div>'+
            '<div id="address">Szewska 8</div>'+
            '<div id="line"><hr></div>'+
            '<div id="data">26.11.2018 11:15</div>'+
            '<div id="price"> 12 zł</div>'+
            '</div>';

        let dollarLightIcon = {
            url: dollarIconLight,
            scaledSize: new window.google.maps.Size(37, 50),
        };

        let dollarDarkIcon = {
            url: dollarIconDark,
            scaledSize: new window.google.maps.Size(37, 50),
        };

        var infowindow1 = new window.google.maps.InfoWindow({
            content: contentString1
        });

        var marker1 = new window.google.maps.Marker({
            position: {lat: 50.062370, lng: 19.935040},
            icon: dollarLightIcon,
            map: map,
            title: ''
        });
        marker1.addListener('click', function() {
            infowindow1.open(map, marker1);
        });

        window.google.maps.event.addListener(map, 'click', function() {
            infowindow1.close();
        });

        window.google.maps.event.addListener(infowindow1, 'domready', function() {

            var iwOuter = $('.gm-style-iw');
            iwOuter.css("background-color","#295fa6")

            var iwBackground = iwOuter.prev();

            // Removes background shadow DIV
            iwBackground.children(':nth-child(2)').css({'display': 'none'});

            // Removes white background DIV
            iwBackground.children(':nth-child(4)').css({'display': 'none'});
        });

//______________________________________________

        var contentString2 = '<div id="content" style="width: 400px; margin: 15px; color: #fff;" >'+
            '<div id="seller"> KFC </div>'+
            '<div id="address">Basztowa 8</div>'+
            '<div id="line"><hr></div>'+
            '<div id="data">26.11.2018 12:30</div>'+
            '<div id="price"> 18 zł</div>'+
            '</div>';



        var infowindow2 = new window.google.maps.InfoWindow({
            content: contentString2
        });

        var marker2 = new window.google.maps.Marker({
            position: {lat: 50.066400, lng: 19.937580},
            icon: dollarLightIcon,
            map: map,
            title: ''
        });
        marker2.addListener('click', function() {
            infowindow2.open(map, marker2);
        });

        window.google.maps.event.addListener(map, 'click', function() {
            infowindow2.close();
        });

        window.google.maps.event.addListener(infowindow2, 'domready', function() {

            var iwOuter = $('.gm-style-iw');
            iwOuter.css("background-color","#295fa6")

            var iwBackground = iwOuter.prev();

            // Removes background shadow DIV
            iwBackground.children(':nth-child(2)').css({'display': 'none'});

            // Removes white background DIV
            iwBackground.children(':nth-child(4)').css({'display': 'none'});
        });

//______________________________________________

        var contentString3 = '<div id="content" style="width: 400px; margin: 15px; color: #fff;" >'+
            '<div id="seller"> Craftownia </div>'+
            '<div id="address">Wawrzynca 22</div>'+
            '<div id="line"><hr></div>'+
            '<div id="data">26.11.2018 15:56</div>'+
            '<div id="price"> 49 zł</div>'+
            '</div>';


        var infowindow3 = new window.google.maps.InfoWindow({
            content: contentString3
        });

        var marker3 = new window.google.maps.Marker({
            position: {lat: 50.050520, lng: 19.949420},
            icon: dollarLightIcon,
            map: map,
            title: ''
        });
        marker3.addListener('click', function() {
            infowindow3.open(map, marker3);
        });

        window.google.maps.event.addListener(map, 'click', function() {
            infowindow3.close();
        });

        window.google.maps.event.addListener(infowindow3, 'domready', function() {

            var iwOuter = $('.gm-style-iw');
            iwOuter.css("background-color","#295fa6")

            var iwBackground = iwOuter.prev();

            // Removes background shadow DIV
            iwBackground.children(':nth-child(2)').css({'display': 'none'});

            // Removes white background DIV
            iwBackground.children(':nth-child(4)').css({'display': 'none'});
        });

//______________________________________________

        var contentString4 = '<div id="content" style="width: 400px; margin: 15px; color: #fff;" >'+
            '<div id="seller"> Cafe Camelot </div>'+
            '<div id="address">Swietego Tomasza 17</div>'+
            '<div id="line"><hr></div>'+
            '<div id="data">26.11.2018 16:34</div>'+
            '<div id="price"> 18 zł</div>'+
            '</div>';


        var infowindow4 = new window.google.maps.InfoWindow({
            content: contentString4
        });

        var marker4 = new window.google.maps.Marker({
            position: {lat: 50.063020, lng: 19.939060},
            icon: dollarLightIcon,
            map: map,
            title: ''
        });
        marker4.addListener('click', function() {
            infowindow4.open(map, marker4);
        });

        window.google.maps.event.addListener(map, 'click', function() {
            infowindow4.close();
        });

        window.google.maps.event.addListener(infowindow4, 'domready', function() {

            var iwOuter = $('.gm-style-iw');
            iwOuter.css("background-color","#295fa6")

            var iwBackground = iwOuter.prev();

            // Removes background shadow DIV
            iwBackground.children(':nth-child(2)').css({'display': 'none'});

            // Removes white background DIV
            iwBackground.children(':nth-child(4)').css({'display': 'none'});
        });

//______________________________________________

        var contentString5 = '<div id="content" style="width: 400px; margin: 15px; color: #fff;" >'+
            '<div id="seller"> Pull & Bear </div>'+
            '<div id="address">Pawia 5</div>'+
            '<div id="line"><hr></div>'+
            '<div id="data">26.11.2018 19:21</div>'+
            '<div id="price"> 99 zł</div>'+
            '</div>';


        var infowindow5 = new window.google.maps.InfoWindow({
            content: contentString5
        });

        var marker5 = new window.google.maps.Marker({
            position: {lat: 50.067960, lng: 19.945440},
            icon: dollarLightIcon,
            map: map,
            title: ''
        });
        marker5.addListener('click', function() {
            infowindow5.open(map, marker5);
        });

        window.google.maps.event.addListener(map, 'click', function() {
            infowindow5.close();
        });

        window.google.maps.event.addListener(infowindow5, 'domready', function() {

            var iwOuter = $('.gm-style-iw');
            iwOuter.css("background-color","#295fa6")

            var iwBackground = iwOuter.prev();

            // Removes background shadow DIV
            iwBackground.children(':nth-child(2)').css({'display': 'none'});

            // Removes white background DIV
            iwBackground.children(':nth-child(4)').css({'display': 'none'});
        });

//______________________________________________

        var contentString6 = '<div id="content" style="width: 400px; margin: 15px; color: #fff;" >'+
            '<div id="seller"> Karlik </div>'+
            '<div id="address">Reymonta 17</div>'+
            '<div id="line"><hr></div>'+
            '<div id="data">26.11.2018 23:39</div>'+
            '<div id="price"> 9 zł</div>'+
            '</div>';



        var infowindow6 = new window.google.maps.InfoWindow({
            content: contentString6
        });

        var marker6 = new window.google.maps.Marker({
            position: {lat: 50.065390, lng: 19.916650},
            icon: dollarLightIcon,
            map: map,
            title: ''
        });
        marker6.addListener('click', function() {
            infowindow6.open(map, marker6);
        });

        window.google.maps.event.addListener(map, 'click', function() {
            infowindow6.close();
        });

        window.google.maps.event.addListener(infowindow6, 'domready', function() {



            var iwOuter = $('.gm-style-iw');
            iwOuter.css("background-color","#295fa6")

            var iwBackground = iwOuter.prev();

            // Removes background shadow DIV
            iwBackground.children(':nth-child(2)').css({'display': 'none'});

            // Removes white background DIV
            iwBackground.children(':nth-child(4)').css({'display': 'none'});
        });

        // this.loadPoints([{lat: 22.291, lng: 153.027}, {lat: 18.291, lng: 153.027}], map, window);

        var line = new window.google.maps.Polyline({
            path: [marker5.position, marker3.position, marker1.position, marker4.position, marker2.position, marker6.position],
            strokeColor: '#428cf4',
            strokeOpacity: 2.0,
            strokeWeight: 3,
            map: map
        });

    };

    render() {
        return (
            <div>
                <div id="main_menu">
                    <MenuExamplePointing/>
                </div>

                <div id="list1">
                    <ListExampleCelled/>
                </div>

                <div id="map1">
                    <Map/>
                </div>


            </div>
        );
    }
}

function loadScript(url) {
    var index = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index)
}

export default App;
