# BSA2020_Team_Swatch

This repository was created to provide further information and details about our 1st project related to the course Big-Scale Analytics given by Prof. Vlachos in the Information Systems Master at Hec Lausanne in 2020. 

The main goal of the project was to **create a functional chatbot** and explain step-by-step its realization. In this repository, you will find an exported zip of the chatbot created, a notebook containg a general presentation of the tool used and a step-by-step tutorial. In order to fulfill the requirement of the project, we used **Dialogflow**, Google's API for building conversational user experience. 


## Our Team

- Alvin Fournier
- Tanja Markotic
- Yoann Petten
- Arnaud Salvadori

## Our Project in details

#### Building an agent on Dialogflow

After understanding the basics of Dialogflow, we decided to create a **Barmaid 2.0 chatbot** able to _take orders, give receipes and give a list of cocktails_. 

In other words, our potential chatbot end-users can:
- Order cocktails in a bar set-up environment and have a confirmation of the order
- Find complete recipes of more than 400 cocktails containing needed ingredients and a representative picture
- Receive lists of cocktails containing one of the 100 available ingredients
- Small-talk with our chatbot

#### Integrating an almost free API 

In order to procure those functionalities to our end-users, we integrated an external API called **"CocktailDB - API"** to our chatbot. One of the important benefits of using this external API is that we didn't have to collect a large amount of data about cocktails' receipes. 

To integrate this external API, we used some functionalities of **Firebase**, a mobile and web application development plateform owned by Google. 

The link of the used API is : https://www.thecocktaildb.com/api.php

#### Training an agent on Dialogflow

To train our **Barmaid 2.0 chatbot**, we used the built-in one-click integration **Telegram** of the Dialogflow's interface to let some friends test our chatbot, collect their end-user expressions and analyse those expressions to provide our future end-users a better intent classification. 

The link to the telegram's bot : https://t.me/Barmaid2_bot

#### Writing a self-explanatory notebook

In order to fulfill the requirement of the project, we wrote a **Google Colab** notebook under the form of a tutorial. This notebook contains the following:
- An introduction to the concept of chatbots 
- A presentation of Dialogflow, the creation tool used 
- A tutorial explaining "how to create your own chatbot"

#### Creating a tutorial-style video

In order to illustrate this project, we created a little video giving some important insights on the creation and development of our **Barmaid 2.0 chatbot**.

The link of the **Youtube** video is: https://www.youtube.com/watch?v=2ytgwQmWVj8&feature=youtu.be

#### Preparing a presentation 

For the course purposes, we created some **Google Slides** to support our 20 min in-class presentation. 

## The files

- **Barmaid_ChatBot** : Folder containing all the intents and entities of the bot. This can be used to recreate a complete ChatBot.

- **dialogflowFulfillment** : Folder containing the functions used to interact with the API.

- **dialogflowAPIExtraction** : Folder containing files which has been used to extract list of ingredients/recipes

- **Dialogflow_ChatBot.ipynb** : Notebook of our project.

## References

For the presentation of Dialogflow in the notebook:
- https://cloud.google.com/dialogflow/docs/basics
- https://cloud.google.com/dialogflow/docs/video
- https://cloud.google.com/dialogflow/docs/agents-overview

For the tutorial in the notebook
- https://www.youtube.com/watch?v=n4IPOeFCDxI


