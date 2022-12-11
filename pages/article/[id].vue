<script setup>
const config = useRuntimeConfig()
const route = useRoute()
const id = route.params.id
const { data: article, error } = await useLazyFetch(`/blogs/${id}`, {
  baseURL: config.apiURL,
  headers: {
    'X-MICROCMS-API-KEY': config.apiKey,
  },
  initialCache: false,
})
if (error.value) throw error.value
</script>

<template>
  <ArticleBody :article="article" />
</template>