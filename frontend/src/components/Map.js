import React, {Component} from 'react';
import '../App.css';
import MenuExamplePointing from "../components/MenuExamplePointing";
import {googleMapsConfig} from "./config/googleMapsConfig";
import $ from 'jquery'

class Map extends Component {
    componentDidMount() {
        this.renderMap();
    }

    renderMap = () => {
        loadScript(`https://maps.googleapis.com/maps/api/js?key=${googleMapsConfig}&callback=initMap`);
        window.initMap = this.initMap
    };

    initMap = () => {
        let map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 52.2296756, lng: 21.012228700000037},
            zoom: 14
        });


        var contentString1 = '<div id="content" style="width: 400px; margin: 15px; color: #fff;" >'+
            '<div id="user_box">'+
            '<div id="user_desc">User</div>'+
            '<div id="user">towelchorizo21</div>'+
            '</div>'+

            '<div id="rating_box">'+
            '<div id="rating_desc">Rate</div>'+
            '<div id="rating">*****</div>'+
            '</div>'+
            '<div style="clear: both"></div>'+
            '<div id="line"> <hr/></div>'+
            '<div id="description_desc">Description</div>'+
            '<div id="description">I broke my leg and I need someone to do my shopping. Who\'s got time?</div>'+
            '<div id="price">17 $</div>'+
            '<div id="button"><a href="#" class="myButton">Accept</a></div>'+

            '</div>';



        var infowindow1 = new window.google.maps.InfoWindow({
            content: contentString1
        });

        var marker1 = new window.google.maps.Marker({
            position: {lat: 52.2196756, lng: 21.012228700000037},
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
            iwOuter.css("background-color","#9AC33C")

            var iwBackground = iwOuter.prev();

            // Removes background shadow DIV
            iwBackground.children(':nth-child(2)').css({'display': 'none'});

            // Removes white background DIV
            iwBackground.children(':nth-child(4)').css({'display': 'none'});
        });



    };

    render() {
        return (
            <main>
                <MenuExamplePointing/>
                <div id="map"></div>
            </main>
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

export default Map;
