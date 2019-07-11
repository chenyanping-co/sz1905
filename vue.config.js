const path = require('path');

module.exports ={
    devServer:{
        open:true,
        proxy:{
            "/v1":{
                target:"https://short-msg-ms.juejin.im",
                changOrigin:true,
            },
            "/v2":{
                target:"https://event-storage-api-ms.juejin.im",
                changOrigin:true,
            },
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
            "@":path.resolve(__dirname,"./src/"),
            "api":path.resolve(__dirname,"./src/api/"),
            "components":path.resolve(__dirname,"./src/components/"),
            "router":path.resolve(__dirname,"./src/router/"),
            "store":path.resolve(__dirname,"./src/store/"),
            "utils":path.resolve(__dirname,"./src/utils/"),
            "views":path.resolve(__dirname,"./src/views/"),
            "common":path.resolve(__dirname,"./src/common/"),
            }
        }
    }
}