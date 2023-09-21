
const mongoose = require("mongoose");

const sampleModel =require("../modal/sample")
const createSample = async function (req, res) {
    console.log(req.body,"sampleData")
    try {
      const data = req.body;
      let { end_year, intensity, sector, topic, insight, url, region,start_year,impact,added,published,country,relevance,pestle,source,title,likelihood} = data;
     
      const sampleData = await sampleModel.create({
        end_year, intensity, sector, topic, insight, url, region,start_year,impact,added,published,country,relevance,pestle,source,title,likelihood
      });
      return res
        .status(201)
        .send({
          status: true,
          message: "sample created sucessfully",
          data: sampleData,
        });
    } catch (error) {
      return res.status(400).send({ status: false, message: error.message });
    }
  };

  module.exports={
    createSample
  }