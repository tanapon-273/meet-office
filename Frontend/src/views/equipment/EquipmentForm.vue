<template>
  <layout>
    <div slot="buttons" class="form-group">
      <router-link class="btn" :to="{ name: 'equipment-list'}">รายการข้อมูล</router-link>
      <router-link class="btn" :to="{ name: 'equipment-form'}">เพิ่มข้อมูลใหม่</router-link>
    </div>
    <div class="card">
      <div class="card-body">
        <header>
          <h5><i class="fa fa-edit"></i> เพิ่ม / แก้ไขข้อมูลห้องประชุม</h5>
        </header>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from '@/components/Layout'
export default {
    components: {
        Layout
    }
}
</script>

<style scoped>
.btn{
    color: #ffffff;
    background-color: #ced4da;
    margin-right: 7px;
    min-width: 130px;
}
.btn.router-link-exact-active{
    background-color: #17a2b8;
}

</style>
