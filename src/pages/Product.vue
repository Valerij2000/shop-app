<template>
  <div>
    <section class="product-section mt-5">
      <div class="container">
        <div class="row">
          <div class="card mb-3">
            

<carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="true">
    <slide v-for="(item, index) in product.gallery" :key="index" class="slide-block">
      <img width="70%" :src="item.img">
    </slide>
  </carousel>

   




            <div class="card-body">
              <h5 class="card-title">{{product.title}}</h5>
              <p class="card-text">
                {{product.descr}}
                
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated  {{new Date(Date.now()).toLocaleString()}}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>



<script>
export default {

    data() {
        return {
            product: null,
        }
    },

    created () {
        // console.log(this.$route.params.id)
        let id = this.$route.params.id;
        let product = this.$store.getters.getProduct(id);
        this.product = product;
        // console.log(product);
    }
};
</script>

<style lang="scss">
    .slide-block {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
    }
</style>