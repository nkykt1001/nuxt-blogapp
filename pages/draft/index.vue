<script setup>
const config = useRuntimeConfig()
const route = useRoute()
const query = route.query
const { data: draft, error } = await useLazyFetch(
  `${config.apiURL}/blogs/${query.id}?draftKey=${query.draftKey}`,
  {
    headers: {
      "X-MICROCMS-API-KEY": config.apiKey,
    },
    params: { depth: 3 },
  }
)
if (error.value) throw error.value
</script>

<template>
  <ArticleBody :article="draft" />
</template>
