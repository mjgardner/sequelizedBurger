var connection = require("./connection");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }

  return arr.toString();
}

var orm = {
  selectAll: function(tableName, callback) {
    var queryString = "SELECT * FROM ??";

    connection.query(queryString, [tableName], function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  insertOne: function(tableName, columnsArray, valuesArray, callback) {
    var queryString = "INSERT INTO " + tableName;
    queryString += " (" + columnsArray.toString() + ")";
    queryString += " VALUES (" + printQuestionMarks(valuesArray.length) + ")";

    connection.query(queryString, valuesArray, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  updateOne: function(tableName, updateObject, id, callback) {
    var queryString = "UPDATE " + tableName;
    queryString += " SET " + objToSql(updateObject) + " WHERE id = ?";

    connection.query(queryString, [id], function(err, result) {
      if (err) throw err;
      callback(result);
    });
  }
};

module.exports = orm;
