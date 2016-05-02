System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return [
                        {
                            picUrl: "http://lorempixel.com/100/100/people?1",
                            name: "Name1",
                            nick: "@Nick1",
                            content: "Content 1...",
                            heartCount: 0,
                            hearted: false
                        },
                        {
                            picUrl: "http://lorempixel.com/100/100/people?2",
                            name: "Name2",
                            nick: "@Nick2",
                            content: "Content 2...",
                            heartCount: 5,
                            hearted: false
                        },
                        {
                            picUrl: "http://lorempixel.com/100/100/people?3",
                            name: "Name3",
                            nick: "@Nick3",
                            content: "Content 3...",
                            heartCount: 10,
                            hearted: true
                        },
                        {
                            picUrl: "http://lorempixel.com/100/100/people?4",
                            name: "Name4",
                            nick: "@Nick4",
                            content: "Content 4...",
                            heartCount: 100,
                            hearted: false
                        }
                    ];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map