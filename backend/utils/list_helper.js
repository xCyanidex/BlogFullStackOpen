
const dummy = (blogs) => {
    return 1;  
};

const totalLikes=(blogs)=>{

    return blogs.reduce(
        (acc,curr)=>acc+curr.likes,0,
    );

}

const favoriteBlog = (blogs) => {

    if (blogs.length === 0) return undefined; 

    return blogs.reduce((max, current) => {
        return current.likes > max.likes ? current : max;
    });
};


module.exports = {
    dummy, totalLikes, favoriteBlog
};
