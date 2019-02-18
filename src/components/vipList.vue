<template id="list">
  <el-container>
    <el-header>
      <el-row type="flex">
        <el-col :span="3"><el-button type="primary" icon="el-icon-plus" size="mini">新增会员</el-button></el-col>
        <el-col :span="2">
          <el-dropdown>
            <el-button type="text">
                挂失
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>挂失</el-dropdown-item>
              <el-dropdown-item>取消挂失</el-dropdown-item>
              <el-dropdown-item>补卡</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :span="2">
          <el-button type="text" icon="el-icon-upload2">导入会员</el-button>
        </el-col>
        <el-col :span="2">
          <el-button type="text" icon="el-icon-download">导出会员</el-button>
        </el-col>
        <el-col :span="2">
          <el-button type="text">
            <i class="iconfont icon-shaixuan el-icon--left"></i>刷选
          </el-button>
        </el-col>
        <el-col :span="7" :offset="6">
          <el-input placeholder="请输入搜索内容" prefix-icon="el-icon-search" v-model="input21">
            <el-button slot="append">搜索</el-button>
          </el-input>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="date" label="日期" width="120"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="province" label="省份" width="120"></el-table-column>
        <el-table-column prop="city" label="市区" width="120"></el-table-column>
        <el-table-column prop="address" label="地址" width="300"></el-table-column>
        <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </el-footer>
  </el-container>
</template>
  <script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    },
    handleSelectionChange(val) {
      console.log(val);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },

  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],
      currentPage: 4,
      input21: ""
    };
  }
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #fff;
  color: #000;
  text-align: center;
  line-height: 60px;
}
.el-header {
  border-bottom: 1px solid #eee;
}

/* .header{
        background-color: #fff;
        color: #000;
        text-align: center;
        line-height: 60px;
        display: flex;
        font-size: 14px;
        border-bottom: 1px solid #eee;
    }
    .header-item{
        width: 100px;
    } */
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
