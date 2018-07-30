<template>
  <div>
    <br/>
    <Form :model="formLand" :label-width="80">
      <Row>
        <Col span="10" offset='5'>
          <FormItem label="手机号：">
              <Input v-model="formLand.mobile" placeholder="请输入手机号" clearable style="width: 200px"></Input>
          </FormItem>  
        </Col>  
      </Row>
      <Row>
        <Col span="20" offset='2'>
          <FormItem>
            <Row>
              <Col span="18" push="6">
                <Button type="primary" @click="code">获取验证码</Button>
              </Col>
              <Col span="6" pull="18">
                <Input v-model="formLand.code" placeholder="请输入验证码"  clearable style="width:150px"></Input>
              </Col>
            </Row>
          </FormItem>
        </Col>  
      </Row>    
      <Row>
        <Col span="18" offset='2'>    
          <FormItem>
            <Button type="primary">登录/注册</Button>
          </FormItem> 
        </Col>  
      </Row>  
    </Form>
  </div>
</template>
<script>
export default {
  data(){
    return{
      formLand:{
        mobile:'',
        code:'',
      }
    }
  },
  methods: {
      code(){
        // this.$axios.get(process.env.API_HOST+'getSMS',{
        this.$axios.post(process.env.API_HOST+'getSMS',{
          mobile:this.mobile
        })
        .then(function(vercode){
          console.log(vercode.data);
          // console.log(vercode.data.data.msg);
          // console.log(vercode.data[0].msg)  
        })
        .catch(function(vercode){
          console.log(vercode.data.msg)
       })
      }
    }
}
</script>
<style>

</style>


// this.$axios.get('/static/test.json',{
//          guestname:this.username,
//          guestsex:this.sex
//        })
//        .then(function(json){
//          console.log(json);
//          alert(json.data.code);
//          alert('成功');
//        })
//        .catch(function(json){
//         alert('失败');
//        })
//        } 

