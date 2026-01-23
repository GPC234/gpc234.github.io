// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取当前页面的文件名
    const currentUrl = window.location.pathname;
    const fileName = currentUrl.split('/').pop() || '';
    
    // 提取文件名中的前缀部分（字母部分）
    const match = fileName.match(/^([a-zA-Z]*)\d+\.html$/);
    
    if (match) {
        const prefix = match[1]; // 前缀部分，如"tu"、"ym"、"ys"或空
        const linkContainer = document.getElementById('linkContainer');
        
        // 生成从1到23的链接（固定范围）
        for (let i = 1; i <= 23; i++) {
            const a = document.createElement('a');
            a.href = `./${prefix}${i}.html`;
            a.target = '_blank';
            a.textContent = i;
            a.className = 'link-number';
            
            // 添加链接到容器
            linkContainer.appendChild(a);
            
            // 除了最后一个链接外，都添加空格分隔
            if (i < 23) {
                const space = document.createTextNode(' ');
                linkContainer.appendChild(space);
            }
        }
    } else {
        // 如果文件名格式不符合预期，显示错误信息
        document.getElementById('linkContainer').innerHTML = 
            '<p class="text-red-500">文件名格式不符合要求，请检查文件名</p>';
    }
});
