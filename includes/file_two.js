//https://cloud.google.com/dataform/docs/reference/dataform-core-reference#publish





module.exports = (params) => {
  return publish("test_table2", {
    type: "table",
  }).query(ctx => `SELECT "${params.sample_data}", * from ${ctx.ref("test_table")}`);
}