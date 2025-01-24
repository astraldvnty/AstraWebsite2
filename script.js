var i=0;
var j=1;
var witness=0;
var torment="𓅓";
setInterval(function(){
    if (witness == 0)
    {
        var titles=['a____', 'as___', 'ast__', 'astr_', 'astra', 'astr_', 'ast__', 'as___', 'a____', '____', 's___', 'sa__', 'sag_', 'sage', 'sag_', 'sa___', 's_____', '_______', 'e_______', 'el______', 'ele_____', 'elev____', 'eleve___', 'eleven__', 'elevent_', 'eleventh', 'elevent_', 'eleven__', 'eleve___', 'elev____', 'ele____', 'el____', 'e_____', '_____'];
        if(i===titles.length) {
            i=0;
        }
        document.title = titles[i];
        i++;
    }
    else
    {
        document.title = "__________________________________________________________________";
    }
}, 200);

setInterval(function(){
    var names=['astra','sage','eleventh','astra','sage','eleventh','astra','sage','eleventh','astra','sage','eleventh','the witness'];
    if(j===names.length){
        j=0;
    }
    document.getElementById('title').innerHTML = names[j];
    j++;
}, 1108);

$('#games').hover(
    function(){
        $('#infohover').text("geometry dash, celeste, minecraft, incremental games and a LOT more");
    },
    function(){
        $('#infohover').text("");
    }
);
$('#music').hover(
    function(){
        $('#infohover').text("jazz, jersey club, kendrick, tyler the creator, childish gambino, hiatus kaiyote, ...");
    },
    function(){
        $('#infohover').text("");
    }
);

// list of all fun facts
var funFacts = [
    'my birthday is the 26th of may.',
    "i have made web idle/incremental games for fun, and that's how I got decent at html/css/js.",
    "i'm currently getting a degree in computer engineering.",
    'i speak portuguese, english and a tiny bit of french.',
    "i've been making music for more than 5 years.",
    "i've been playing geometry dash for like 8 years at this point and i'm somehow not bored of it.",
    "i've built a LOT of geometry dash levels in my life.",
    'astra = jersey club, sage = soulhop, eleventh = anything else.',
    "my favorite incremental of all time is called dodecadragons.",
    "i've played an unhealthy amount of minecraft in my life.",
    "i absolutely despise any sort of seafood.",
    "the song playing right now is an extended version of 1:47 of rise by tyler the creator.",
    'my favorite tyler song is ifhy.',
    "cherry bomb is my favorite album.",
    "chromakopia is kinda goated????",
    "i've made fnf music before and it's not something i like to remember LOL.",
    "my life goal is to know a lot of programming languages, so i can work on both websites (backend or frontend) and also make games.",
    "there's someone watching me , <br>judging me <br>,at all times",
]
function genFunFact()
{
    var ran = Math.random()
    document.getElementById("randomfact").innerHTML = funFacts[~~(funFacts.length * ran)];
}

window.onload = function(){
    genFunFact();
    const a = document.querySelector("#witnesssong");
    a.pause();
    a.currentTime = 0;
}

$("#title").on("click",function(){
    if (document.getElementById('title').innerHTML == "the witness")
    {
        const fact = document.getElementById('randomfact').innerHTML;
        if (fact == funFacts[17])
        {
            witness = 1;
            document.getElementById('main').style.display = "none";
            document.getElementById('weird').style.display = "inline-block";
            document.body.style.background = "url('img/bg2.jpg')";
            document.body.style.backgroundSize = "cover";
            document.body.style.color = "#fff";

            const audio = document.querySelector("#song");
            audio.pause();
            audio.currentTime = 0;
            document.querySelector("#witnesssong").play();
        }
        else
        {
            document.getElementById('factbutton').innerHTML = "not everything is right yet";
        }
    }
});

function Witness()
{
    const text = document.getElementById('witnesstext').value;
    if (text == "i am in hell")
    {
        window.open("https://soundcloud.com/nacht0/kay/", "_blank");
        window.open(window.location, '_self').close();
    }
    else
    {
        alert("there's nothing for you here.")
        document.getElementById('titleweird').innerHTML = torment.repeat(130);
        document.getElementById('weirdminitext').innerHTML = torment.repeat(14);
        document.getElementById('screambutton').display = "none";
        document.getElementById('boothisrantsucks').innerHTML = torment.repeat(80) + "<br>" + torment.repeat(26) + "<br>" + torment.repeat(24);
        setTimeout(function() {
            window.open(window.location, '_self').close();
        }, 200);
    }
}