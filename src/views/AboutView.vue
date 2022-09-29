<script>
  export default {
    name: "AboutView",
  };
  </script>
  
  <template>
    <section
      id="first-section"
      class="d-flex justify-content-center align-items-center">
      <h1 class="we">we <br> are</h1>
      <img src="../assets/img/volunteers.png" alt="volunteer" />
      <div class="d-flex flex-column justify-content-around align-items-center">
        <h1>
          We love<br />
          <span>help people</span>
        </h1>
       </div>
    </section>
  
    <section
      class="d-flex justify-content-around align-items-center"
    >
      <div id="text" class="d-flex flex-column justify-content-center">
        <h1>What is Volunteer Abroad?</h1>
  
        <p class="text-justify">
          Volunteering is a voluntary act of an individual or group freely giving time and labour for community service. You are doing good for others and the community, which provides a natural sense of accomplishment. Your role as a volunteer can also give you a sense of pride and identity.
        </p>
      </div>
  
      <div id="img" class="d-flex justify-content-center align-items-center">
        <img src="../assets/img/weneedyou.jpg" alt="" />
      </div>
    </section>

  </template>
  
  <style scoped>
 
  .we{
    margin-right: 50px;
  }
 
  #first-section{
    width: 100%;
    height: 350px;
    background-color: green;
  }
  #first-section img {
    width: 50%;
    margin-right: 200px;
  }
  #first-section h1 {
    margin-left: -80px;
    font-size: 55px;
  }

  #text {
    width: 40%;
    margin-left: 150px;
  }
  #img {
    width: 60%;
  }
  img {
    height: 280px;
    border-radius: 5px;
  }
  </style>
  