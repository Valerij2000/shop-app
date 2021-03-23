<template>
    <div>
        <section class="main-section">
            <main>

  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Album Shop</h1>
        <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
        <p>
          <button type="button" class="btn btn-primary my-2">Change Message</button>
          <a href="#" class="btn btn-secondary my-2">Secondary action</a>
        </p>
      </div>
    </div>
  </section>

 <ShopItem :shopList="shopList"/>

</main>
        </section>
    </div>
</template>


<script>

import ShopItem from '@/components/ShopItem.vue'

export default {

  components: {
    ShopItem
  },

  data() {
    return {
      shopList: null,
    }
  },

  created () {
      this.shopList = this.$store.getters.getShopList;
  },


}

</script>