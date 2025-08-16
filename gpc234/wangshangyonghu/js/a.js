document.addEventListener('DOMContentLoaded', function() {
    const gpczxs = document.getElementById('gpczxs');
    
    // 清空原有内容
    gpczxs.innerHTML = '';
    
    // 添加开头竖线
    const startSeparator = document.createElement('span');
    startSeparator.textContent = '丨';
    startSeparator.className = 'text-gray-500';
    gpczxs.appendChild(startSeparator);
    
    // 创建第一个链接
    const link1 = document.createElement('a');
    link1.href = '../js/jsa1.html';
    link1.target = '_blank';
    link1.textContent = '@网上用户';
    // 明确设置灰色字体，无下划线
    link1.className = 'text-gray-500 hover:text-gray-700 ml-1';
    link1.style.textDecoration = 'none';
    
    // 链接1后的竖线
    const separator1 = document.createElement('span');
    separator1.textContent = '丨';
    separator1.className = 'text-gray-400 mx-2';
    
    // 创建第二个链接
    const link2 = document.createElement('a');
    link2.href = '../js/jsa2.html';
    link2.target = '_blank';
    link2.textContent = 'gpc234';
    // 明确设置灰色字体，无下划线
    link2.className = 'text-gray-500 hover:text-gray-700';
    link2.style.textDecoration = 'none';
    
    // 链接2后的竖线
    const separator2 = document.createElement('span');
    separator2.textContent = '丨';
    separator2.className = 'text-gray-400 mx-2';
    
    // 创建返回顶部链接
    const backToTop = document.createElement('a');
    backToTop.href = '#top';
    backToTop.target = '_self';
    backToTop.textContent = '返回顶部';
    // 保持相同样式：灰色字体，无下划线
    backToTop.className = 'text-gray-500 hover:text-gray-700';
    backToTop.style.textDecoration = 'none';
    
    // 返回顶部后的竖线
    const separator3 = document.createElement('span');
    separator3.textContent = '丨';
    separator3.className = 'text-gray-400 ml-2';
    
    // 添加元素到容器
    gpczxs.appendChild(link1);
    gpczxs.appendChild(separator1);
    gpczxs.appendChild(link2);
    gpczxs.appendChild(separator2);
    gpczxs.appendChild(backToTop);
    gpczxs.appendChild(separator3);
});
    