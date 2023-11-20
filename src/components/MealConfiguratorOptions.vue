<template>
    <div class="meal-options">
      <h2>Available Ingredients</h2>
      <ul class="ingredient-list">
        <li v-for="ingredient in availableIngredients" :key="ingredient.id">
          <button @click="selectIngredient(ingredient)">
            {{ ingredient.name }} (${{ ingredient.price }})
          </button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      availableIngredients: Array,
    },
  
    methods: {
      selectIngredient(ingredient) {
        this.$emit('ingredientSelected', ingredient);
      },
    },
  };
  </script>
  
  <style scoped>
  .meal-options {
    margin-bottom: 20px;
  }
  
  .ingredient-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .ingredient-list li {
    margin-bottom: 10px;
  }
  </style>