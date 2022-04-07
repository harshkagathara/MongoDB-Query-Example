module.exports = (app) => {
  var ObjectId = require("mongodb").ObjectID;
  const poiModel = require("./Model/poi");
  const usersModel = require("./Model/users");

  app.get("/", async (req, res) => {
    res.send("Wel Come");
  });

  //MongoDB provides a variety of logical query operators. The $and operator is one of those operators. The $and operator is used to perform logical AND operations on an array of one or more expressions. The user can use this operator in methods like find(), update(), etc., as per their requirements.

  app.get("/and", async (req, res) => {
    try {
      let user = await poiModel.find({
        $and: [
          { idAccount: ObjectId("5ed9eb6001874d3485422b36") },
          { locationName: "Subway" },
          {
            $expr: {
              $gt: [{ $strLenCP: { $toString: "$address.postalCode" } }, 4],
            },
          },
        ],
      });
      res.send(user);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  });

  app.get("/and-toString", async (req, res) => {
    try {
      let user = await poiModel.find({
        $and: [
          { idAccount: ObjectId("5ed9eb6001874d3485422b36") },
          {
            $expr: {
              $gt: [{ $strLenCP: { $toString: "$address.postalCode" } }, 4],
            },
          },
        ],
      });
      res.send(user);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  });

  //MongoDB provides a variety of logical query operators. The $or operator is one of those operators. The $or operator performs logical "OR operations" on an array of one or more expressions. This operator is only used to retrieve the documents that match at least one of the given expressions in the array.
  app.get("/or", async (req, res) => {
    try {
      let user = await poiModel.find({
        $or: [
          { idAccount: ObjectId("5ed9eb6001874d3485422b36") },
          { locationName: "Subway" },
          { idAccount: "5ed9eb6001874d3485422b36" },
        ],
      });
      res.send(user);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  });

  //MongoDB provides different types of logical query operators, and the $in operator is one of them. The $in operator is used to select documents in which the field's value equals any of the given values in the array. You can use this operator in methods like find(), update(), etc., according to your requirements.
  app.get("/in", async (req, res) => {
    try {
      let user = await poiModel.find({
        locationName: { $in: ["ŠKODA TOULOUSE - ESPACE AUTO 31"] },
      });
      res.send(user);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  });

  //MongoDB provides a variety of logical query operators. The $nor operator is one of those operators. The $nor operator is used to perform logical "NOR operations" on an array of one or more expressions. In other words, the $nor is a logical query operator that allows the user to perform a logical NOR operation on an array of one or more query expressions. This operator is also used to select or retrieve documents that do not match all of the given expressions in the array. The user can use this operator in methods like find(), update(), etc., as per their requirements.
  app.get("/nor", async (req, res) => {
    try {
      let user = await poiModel.find({ $nor: [{ locationName: "Subway" }] });
      res.send(user);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  });

  //In mongoDB, the find() method is used to fetch a particular data from the table. In other words, it is used to select data in a table. It is also used to return all events to the selected data. The find() method consists of two parameters by which we can find a particular record.
  app.get("/find", async (req, res) => {
    try {
      let user = await poiModel.find();
      res.send(user);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  });
  // $match : je je match krvu hoi te
  // $lookup =>
  //from : je table sathe joint krvu hoi te
  //localField : mul bhut table ne primary key(base key)
  // foreignField: new table ni primaryy kay (base kay)
  // as : aavela data ne je name aapvu hoi te
  //$project => je je jotu hoi te like output ma
  //unwind: data object ma joi chhe ke array ma by defailt array  ma hoi chhe.
  // group ==> same to sql jevu

  // ******************

  // $project − Used to select some specific fields from a collection.
  // $match − This is a filtering operation and thus this can reduce the amount of documents that are given as input to the next stage.
  // $group − This does the actual aggregation as discussed above.
  // $sort − Sorts the documents.
  // $skip − With this, it is possible to skip forward in the list of documents for a given amount of documents.
  // $limit − This limits the amount of documents to look at, by the given number starting from the current positions.
  // $unwind − This is used to unwind document that are using arrays. When using an array, the data is kind of pre-joined and this operation will be undone with this to have individual documents again. Thus with this stage we will increase the amount of documents for the next stage.

  app.get("/aggregate", async (req, res) => {
    try {
      let finalArr = new Array();
      let filter = { "address.postalCode": "75012" };
      finalArr.push(filter);

      let query = [
        { $match: { idAccount: ObjectId("5fa276670a134a12362488de") } },

        {
          $lookup: {
            from: "accounts",
            localField: "idAccount",
            foreignField: "_id",
            as: "reviewdata",
          },
        },
        { $unwind: "$reviewdata" },
        // {
        //    // $match : { $and : [{'address.postalCode':75012}]}
        // },
        // {
        //     $group : {_id : { locationName : "$locationName ", idGroupInfo : "$idGroupInfo" ,
        //     count: { $sum: 1 }
        //  }
        // }
        // }
        // { $project :
        //     { "reviewdata":true, "idAccount":true, "placeId" :true,"locality":true,"address":true,"locationName":true, "newReviewUrl":true
        //     }
        // },
      ];
      let result = await poiModel.aggregate(query);

      res.send(result);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  });

  app.get("/project", async (req, res) => {
    try {
      let user = await poiModel.aggregate([
        {
          $project: {
            idAccount: true,
            placeId: true,
            locality: true,
            address: true,
            locationName: true,
            newReviewUrl: true,
          },
        },
      ]);
      res.send(user);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  });

  app.get("/unwind", async (req, res) => {
    try {
      let user = await poiModel.aggregate([
        { $project: { idAccount: true, placeId: true } },
        { $unwind: "$placeId" },
      ]);
      res.send(user);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  });
};
