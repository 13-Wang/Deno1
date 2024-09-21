// 照片轮播功能
const carousel = document.querySelector('#carousel');
const thumbnailNav = document.querySelector('#thumbnail-nav');
const images = [
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6442.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6445.JPG', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6465.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6475.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6494.JPG', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6495.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6496.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6509.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6513.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6548.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6549.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6561.JPG', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6572.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6575.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6589.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6610.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6613.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6619.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6621 男士脸黑 和女士修差不多.JPG', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6626.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6657.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6658.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6673.JPG', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6676.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6682.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6688.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6704.JPG', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6708.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6722.JPG', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6724.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6735.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6746.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6779.JPG', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6787.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6800.JPG', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6837.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6856.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6867.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6871.JPG', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6878.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6895.jpg', caption: '婚纱照' },
    { src: 'D:/婚纱/婚纱照2 - 副本/新建文件夹/4K2B6904.JPG', caption: '婚纱照' },
    
];

let currentIndex = 0;
let intervalId;

// 在文件顶部添加这些变量
let scale = 1;
const SCALE_STEP = 0.1;
const MAX_SCALE = 3;
const MIN_SCALE = 0.5;

// 创建缩略图和预加载大图
function createThumbnailsAndPreload() {
    images.forEach((image, index) => {
        // 创建缩略图
        const thumbnail = new Image();
        thumbnail.src = image.src;
        thumbnail.alt = image.caption;
        thumbnail.className = 'thumbnail';
        thumbnail.dataset.index = index;
        thumbnailNav.appendChild(thumbnail);

        // 预加载大图
        const fullImg = new Image();
        fullImg.src = image.src;

        // 预加载原图
        const originalImg = new Image();
        originalImg.src = image.src.replace('婚纱照2 - 副本/新建文件夹', '婚纱照2');
    });

    // 使用事件委托处理缩略图点击
    thumbnailNav.addEventListener('click', handleThumbnailClick);
}

function handleThumbnailClick(event) {
    if (event.target.classList.contains('thumbnail')) {
        clearInterval(intervalId);
        currentIndex = parseInt(event.target.dataset.index);
        showImage(currentIndex);
        startCarousel();
    }
}

function showImage(index) {
    const image = images[index];
    const currentItem = carousel.querySelector('.carousel-item.active');
    const newItem = document.createElement('div');
    newItem.className = 'carousel-item';
    newItem.innerHTML = `
        <img src="${image.src}" alt="${image.caption}" data-full-src="${image.src.replace('婚纱照2 - 副本/新建文件夹', '婚纱照2')}">
        <p>${image.caption}</p>
    `;

    // 添加点击事件监听器
    newItem.querySelector('img').addEventListener('click', showFullscreenImage);

    carousel.appendChild(newItem);

    // 触发重排以应用过渡效果
    void newItem.offsetWidth;

    newItem.classList.add('active');
    if (currentItem) {
        currentItem.classList.remove('active');
        setTimeout(() => currentItem.remove(), 300); // 与 CSS 过渡时间匹配
    }

    updateThumbnailActive(index);
}

function updateThumbnailActive(index) {
    const thumbnails = thumbnailNav.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function startCarousel() {
    clearInterval(intervalId);
    intervalId = setInterval(nextImage, 5000);
}

createThumbnailsAndPreload();
showImage(currentIndex);
startCarousel();

// AI对话功能
const chatMessages = document.querySelector('#chat-messages');
const userInput = document.querySelector('#user-input');

function sendMessage() {
    const message = userInput.value;
    if (message.trim() === '') return;

    addMessage('用户', message);
    // 这里应该调用AI API来获取回复
    // 为了演示，我们使用一个简单的回复
    setTimeout(() => {
        addMessage('AI', '谢谢您的问题！我正在学习中，希望能为您提供更好的服务。');
    }, 1000);

    userInput.value = '';
}

function addMessage(sender, text) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// 在文件顶部添加新的常量
const fullscreenContainer = document.getElementById('fullscreen-image-container');
const fullscreenImage = document.getElementById('fullscreen-image');
const closeFullscreenButton = document.getElementById('close-fullscreen');

// 添加新的函数来处理全屏图片显示
function showFullscreenImage(event) {
    const fullSrc = event.target.dataset.fullSrc;
    fullscreenImage.style.transform = 'scale(1)'; // 重置缩放
    fullscreenImage.src = fullSrc;
    fullscreenContainer.classList.remove('hidden');
    fullscreenContainer.classList.add('show');
    scale = 1; // 重置缩放比例
    
    // 添加滚轮事件监听器
    fullscreenImage.addEventListener('wheel', handleImageZoom);
}

// 添加处理图片缩放的函数
function handleImageZoom(event) {
    event.preventDefault();
    const delta = event.deltaY;
    if (delta > 0) {
        // 缩小
        scale = Math.max(scale - SCALE_STEP, MIN_SCALE);
    } else {
        // 放大
        scale = Math.min(scale + SCALE_STEP, MAX_SCALE);
    }
    updateImageScale();
}

// 更新图片缩放比例
function updateImageScale() {
    fullscreenImage.style.transform = `scale(${scale})`;
}

// 修改 closeFullscreenImage 函数
function closeFullscreenImage() {
    fullscreenContainer.classList.remove('show');
    fullscreenContainer.classList.add('hidden');
    // 移除滚轮事件监听器
    fullscreenImage.removeEventListener('wheel', handleImageZoom);
    // 清除图片源
    setTimeout(() => {
        fullscreenImage.src = '';
        scale = 1;
        updateImageScale();
    }, 300); // 等待过渡效果完成后清除图片源
}

// 添加关闭按钮的事件监听器
closeFullscreenButton.addEventListener('click', closeFullscreenImage);

// ... 其他代码保持不变 ...