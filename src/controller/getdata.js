const mongoose = require("mongoose");

const sampleModel =require("../modal/sample")
const getSample = async function (req, res)  {
    try {
      const { end_year, sector, topic, region, pestle, source, country ,title} = req.query;
  
      // Check if req.query is empty
      const isQueryEmpty = Object.keys(req.query).length === 0;
  
      // Create a filter object if query parameters are present
      const filter = isQueryEmpty
        ? {}  // If query is empty, return all data
        : {
            ...(end_year && { end_year }),
            ...(sector && { sector }),
            ...(topic && { topic }),
            ...(region && { region }),
            ...(pestle && { pestle }),
            ...(source && { source }),
            ...(country && { country }),
            ...(title && { title }),
          };
  
      const filteredData = await sampleModel.find(filter);
  
      return res
      .status(200)
      .send({ status: true, message: "list of all sampeData", data: filteredData });
  } catch (error) {
    return res.status(400).send({ status: false, message: error.message });
  }
}

 
  module.exports = {
    getSample,
   
  };