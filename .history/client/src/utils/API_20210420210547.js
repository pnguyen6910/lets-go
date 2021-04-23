import axios from "axios";

export default {
    //gets all points of interest
    getPoints: function () {
        return axios('/api/maps')
    }
    //adds a users point of interest to db
    createPoint: function () {
        return axios('/api/maps')
    }
    //deletes a point of interest from db


}