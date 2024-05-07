<template>
    <div>
        indexDB
        <el-button type="primary" @click="handleAddIndexDB">添加</el-button>

    </div>
</template>
<script>
import  { addDb }  from "../../libs/indexDB";

export default {
    data() {
        return {

        }
    },
    methods: {
        handleAddIndexDB() {
            addDb({userName: '测试'})
        }
    }
};
</script>
<style scoped>

</style>

