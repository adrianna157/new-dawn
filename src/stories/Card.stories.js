import Card from '../components/Card.vue';

export default {
    title: 'Card',
    component: Card,
}

const Template = (args) => ({
    components: { Card },
    setup() {
      //👇 The args will now be passed down to the template
      return { args };
    },
    template: '<Card v-bind="args" />',
  });

  export const Primary = Template.bind({});
  Primary.args = {
    name: 'Adrianna'
  }

  export const Secondary = Template.bind({})
  Secondary.args = {
    name: 'Guevarra'
  }