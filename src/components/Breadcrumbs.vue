<template>
  <section class="breadcrumbs">
    <div class="container">

      <div class="d-flex justify-content-between align-items-center">
        <h2>{{ page }}</h2>
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li>{{ page }}</li>
        </ol>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    page: String
  }
};
</script>
