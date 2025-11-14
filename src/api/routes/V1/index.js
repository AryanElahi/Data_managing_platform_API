const express = require("express")
const authUserV1 = require ("./user/auth.rout")
const competitionV1 = require("./competition/competition")
const adminV1 = require("./admin/admin.rout")
const datasetV1 = require("./dataset/dataset")


const v1Loader = () => {
    const router = express.Router();
    router.use("/auth", authUserV1)
    router.use("/compitition", competitionV1)
    router.use("/admin", adminV1)
    router.use("/Dataset", datasetV1)
    return router;
}

module.exports = v1Loader;