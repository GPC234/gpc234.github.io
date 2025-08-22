// 修改页面中第一个p标签的内容
document.addEventListener('DOMContentLoaded', function() {
    // 等待DOM加载完成后再执行操作
    const paragraph = document.querySelector('p');
    if (paragraph) {
        paragraph.textContent = "网上用户的微信:mdczdL";
    }
});
