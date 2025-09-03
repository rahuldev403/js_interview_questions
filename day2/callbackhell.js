getDataFromAPI(function (data) {
  processData(data, function (processedData) {
    saveData(processedData, function (result) {
      console.log("Data saved successfully:", result);
    });
  });
});
