document.addEventListener('DOMContentLoaded', function() {
    const gpczxstua = document.getElementById('gpczxstua');
    
    // 清空原有内容
    gpczxstua.innerHTML = '';
    
    // 添加开头竖线
    const startSeparator = document.createElement('span');
    startSeparator.textContent = '丨';
    startSeparator.className = 'text-gray-500';
    startSeparator.style.fontSize = '12px';
    startSeparator.style.color = '#888888'; // 统一灰色
    gpczxstua.appendChild(startSeparator);
    
    // 创建第一个链接
    const link1 = document.createElement('a');
    link1.href = '/gpc234/wangshangyonghu/js/jsa1.html';
    link1.target = '_blank';
    link1.textContent = '@网上用户';
    link1.className = 'hover:text-gray-700 ml-1'; // 移除原有颜色类
    link1.style.textDecoration = 'none';
    link1.style.fontSize = '12px';
    link1.style.color = '#888888'; // 统一灰色
    link1.style.transition = 'color 0.2s'; //  hover效果过渡
    
    // 链接1后的竖线
    const separator1 = document.createElement('span');
    separator1.textContent = '丨';
    separator1.className = 'mx-2'; // 移除原有颜色类
    separator1.style.fontSize = '12px';
    separator1.style.color = '#888888'; // 统一灰色
    gpczxstua.appendChild(separator1);
    
    // 创建第二个链接
    const link2 = document.createElement('a');
    link2.href = '/gpc234/wangshangyonghu/js/jsa2.html';
    link2.target = '_blank';
    link2.textContent = 'gpc234';
    link2.className = 'hover:text-gray-700'; // 移除原有颜色类
    link2.style.textDecoration = 'none';
    link2.style.fontSize = '12px';
    link2.style.color = '#888888'; // 统一灰色
    link2.style.transition = 'color 0.2s';
    
    // 链接2后的竖线
    const separator2 = document.createElement('span');
    separator2.textContent = '丨';
    separator2.className = 'mx-2'; // 移除原有颜色类
    separator2.style.fontSize = '12px';
    separator2.style.color = '#888888'; // 统一灰色
    
    // 创建第三个链接
    const link3 = document.createElement('a');
    link3.href = '/gpc234/wangshangyonghu/js/jsa3.html';
    link3.target = '_blank';
    link3.textContent = '联系我们';
    link3.className = 'hover:text-gray-700'; // 移除原有颜色类
    link3.style.textDecoration = 'none';
    link3.style.fontSize = '12px';
    link3.style.color = '#888888'; // 统一灰色
    link3.style.transition = 'color 0.2s';
    
    // 链接3后的竖线
    const separator3 = document.createElement('span');
    separator3.textContent = '丨';
    separator3.className = 'mx-2'; // 移除原有颜色类
    separator3.style.fontSize = '12px';
    separator3.style.color = '#888888'; // 统一灰色
    
    // 创建返回顶部链接
    const backToTop = document.createElement('a');
    backToTop.href = '#top';
    backToTop.target = '_self';
    backToTop.textContent = '返回顶部';
    backToTop.className = 'hover:text-gray-700'; // 移除原有颜色类
    backToTop.style.textDecoration = 'none';
    backToTop.style.fontSize = '12px';
    backToTop.style.color = '#888888'; // 统一灰色
    backToTop.style.transition = 'color 0.2s';
    
    // 返回顶部后的竖线
    const separator4 = document.createElement('span');
    separator4.textContent = '丨';
    separator4.className = 'ml-2'; // 移除原有颜色类
    separator4.style.fontSize = '12px';
    separator4.style.color = '#888888'; // 统一灰色
    
    // 添加元素到容器
    gpczxstua.appendChild(link1);
    gpczxstua.appendChild(separator1);
    gpczxstua.appendChild(link2);
    gpczxstua.appendChild(separator2);
    gpczxstua.appendChild(link3);
    gpczxstua.appendChild(separator3);
    gpczxstua.appendChild(backToTop);
    gpczxstua.appendChild(separator4);
});
    