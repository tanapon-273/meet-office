<template>
    <div class="sidebar">
        <SidebarNav :item="admin" class="sidebae-nav"/>
        <SidebarNav :item="user" class="sidebae-nav"/>
        <SidebarNav :item="setting" class="sidebae-nav"/>
        
    </div>
</template>

<script>
import SidebarNav from './SidebarNav'
export default {
    data() {
        return {
            admin: {
                header: "<i class='fa fa-unlock'></i> ส่วนของผู้ดูแลระบบ",
                navs: [
                    { name: "ข้อมูลการจองห้องประชุม"},
                    { name: "ข้อมูลอุปกรณ์ห้องประชุม", link: { name: "equipment-list" } },
                    { name: "ข้อมูลห้องประชุม"}
                ]
            },
            user: {
                header: "<i class='fa fa-user'></i> ส่วนของผู้ใช้งาน",
                navs: [
                    { name: "การจองห้องประชุม"},
                    { name: "แก้ไขข้อมูลส่วนตัว"},
                    { name: "เปลี่ยนรหัสผ่าน"}
                ]
            },
            setting: {
                header: "<i class='fa fa-cog'></i> ตั้งค่าอื่นๆ",
                navs: [
                    { name: "ตั้งค่าข้อมูลส่วนตัว"},
                    { name: "ตั้งค่าการแจ้งเตือน"},
                    { name: "อัพเกรดบัญชี"}
                ]
            }
        }
    },
    components: {
        SidebarNav
    }
}
</script>

<style scoped>
.sidebae-nav{
    margin-bottom: 30px;
}
</style>
