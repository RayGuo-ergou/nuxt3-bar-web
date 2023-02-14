<script setup lang="ts">
import editor from '../node_modules/mavon-editor/src/mavon-editor.vue'
const supabase = useSupabaseClient()

const imageAdd = async (pos: number, file: File) => {
  const formData = new FormData()
  formData.append('image', file)
  console.log(formData)
  const { data, error } = await supabase.storage
    .from('images')
    .upload(file.name, formData)
  // const { data, error } = await supabase.storage.createBucket('images1')

  // const user = useSupabaseUser()
  // console.log(user)
  // const data1 = await supabase.auth.getUser()
  // console.log(data1)
  console.log(data)
  console.log(error)
}
const test = () => {
  textEditor.value?.$img2Url('1', 'https://www.baidu.com/img/bd_logo1.png')
}
const markdownOption = ref({
  bold: true,
  italic: true,
  header: true,
  underline: true,
  strikethrough: true,
  mark: true,
  superscript: true,
  subscript: true,
  quote: true,
  ol: true,
  ul: true,
  link: true,
  imagelink: true,
  code: true,
  table: true,
  fullscreen: true,
  readmodel: true,
  htmlcode: true,
  help: true,
  /* 1.3.5 */
  undo: true,
  redo: true,
  trash: true,
  save: true,
  /* 1.4.2 */
  navigation: true,
  /* 2.1.8 */
  alignleft: true,
  aligncenter: true,
  alignright: true,
  /* 2.2.1 */
  subfield: true,
  preview: true,
})

const handbook = ref('#### how to use mavonEditor in nuxt.js')

const textEditor = ref<InstanceType<typeof editor> | null>(null)
</script>
<template>
  <div class="mavonEditor">
    <ClientOnly>
      <mavon-editor
        ref="textEditor"
        v-model="handbook"
        :toolbars="markdownOption"
        :language="'en'"
        @img-add="imageAdd"
      />
    </ClientOnly>
    <div>{{ handbook }}</div>
    <button @click="test">111</button>
    <br />
  </div>
</template>

<style scoped>
.mavonEditor {
  width: 100%;
  height: 100%;
}
</style>
