import { shallowMount } from '@vue/test-utils';
import MealConfiguratorOptions from '@/components/MealConfiguratorOptions.vue';

describe('MealConfiguratorOptions', () => {
  it('emits an "ingredientSelected" event when selectIngredient is called', () => {
    const ingredient = { id: 1, name: 'Chicken Breast', price: 4.99 };
    const wrapper = shallowMount(MealConfiguratorOptions, {
      props: {
        availableIngredients: [ingredient],
      },
    });

    wrapper.vm.selectIngredient(ingredient);

    expect(wrapper.emitted('ingredientSelected')).toBeTruthy();
    expect(wrapper.emitted('ingredientSelected')[0][0]).toEqual(ingredient);
  });
});