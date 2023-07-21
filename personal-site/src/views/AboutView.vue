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
        <!-- <h1>This page is under construction.</h1>
        <p>Please check back later for updates.</p> -->
        <div>
          <div>
            <p class="detail">Before I discovered my love of programming, I was a paralegal in the realm of business, commercial real
              estate, and liquor law. My favorite part of my role (aside from knowing where all of the best restaurants
              and
              breweries are) was working diligently behind the scenes to support small business owners in fulfilling their
              dreams.</p>
          </div>
        </div>
        <div>
          <h1>As a software developer, my mission is to continue creating a positive impact for others.</h1>
        </div>
        <div>
          <p class="detail">I have a passion for harnessing the power of data using Java and Python. Whether it's building
            algorithms or developing efficient data processing systems, I find joy in crafting elegant solutions that
            drive insightful outcomes.</p>
        </div>
        <div>
          <p class="detail">I also love working with databases, from designing solid database architectures to writing
            efficient queries and ensuring seamless integration with applications. I enjoy diving deep into the
            intricacies of
            data storage, retrieval, and optimization.</p>
        </div>
        <div>
          <h1>Outside of work, you'll often find me indulging in my passions for birdwatching, honing my skills and discipline in Brazilian jiu-jitsu, and spoiling my rescue animals with love and care.
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p, h1 {
  margin-bottom: 30px;
}

p {
  font-size: 1.5rem;
}
</style>