<script>
    import { apiProjects } from "../services/apiProjects.js";
    export default {
        name: "Card",
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
<div class="d-flex justify-content-evenly row row-cols-1 row-cols-md-2 g-4">
    <section class="card_cnt h-100" v-for="(project, index) in projects" :key="index">
        <div class="card_img_cnt">
            <img :src="project.image" class="proje_img" alt="">
        </div>
        <div class="card_info_box">
            <h4 class="proje_name">{{project.name}}</h4>
            <p class="proje_time">{{project.time}}</p>
            <p class="desc_text">{{project.description}}</p>
            <button class="btn btn-info">Read More</button>
        </div>
    </section>
</div>
</template>

<style scoped>

.desc_text {
text-align: center;
margin-top: 20px;
}
.proje_name{
text-align: center;
margin-top: 10px;
}
.proje_time{
background-color:white;
color: red;
font-size: large;
font-weight: bold;
text-align: center;
}

.card_cnt{
width: 30%;
height: 36rem;
margin:2.5%;
background-color: var(--backCards);
display: flex ;
position: relative;
flex-direction: column;
align-items: center;
box-shadow: 0rem 0rem 0.5rem rgba(0, 0, 0, 0.5);
border-radius: 1rem;   
}
.card_cnt:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), 
    -5px -5px 30px 15px rgba(0,0,0,0.22);
  cursor: pointer;  
}

.card_cnt:hover{
    box-shadow: 0rem 0rem 0.5rem #d73128d2;
}
.card_img_cnt{
    width: 100%;
    position: relative;    
    height: 50%; 
}
.proje_img {
    width:100% ;
    height: -webkit-fill-available;
    border-radius: 1rem;
    object-fit: cover;
}
.card_info_box{
    display: flex;
    flex-direction: column;
}
</style>