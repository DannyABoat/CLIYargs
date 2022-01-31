const moviesArr = [];

class Movie {
    constructor(title, actor = "not defined") {
        this.title = title;
        this.actor = actor;
    }
    add(){
        moviesArr.push(this);
    }
};

module.exports = { Movie, moviesArr };