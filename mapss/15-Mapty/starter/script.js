'use strict';

const monts=['jan','feb','march','april','may','june','july','agu','seb','oct','nov','dec'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workout');
const inputType = document.querySelector('.form_input_type');
const inputDistance = document.querySelector('.form_input_distance');
const inputDuration = document.querySelector('.form_input_duration');
const inputCadence = document.querySelector('.form_input_cadence');
const inputElevation = document.querySelector('.form_input_elevation');
if(navigator.geolocation)
navigator.geolocation.getCurrentPosition(function(position){
    const {latitude} = position.coords;
    const{ longitude} = position.coords;
    console.log(` https://www.google.com/maps/@${latitude},${longitude}`)
},function(){
	alert('could not get the position')
}
)
