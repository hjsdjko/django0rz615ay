const base = {
    get() {
        return {
            url : "http://localhost:8080/django0rz615ay/",
            name: "django0rz615ay",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Hadoop 的国产电影数据分析与可视化"
        } 
    }
}
export default base
