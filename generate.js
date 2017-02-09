// command: git update-index --assume-unchanged generate.js
// to make Git not to track this file anymore
// 还原: git update-index --no-assume-unchanged generate.js

var superagent = require("superagent");
var cheerio = require("cheerio");
var fs = require("fs");

// collect items
var ans = [];
var solvedNum = 0;
var problemNum = 0;
var lockedNum = 0;

function makeMarkdownFile() {
  var str = '';
  str += '# :pencil2: Leetcode Solutions with JavaScript';
  str += '\n';
  str += "Update time: " + new Date;
  str += '\n\n';
  str += "I have solved **" + solvedNum + " / " +  problemNum + "** problems ";
  str += "while there are **" + lockedNum + "** problems still locked."
  str += '\n\n';
  str += 'If you have any question, please give me an [issue](https://github.com/KMBaby-zyl/leetcode/issues).';
  str += '\n\n';
  str += 'If you are loving solving problems using JavaScript, please contact me to enjoy it together!'
  str += '\n\n';
  str += '(Notes: :blue_book: means you need to buy a book from Leetcode)';
  str += '\n\n';
  str += '| # | Title | Source Code | Explaination | Difficulty |';
  str += '\n';
  str += '|:---:|:---:|:---:|:---:|:---:|';
  str += '\n';

  // sort by the problemId desc
  //ans.sort(function(a, b) {
    //return +b.problemId - +a.problemId;
  //});

  for (var i = 0, len = ans.length; i < len; i++) {
    var item = ans[i];

    var problemId = item.problemId;
    var title = item.title;
    var url = item.url;
    var language = item.language;
    var sourceCode = item.sourceCode;
    var explaination = item.explaination;
    var difficulty = item.difficulty;
    var isSolved = item.isSolved;
    var isLocked = item.isLocked;

    str += '| ' + problemId + ' ';
    str += '| ' + '[' + title + '](' + url + ') ';

    if (isSolved)
      str += '| ' + '[' + language + '](' + sourceCode + ') ';
    else if (isLocked) {
      // | :blue_book:
      str += '| :blue_book: ';
    } else {
      str += '| ';
    }

    if (explaination)
      str += '| ' + '[Explaination](' + explaination + ') ';
    else {
      str += '| ';
    }

    str += '| ' + difficulty + ' |';
    str += '\n';
  }

  var makeDownFileSrc = "./readme.md";
  fs.writeFile(makeDownFileSrc, str);
  console.log("success!");
}


function dealWithFile() {
  var baseLocalSrc = "./Algorithms/";
  var baseNetSrc = "https://github.com/KMBaby-zyl/leetcode/blob/master/Algorithms/";


  for (var i = 0, len = ans.length; i < len; i++) {
    !function(i) {
      var p = ans[i];

      if (p.isSolved) {
        var fileSrc = baseLocalSrc + p.title;
        fs.readdir(fileSrc, function(err, files) {
          files.forEach(function(fileName) {
            if (~fileName.indexOf("md")) {
              p.explaination = encodeURI(baseNetSrc + p.title + '/' + fileName);
            }

            if (~fileName.indexOf("js")) {
              p.language = "JavaScript";
              p.sourceCode = encodeURI(baseNetSrc + p.title + '/' + fileName);
            } else if (~fileName.indexOf("cpp")) {
              p.language = "C++";
              p.sourceCode = encodeURI(baseNetSrc + p.title + '/' + fileName);
            }
          });
        });
      }
    }(i);
  }

  // delay 2000ms to make sure that async operations have been done
  // it's better to use eventproxy module
  setTimeout(function() {
    makeMarkdownFile();
  }, 2000);
}

var DIFFICULT = {
    1: 'Easy',
    2: 'Medium',
    3: 'Hard'
}

function makeRequest() {
  superagent
    .get("https://leetcode.com/api/problems/algorithms/")
    //.set("Cookie", "PHPSESSID=")  // for logining in
    .set("Cookie", "LEETCODE_SESSION=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IktNQmFieS16eWwiLCJ1c2VyX3NsdWciOiJrbWJhYnktenlsIiwiX2F1dGhfdXNlcl9pZCI6IjIyOTkyNCIsInRpbWVzdGFtcCI6IjIwMTctMDItMDggMDg6MjU6MjguODMwNjA2KzAwOjAwIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiYWxsYXV0aC5hY2NvdW50LmF1dGhfYmFja2VuZHMuQXV0aGVudGljYXRpb25CYWNrZW5kIiwiaWQiOjIyOTkyNCwiX2F1dGhfdXNlcl9oYXNoIjoiY2JjZmJiYjA3NDY4Zjk3ODlhNDg3YjA1NGNmYmY5NjZkYTQzNjA4NCIsImVtYWlsIjoiemhhbmd5aWxpOTExMjI5QGdtYWlsLmNvbSJ9.SpYAuAprUDNNqEsnbODTQ2P48jqF5r-XmVATEcSK4w8")  // for logining in
    .end(function(err, res) {
        console.log('getdata');

        var resJson = JSON.parse(res.text);
        
        solvedNum = resJson.num_solved;
        problemNum = resJson.num_total;
        resJson.stat_status_pairs.reverse().map(function(item){
            if(item.paid_only){
                lockedNum++;
            }
            var obj = {
                isSolved: item.status === 'ac',
                problemId: item.stat.question_id, 
                title: item.stat.question__title,
                url: "https://leetcode.com/pro" + item.stat.question__title_slug,
                isLocked: item.paid_only,
                difficulty: DIFFICULT[item.difficulty.level]
            }
            if(obj.isSolved){
                ans.unshift(obj);
            }else{
                ans.push(obj);
            }
        })

       console.log(problemNum, solvedNum, lockedNum)
       dealWithFile();
    });
}

// start
makeRequest();
