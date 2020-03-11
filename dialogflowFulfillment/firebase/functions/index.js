// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
"use strict";

const axios = require("axios");
const functions = require("firebase-functions");
const { WebhookClient, Image } = require("dialogflow-fulfillment");

const { Card, Suggestion } = require("dialogflow-fulfillment");

process.env.DEBUG = "dialogflow:debug"; // enables lib debugging statements

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(
  (request, response) => {
    const agent = new WebhookClient({ request, response });
    console.log(
      "Dialogflow Request headers: " + JSON.stringify(request.headers)
    );
    console.log("Dialogflow Request body: " + JSON.stringify(request.body));

    function welcome(agent) {
      agent.add(`Welcome to my agent!`);
    }

    function fallback(agent) {
      agent.add(`I didn't understand`);
      agent.add(`I'm sorry, can you try again?`);
    }

    function writeCocktail(agent, drink) {
      agent.add("The " + drink.strDrink);
      agent.add(" ");
      agent.add("Instructions");
      agent.add(" ");
      agent.add(drink.strInstructions);
      agent.add(" ");
      agent.add("Ingredients");

      if (drink.strIngredient1 != null) {
        agent.add(drink.strIngredient1);
      }
      if (drink.strIngredient2 != null) {
        agent.add(drink.strIngredient2);
      }
      if (drink.strIngredient3 != null) {
        agent.add(drink.strIngredient3);
      }
      if (drink.strIngredient4 != null) {
        agent.add(drink.strIngredient4);
      }
      if (drink.strIngredient5 != null) {
        agent.add(drink.strIngredient5);
      }
      if (drink.strIngredient6 != null) {
        agent.add(drink.strIngredient6);
      }
      if (drink.strIngredient7 != null) {
        agent.add(drink.strIngredient7);
      }
      if (drink.strIngredient8 != null) {
        agent.add(drink.strIngredient8);
      }

      agent.add(new Image(drink.strDrinkThumb));
    }

    function writeListCocktails(agent, drinks) {
      console.log(drinks);
      for (var i = 0; i < drinks.length; i++) {
        agent.add(drinks[i].strDrink);
      }
    }

    function getCocktail(agent) {
      console.log("function called");
      const name = agent.parameters.cocktail_name;
      if (name != "") {
        return axios
          .get(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
          )
          .then(result => {
            writeCocktail(agent, result.data.drinks[0]);
          });
      }
    }

    function getList(agent) {
      var ingr = agent.parameters.Ingredients;

      if (ingr != "") {
        agent.add(`Here is a list of cocktails with ${ingr}!`);
        agent.add(" ");
        return axios
          .get(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingr}`
          )
          .then(result => {
            writeListCocktails(agent, result.data.drinks);
          });
      }
    }

    function randomCocktail(agent) {
      return axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(result => {
          writeCocktail(agent, result.data.drinks[0]);
        });
    }
    // Run the proper function handler based on the matched Dialogflow intent name
    let intentMap = new Map();
    console.log("fullfillment called");

    intentMap.set("Default Welcome Intent", welcome);
    intentMap.set("Default Fallback Intent", fallback);
    intentMap.set("CheckingRecipe", getCocktail);
    intentMap.set("Finding_list_by_Ingredients", getList);

    //intentMap.set('Random',randomCocktail);
    agent.handleRequest(intentMap);
  }
);
