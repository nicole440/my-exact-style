<script></script>

<template>
  <section id="intro">
    <div class="text">
      <h1>Hi, I'm Nicole. I'm a software developer.</h1>
      <p>I'm also a bird-watcher, nature lover, and a blue belt in Brazilian jiu-jitsu.</p>

      <p>I have a passion for working with data using Java and Python. Building algorithms and
        crafting efficient data processing systems brings me joy, as I strive for elegant solutions that drive
        insightful outcomes.</p>

      <p>I also love working with databases, from designing solid database
        architectures to optimizing queries and ensuring seamless application integration. I enjoy diving deep into the
        intricacies of data storage and retrieval.</p>
    </div>

    <div class="photo-container">
      <img class="photo" src="/IMG_5690~5.JPG" alt="Photo of Nicole Groff">
    </div>
  </section>
</template>

<style>
#intro {
  display: flex;
}

div.photo-container {
  grid-area: photo-container;
  background-color: transparent;
  margin: auto;
}

img.photo {
  border: rgb(192, 112, 7) solid 1px;
  padding: 5px;
  border-radius: 50%;
  height: 250px;
  margin: auto;
}

@media only screen and (max-width: 768px) {
  div.photo-container {
    display: none;
  }
}
</style>