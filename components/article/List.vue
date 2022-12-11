<script setup>
const prop = defineProps({
  articles: Array
})
</script>

<template>
  <ul>
    <li
      v-for="article in prop.articles"
      :key="article.id"
      class="mb-5"
      style="list-style: none;"
      >
      <v-card>
        <v-card-title v-if="article.title">
          {{ article.title }}
        </v-card-title>
        <v-card-subtitle v-if="(article.authorName.lengh !== 0)">
          {{ article.authorName[0] }}
        </v-card-subtitle>
        <v-card-subtitle>
          {{ article.publishedAt }}
        </v-card-subtitle>
        <v-card-text v-if="(article.is_migrate && article.content_migrate)">
          {{ article.content_migrate.slice(0, 100) }}...
        </v-card-text>
        <v-card-text v-if="(!article.is_migrate && article.content)">
          {{ article.content.slice(0, 100) }}...
        </v-card-text>
        <v-card-actions>
          <v-btn
            :to="`/article/${article.id}`"
            class="text-primary"
            flat
            nuxt
          >
          詳細を見る
          </v-btn>
        </v-card-actions>
      </v-card>
    </li>
  </ul>  
</template>
