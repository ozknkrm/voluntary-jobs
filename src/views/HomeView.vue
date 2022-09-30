<script>
import Carousel from '../components/Carousel.vue';
import { apiProjects } from "../services/apiProjects.js";


export default {
  name: 'HomeView',

  components: { Carousel },
 
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
<div class="mystyle">
  <div class="card" style="width: 18rem;">
    <div class= "cards" v-for="(project, index) in projects" :key="index">
      <h5 class="card-title">{{ project.name }}</h5>
      <h5 class="card-title">{{ project.country }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
</div>
</template>
<style scoped>
@import "../assets/base.css";
  .mystyle {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
    padding-top: 2em;
  }
.card{
  margin: auto;

}
  .cards {
    border: 1px solid #ccc;
    

  }
  
  div.cards:hover {
    border: 1px solid #777;
  }
  
  div.cards {
    width: 100%;
    height: auto;
  }
  
  div.cards {
    padding: 15px;
    text-align: center;
  }

  .cards {
    padding: 0 6px;
    float: left;
    width: 24.99999%;
  }
  
  @media only screen and (max-width: 700px) {
    .cards {
      width: 49.99999%;
      margin: 6px 0;
    }
  }
  
  @media only screen and (max-width: 500px) {
    .cards {
      width: 100%;
    }
  }
  
  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }
  </style>