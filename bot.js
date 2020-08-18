var TwitterPackage = require("twitter");

let secret = {
  consumer_key: process.env.BOT_CONSUMER_KEY,
  consumer_secret: process.env.BOT_CONSUMER_SECRET,
  access_token: process.env.BOT_ACCESS_TOKEN,
  access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET,
};
var Twitter = new TwitterPackage(secret);

// Call the stream function and pass in 'statuses/filter', our filter object, and our callback
Twitter.stream("statuses/filter", { track: "cari beasiswa" }, function (
  stream
) {
  // ... when we get tweet data...
  stream.on("data", function (tweet) {
    // print out the text of the tweet that came in
    randomInt = Math.floor(Math.random() * 7);

    console.log(randomInt);

    var statusObj = {
      status:
        "Hi @" +
        tweet.user.screen_name +
        ". Kalo kamu lagi sedang mencari informasi beasiswa, kamu bisa kunjungin website kita loh :)",
      in_reply_to_status_id: tweet.id_str,
    };

    if (randomInt === 1) {
      statusObj.status =
        "Halo kak @" +
        tweet.user.screen_name +
        ". Terkait informasi beasiswa, di website kita ada beberapa informasi yang mungkin berguna buat kakak :D";
    } else if (randomInt === 2) {
      statusObj.status =
        "Hi kak @" +
        tweet.user.screen_name +
        "!! Lagi nyari informasi beasiswa ya kak? Di website kita ada loh info beasiswa :)";
    } else if (randomInt === 3) {
      statusObj.status =
        "Halo @" +
        tweet.user.screen_name +
        ". Di website kita ada informasi beasiswa nih, kalau mau cek aja ya :D";
    } else if (randomInt === 4) {
      statusObj.status =
        "Hey kak @" +
        tweet.user.screen_name +
        "! Kalo sedang mencari informasi beasiswa mungkin bisa cek di website kita ya :)";
    } else if (randomInt === 5) {
      statusObj.status =
        "Hi @" +
        tweet.user.screen_name +
        ". Di website kita ada informasi beasiswa yang mungkin bermanfaat nih, bisa cek langsung ya :D";
    } else if (randomInt === 6) {
      statusObj.status =
        "Halo kak @" +
        tweet.user.screen_name +
        "! Kita punya info beasiswa nih, link ada di bio ya :D";
    }

    console.log(tweet.user);

    //build our reply object

    //call the post function to tweet something
    Twitter.post("statuses/update", statusObj, function (
      error,
      tweetReply,
      response
    ) {
      //if we get an error print it out
      if (error) {
        console.log(error);
      }

      //print the text of the tweet we sent out
      console.log(tweetReply.text);
    });
  });

  // ... when we get an error...
  stream.on("error", function (error) {
    //print out the error
    console.log(error);
  });
});
