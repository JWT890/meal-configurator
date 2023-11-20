<template>
    <div class="meal-cost">
      <h2>Meal Cost</h2>
      <p>Total: {{ calculateCost() }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      selectedIngredients: Array,
    },
  
    methods: {
      calculateCost() {
        return this.selectedIngredients.reduce((total, ingredient) => {
          return total + ingredient.price;
        }, 0);
      },
    },
  };
  </script>
  
  <style scoped>
  .meal-cost {
    margin-bottom: 20px;
  }
  </style>