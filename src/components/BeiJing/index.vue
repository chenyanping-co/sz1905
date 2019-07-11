<template>
    <Events :eventObj="dataList"/>
</template>


<script>
import Events from "common/events";
import http from "utils/http";
export default {
    name:"Beijing",
    components:{
        Events
    },
    data(){
      return{
          dataList:[],
      }  
    },
    created(){
        http('get','/v2/getEventList?uid=&client_id=&token=&src=web&orderType=startTime&cityAlias=beijing&pageNum=2&pageSize=20')
        .then((data)=>{
            data.d.map((item)=>{
            let date = new Date(item.startTime).toLocaleDateString().split('/');
            if(date[1]<10){
                date[1] = 0 + date[1];
            }
            if(date[2]<10){
                date[2] = 0 + date[2];
            }
            let year = date[0];
            let month = date[1];
            let day = date[2];
            let date2 = '日一二三四五六'.charAt(new Date(year+'/'+month+'/'+day).getDay());
            item.startTime = (month+"-"+day+' '+'周'+ date2);
          })
            this.dataList = data.d;
        })
    }
}
</script>

<style>

</style>

