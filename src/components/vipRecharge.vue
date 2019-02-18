<template>
  <el-tabs>
    <el-tab-pane label="会员充值">
      <el-container>
        <el-aside>
          <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%"
            max-height="450"
            size="mini"
            highlight-current-row
          >
            <el-table-column>
              <template slot="header" slot-scope="scope">
                <el-input v-model="search" size="small" placeholder="输入关键字搜索">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </template>
              <template slot-scope="scope">
                <div class="viplist-container">
                  <i class="vip-header iconfont icon-shuju"></i>
                  <div class="viplist">
                    <div class="viplist-item">
                      <div>{{scope.row.name}}</div>
                      <el-tag size="mini">{{scope.row.tag}}</el-tag>
                    </div>
                    <div class="viplist-item">
                      <div>储值:{{scope.row.money}}</div>
                      <div>{{scope.row.tel}}</div>
                    </div>
                  </div>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-aside>
        <el-main>
          <el-container>
            <el-header></el-header>
            <el-main></el-main>
          </el-container>
        </el-main>
      </el-container>
    </el-tab-pane>
  </el-tabs>
</template>
<style scoped>
.el-header {
  background: white;
}
.el-aside {
  background: white;
}

.viplist-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.vip-header {
  width: 60px;
  height: 60px;
  border: 1px solid #eee;
  border-radius: 50%;
}
.viplist {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 20px;
}
.viplist .viplist-item {
  display: flex;
  justify-content: space-between;
}
</style>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          tag: "家",
          name: "张三",
          money: 12.5,
          tel: 12345678910
        },
        {
          tag: "家",
          name: "张三",
          money: 12.5,
          tel: 12345678910
        },
        {
          tag: "公司",
          name: "李四",
          money: 12.5,
          tel: 12345678910
        },
        {
          tag: "家",
          name: "张三",
          money: 12.5,
          tel: 12345678910
        },
        {
          tag: "公司",
          name: "李四",
          money: 12.5,
          tel: 12345678910
        }
      ],
      search: ""
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

