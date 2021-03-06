const webpack = require("webpack");
const path = require("path");

var jF = path.resolve(__dirname,"scripts");
var bF = path.resolve(__dirname,"build");

var config = {
    entry:{
        "login": jF + "/login.js",
		"admin": jF + "/admin.js",
        "create": jF + "/create.js",
        "client": jF + "/client.js",
        "questions": jF + "/questions.js"
    },
    output:{
        filename:"[name]bundle.js",
        path:bF
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
			Survey:"surveyjs-jquery",
			SurveyEditor:"surveyjs-editor"
        })
    ]
}

module.exports = config;