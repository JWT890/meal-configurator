<template>
    <div class="meal-progress">
      <h2>Meal Progress</h2>
      <ul class="progress-list">
        <li v-for="ingredient in selectedIngredients" :key="ingredient.id">
          {{ ingredient.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    selectedIngredients: Array,
  }
  </script>
  
  <style scoped>
  .meal-progress {
    margin-bottom: 20px;
  }
  
  .progress-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .progress-list li {
    margin-bottom: 10px;
  }
  </style>