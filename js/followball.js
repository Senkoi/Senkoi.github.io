// 我想吃屎
var followBallX = Math.random();
var followBallY = Math.random();
var ball_left = 10;
var ball_top = 80;
var animation_time = 2;
var ball_step = 20;
var ball_color = 'pink';
var ball_old_color = ball_color;
var ball_color_set = ['#669900', '#99cc33', '#ccee66', '#006699', '#3399cc', '#990066', '#ff6600', '#ff9900', '#ffcc00'];
var setBall = null;
var leave_ball = null;

window.addEventListener('load', function () {
    var followBall = document.querySelector('.followme');
    var root = document.querySelector(':root');
    var social_list = document.querySelector('.social-list');
    setProperty(ball_left, ball_top, animation_time, ball_color, ball_old_color);
    var ball_move = setInterval(function () {
        ball_old_color = ball_color;
        changeBall();
        setProperty(ball_left, ball_top, animation_time, ball_color, ball_old_color);
    }, animation_time * 1000);
    function changeBall() {
        var flag = 1;
        if (Math.random() < 0.5) {
            flag = -1;
        }
        followBallX = parseInt(Math.random() * flag * ball_step);
        if (Math.random() > 0.5) {
            flag = 1;
        }
        followBallY = parseInt(Math.random() * flag * ball_step);
        if (followBallY + ball_top > 100 || followBallY + ball_top < 0) {
            ball_top = -followBallY + ball_top;
        }
        else {
            ball_top = followBallY + ball_top;
        }
        if (followBallX + ball_left > 100 || followBallX + ball_left < 0) {
            ball_left = -followBallX + ball_left;
        }
        else {
            ball_left = followBallX + ball_left;
        }
        ball_color = ball_color_set[Math.floor(Math.random() * ball_color_set.length)];
    }
    function setProperty(px, py, bt, ball_color, ball_old_color) {
        root.style.setProperty('--ball-left', px + '%');
        root.style.setProperty('--ball-top', py + '%');
        root.style.setProperty('--animation-time', bt + 's');
        root.style.setProperty('--ball-color', ball_color);
        root.style.setProperty('--ball-old-color', ball_old_color);
    }
    followBall.addEventListener('mouseover', function () {
        clearTimeout(leave_ball);
        clearInterval(ball_move);
        social_list.style.display = 'block';
        followBall.style.opacity = 1;
        followBall.style.animation = 'a 0';
    })

    followBall.addEventListener('mouseleave', function () {
        leave_ball = setTimeout(function () {
            followBall.style.animation = null;
            // clearInterval(setBall);
            social_list.style.display = 'none';
            ball_move = setInterval(function () {
                ball_old_color = ball_color;
                changeBall();
                setProperty(ball_left, ball_top, animation_time, ball_color, ball_old_color);
            }, animation_time * 1000);
        }, 1000);
          
    })
});

