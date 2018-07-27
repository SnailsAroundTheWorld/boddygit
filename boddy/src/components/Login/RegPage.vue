<template>
  <div>
    <br>
    <Form :model="formReg" :label-width="80">
      <Row>
        <Col span="10" offset='5'>
          <FormItem label="用户名：">
              <Input v-model="formReg.user" placeholder="请输入用户名" clearable style="width: 200px"></Input>
          </FormItem>  
        </Col>  
      </Row>
      <Row>
        <Col span="10" offset='5'>
          <FormItem label="密码：">
              <Input v-model="formReg.pw" placeholder="请输入密码" clearable style="width: 200px"></Input>
          </FormItem>
        </Col>  
      </Row>    
      <Row>
        <Col span="10" offset='5'>     
          <FormItem label="确认密码：">
              <Input v-model="formReg.pwagain" placeholder="请再输入一次密码" clearable style="width: 200px"></Input>
          </FormItem>  
        </Col>  
      </Row>
      <Row>
        <Col span="18" offset='2'>    
          <FormItem>
            <Button type="primary">注册</Button>
            <Button type="ghost" style="margin-left: 8px">重置</Button>
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
      formReg:{
        user:'',
        pw:'',
        pwagain:''
      }
    }
  }
}
</script>
<style>

</style>

