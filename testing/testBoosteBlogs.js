const booste = require('booste');

var string = "This is a test for"
const apiKey = process.env.apiKey
const modelKey = process.env.modelKey

const modelParameters = {
        "string": string,
        "length": 300
}

let run = async (modelParameters) => {
    var out = await booste.run(apiKey, modelKey, modelParameters)
    console.log(out)
}
    
run(modelParameters)    