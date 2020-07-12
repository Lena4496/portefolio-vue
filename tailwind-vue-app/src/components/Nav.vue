<template>
  <div class="ui" id="js-ui">
    <nav class="scene_nav">
      <ol class="scene_nav_list">
        <li class="scne_nav_item" (v-for="(params, index) in maxScene" )>
          <button
            class="scene_nav_button"
            (@click="(scene = index)"
            ,:class="{ 'o-active': scene === index}"
            )
          ></button>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>
