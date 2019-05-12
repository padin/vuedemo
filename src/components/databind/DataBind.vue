<template>
    <div>
        {{msg}}
        <hr />
        {{obj.name}}
        <hr />
        <ul>
            <li v-for="i in list">{{i}}</li>
        </ul>
        <hr />
        <ul>
            <li v-for="i in list1">{{i.title}}</li>
        </ul>
        <hr />
        <ul>
            <li v-for="i in list2">{{i.cate}}
                <ul>
                    <li v-for="s in i.list">
                        {{s.title}}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:"databind",
            obj:{
                name:'张三'
            },
            list:['111','222','333'],
            list1:[
                {title:"111"},
                {title:"222"},
                {title:"333"},
                {title:"444"}
            ],
            list2:[
                {
                    cate:"国内新闻",
                    list:[
                        {title:"国内新闻111"},
                        {title:"国内新闻111"}
                    ]
                },{
                    cate:"国际新闻",
                    list:[
                        {title:"国际新闻111"},
                        {title:"国际新闻222"}
                    ]
                }

            ]
        }
    }
}
</script>

