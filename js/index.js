var quotes = [
["The fight is won or lost far away from witnesses—behind the lines, in the gym, and out there on the road, long before I dance under those lights.","Muhammad Ali","https://41.media.tumblr.com/8553c54e6ebed0cb19f751b364075369/tumblr_o00w4lniIk1ut3ssoo1_250.jpg"],  
["Just cause you got the monkey off your back doesn't mean the circus has left town.","George Carlin","https://41.media.tumblr.com/46f17f329d2d1b95c0d4c3e12ff302bb/tumblr_o00wz0wzdT1ut3ssoo1_250.jpg"],
["My grandmother is over eighty and still doesn't need glasses. Drinks right out of the bottle.","Henny Youngman","https://41.media.tumblr.com/f41b92072e125734ca74e84f20c12ec6/tumblr_o00vxj4SUW1ut3ssoo1_250.jpg"],   
["The man who does not read has no advantage over the man who cannot read.","Mark Twain","https://41.media.tumblr.com/77e2d26fe9ea721c372f3d00f70ec1ac/tumblr_o00wji1do91ut3ssoo1_250.jpg"],
["Maturity includes the recognition that no one is going to see anything in us that we don't see in ourselves. Stop waiting for a producer. Produce yourself.","Marianne Williamson","https://40.media.tumblr.com/8a5dd6e6a67a294cc5f3fb9a536c9490/tumblr_o00wrsM8QR1ut3ssoo1_250.jpg"],
["The spirit, the will to win, and the will to excel are the things that endure. These qualities are so much more important than the events that occur.","Vince Lombardi","https://40.media.tumblr.com/2580206cc6f90421d76e04d0b74d06c1/tumblr_o00vt42Tfu1ut3ssoo1_250.jpg"],
["Do married people live longer than single people or does it just seem longer?","Stephen Wright","https://41.media.tumblr.com/740c2b4725afd13c0be09e760f9a2ad1/tumblr_o00xtoKdLq1ut3ssoo1_250.jpg"],
["Not everyone has a right to his own opinion. If he doesn’t know the facts, his opinion doesn’t count.","Andy Rooney","https://41.media.tumblr.com/35f147de75ed4c69fcf2dbd12f79b139/tumblr_o00xcn8OsR1ut3ssoo1_250.jpg"],
["We are like butterflies who flutter for a day and think it is forever.","Carl Sagan","https://40.media.tumblr.com/d785e78c992977c0b20910535b9757a3/tumblr_o00vj3cSNF1ut3ssoo1_250.jpg"],
["Never allow a person to tell you no who doesn't have the power to say yes.","Eleanor Roosevelt","https://36.media.tumblr.com/6574c338f5ff8656cb00467caf913c87/tumblr_o00xivIsSa1ut3ssoo1_250.jpg"],
["Power concedes nothing without a demand. It never did and it never will.","Frederick Douglass","https://40.media.tumblr.com/229302d1532d0dfdc35cc73e60f8c87a/tumblr_o00x991nE21ut3ssoo1_250.jpg"],
["It is the mark of an educated mind to be able to entertain a thought without accepting it.","Aristotle","https://40.media.tumblr.com/f429b73a035c97c96adf7d5af0fab391/tumblr_nzzxp8sJ9m1ut3ssoo2_400.jpg"],
["Courage is what it takes to stand up and speak. Courage is also what it takes to sit down and listen.","Winston Churchill","https://40.media.tumblr.com/45b3a3693b8f6b46ca056780a7bc857e/tumblr_o00xdgApdU1ut3ssoo1_250.jpg"],
["Life's too short to wake up with regrets...If you get a chance, take it. If it changes your life, let it. Nobody said it'd be easy, they just promised it would be worth it.","Theodor Seuss Geisel","https://41.media.tumblr.com/33a56eaf973caa0f16512786e92c61a6/tumblr_o00xm0JLNn1ut3ssoo1_250.jpg"],  
];

$(document).ready(function() {
   $("#tweet-button").on("click", tweetOut);
});

function getQuoteArr() {
   return parseInt(Math.floor(Math.random() * quotes.length));
}

function postQuote() {
   i = getQuoteArr();
   document.getElementById("quote").innerHTML = quotes[i][0];
   document.getElementById("attributed").innerHTML = quotes[i][1];
   document.getElementById("attributed-pic").src=quotes[i][2];
};

function tweetQuote() {
var tweetQuote = document.getElementById("quote").innerHTML;
var tweetAttributed = document.getElementById("attributed").innerHTML;
var tweetOut = "'" + tweetQuote + "'" + " -" + tweetAttributed;
$("#tweet-button").attr("href", "http://twitter.com/intent/tweet?text=" + tweetOut + " http://codepen.io/Slade/pen/PZGVBy");
};   

postQuote();