<script setup>
const props = defineProps({
  article: Object,
})
</script>

<template>
  <v-card>
    <v-card-title v-if="article.title">
      {{ article.title }}
    </v-card-title>
    <v-card-subtitle v-if="article.authorName.lengh !== 0">
      {{ article.authorName[0] }}
    </v-card-subtitle>
    <v-card-subtitle v-if="article.publishedAt">
      {{ article.publishedAt }}
    </v-card-subtitle>
    <v-card-subtitle v-else>
      {{ article.createdAt }}
    </v-card-subtitle>
    <v-card-text v-if="article.is_migrate && article.content_migrate">
      {{ article.content_migrate }}
    </v-card-text>
    <v-card-text v-if="!article.is_migrate && article.content">
      {{ article.content }}
    </v-card-text>
    <v-card-actions>
      <v-btn to="/" class="text-primary" flat nuxt>一覧に戻る</v-btn>
    </v-card-actions>
  </v-card>
</template>
