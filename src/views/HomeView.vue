<script>
import { apiProjects } from "../services/apiProjects.js";
import Carousel from '../components/Carousel.vue';
import Card from '../components/Card.vue';


export default {
  name: 'HomeView',

  components: { Carousel, Card },
 
  data() {
    return {
      projects: [],
    };
  },

  methods: {
    async getAllProjects() {
      const data = await apiProjects.getAllProjects();

      const projectsData = data.data;

      this.projects = projectsData;
    }
  },
  created(){
    this.getAllProjects();
  }

}
  
</script>

<template>
  <Carousel/>
  <Card/>
</template>
<style scoped>

</style>