import HelloWorld from '../components/HelloWorld.vue';

export default {
    title: 'HelloWorld',
    component: HelloWorld,
}

const Template = (args) => ({
    components: { HelloWorld },
    setup() {
      //👇 The args will now be passed down to the template
      return { args };
    },
    template: '<HelloWorld v-bind="args" />',
  });

  export const Primary = Template.bind({});
  Primary.args = {
    name: 'Adrianna'
  }