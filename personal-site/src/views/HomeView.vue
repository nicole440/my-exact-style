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
      <div class="section">
        <h1>Hi, I'm Nicole. I'm a software developer.</h1>
        <p>I'm also a bird-watcher, nature lover, and a blue belt in Brazilian jiu-jitsu.</p>
        <br>
        <!-- <div class="photo-container">
          <img class="photo" src="src/assets/IMG_5690~5.JPG" alt="Photo of Nicole Groff">
        </div> -->
        <p>I have a passion for working with data using Java and Python. Building algorithms and
          crafting efficient data processing systems brings me joy, as I strive for elegant solutions that drive
          insightful outcomes.</p>
        <br>
        <p>I also love working with databases, from designing solid database
          architectures to optimizing queries and ensuring seamless application integration. I enjoy diving deep into the
          intricacies of data storage and retrieval.</p>
      </div>
      <div class="section">
        <h2>Below are some of the tools and technologies I've been working with:</h2>
        <br>
        <h3>Programming Languages:</h3>
        <p class="detail">Java, Python, JavaScript</p>

        <h3>Web Development: </h3>
        <p class="detail">Spring Boot, Vue.js, HTML, CSS, Responsive design</p>

        <h3>Data Analysis & Processing:</h3>
        <p class="detail">PostgreSQL, Pandas, Spark, Databricks</p>

        <h3>Data Modeling & Visualization:</h3>
        <p class="detail">Entity Relationship Diagrams (ERD), Power BI, Excel</p>

        <h3>Software Development Practices & Tools:</h3>
        <p class="detail">RESTful APIs, MVC Design Pattern, Debugging, Git, Unix, Agile, Docker</p>

        <h3>Testing & Quality Assurance:</h3>
        <p class="detail">Unit testing (JUnit), Integration testing</p>

        <h3>Cloud Computing:</h3>
        <p class="detail">AWS: EC2, S3, Route 53, CloudFront</p>
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

.section {
  border-radius: 20px;
  padding: 10px;
  background-color: #ffffffcb
}

p.detail {
  font-size: 1.2rem;
  margin-bottom: 10px;
}
</style>
