<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-xl-3" v-for="(item, index) in shopList" :key="index">
          <div class="card">
            <h5 class="card-header">{{item.title}}</h5>
            <div class="card-body">
              <img :src="item.img" width="100%"  alt="">
              <p class="card-text">
               {{item.descr}}
              </p>
              <router-link :to="/shop/+item.id" ><button type="button" class="btn btn-primary">More product</button></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        shopList: {
            type: Array,
            required: true,
        }
    }
};
</script>

<style lang="scss">
</style>