const uberApiRoute = require('express').Router();
const express = require('express');



uberApiRoute.get('/trial', (req, res) => {
    console.log("called in some manner");
    res.send("some response goes here ");
});







module.exports = uberApiRoute;