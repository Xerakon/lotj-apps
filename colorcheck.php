<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="LotJ Color Checker">
  <meta name="author" content="@Xerakon">
  <title>LotJ Color Checker</title>

  <!-- bootstrap-related css -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">

  <!-- custom css -->
  <style>
    body {
      background-color: #000000;
      color: #C0C0C0;
      font-family: Courier New, Courier, Lucida Sans Typewriter, Lucida Typewriter, monospace;
    }
    #intro {
      padding-top: 10px;
    }
    #main {
      padding-top: 50px;
    }
    .taInput {
      height: 250px;
      background: #000000;
      border-color: #0275d8;
      color: #C0C0C0;
      font-family: Courier New, Courier, Lucida Sans Typewriter, Lucida Typewriter, monospace;
      float: left;
    }
    .taDisplay {
      background: #000000;
      color: #C0C0C0;
      padding-left: 25px;
      float: left;
      font-family: Courier New, Courier, Lucida Sans Typewriter, Lucida Typewriter, monospace;
      white-space: pre-wrap;      /* CSS3 */   
      white-space: -moz-pre-wrap; /* Firefox */    
      white-space: -pre-wrap;     /* Opera <7 */   
      white-space: -o-pre-wrap;   /* Opera 7 */    
      word-wrap: break-word;      /* IE */
    }
    #colorCodes {
      color: #C0C0C0;
      font-family: Courier New, Courier, Lucida Sans Typewriter, Lucida Typewriter, monospace;
      white-space: pre-wrap;      /* CSS3 */   
      white-space: -moz-pre-wrap; /* Firefox */    
      white-space: -pre-wrap;     /* Opera <7 */   
      white-space: -o-pre-wrap;   /* Opera 7 */
    }
    .innerContainer {
      padding-left: 25px;
      padding-right: 25px;
    }
  </style>
</head>
<body>
  <!-- navbar -->
  <nav class="navbar navbar-dark bg-primary">
    <span class="navbar-brand mb-0 h1">LotJ Color Checker</span>
  </nav>

  <!-- intro block -->
  <div class="container-fluid" id="intro">
    <div class="row">
      <div class="col">
        <p>
          Compiled by @Xerakon. Credit to @Xavier for original concept. Thanks to @Rengawm for 256color conversion assistance.<br>
          To simulate what your work will look like on LotJ, you can use LotJ color codes in the blue box below and a preview will appear to the right to reflect changes.<br>
          <a href="view256color.html" target="_blank">Click here</a> for the full list of accepted color tokens. The older and more commonly-used tokens are:
        </p>
      </div><!-- /.col -->
    </div><!-- .row -->
    <div class="row">
      <div class="col-3">
        <br>
        &g - <font color=#008000>Green</font><br>
        &b - <font color=#000080>Dark Blue</font><br>
        &c - <font color=#008080>Cyan</font><br>
        &z - <font color=#808080>Dark Grey</font><br>
        &G - <font color=#00FF00>Light Green</font><br>
        &B - <font color=#0000FF>Blue</font><br>
        &C - <font color=#00FFFF>Light Blue</font>
      </div><!-- /.col-3 -->
      <div class="col-3">
        &r - <font color=#800000>Red (blood)</font><br>
        &O - <font color=#808000>Orange (brown)</font><br>
        &p - <font color=#800080>Purple</font><br>
        &w - <font color=#C0C0C0>Gray (default color)</font><br>
        &R - <font color=#FF0000>Light Red</font><br>
        &Y - <font color=#FFFF00>Yellow</font><br>
        &P - <font color=#FF00FF>Pink</font><br>
        &W - <font color=#FFFFFF>White</font>
      </div><!-- /.col-3 -->
    </div><!-- /.row -->
  </div><!-- /.container-fluid -->

  <!-- input textarea (left) and display (right) -->
  <div class="container-fluid" id="main">
    <div class="row">
      <div class="col">
        <form><textarea class="taInput" id="taInput" cols="80" wrap="hard"></textarea></form>
      </div><!-- /.col -->
      <div class="col">
        <div class="taDisplay" id="taDisplay"></div>
      </div><!-- /.col -->
    </div><!-- /.row -->
  </div><!-- /.container-fluid -->

  <!-- bootstrap-related js -->
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>

  <script>
    $('#taInput').bind('input propertychange', function() {
      if (this.value.length) {
        var displayText = $('textarea#taInput').val();
        var newText = "";
        var colorCode = "";
        var parseChar = false;
        var openTag = false;
        for (var i = 0, len = displayText.length; i < len; i++) {
          if (parseChar) {
            if (displayText[i] >= '0' && displayText[i] <= '9') {
              // handle 3-number colorcodes
              colorCode += displayText[i];
              // if 4 numbers are entered, accept first 3 as colorcode
              if (colorCode.length < 3) {
                continue;
              }
            } else {
              //handle old colorcodes
              colorCode = displayText[i];
            }
            if (openTag) {
              newText += "</font>";
            }
            newText += codeToHtml(colorCode);
            parseChar = false;
          } else {
            // if & is detected, begin parsing for old or 3-number colorcodes
            if (displayText[i] != '&') {
              newText += displayText[i];
            } else {
              colorCode = "";
              parseChar = true;
              openTag = true;
            }
          }
        }
        // send input to #taDisplay
        $("#taDisplay").html(newText);
      } else {
        $("#taDisplay").html("");
      }
    });

    // hex color library
    function codeToHtml(theCode) {
      switch (theCode) {
        case "&": return "&"; break;
        case "r": return "<font color=#800000>"; break;
        case "R": return "<font color=#FF0000>"; break;
        case "x": return "<font color=#000000>"; break;
        case "z": return "<font color=#808080>"; break;
        case "g": return "<font color=#008000>"; break;
        case "G": return "<font color=#00FF00>"; break;
        case "O": return "<font color=#808000>"; break;
        case "Y": return "<font color=#FFFF00>"; break;
        case "b": return "<font color=#000080>"; break;
        case "B": return "<font color=#0000FF>"; break;
        case "p": return "<font color=#800080>"; break;
        case "P": return "<font color=#FF00FF>"; break;
        case "c": return "<font color=#008080>"; break;
        case "C": return "<font color=#00FFFF>"; break;
        case "W": return "<font color=#FFFFFF>"; break;
        case "000": return "<font color=#000000>"; break;
        case "001": return "<font color=#800000>"; break;
        case "002": return "<font color=#008000>"; break;
        case "003": return "<font color=#808000>"; break;
        case "004": return "<font color=#000080>"; break;
        case "005": return "<font color=#800080>"; break;
        case "006": return "<font color=#008080>"; break;
        case "007": return "<font color=#c0c0c0>"; break;
        case "008": return "<font color=#808080>"; break;
        case "009": return "<font color=#ff0000>"; break;
        case "010": return "<font color=#00ff00>"; break;
        case "011": return "<font color=#ffff00>"; break;
        case "012": return "<font color=#0000ff>"; break;
        case "013": return "<font color=#ff00ff>"; break;
        case "014": return "<font color=#00ffff>"; break;
        case "015": return "<font color=#ffffff>"; break;
        case "016": return "<font color=#000000>"; break;
        case "017": return "<font color=#00005f>"; break;
        case "018": return "<font color=#000087>"; break;
        case "019": return "<font color=#0000af>"; break;
        case "020": return "<font color=#0000d7>"; break;
        case "021": return "<font color=#0000ff>"; break;
        case "022": return "<font color=#005f00>"; break;
        case "023": return "<font color=#005f5f>"; break;
        case "024": return "<font color=#005f87>"; break;
        case "025": return "<font color=#005faf>"; break;
        case "026": return "<font color=#005fd7>"; break;
        case "027": return "<font color=#005fff>"; break;
        case "028": return "<font color=#008700>"; break;
        case "029": return "<font color=#00875f>"; break;
        case "030": return "<font color=#008787>"; break;
        case "031": return "<font color=#0087af>"; break;
        case "032": return "<font color=#0087d7>"; break;
        case "033": return "<font color=#0087ff>"; break;
        case "034": return "<font color=#00af00>"; break;
        case "035": return "<font color=#00af5f>"; break;
        case "036": return "<font color=#00af87>"; break;
        case "037": return "<font color=#00afaf>"; break;
        case "038": return "<font color=#00afd7>"; break;
        case "039": return "<font color=#00afff>"; break;
        case "040": return "<font color=#00d700>"; break;
        case "041": return "<font color=#00d75f>"; break;
        case "042": return "<font color=#00d787>"; break;
        case "043": return "<font color=#00d7af>"; break;
        case "044": return "<font color=#00d7d7>"; break;
        case "045": return "<font color=#00d7ff>"; break;
        case "046": return "<font color=#00ff00>"; break;
        case "047": return "<font color=#00ff5f>"; break;
        case "048": return "<font color=#00ff87>"; break;
        case "049": return "<font color=#00ffaf>"; break;
        case "050": return "<font color=#00ffd7>"; break;
        case "051": return "<font color=#00ffff>"; break;
        case "052": return "<font color=#5f0000>"; break;
        case "053": return "<font color=#5f005f>"; break;
        case "054": return "<font color=#5f0087>"; break;
        case "055": return "<font color=#5f00af>"; break;
        case "056": return "<font color=#5f00d7>"; break;
        case "057": return "<font color=#5f00ff>"; break;
        case "058": return "<font color=#5f5f00>"; break;
        case "059": return "<font color=#5f5f5f>"; break;
        case "060": return "<font color=#5f5f87>"; break;
        case "061": return "<font color=#5f5faf>"; break;
        case "062": return "<font color=#5f5fd7>"; break;
        case "063": return "<font color=#5f5fff>"; break;
        case "064": return "<font color=#5f8700>"; break;
        case "065": return "<font color=#5f875f>"; break;
        case "066": return "<font color=#5f8787>"; break;
        case "067": return "<font color=#5f87af>"; break;
        case "068": return "<font color=#5f87d7>"; break;
        case "069": return "<font color=#5f87ff>"; break;
        case "070": return "<font color=#5faf00>"; break;
        case "071": return "<font color=#5faf5f>"; break;
        case "072": return "<font color=#5faf87>"; break;
        case "073": return "<font color=#5fafaf>"; break;
        case "074": return "<font color=#5fafd7>"; break;
        case "075": return "<font color=#5fafff>"; break;
        case "076": return "<font color=#5fd700>"; break;
        case "077": return "<font color=#5fd75f>"; break;
        case "078": return "<font color=#5fd787>"; break;
        case "079": return "<font color=#5fd7af>"; break;
        case "080": return "<font color=#5fd7d7>"; break;
        case "081": return "<font color=#5fd7ff>"; break;
        case "082": return "<font color=#5fff00>"; break;
        case "083": return "<font color=#5fff5f>"; break;
        case "084": return "<font color=#5fff87>"; break;
        case "085": return "<font color=#5fffaf>"; break;
        case "086": return "<font color=#5fffd7>"; break;
        case "087": return "<font color=#5fffff>"; break;
        case "088": return "<font color=#870000>"; break;
        case "089": return "<font color=#87005f>"; break;
        case "090": return "<font color=#870087>"; break;
        case "091": return "<font color=#8700af>"; break;
        case "092": return "<font color=#8700d7>"; break;
        case "093": return "<font color=#8700ff>"; break;
        case "094": return "<font color=#875f00>"; break;
        case "095": return "<font color=#875f5f>"; break;
        case "096": return "<font color=#875f87>"; break;
        case "097": return "<font color=#875faf>"; break;
        case "098": return "<font color=#875fd7>"; break;
        case "099": return "<font color=#875fff>"; break;
        case "100": return "<font color=#878700>"; break;
        case "101": return "<font color=#87875f>"; break;
        case "102": return "<font color=#878787>"; break;
        case "103": return "<font color=#8787af>"; break;
        case "104": return "<font color=#8787d7>"; break;
        case "105": return "<font color=#8787ff>"; break;
        case "106": return "<font color=#87af00>"; break;
        case "107": return "<font color=#87af5f>"; break;
        case "108": return "<font color=#87af87>"; break;
        case "109": return "<font color=#87afaf>"; break;
        case "110": return "<font color=#87afd7>"; break;
        case "111": return "<font color=#87afff>"; break;
        case "112": return "<font color=#87d700>"; break;
        case "113": return "<font color=#87d75f>"; break;
        case "114": return "<font color=#87d787>"; break;
        case "115": return "<font color=#87d7af>"; break;
        case "116": return "<font color=#87d7d7>"; break;
        case "117": return "<font color=#87d7ff>"; break;
        case "118": return "<font color=#87ff00>"; break;
        case "119": return "<font color=#87ff5f>"; break;
        case "120": return "<font color=#87ff87>"; break;
        case "121": return "<font color=#87ffaf>"; break;
        case "122": return "<font color=#87ffd7>"; break;
        case "123": return "<font color=#87ffff>"; break;
        case "124": return "<font color=#af0000>"; break;
        case "125": return "<font color=#af005f>"; break;
        case "126": return "<font color=#af0087>"; break;
        case "127": return "<font color=#af00af>"; break;
        case "128": return "<font color=#af00d7>"; break;
        case "129": return "<font color=#af00ff>"; break;
        case "130": return "<font color=#af5f00>"; break;
        case "131": return "<font color=#af5f5f>"; break;
        case "132": return "<font color=#af5f87>"; break;
        case "133": return "<font color=#af5faf>"; break;
        case "134": return "<font color=#af5fd7>"; break;
        case "135": return "<font color=#af5fff>"; break;
        case "136": return "<font color=#af8700>"; break;
        case "137": return "<font color=#af875f>"; break;
        case "138": return "<font color=#af8787>"; break;
        case "139": return "<font color=#af87af>"; break;
        case "140": return "<font color=#af87d7>"; break;
        case "141": return "<font color=#af87ff>"; break;
        case "142": return "<font color=#afaf00>"; break;
        case "143": return "<font color=#afaf5f>"; break;
        case "144": return "<font color=#afaf87>"; break;
        case "145": return "<font color=#afafaf>"; break;
        case "146": return "<font color=#afafd7>"; break;
        case "147": return "<font color=#afafff>"; break;
        case "148": return "<font color=#afd700>"; break;
        case "149": return "<font color=#afd75f>"; break;
        case "150": return "<font color=#afd787>"; break;
        case "151": return "<font color=#afd7af>"; break;
        case "152": return "<font color=#afd7d7>"; break;
        case "153": return "<font color=#afd7ff>"; break;
        case "154": return "<font color=#afff00>"; break;
        case "155": return "<font color=#afff5f>"; break;
        case "156": return "<font color=#afff87>"; break;
        case "157": return "<font color=#afffaf>"; break;
        case "158": return "<font color=#afffd7>"; break;
        case "159": return "<font color=#afffff>"; break;
        case "160": return "<font color=#d70000>"; break;
        case "161": return "<font color=#d7005f>"; break;
        case "162": return "<font color=#d70087>"; break;
        case "163": return "<font color=#d700af>"; break;
        case "164": return "<font color=#d700d7>"; break;
        case "165": return "<font color=#d700ff>"; break;
        case "166": return "<font color=#d75f00>"; break;
        case "167": return "<font color=#d75f5f>"; break;
        case "168": return "<font color=#d75f87>"; break;
        case "169": return "<font color=#d75faf>"; break;
        case "170": return "<font color=#d75fd7>"; break;
        case "171": return "<font color=#d75fff>"; break;
        case "172": return "<font color=#d78700>"; break;
        case "173": return "<font color=#d7875f>"; break;
        case "174": return "<font color=#d78787>"; break;
        case "175": return "<font color=#d787af>"; break;
        case "176": return "<font color=#d787d7>"; break;
        case "177": return "<font color=#d787ff>"; break;
        case "178": return "<font color=#d7af00>"; break;
        case "179": return "<font color=#d7af5f>"; break;
        case "180": return "<font color=#d7af87>"; break;
        case "181": return "<font color=#d7afaf>"; break;
        case "182": return "<font color=#d7afd7>"; break;
        case "183": return "<font color=#d7afff>"; break;
        case "184": return "<font color=#d7d700>"; break;
        case "185": return "<font color=#d7d75f>"; break;
        case "186": return "<font color=#d7d787>"; break;
        case "187": return "<font color=#d7d7af>"; break;
        case "188": return "<font color=#d7d7d7>"; break;
        case "189": return "<font color=#d7d7ff>"; break;
        case "190": return "<font color=#d7ff00>"; break;
        case "191": return "<font color=#d7ff5f>"; break;
        case "192": return "<font color=#d7ff87>"; break;
        case "193": return "<font color=#d7ffaf>"; break;
        case "194": return "<font color=#d7ffd7>"; break;
        case "195": return "<font color=#d7ffff>"; break;
        case "196": return "<font color=#ff0000>"; break;
        case "197": return "<font color=#ff005f>"; break;
        case "198": return "<font color=#ff0087>"; break;
        case "199": return "<font color=#ff00af>"; break;
        case "200": return "<font color=#ff00d7>"; break;
        case "201": return "<font color=#ff00ff>"; break;
        case "202": return "<font color=#ff5f00>"; break;
        case "203": return "<font color=#ff5f5f>"; break;
        case "204": return "<font color=#ff5f87>"; break;
        case "205": return "<font color=#ff5faf>"; break;
        case "206": return "<font color=#ff5fd7>"; break;
        case "207": return "<font color=#ff5fff>"; break;
        case "208": return "<font color=#ff8700>"; break;
        case "209": return "<font color=#ff875f>"; break;
        case "210": return "<font color=#ff8787>"; break;
        case "211": return "<font color=#ff87af>"; break;
        case "212": return "<font color=#ff87d7>"; break;
        case "213": return "<font color=#ff87ff>"; break;
        case "214": return "<font color=#ffaf00>"; break;
        case "215": return "<font color=#ffaf5f>"; break;
        case "216": return "<font color=#ffaf87>"; break;
        case "217": return "<font color=#ffafaf>"; break;
        case "218": return "<font color=#ffafd7>"; break;
        case "219": return "<font color=#ffafff>"; break;
        case "220": return "<font color=#ffd700>"; break;
        case "221": return "<font color=#ffd75f>"; break;
        case "222": return "<font color=#ffd787>"; break;
        case "223": return "<font color=#ffd7af>"; break;
        case "224": return "<font color=#ffd7d7>"; break;
        case "225": return "<font color=#ffd7ff>"; break;
        case "226": return "<font color=#ffff00>"; break;
        case "227": return "<font color=#ffff5f>"; break;
        case "228": return "<font color=#ffff87>"; break;
        case "229": return "<font color=#ffffaf>"; break;
        case "230": return "<font color=#ffffd7>"; break;
        case "231": return "<font color=#ffffff>"; break;
        case "232": return "<font color=#080808>"; break;
        case "233": return "<font color=#121212>"; break;
        case "234": return "<font color=#1c1c1c>"; break;
        case "235": return "<font color=#262626>"; break;
        case "236": return "<font color=#303030>"; break;
        case "237": return "<font color=#3a3a3a>"; break;
        case "238": return "<font color=#444444>"; break;
        case "239": return "<font color=#4e4e4e>"; break;
        case "240": return "<font color=#585858>"; break;
        case "241": return "<font color=#626262>"; break;
        case "242": return "<font color=#6c6c6c>"; break;
        case "243": return "<font color=#767676>"; break;
        case "244": return "<font color=#808080>"; break;
        case "245": return "<font color=#8a8a8a>"; break;
        case "246": return "<font color=#949494>"; break;
        case "247": return "<font color=#9e9e9e>"; break;
        case "248": return "<font color=#a8a8a8>"; break;
        case "249": return "<font color=#b2b2b2>"; break;
        case "250": return "<font color=#bcbcbc>"; break;
        case "251": return "<font color=#c6c6c6>"; break;
        case "252": return "<font color=#d0d0d0>"; break;
        case "253": return "<font color=#dadada>"; break;
        case "254": return "<font color=#e4e4e4>"; break;
        case "255": return "<font color=#eeeeee>"; break;
        default: return "<font color=#C0C0C0>";
      }
    }
  </script>
</body>
</html>