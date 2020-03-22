const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
        {
            name: "这就是爱情",
            artist: '李代沫',
            url: 'http://www.0dutv.com/plug/down/up2.php/204795170.mp3',
            cover: 'https://s1.ax1x.com/2020/03/11/8EOut0.jpg',
        },
        {
            name: '无尽的冒险',
            artist: '时代少年团',
            url: 'http://www.0dutv.com/plug/down/up2.php/245513641.mp3',
            cover: 'https://s1.ax1x.com/2020/03/11/8EOut0.jpg',
        },
        {
            name: 'City of stars',
            artist: '小鲟',
            url: 'https://www.0dutv.com/upload/dance/20200309/31B9074F2C400752FF53AAEABAD29955.mp3',
            cover: 'https://s1.ax1x.com/2020/03/11/8EOut0.jpg',
        }
    ]
});