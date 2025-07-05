document.addEventListener('DOMContentLoaded', function() {
    const gpczxs = document.getElementById('gpczxs');
    
    // 清空原有内容
    gpczxs.innerHTML = '';
    
    // 添加"搜索:"文本
    gpczxs.appendChild(document.createTextNode('搜索:'));
    
    // 创建超链接元素
    const link = document.createElement('a');
    link.href = 'https://cn.bing.com/search?q=%E7%BD%91%E4%B8%8A%E7%94%A8%E6%88%B7'; // 替换为实际链接
    link.target = '_blank';
    link.textContent = '网上用户';
    link.className = 'text-primary hover:underline ml-1'; // 添加样式
    
    // 添加链接到容器
    gpczxs.appendChild(link);
});