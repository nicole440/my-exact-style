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
        <p class="detail">Before I fell in love with programming, I worked as a paralegal, navigating the worlds of
          business, commercial real estate, and liquor law. One of the most rewarding parts of my role was working
          diligently
          behind the scenes to support small business owners in making their dreams a reality.</p>
      </div>

      <div>
        <h2>As a developer, my mission remains the same: to continue creating a positive impact for others.
        </h2>
      </div>
      <div>
        <p class="detail">I have a passion for working with data using Java and Python. Building algorithms and
          crafting efficient data processing systems brings me joy, as I strive for elegant solutions that drive
          insightful outcomes.</p>
      </div>
      <div>
        <p class="detail">I also love working with databases, from designing solid database
          architectures to optimizing queries and ensuring seamless application integration. I enjoy diving deep into the
          intricacies of data storage and retrieval.</p>
      </div>
      <div>
        <p class="detail">
          Self-motivated and naturally curious, I am constantly
          pursuing new challenges to enhance my skills and understanding of technical concepts.
        </p>
      </div>
      <div>
        <h2>
          I'm both detail-oriented and context-driven, always seeking to understand how the finer details make up the big
          picture.
        </h2>
      </div>
      <div>
        <p class="detail">
          I'm open to new opportunities, and eager to contribute my unique perspective, passion for programming, and
          enthusiasm for problem-solving as
          part of a cohesive team.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
p,
h1 {
  margin-bottom: 30px;
}

p {
  font-size: 1.5rem;
}
</style>