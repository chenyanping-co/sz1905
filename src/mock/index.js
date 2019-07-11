const Mock = require("mockjs");


const backend = Mock.mock({
    "code":200,
    "errMsg":"",
    "data|50":[{
        "id|+1":1,
        "author":"@name()",
        "title":"@ctitle(10,20)",
        "likeCount|1-100":1,
        "comment|1-100":1,
        "time|1-10":1,
        "topic|1":["专栏"],
        "category|1":["Java","Spring Boot","Python","Go","MySQL","Spring","Redis","Elasticsearch","分布式"]
    }]
});


const frontend = Mock.mock({
    "code":200,
    "errMsg":"",
    "data|50":[{
        "id|+1":1,
        "author":"@name()",
        "title":"@ctitle(10,20)",
        "likeCount|1-100":1,
        "comment|1-100":1,
        "time|1-10":1,
        "topic|1":["专栏"],
        "category|1":["Java","Spring Boot","Python","Go","MySQL","Spring","Redis","Elasticsearch","分布式"]
    }]
});

const recommend = Mock.mock({
    "code":200,
    "errMsg":"",
    "data|50":[{
        "id|+1":1,
        "author":"@name()",
        "title":"@ctitle(10,20)",
        "likeCount|1-100":1,
        "comment|1-100":1,
        "time|1-10":1,
        "topic|1":["专栏"],
        "category|1":["Git","Visual Studio Code","Jenkins","Linux","NPM","Python","GitHub","Spark","开源"]
    }]
});

const android = Mock.mock({
    "code":200,
    "errMsg":"",
    "data|50":[{
        "id|+1":1,
        "author":"@name()",
        "title":"@ctitle(10,20)",
        "likeCount|1-100":1,
        "comment|1-100":1,
        "time|1-10":1,
        "topic|1":["专栏"],
        "category|1":["Java","Spring Boot","Python","Go","MySQL","Spring","Redis","Elasticsearch","分布式"]
    }]
});

const ios = Mock.mock({
    "code":200,
    "errMsg":"",
    "data|50":[{
        "id|+1":1,
        "author":"@name()",
        "title":"@ctitle(10,20)",
        "likeCount|1-100":1,
        "comment|1-100":1,
        "time|1-10":1,
        "topic|1":["专栏"],
        "category|1":["Java","Spring Boot","Python","Go","MySQL","Spring","Redis","Elasticsearch","分布式"]
    }]
});

const ai = Mock.mock({
    "code":200,
    "errMsg":"",
    "data|50":[{
        "id|+1":1,
        "author":"@name()",
        "title":"@ctitle(10,20)",
        "likeCount|1-100":1,
        "comment|1-100":1,
        "time|1-10":1,
        "topic|1":["专栏"],
        "category|1":["Java","Spring Boot","Python","Go","MySQL","Spring","Redis","Elasticsearch","分布式"]
    }]
});

const freebie = Mock.mock({
    "code":200,
    "errMsg":"",
    "data|50":[{
        "id|+1":1,
        "author":"@name()",
        "title":"@ctitle(10,20)",
        "likeCount|1-100":1,
        "comment|1-100":1,
        "time|1-10":1,
        "topic|1":["专栏"],
        "category|1":["Java","Spring Boot","Python","Go","MySQL","Spring","Redis","Elasticsearch","分布式"]
    }]
});

const career = Mock.mock({
    "code":200,
    "errMsg":"",
    "data|50":[{
        "id|+1":1,
        "author":"@name()",
        "title":"@ctitle(10,20)",
        "likeCount|1-100":1,
        "comment|1-100":1,
        "time|1-10":1,
        "topic|1":["专栏"],
        "category|1":["Java","Spring Boot","Python","Go","MySQL","Spring","Redis","Elasticsearch","分布式"]
    }]
});

const article = Mock.mock({
    "code":200,
    "errMsg":"",
    "data|50":[{
        "id|+1":1,
        "author":"@name()",
        "title":"@ctitle(10,20)",
        "likeCount|1-100":1,
        "comment|1-100":1,
        "time|1-10":1,
        "topic|1":["专栏"],
        "category|1":["Java","Spring Boot","Python","Go","MySQL","Spring","Redis","Elasticsearch","分布式"]
    }]
});




Mock.mock(/\/welcome\/recommended/,'get',(options)=>{
   
    return recommend;
})

Mock.mock(/\/welcome\/backend/,'get',(options)=>{
   
    return backend;
})

Mock.mock(/\/welcome\/frontend/,'get',(options)=>{
   
    return frontend;
})
Mock.mock(/\/welcome\/android/,'get',(options)=>{
   
    return android;
})
Mock.mock(/\/welcome\/ios/,'get',(options)=>{
   
    return ios;
})
Mock.mock(/\/welcome\/ai/,'get',(options)=>{
   
    return ai;
})
Mock.mock(/\/welcome\/freebie/,'get',(options)=>{
   
    return freebie;
})
Mock.mock(/\/welcome\/career/,'get',(options)=>{
   
    return career;
})
Mock.mock(/\/welcome\/article/,'get',(options)=>{
   
    return article;
})