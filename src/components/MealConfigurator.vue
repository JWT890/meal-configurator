<template>
  <div class="meal-configurator">
    <MealConfiguratorOptions :availableIngredients="availableIngredients" @ingredientSelected="onIngredientSelected" />
    <MealConfiguratorProgress :selectedIngredients="selectedIngredients" />
    <MealConfiguratorCost :selectedIngredients="selectedIngredients" />
  </div>
</template>

<script>
import MealConfiguratorOptions from './MealConfiguratorOptions.vue';
import MealConfiguratorProgress from './MealConfiguratorProgress.vue';
import MealConfiguratorCost from './MealConfiguratorCost.vue';

export default {
  components: {
    MealConfiguratorOptions,
    MealConfiguratorProgress,
    MealConfiguratorCost,
  },

  data() {
    return {
      availableIngredients: [
        { id: 1, name: 'Chicken Breast', price: 4.99 },
        { id: 2, name: 'Brown Rice', price: 1.99 },
        { id: 3, name: 'Broccoli', price: 2.49 },
        { id: 4, name: 'Olive Oil', price: 1.49 },
      ],
      selectedIngredients: [],
    };
  },

  methods: {
    onIngredientSelected(ingredient) {
      this.selectedIngredients.push(ingredient);
    },
  },
};
</script>

<style scoped>
.meal-configurator {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>