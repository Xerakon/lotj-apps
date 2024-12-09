var charsheetTemplate = `Character Name: 

Character Motives: 

Character Strengths: 

Character Downfalls: 

Character Quirks and Other Miscellaneous Information: `;

var empire1Template = `&z|&R+&z|&O-----------------&z|&R+&z|&O----------------------&z|&R+&z|
&RA&zccessing &RI&zmperial &RD&zatanet &RF&zile...
&g...
...
...
&z
Access granted. Displaying file
&z|&R+&z|&O-----------------&z|&R+&z|&O----------------------&z|&R+&z|
&RB&zirth Name: &c 
&RO&zccupation: &c
&RR&zace: &c
&RA&zge: &c
&RP&zlace of Birth: &c
&RF&zamily:&c
&z|&R+&z|&O-----------------&z|&R+&z|&O----------------------&z|&R+&z|
&RW&zork &RH&zistory
&w-There are no incidents on record
&z|&R+&z|&O-----------------&z|&R+&z|&O----------------------&z|&R+&z|
&RC&zriminal &RR&zecord
&w-There are no incidents on record
&z|&R+&z|&O-----------------&z|&R+&z|&O----------------------&z|&R+&z|
&RP&zersonal &RA&zccount
&c
&z|&R+&z|&O-----------------&z|&R+&z|&O----------------------&z|&R+&z|`;

var lorell1Template = `&r
&R//==// &pLorellian Personal Record &R\\===\\
&r
&rBirthname: &w
&rAlias(es): &w
&rGender: &w
&rAge (Standard Years): &w
&rSpecies: &w
&r
&R//=======// &pCriminal Record&R \\========\\
&r
&w- No incidents on record
&r 
&R//==// &pPersonal Historical Record &R\\==\\
&r
&w
&r 
&R//==============// &pEnd &R\\=============\\
&D`;

var mandalorian1Template = `&w[&178+&w]&z=====================&w[&178+&w]&z======================&w[&178+&w]&z
&gT&241he &gM&ga&241n&241d&130a&208lo&130r&241ia&gn Go&241vernme&gnt
&178| &130Personal Identification Record&178 |
&w[&178+&w]&z=====================&w[&178+&w]&z======================&w[&178+&w]&z
&gBirth Name&241:
&gAliases&241:
&gRace&241:
&gAge&241:                           
&gGender&241:
&gPronouns&241:
&gClan Affiliation&241:
&gPlace of Birth&241:
&gOffspring and/or Spouses&241:
&gOccupation&241:
&w[&178+&w]&z=====================&w[&178+&w]&z======================&w[&178+&w]&z
&178| &130Employment History and Achievements &178|
&w[&178+&w]&z=====================&w[&178+&w]&z======================&w[&178+&w]&z
&gEmployment&241:
&gPosition&241/&gRank&241:
&gSummary of Work&241: 
&gAchievement&241: 
&gWitness&241/&gGranter&241:
&w[&178+&w]&z=====================&w[&178+&w]&z======================&w[&178+&w]&z
&178| &130Criminal History &178|
&w[&178+&w]&z=====================&w[&178+&w]&z======================&w[&178+&w]&z
&gCrime&241:
&gSentence&241:
&gSummary&241:
&w[&178+&w]&z=====================&w[&178+&w]&z======================&w[&178+&w]&z
&178| &130Medical History &178|
&w[&178+&w]&z=====================&w[&178+&w]&z======================&w[&178+&w]&z
&gMedical Information&241:
&w[&178+&w]&z=====================&w[&178+&w]&z======================&w[&178+&w]&z
&178| &130Personal History &178|
&w[&178+&w]&z=====================&w[&178+&w]&z======================&w[&178+&w]&z
&g-
&w[&178+&w]&z=====================&w[&178+&w]&z======================&w[&178+&w]&z`;

var neutral1Template = `&z...
Accessing Outer Rim world database list...
...
Searching...
...
...
...
&wRecord found.

&z(]&c=================== &wO&zuter &wR&zim &wI&zdentification &wF&zile &c===================&z[)
&wN&zame: &w
&wR&zace: &w
&wG&zender: &w
&wP&zlanet of &wO&zrigin: &w
&wO&zccupation: &w

&z(]&c========================= &wC&zurrent &wE&zmployment &c========================&z[)
&z-&w

&z(]&c========================== &wP&zast &wE&zmployment &c==========================&z[)
&z-&w

&z(]&c======================== &wP&zersonal &wI&znformation &c=======================&z[)


&z(]&c=================== &wO&zuter &wR&zim &wI&zdentification &wF&zile &c===================&z[)&w​`;

var neutral2Template = `&030Accessing Datanet File &086######&085..
&018..&024..&030..&042..&048..
&018..&024..&030..&042..&048..&085..
&018..&024..&030..&042..&048..&085..&045..&086Authentication complete
&018..&024..&030..&042..&048..&085..&045....&086Displaying File
&018+(&024===&030====&042=====&048======&085====&086)+(&085====&048======&042=====&030====&024===&018)
+
     &030 Name&045:&086
     &030 Age&045:&086                            
     &030 Race&045:&086      
     &030 Homeworld&045:&086
     &030 Occupation&045:&086
&018+(&024===&030====&042=====&048======&085=&086)Records(&085=&048======&042=====&030====&024===&018)
+
     &030 Employment&045:&086                 
     &030 Education&045:&086                      
&018+(&024===&030====&042=====&048==&086)Personal  History(&048==&042=====&030====&024===&018)+
 
 
&018+(&024===&030====&042=====&048======&085====&086)+(&085====&048======&042=====&030====&024===&018)+&030`;

var oldRepublic1Template = `&w[]&w==&CThe Republic Datanet File #001-101&w==========================&w[]
&w[]&z==============================================================&w[]
&w[&Y|&z
&w[&Y|&z Birthname:&C 
&w[&Y|&z Gender:&C 
&w[&Y|&z Age:&C 
&w[&Y|&z Species:&C 
&w[&Y|&z National Planet:&C 
&w[&Y|&z
&w[]&z==============================================================&w[]
&w[]&z====&CEMPLOYMENT HISTORY&z========================================&w[]
&w[| &C- &w
&w[]&z====&CPERSONAL HISTORICAL DATA&z==================================&w[]
&w[| &C- &w
&w[| &C- &w
&w[]&z====&CMISCELLANEOUS&z=============================================&w[]
&w[| &C- &w                               
&w[]&w==============================================================&w[]&D`;

var oldRepublic2Template = `&226                  _________________________
&226                 / &196T&202he &196G&202alactic &196R&202epublic  &226/\
&226 _______________/  &196C&202itizenship &196R&202egistry     &226\____________________  
&226|  _________________
&226| / &208Certified Data &226/\____________________________________________
&226|| &228
&226|| &228 Name&178: 
&226|| &228 Race&178: 
&226|| &228 Age&178: 
&226|| &228 Aliases&178: 
&226|| &228 Occupation&178: 
&226|| &228 Homeplanet&178: 
&226|| &228 Known relatives&178: 
&226||________________________________________________________________
|               ____________________
| _____________/&208 Background Report &226/\_____________________________
&226|| &228
&226|| &228 Employment&178:&228     Employer&178: 
&226|| &228                 Location&178: 
&226|| &228                 Position&178: 
&226|| &228 Criminal&178:&228       Charges/Convictions&178: 
&226|| &228                 Sentence&178: 
&226||________________________________________________________________ 
|                                      ___________________
| ____________________________________/&208 Personal Account &226/\_______
&226|| &228
&226|| &228 Fill out your backstory here
&226||________________________________________________________________`;

var oldRepublic3Template = `&g[]&094==&178The G&179alactic Re&180public &178D&179atan&180et File &178#&180000&178-&180XXX&094=================&g[]
[]&094==============================================================&g[]
[|&178      ,    ,^.    .       &g| 
[|&178    ,'|  _ \\ / _  |\`.     &g| &178B&180irthname: &g
[|&178   / /  \`.\\| |/,'  \\ \\    &g| &178G&180ender: &g
[|&178  / :     \`. ,'     : \\   &g| &178A&180ge: &g 
[|&179 :  |      | |      |  :  &g| &178S&180pecies: &g
[|&179 |  :      : :      :  |  &g| &178N&180ational Planet: &g
[|&179 :   \`.__,'   \`.__,'   :  &g| 
[|&179  \\                   /   &g|                 
[|&179   \\                 /    &g| 
[|&180    \`.             ,'     &g|          
[|&180      \`-._______,-'       &g| 
[|_________________________/ 
&g[]&094====&178E&179MPLOYMENT H&180ISTORY&094========================================&g[]
&w
&g[]&094====&178P&179ERSONAL HIS&180TORICAL DATA&094==================================&g[]
&w

&w 
&g[]&094==============================================================&g[]`;

var protectorate1Template = `&231 /&w::::::::::&O::::::::::&w::::::::::&231|&w::::::::::&O::::::::::&w::::::::::&231\
||               T&whe &231J&wedi &231P&wrotectorate &231D&watafile                &231||
 \&w::::::::::&O::::::::::&w::::::::::&231|&w::::::::::&O::::::::::&w::::::::::&231/
&244                                &231|
&244       /            \           &231|
&244     / /     &051||&244     \ \         &231|  &wName: 
&244    /  \     &051|| &244    /  \        &231|  &wSpecies: 
&244   |    \    &051||  &244  /    |       &231|  &wGender: 
&244   |    /    &051||   &244 \    |       &231|  &wAge: 
&244    \   \  &051__\/__&244  /   /        &231|  &wBirthplace: 
&244     \   \  &051/&w||&051\&244  /   /         &231|  &wOccupation: 
&244       \  \_/&w||&244\_/  /           &231|
&244         \________/             &231|
 /&w::::::::::&O::::::::::&w::::::::::&231|&w::::::::::&O::::::::::&w::::::::::&231\
||                     E&wmployment &231H&wistory                      &231||
 \&w::::::::::&O::::::::::&w::::::::::&231|&w::::::::::&O::::::::::&w::::::::::&231/

&w        Employer: 
&231        &wTitle: 
&231        &wLength of Employment: 
&231        &wLocation: 

&231 /&w::::::::::&O::::::::::&w::::::::::&231|&w::::::::::&O::::::::::&w::::::::::&231\
||                        C&wriminal &231R&wecord                      &231||
 \&w::::::::::&O::::::::::&w::::::::::&231|&w::::::::::&O::::::::::&w::::::::::&231/

&w        Location: 
&231        &wCharge: 
&231        &wSentence: 

&231 /&w::::::::::&O::::::::::&w::::::::::&231|&w::::::::::&O::::::::::&w::::::::::&231\
||                    A&wdditional &231I&wnformation                   &231||
 \&w::::::::::&O::::::::::&w::::::::::&231|&w::::::::::&O::::::::::&w::::::::::&231/`;

var sith1Template = `&wAccessing Sith Empire Database....
....
....
&r=======================  &244Information  &r=======================
         &wName&244: 
&wKnown Aliases&244: 
&196      &wSpecies&244: 
&196    &wHomeworld&244: 
&196   &wOccupation&244: 
&r==================== &244Employment  History &r====================
&wEmployer&244: 
&196   &wTitle&244: 
&r=====================  &244Criminal Record  &r=====================
&wInformation 
&r=====================  &244Additional Data  &r=====================
&wInformation
&r====================  &244Biographical Data  &r====================
&wInformation
 
 
&r==============================================================`;