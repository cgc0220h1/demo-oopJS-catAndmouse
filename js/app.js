const MAX_SPEED_CAT = 50;
const SPEED_CAT = 20;
const MAX_SPEED_MOUSE = 40;
const SPEED_MOUSE = 20;

let Rat = function (name, weight) {
    this.name = name;
    this.weight = weight;
    this.speed = MAX_SPEED_MOUSE;
    this.state = true;

    this.say = function () {
        alert("chít chít");
    };
};

let Cat = function (name, weight) {
    this.name = name;
    this.weight = weight;
    this.speed = MAX_SPEED_CAT;

    this.say = function () {
        alert("meo meo");
    };

    this.catch = function (object) {
        if (this.speed > object.speed) {
            return true;
        }
        return false;
    };

    this.eat = function (object) {
        if (object.state && this.catch(object)) {
            object.state = false;
            return this.weight += 10;
        }
        return this.weight;
    }
};

function start() {
    let cat_name = prompt("Tên của mèo là gì ?");
    let cat_weight = +prompt("Mèo nặng bao nhiêu cân ?");
    let cat_speed = +prompt("Nhập vào tốc độ của mèo: ");
    let mouse_speed = Math.floor(Math.random() * 50);
    let cat = new Cat(cat_name, cat_weight);
    let mouse = new Rat("mouse", 20);
    mouse.speed = mouse_speed;
    cat.speed = cat_speed;
    if (cat.catch(mouse)) {
        alert("Bắt được chuột rồi nhé!");
    } else {
        alert("Không bắt được chuột đâu, tăng tốc độ lên mèo ơi.")
    }
    if (cat.eat(mouse) !== cat_weight) {
        alert("Sau khi mèo ăn xong, khối lượng của mèo là: " + cat.weight);
    }
    if (mouse.state) {
        alert("Chuột còn sống");
    } else {
        alert("Chuột chết rồi");
    }
}