// Build the metadata panel
const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

function buildMetadata(sample) {
  d3.json(url).then((data) => {
  
    // get the metadata field
    const metadata = data.metadata[0]

    // Filter the metadata for the object with the desired sample number
  

    // Use d3 to select the panel with id of `#sample-metadata`
    let metatadataPanel = d3.select('#sample-metadata');

    // Use `.html("") to clear any existing metadata
    metatadataPanel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
   for (key in metadata) {
    metatadataPanel.text(key.toUpperCase()+":"+sample[key])
   }  
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json(url).then((data) => {

    // Get the samples field
    const metadata = data.metadata[0]


    // Filter the samples for the object with the desired sample number


    // Get the otu_ids, otu_labels, and sample_values
    const sampleValues = data.samples[0].sample_values.slice(0, 10);
    const otuIds = data.samples[0].otu_ids.slice(0, 10);
    const otuLabels = data.samples[0].otu_labels.slice(0, 10);

    // Build a Bubble Chart
    let trace = [
        x: otuIds,
        y: sampleValues,
        test:otuLabels,
        mode:"makers",
        maker:{
          size:sample_values,
          color:otuIds,
          colorscales:"Earth"
        }
    ]

    // Render the Bubble Chart
    plotly.bubblePlot("bubble",trace)


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately


    // Render the Bar Chart

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field


    // Use d3 to select the dropdown with id of `#selDataset`


    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.


    // Get the first sample from the list


    // Build charts and metadata panel with the first sample

  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected

}

// Initialize the dashboard
init();
