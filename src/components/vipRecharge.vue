<template>
  <el-tabs>
    <el-tab-pane label="会员充值">
      <el-container>
        <el-aside width="270px">
          <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%"
            size="mini"
            highlight-current-row
            max-height=450
          >
            <el-table-column>
              <template slot="header" slot-scope="scope">
                <el-input v-model="search" size="small" placeholder="输入关键字搜索">
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </template>
              <template slot-scope="scope">
                <div class="viplist-container">
                  <div class="vip-header">
                    <img src="../assets/images/user_def.png" width="45px">
                  </div>

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
            <el-header height="70px">
              <el-row type="flex" justify="center" class="user-info">
                <el-col :span="6">
                  <el-row type="flex">
                    <el-col :span="4" class="user-img">
                      <img src="../assets/images/user_def.png">
                    </el-col>
                    <el-col :span="20">
                      <el-row>名称</el-row>
                      <el-row>0000001</el-row>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="18">
                  <el-row type="flex" justify="start">
                    <el-col>会员等级</el-col>
                    <el-col>会员生日</el-col>
                    <el-col>会员余额</el-col>
                  </el-row>
                  <el-row type="flex" justify="start">
                    <el-col>会员欠款</el-col>
                    <el-col>累计消费</el-col>
                    <el-col>目前积分</el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-header>
            <el-main>
              <el-form ref="form" :model="form" label-width="100px" size="mini" label-position="right">
                <el-form-item label="选择类型">
                  <el-radio-group v-model="form.resource">
                    <el-radio label="recharge">充值</el-radio>
                    <el-radio label="deduction">扣费</el-radio>
                    <el-radio label="payback">退还</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="扣费金额">
                  <el-col :span="11">
                    <el-input v-model="form.money"></el-input>
                  </el-col>
                </el-form-item>

                <el-form-item label="选择类型">
                  <el-col :span="12">
                    <el-radio-group v-model="form.paytype">
                      <el-radio-button label="money">现金</el-radio-button>
                      <el-radio-button label="card">银行卡</el-radio-button>
                      <el-radio-button label="wechat">微信</el-radio-button>
                      <el-radio-button label="alipay">支付宝</el-radio-button>
                    </el-radio-group>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="充值员工">
                      <el-select v-model="form.emp" placeholder="选择员工">
                        <el-option label="张三" value="zhangsan"></el-option>
                        <el-option label="李四" value="lisi"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-form-item>

                <el-form-item label="备注信息">
                  <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                
                <el-form-item label="打印充值小票">
                  
                  <el-col :span="8"><el-switch v-model="form.print"></el-switch></el-col>
                  <el-col :span="8">充值合计：100</el-col>
                  <el-col :span="8"><el-button type="primary" @click="onSubmit">确定</el-button></el-col>
                </el-form-item>
              
              </el-form>
            </el-main>
          </el-container>
        </el-main>
      </el-container>
    </el-tab-pane>
  </el-tabs>
</template>
<style scoped>
.el-aside {
  background: white;
}
.el-header {
  background-color: white;
  color: #606266;
  font-size: 14px;
}
.el-header .el-row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-header .user-img {
  display: flex;
  justify-content: center;
  align-items: center;
}

.viplist-container {
  display: flex;
  justify-content: center;
  align-items: center;
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
.user-info .el-row {
  height: 40px;
}
</style>
<script>
export default {
  data() {
    return {
      form: {
        money: "",
        paytype: "money",
        emp:"",
        print: false,
        resource: "payback",
        desc: ""
      },
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
        },
        {
          tag: "公司",
          name: "李四",
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
    },
    onSubmit() {
      
        console.log(this.form);
      }
  }
};
</script>

