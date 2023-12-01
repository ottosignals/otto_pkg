//https://cloud.google.com/dataform/docs/reference/dataform-core-reference#publish
//https://github.com/DFE-Digital/dfe-analytics-dataform/blob/master/includes/entity_data_not_fresh.js




module.exports = (params) => {
  return publish("test_table", {
    type: "table",
  }).query(ctx => "SELECT 1 AS test");
}