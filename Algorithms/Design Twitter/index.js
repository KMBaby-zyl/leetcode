/**
 * Initialize your data structure here.
 */
var Twitter = function() {
    this.refs = {};
    this.msgs = {};
    this.cid = 1;
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if(!this.msgs[userId]){
        this.msgs[userId] = [];
        this.refs[userId] = {};
    }
    this.msgs[userId].unshift([userId, tweetId, this.cid]);
    
    for(var i in this.refs[userId]){
        this.msgs[i].unshift([userId, tweetId, this.cid]);
    }
    
    this.cid++;
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    let ans = this.msgs[userId] || [];
    
    ans = ans.slice(0,10);
    ans = ans.map(function(item){
        return item[1];
    })
    return ans;
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if(followerId === followeeId){
        return;
    }
    
    if(!this.msgs[followerId]){
        this.msgs[followerId] = [];
        this.refs[followerId] = {};
    }
    if(!this.msgs[followeeId]){
        this.msgs[followeeId] = [];
        this.refs[followeeId] = {};
    }
    
    if(this.refs[followeeId][followerId] === true){
        return;
    }
    
    this.refs[followeeId][followerId] = true;
    var self = this;
    this.msgs[followeeId].forEach(function(item){
        if(item[0] === followeeId){
            self.msgs[followerId].push(item);
        }
    });
    
    self.msgs[followerId] = self.msgs[followerId].sort(function(a,b){
        return b[2] - a[2]
    })
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if(followerId === followeeId){
        return;
    }
    if(!this.msgs[followerId]){
        this.msgs[followerId] = [];
        this.refs[followerId] = {};
    }
    if(!this.msgs[followeeId]){
        this.msgs[followeeId] = [];
        this.refs[followeeId] = {};
    }
    
    if(!this.refs[followeeId][followerId]){
        return;
    }
    
    
    delete this.refs[followeeId][followerId];
    
    for(var i = 0; i< this.msgs[followerId].length; i++){
        if(this.msgs[followerId][i][0] === followeeId){
            this.msgs[followerId].splice(i,1);
            i--
        }    
    }
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = Object.create(Twitter).createNew()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
