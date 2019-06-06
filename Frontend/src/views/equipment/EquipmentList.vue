<template>
    <layout>
        <div slot="buttons" class="form-group">
            <router-link class="btn" :to="{ name: 'equipment-list'}">รายการข้อมูล</router-link>
            <router-link class="btn" :to="{ name: 'equipment-form'}">เพิ่มข้อมูลใหม่</router-link>
        </div>
        <div class="card">
            <div class="card-body">
                <header class="mb-4">
                    <Search  :types="search_types" @onSearch="onSearch($event)" />
                    <h5><i class="fa fa-list-alt"></i> รายการข้อมูลอุปกรณ์ห้องประชุม</h5>
                </header>

                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ชื่ออุปกรณ์ห้องประชุม</th>
                            <th>รายละเอียด</th>
                            <th>วันที่แก้ไขล่าสุด</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in equipments.result" :key="item.eq_id">
                            <td>
                                <div class="img-container">
                                    <img :src="`/api/uploads/${item.eq_image}`" :alt="item.eq_name">
                                </div>
                            </td>
                            <td>{{ item.eq_name }}</td>
                            <td>{{ item.eq_detail || 'ไม่มีข้อมูล' }}</td>
                            <td>{{ item.eq_updated }}</td>
                            <td class="text-right">
                                <i class="pointer fa fa-edit text-info mr-3"></i>
                                <i class="pointer fa fa-trash text-danger"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Pageination :data="equipments" :page="page"  @onPage="onPage($event)"/>
            </div>
        </div>
    </layout>
</template>


<script>
import Layout from '@/components/Layout'
import Pageination from '@/components/Pageination'
import Search from '@/components/Search'
import { mapState } from "vuex"
export default {
    data(){
        return {
            search: {},
            page: 1,
            search_types: [{
                name: "ชื่ออุปกรณ์ห้องประชุม",
                value: "eq_name"
            },
            {
                name: "รายละเอียด",
                value: "eq_detail"
            }]
        }
    },
    computed: {
        ...mapState(["equipments"])
    },
    components: {
        Layout,
        Pageination,
        Search
    },
    created() {
        this.$store.dispatch("set_equipments")
    },
    methods: {
        // การแบ่งหน้า Pageination
        onPage(page) {
            this.page = page
            this.$store.dispatch("set_equipments",{page:this.page, ...this.search})
        },
        // การค้นหาข้อมูล Filter
        onSearch(search) {
            this.search = search
            this.page = 1
            this.$store.dispatch("set_equipments",{page:1, ...this.search})
        }
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
.btn.router-link-active{
    background-color: #17a2b8;
}


</style>

