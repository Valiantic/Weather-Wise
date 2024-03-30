/**
 * 
 * @fileoverview All module functions
 *
 * 
 */

`use strict`;

export const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

export const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

/**
 * 
 * @param {number} dateUnix  unix date seconds
 * @param {number} timezone  timezone shift from UTC in seconds
 * @returns {string} data string. formate: "Sunday 10, jan"
 */

export const getDate = function(dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;

}

/**
 * @param {number} timeUnix unix date in seconds
 * @param {number} timezone timezone shift
 * @returns {string} time string. formate: "hh:mm am/pm"
 */

export const getTime = function(timeUnix, timezone) {
    const date = new Date ((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours > 12 ? "PM" : "AM";
                     /**SUS */

   return `${hours % 12 || 12}:${minutes} ${period}`;
}



/**
 * @param {number} timeUnix unix date in seconds
 * @param {number} timezone timezone shift
 * @returns {string} time string. formate: "hh am/pm"
 */

export const getHours = function(timeUnix, timezone) {
    const date = new Date ((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours > 12 ? "PM" : "AM";
                     /**SUS */

   return `${hours % 12 || 12} ${period}`;
}

/**
 * 
 * @param {number} mps metter per seconds
 * @returns {number} kilometer per hours
 */

export const mps_to_kmh = mps => {
    const mph = mps * 3600;
    return mph / 1000;
}

export const aqiText = {
    1: {
        level: "Good",
        message: "Today's weather is perfect for outdoor activities, and air quality is excellent"
    },
    2: {
        level: "Fair",
        message: "Expect fair skies and decent air quality for your outdoor plans"
    },
    3: {
        level: "Moderate",
        message: "Weather today is moderate, with partly cloudy skies and moderate air quality."
    },
    4: {
        level: "Poor",
        message: "Unfavorable conditions with poor air quality advise limiting outdoor activities"
    },
    5: {
        level: "Very Poor",
        message: "The forecast warns of very poor skies, thunderstorms, and extremely elevated air pollution levels."
    },
}
    

