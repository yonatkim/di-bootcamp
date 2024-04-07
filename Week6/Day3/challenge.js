// challenge
class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
}

// test cases
const video1 = new Video("Introduction to JavaScript", "JohnDoe", 300);
video1.watch(); 

const video2 = new Video("React Basics", "JaneSmith", 450);
video2.watch(); 

// bonus
const videoData = [
    { title: "CSS Tutorial", uploader: "Alice", time: 200 },
    { title: "Node.js Fundamentals", uploader: "Bob", time: 500 },
    { title: "Python Crash Course", uploader: "Carol", time: 400 },
    { title: "Angular Essentials", uploader: "David", time: 600 },
    { title: "HTML5 Mastery", uploader: "Eve", time: 350 }
];

// test case
const videos = [];
videoData.forEach(data => {
    const video = new Video(data.title, data.uploader, data.time);
    videos.push(video);
});

videos.forEach(video => {
    video.watch();
});
