<script>
</script>

<template>
    <div class="intro-text">
        <div class="first">
            <h1>Hi, I'm Nicole.</h1>
            <p>I'm a software developer in Lancaster County, PA.</p>
        </div>
        <div>
            <p class="detail">I have a passion for harnessing the power of data using Java and Python. Whether it's building
                algorithms or developing efficient data processing systems, I find joy in crafting elegant solutions that
                drive
                insightful outcomes.</p>
        </div>
        <div>
            <p class="detail">I also love working with databases, from designing solid database architectures to writing
                efficient queries and ensuring seamless integration with applications. I enjoy diving deep into the
                intricacies of
                data storage, retrieval, and optimization.</p>
        </div>
        <div>
            <p class="detail">When I'm not programming, I enjoy birdwatching, Brazilian jiu jitsu, and spoiling my rescue
                animals with love.
            </p>
        </div>
    </div>
</template>

<style scoped>
.intro-text {
    padding-left: 10px;
}

.intro-text>div {
  margin-bottom: 25px;
  max-width: 40%;
  background-color: #ffffff94;
}

h1 {
  font-weight: 400;
  font-size: 42px;
  margin-bottom: 0;
}

p {
  font-weight: 200;
  font-size: 28px;
  margin: 0 auto;
}

.detail {
  font-size: 22px;
}

.subtext {
  font-size: 24px;
}

@media (max-width: 1024px) {
  .intro-text>div {
    max-width: 500px;
    margin: 40px 12px;
    background-color: #ffffffd0;
  }
}

  @media (max-width: 600px) {
  .intro-text>div {
    text-align: center;
    margin-bottom: 50px;
  }
}

</style>