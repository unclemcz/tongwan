<script setup>
import { ref } from 'vue'
import axios from 'axios'


let nianji = ref('选择年级')
let shi = ref([])
let shi_title = ref('')
let shilist = ref([])
//新增诗文时，/public/data/目录下新增对应json文件，再把文件名补充到njlist。
let njlist = ['小学一年级上册','小学一年级下册','小学二年级上册','小学二年级下册','小学三年级上册','小学三年级下册',
              '小学四年级上册','小学四年级下册','小学五年级上册','小学五年级下册','小学六年级上册','小学六年级下册']


function nj_change(e) {
  let nianji =  e.target.value
  console.log(nianji);
  if(njlist.includes(nianji)){
    get_data(nianji)
    shi.value=[]
    shi_title.value=''
  }else{
    console.log('未命中年级');
  }
}

function shi_change(e) {
  shi.value = shilist.value[e.target.value]
  console.log(shi)
}

function get_data(filename) {
  axios.get('./data/shi/'+filename+'.json').then(
    (data)=>{
      shilist.value = data.data
      console.log(data.data)
    }
  )
}

</script>

<template>
  <div><p></p></div>
  <div class="container">
    <div class="row">
      <div class="col">
        <select v-model="nianji" @change="nj_change($event)" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option selected>选择年级</option>
          <option v-for="nianji in njlist" :value="nianji">{{nianji}}</option>
        </select>
      </div>
      <div class="col">
        <select v-model="shi_title" @change="shi_change($event)" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option v-for="(shi,index) in shilist" :key="index" :value="index">《{{shi.title}}》{{shi.author}}</option>
        </select>
      </div>
    </div>
    <div v-if="shi!=''" class="content">
      <h1>《{{shi.title}}》&ensp;</h1>
      <h2>{{shi.dynasty}}·{{shi.author}}&emsp;</h2>
      <p v-for="content in shi.paragraphs">{{content}}</p>
    </div>
  </div>
</template>
 
<style>
.content {
  /* align-items: center; */
  /* margin-top: 0px; */
  text-align:center;
  /* flex-wrap: wrap; */
  /* align-content: flex-start; */
  /* flex-direction: column; */
  /* justify-content: flex-start; */
  font-size:3rem;
  /* line-height: 20vh; */
}

</style>
