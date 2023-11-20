import { shallowMount } from "@vue/test-utils";
import MealConfiguratorCost from "@/components/MealConfiguratorCost.vue";

describe("MealConfiguratorCost", () => {
  it("calculates the correct cost", () => {
    const selectedIngredients = [
      { id: 1, name: 'Chicken Breast', price: 4.99 },
      { id: 2, name: 'Brown Rice', price: 1.99 },
      { id: 3, name: 'Broccoli', price: 2.49 },
      { id: 4, name: 'Olive Oil', price: 1.49 },
    ];
    
    const wrapper = shallowMount(MealConfiguratorCost, {
      propsData: {
        selectedIngredients: selectedIngredients
      }
    });

    expect(wrapper.vm.calculateCost()).toBe(10.96);
  });
});