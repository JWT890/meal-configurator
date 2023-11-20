import { shallowMount } from '@vue/test-utils';
import MealConfigurator from '@/components/MealConfigurator.vue';

describe('MealConfigurator', () => {
  test('should add the selected ingredient to the selectedIngredients array', () => {
    const wrapper = shallowMount(MealConfigurator);
    const ingredient = { id: 1, name: 'Chicken Breast', price: 4.99 };

    wrapper.vm.onIngredientSelected(ingredient);

    expect(wrapper.vm.selectedIngredients).toContainEqual(ingredient);
  });
});