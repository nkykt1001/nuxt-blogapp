<script setup>
const config = useRuntimeConfig()
const { data: articles, error } = await useLazyFetch('/blogs', {
  baseURL: config.apiURL,
  headers: {
    'X-MICROCMS-API-KEY': config.apiKey,
  },
  initialCache: false,
})
if (error.value) throw error.value
</script>

<template>
  <ArticleList :articles="articles.contents" />
</template>
