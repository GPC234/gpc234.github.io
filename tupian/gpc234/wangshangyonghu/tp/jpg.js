/**
 * jpg.js - 随机加载指定目录下的JPG图片脚本
 * 功能：为页面中的指定元素独立随机设置JPG图片源
 * 特点：每个图片加载逻辑完全独立，包含错误处理
 */

// 默认图片路径
const DEFAULT_IMAGE = '/tupian/gpc234/wangshangyonghu/h/2.jpg';

// 1. 随机显示第一张 JPG 图片（1 - 532.jpg）
// 生成随机数
const randomJpgNumber1 = Math.floor(Math.random() * 532) + 1;
// 获取图片元素
const img1 = document.getElementById('randomJpg1');
// 设置图片源
if (img1) {
    img1.src = `http://t1.pgrm.top:16701/xiangce/gpc234/wangshangyonghu/tu12/jpg/${randomJpgNumber1}.jpg`;
    // 添加错误处理
    img1.addEventListener('error', function() {
        if (this.src !== DEFAULT_IMAGE) {
            console.error(`图片1加载失败：${this.src}`);
            this.src = DEFAULT_IMAGE;
        }
    });
} else {
    console.error('未找到ID为randomJpg1的图片元素');
}

// 2. 随机显示第二张 JPG 图片（1 - 120.jpg）
// 生成随机数
const randomJpgNumber2 = Math.floor(Math.random() * 120) + 1;
// 获取图片元素
const img2 = document.getElementById('randomJpg2');
// 设置图片源
if (img2) {
    img2.src = `http://t1.pgrm.top:16701/xiangce/gpc234/wangshangyonghu/tu30/jpg/${randomJpgNumber2}.jpg`;
    // 添加错误处理
    img2.addEventListener('error', function() {
        if (this.src !== DEFAULT_IMAGE) {
            console.error(`图片2加载失败：${this.src}`);
            this.src = DEFAULT_IMAGE;
        }
    });
} else {
    console.error('未找到ID为randomJpg2的图片元素');
}

// 3. 随机显示第三张 JPG 图片（1 - 1000.jpg）
// 生成随机数
const randomJpgNumber3 = Math.floor(Math.random() * 1000) + 1;
// 获取图片元素
const img3 = document.getElementById('randomJpg3');
// 设置图片源
if (img3) {
    img3.src = `http://t1.pgrm.top:16701/xiangce/gpc234/wangshangyonghu/tu12/jpg/${randomJpgNumber3}.jpg`;
    // 添加错误处理
    img3.addEventListener('error', function() {
        if (this.src !== DEFAULT_IMAGE) {
            console.error(`图片3加载失败：${this.src}`);
            this.src = DEFAULT_IMAGE;
        }
    });
} else {
    console.error('未找到ID为randomJpg3的图片元素');
}

// 4. 随机显示第四张 JPG 图片（1 - 1000.jpg）
// 生成随机数
const randomJpgNumber4 = Math.floor(Math.random() * 1000) + 1;
// 获取图片元素
const img4 = document.getElementById('randomJpg4');
// 设置图片源
if (img4) {
    img4.src = `http://t1.pgrm.top:16701/xiangce/gpc234/wangshangyonghu/tu30/jpg/${randomJpgNumber4}.jpg`;
    // 添加错误处理
    img4.addEventListener('error', function() {
        if (this.src !== DEFAULT_IMAGE) {
            console.error(`图片4加载失败：${this.src}`);
            this.src = DEFAULT_IMAGE;
        }
    });
} else {
    console.error('未找到ID为randomJpg4的图片元素');
}


