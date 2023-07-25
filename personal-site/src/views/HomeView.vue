<script>
import HelloWorld from '../components/HelloWorld.vue';
import TextContent from '../components/TextContent.vue';

export default {
  components: {
    HelloWorld,
    TextContent
  },
};
</script>

<template>
  <div>
    <HelloWorld />
    <TextContent />
    <div class="main-text">
      <div>
        <h1>Hi, I'm Nicole. I'm a software developer.</h1>
        <p>I'm also a bird-watcher, cat-whisperer, and a blue belt in Brazilian jiu-jitsu.</p>
        <div class="photo-container">
          <img class="photo" src="src/assets/IMG_5690~5.JPG" alt="Photo of Nicole Groff">
        </div>
        <div class="skills">
          <h3>Programming Languages:</h3>
          <p class="detail">Java, Python, JavaScript</p>

          <h3>Web Development: </h3>
          <p class="detail">Spring Boot, Vue.js, HTML, CSS, Responsive design</p>

          <h3>Data Analysis & Processing:</h3>
          <p class="detail">PostgreSQL, NoSQL, Pandas, Spark, Databricks</p>

          <h3>Data Modeling & Visualization:</h3>
          <p class="detail">Entity Relationship Diagrams (ERD), Power BI, Excel</p>

          <h3>Software Development Practices & Tools:</h3>
          <p class="detail">RESTful APIs, Design Patterns, Debugging, Git, Unix, Docker, Agile development</p>

          <h3>Testing & Quality Assurance:</h3>
          <p class="detail">Test Driven Development (TDD), Unit testing (JUnit), Integration testing</p>

          <h3>Professional Skills: </h3>
          <p class="detail">Critical thinking, Project management, Prioritization, Cross-functional collaboration</p>

          <h3>Certifications:</h3>
          <p class="detail">AWS Certified Cloud Practitioner</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.photo-container {
  display: grid;
  margin: 10px auto;
}

.photo {
  border-radius: 50%;
  height: 180px;
  padding: 10px;
  margin: 0 auto;
}

.skills {
  border: 1px solid lightgrey;
    border-radius: 20px;
    padding: 30px;
    background-color: #ffffffb2;

}
.detail {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

h3 {
  font-weight: 400;
  font-size: 1rem;
  margin: 0;
}
</style>
