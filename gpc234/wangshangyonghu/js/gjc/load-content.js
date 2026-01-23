// 当HTML页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 1. 找到HTML中用于存放内容的容器
    const contentContainer = document.getElementById('content-container');

    // 2. 发起请求读取外部txt文件（需通过浏览器打开，本地直接打开可能有跨域问题，建议用VSCode Live Server等工具）
    fetch('content.txt') // 路径需与txt文件一致
        .then(response => {
            if (!response.ok) {
                throw new Error('无法加载外部内容文件');
            }
            return response.text(); // 将txt内容转为文本
        })
        .then(text => {
            // 3. 解析txt内容（按“【分类】”拆分）
            const categoryBlocks = text.split(/【([^】]+)】/).filter(Boolean); // 拆分后过滤空值
            
            // 4. 循环生成分类卡片
            for (let i = 0; i < categoryBlocks.length; i += 2) {
                const categoryName = categoryBlocks[i]; // 分类名称（如“用户相关术语”）
                const contentItems = categoryBlocks[i + 1].trim().split(','); // 分类下的内容（按逗号拆分）

                // 5. 创建分类卡片HTML结构
                const card = document.createElement('div');
                card.className = 'category-card';

                // 6. 插入分类标题
                card.innerHTML = `<h2>${categoryName}</h2>`;

                // 7. 创建内容列表并插入卡片
                const list = document.createElement('ul');
                list.className = 'content-list';
                contentItems.forEach(item => {
                    const listItem = document.createElement('li');
                    listItem.textContent = item.trim(); // 去除空格
                    list.appendChild(listItem);
                });
                card.appendChild(list);

                // 8. 将卡片插入页面容器
                contentContainer.appendChild(card);
            }
        })
        .catch(error => {
            // 处理加载失败的情况
            contentContainer.innerHTML = `<p style="color: red; text-align: center;">内容加载失败：${error.message}</p>`;
        });
});