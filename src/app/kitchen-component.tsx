"use client"

import {useState} from "react";

interface Ingredient {
    name: string
    amount: string | number,
    measurement: string,
    note?: string,
}

interface Recipe {
    name: string
    ingredients: Ingredient[],
    steps: RecipeStep[]
}

interface RecipeStep {
    name: string,
    description: string,
    order: number,
}

const flour: Ingredient = {
    name: "flour",
    amount: 1.25,
    measurement: "cups"
}
const bakingPowder: Ingredient = {
    name: "baking powder",
    amount: 1.25,
    measurement: "teaspoon"
}
const salt: Ingredient = {
    name: "salt",
    amount: .25,
    measurement: "teaspoon"
}
const unsaltedButter: Ingredient = {
    name: "unsalted butter",
    amount: 6,
    measurement: "tablespoons",
    note: "room temperature"
}
const sugar: Ingredient = {
    name: "sugar",
    amount: .75,
    measurement: "cups",
}
const vanillaExtract: Ingredient = {
    name: "vanilla extract",
    amount: 1.5,
    measurement: "teaspoons",
}
const vegetableOil: Ingredient = {
    name: "vegetable oil",
    amount: 2,
    measurement: "tablespoons"
}
const eggs: Ingredient = {
    name: "eggs",
    amount: 2,
    measurement: "quantity"
}
const milk: Ingredient = {
    name: "milk",
    amount: .5,
    measurement: "cups",
    note: "plus 2 additional tablespoons"
}

const vanillaCupcakeStep0: RecipeStep = {
    name: "Preheat Oven & Prepare Dry Ingredients",
    description: "To start, preheat your oven to 350°F and insert liners into your cupcake pan. In a medium-sized bowl, combine flour, baking powder & salt and set aside.",
    order: 0,
}

const vanillaCupcakeStep1: RecipeStep = {
    name: "Mix Wet Ingredients",
    description: "In a large bowl, add your butter, sugar, oil and vanilla extract, beating together until the mixture is light and fluffy, about 2-3 minutes. You’ll want to add your eggs next, one at a time, mixing after each until mostly combined. Scrape the sides of the bowl as needed to ensure all ingredients are well incorporated.",
    order: 1,
}

const vanillaCupcakeStep2: RecipeStep = {
    name: "Combine Wet and Dry Ingredients",
    description: "Add half of your dry ingredients to the large bowl and mix until it’s mostly combined. Before you add the next half, slowly add the milk and mix until well combined. The batter might look a little curdled, but don’t worry! It’s supposed to look like that at this stage.",
    order: 2
}

const vanillaCupcakeStep3: RecipeStep = {
    name: "Combine Next Half of Dry Ingredients",
    description: "Add the rest of your dry ingredients, scraping the sides of the bowl as necessary. Mix until smooth and combined, but make sure you don’t over-mix the batter.",
    order: 3
}

const vanillaCupcakeStep4: RecipeStep = {
    name: "Bake Your Cupcakes",
    description: "Fill the cupcake liners 3/4 full and bake for 15-18 minutes, or until a toothpick inserted into the center comes out clean. Remove the cupcakes from the oven and let them cool on a cooling rack.",
    order: 4
}

const vanillaCupcakeRecipe: Recipe = {
    ingredients: [milk, eggs],
    name: "Vanilla Cupcakes",
    steps: [vanillaCupcakeStep0, vanillaCupcakeStep1, vanillaCupcakeStep2, vanillaCupcakeStep3, vanillaCupcakeStep4]
}


interface Ingredient {
    name: string;
    amount: string | number;
    measurement: string;
    note?: string;
}

interface Recipe {
    name: string;
    ingredients: Ingredient[];
    steps: RecipeStep[];
}

interface RecipeStep {
    name: string;
    description: string;
    order: number;
}


function RecipeStepComponent(step: RecipeStep) {
    return (
        <div className="bg-cyan-500 p-4 shadow-md rounded-md mx-auto">
            <h1 className="text-xl font-semibold">{step.name}</h1>
            <p className="mt-2">{step.description}</p>
        </div>
    );
}

function RecipeComponent(recipe: Recipe) {
    return (
        <div className="bg-cyan-600 p-4 shadow-md rounded-md mx-auto">
            <h1 className="text-2xl font-semibold">{recipe.name}</h1>
        </div>
    );
}

export default function KitchenComponent() {
    const [currentRecipe, setCurrentRecipe] = useState<Recipe>(
        vanillaCupcakeRecipe
    );
    const [currentRecipeStep, setCurrentRecipeStep] = useState<RecipeStep>(
        currentRecipe["steps"][0]
    );

    const handleNextButtonClick = () => {
        const recipeIndex = currentRecipeStep.order + 1;
        const updatedRecipeStep = currentRecipe.steps[recipeIndex];
        setCurrentRecipeStep(updatedRecipeStep);
    };

    const handlePrevButtonClick = () => {
        const recipeIndex: number = currentRecipeStep.order - 1;
        const updatedRecipeStep: RecipeStep = currentRecipe.steps[recipeIndex];
        setCurrentRecipeStep(updatedRecipeStep);
    };

    return (
        <div className="container mx-auto p-4">
            <RecipeComponent {...currentRecipe} />
            <RecipeStepComponent {...currentRecipeStep} />
            <div className="flex justify-between mt-4">
                <button
                    onClick={handlePrevButtonClick}
                    disabled={currentRecipeStep.order === 0}
                    className={`${
                        currentRecipeStep.order === 0 ? "bg-gray-300" : "bg-blue-500"
                    } hover:bg-blue-600 text-white px-4 py-2 rounded-md`}
                >
                    Prev Step
                </button>
                <button
                    onClick={handleNextButtonClick}
                    disabled={currentRecipeStep.order === currentRecipe.steps.length - 1}
                    className={`${
                        currentRecipeStep.order === currentRecipe.steps.length - 1
                            ? "bg-gray-300"
                            : "bg-blue-500"
                    } hover:bg-blue-600 text-white px-4 py-2 rounded-md`}
                >
                    Next Step
                </button>
            </div>
        </div>
    );
}
