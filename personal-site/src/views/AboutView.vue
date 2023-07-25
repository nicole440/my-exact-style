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
        <h2>I like to build things.</h2>

        <p>I first began coding as a kid when I bought a book on HTML and CSS for building websites. I spent hours not
          only
          creating static webpages for fun, but also using those skills, in true Millennial fashion, to personalize
          my
          MySpace.</p>

        <p>Before pursuing software development, I worked as a paralegal, navigating the worlds of
          business, commercial real estate, and liquor law. One of the most rewarding parts of my role was working
          diligently
          behind the scenes to support small business owners in making their dreams a reality.</p>

        <h2>As a developer, my mission remains the same: to continue creating a positive impact for others.
        </h2>

        <p>
          Self-motivated and naturally curious, I am constantly
          pursuing new challenges to enhance my skills and understanding of technical concepts.
        </p>

        <p>
          I'm both detail-oriented and context-driven, always seeking to understand how the finer details make up the big
          picture.
        </p>


        <h2>
          I'm open to new opportunities, and eager to contribute my unique perspective, passion for programming, and
          enthusiasm for problem-solving as
          part of a cohesive team.
        </h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2, p {
  margin-bottom: 20px;
}
</style>