var defaultString = "'Position','Name','Salary','GameInfo','AvgPointsPerGame','teamAbbrev'\
'WR','DeAndre Hopkins',9200,'IND@HOU 11/05/2017 01:00PM ET',21.943,'HOU'\
'RB','Ezekiel Elliott',9000,'KC@DAL 11/05/2017 04:25PM ET',24.000,'DAL'\
'RB','Kareem Hunt',8600,'KC@DAL 11/05/2017 04:25PM ET',22.750,'KC'\
'RB','Leonard Fournette',8400,'CIN@JAX 11/05/2017 01:00PM ET',23.200,'JAX'\
'QB','Deshaun Watson',8100,'IND@HOU 11/05/2017 01:00PM ET',26.266,'HOU'\
'RB','Todd Gurley II',8100,'LAR@NYG 11/05/2017 01:00PM ET',25.286,'LAR'\
'WR','Julio Jones',7800,'ATL@CAR 11/05/2017 01:00PM ET',14.286,'ATL'\
'WR','Mike Evans',7700,'TB@NO 11/05/2017 01:00PM ET',16.414,'TB'\
'RB','Mark Ingram',7600,'TB@NO 11/05/2017 01:00PM ET',17.486,'NO'\
'WR','A.J. Green',7400,'CIN@JAX 11/05/2017 01:00PM ET',17.743,'CIN'\
'QB','Russell Wilson',7300,'WAS@SEA 11/05/2017 04:05PM ET',24.531,'SEA'\
'WR','Michael Thomas',7200,'TB@NO 11/05/2017 01:00PM ET',14.571,'NO'\
'WR','Will Fuller V',7000,'IND@HOU 11/05/2017 01:00PM ET',21.700,'HOU'\
'QB','Drew Brees',7000,'TB@NO 11/05/2017 01:00PM ET',18.591,'NO'\
'WR','Doug Baldwin',6900,'WAS@SEA 11/05/2017 04:05PM ET',14.529,'SEA'\
'TE','Zach Ertz',6800,'DEN@PHI 11/05/2017 01:00PM ET',16.350,'PHI'\
'QB','Dak Prescott',6700,'KC@DAL 11/05/2017 04:25PM ET',21.366,'DAL'\
'WR','Tyreek Hill',6700,'KC@DAL 11/05/2017 04:25PM ET',15.563,'KC'\
'TE','Travis Kelce',6700,'KC@DAL 11/05/2017 04:25PM ET',16.663,'KC'\
'RB','Devonta Freeman',6600,'ATL@CAR 11/05/2017 01:00PM ET',15.214,'ATL'\
'RB','Christian McCaffrey',6500,'ATL@CAR 11/05/2017 01:00PM ET',14.063,'CAR'\
'QB','Alex Smith',6500,'KC@DAL 11/05/2017 04:25PM ET',22.580,'KC'\
'RB','David Johnson',6400,'ARI@SF 11/05/2017 04:05PM ET',14.100,'ARI'\
'WR','Dez Bryant',6400,'KC@DAL 11/05/2017 04:25PM ET',13.229,'DAL'\
'QB','Cam Newton',6300,'ATL@CAR 11/05/2017 01:00PM ET',18.893,'CAR'\
'RB','Alvin Kamara',6300,'TB@NO 11/05/2017 01:00PM ET',14.286,'NO'\
'QB','Matt Ryan',6200,'ATL@CAR 11/05/2017 01:00PM ET',15.966,'ATL'\
'WR','Kelvin Benjamin',6200,'ATL@CAR 11/05/2017 01:00PM ET',11.813,'CAR'\
'RB','Lamar Miller',6200,'IND@HOU 11/05/2017 01:00PM ET',14.857,'HOU'\
'QB','Carson Wentz',6100,'DEN@PHI 11/05/2017 01:00PM ET',23.103,'PHI'\
'RB','Chris Thompson',6100,'WAS@SEA 11/05/2017 04:05PM ET',18.900,'WAS'\
'WR','Demaryius Thomas',6000,'DEN@PHI 11/05/2017 01:00PM ET',11.786,'DEN'\
'QB','Marcus Mariota',6000,'BAL@TEN 11/05/2017 01:00PM ET',16.240,'TEN'\
'WR','Larry Fitzgerald',5900,'ARI@SF 11/05/2017 04:05PM ET',16.771,'ARI'\
'QB','Jameis Winston',5800,'TB@NO 11/05/2017 01:00PM ET',17.489,'TB'\
'RB','Doug Martin',5800,'TB@NO 11/05/2017 01:00PM ET',12.275,'TB'\
'WR','Emmanuel Sanders',5700,'DEN@PHI 11/05/2017 01:00PM ET',12.720,'DEN'\
'QB','Kirk Cousins',5700,'WAS@SEA 11/05/2017 04:05PM ET',21.157,'WAS'\
'TE','Evan Engram',5600,'LAR@NYG 11/05/2017 01:00PM ET',11.743,'NYG'\
'QB','Carson Palmer',5600,'ARI@SF 11/05/2017 04:05PM ET',16.909,'ARI'\
'RB','Adrian Peterson',5600,'ARI@SF 11/05/2017 04:05PM ET',7.200,'ARI'\
'WR','DeSean Jackson',5500,'TB@NO 11/05/2017 01:00PM ET',11.386,'TB'\
'QB','Jared Goff',5500,'LAR@NYG 11/05/2017 01:00PM ET',16.209,'LAR'\
'RB','Darren McFadden',5500,'KC@DAL 11/05/2017 04:25PM ET',0,'DAL'\
'RB','Alfred Morris',5500,'KC@DAL 11/05/2017 04:25PM ET',2.067,'DAL'\
'WR','Devin Funchess',5400,'ATL@CAR 11/05/2017 01:00PM ET',10.838,'CAR'\
'QB','Andrew Luck',5400,'IND@HOU 11/05/2017 01:00PM ET',0,'IND'\
'RB','DeMarco Murray',5400,'BAL@TEN 11/05/2017 01:00PM ET',11.214,'TEN'\
'WR','Mohamed Sanu',5300,'ATL@CAR 11/05/2017 01:00PM ET',11.767,'ATL'\
'QB','Derek Anderson',5300,'ATL@CAR 11/05/2017 01:00PM ET',0.680,'CAR'\
'WR','Alshon Jeffery',5300,'DEN@PHI 11/05/2017 01:00PM ET',11.450,'PHI'\
'QB','Jacoby Brissett',5200,'IND@HOU 11/05/2017 01:00PM ET',14.398,'IND'\
'WR','Sterling Shepard',5200,'LAR@NYG 11/05/2017 01:00PM ET',11.720,'NYG'\
'RB','Carlos Hyde',5200,'ARI@SF 11/05/2017 04:05PM ET',15.213,'SF'\
'RB','Joe Mixon',5100,'CIN@JAX 11/05/2017 01:00PM ET',9.457,'CIN'\
'WR','Pierre Garcon',5100,'ARI@SF 11/05/2017 04:05PM ET',11.625,'SF'\
'QB','Andy Dalton',5000,'CIN@JAX 11/05/2017 01:00PM ET',15.217,'CIN'\
'WR','Ted Ginn Jr.',5000,'TB@NO 11/05/2017 01:00PM ET',12.043,'NO'\
'RB','Derrick Henry',5000,'BAL@TEN 11/05/2017 01:00PM ET',7.943,'TEN'\
'TE','Jimmy Graham',5000,'WAS@SEA 11/05/2017 04:05PM ET',11.271,'SEA'\
'WR','T.Y. Hilton',4900,'IND@HOU 11/05/2017 01:00PM ET',11.588,'IND'\
'TE','Delanie Walker',4900,'BAL@TEN 11/05/2017 01:00PM ET',9.886,'TEN'\
'QB','C.J. Beathard',4900,'ARI@SF 11/05/2017 04:05PM ET',10.820,'SF'\
'WR','Jamison Crowder',4900,'WAS@SEA 11/05/2017 04:05PM ET',8.400,'WAS'\
'QB','Ryan Fitzpatrick',4800,'TB@NO 11/05/2017 01:00PM ET',11.200,'TB'\
'QB','Eli Manning',4800,'LAR@NYG 11/05/2017 01:00PM ET',15.443,'NYG'\
'RB','C.J. Anderson',4800,'DEN@PHI 11/05/2017 01:00PM ET',11.857,'DEN'\
'WR','Nelson Agholor',4800,'DEN@PHI 11/05/2017 01:00PM ET',12.025,'PHI'\
'QB','Brian Hoyer',4800,'ARI@SF 11/05/2017 04:05PM ET',12.250,'SF'\
'TE','Jordan Reed',4800,'WAS@SEA 11/05/2017 04:05PM ET',10.017,'WAS'\
'RB','Tevin Coleman',4700,'ATL@CAR 11/05/2017 01:00PM ET',10.886,'ATL'\
'QB','AJ McCarron',4700,'CIN@JAX 11/05/2017 01:00PM ET',0.000,'CIN'\
'QB','Blake Bortles',4700,'CIN@JAX 11/05/2017 01:00PM ET',14.517,'JAX'\
'QB','Trevor Siemian',4700,'DEN@PHI 11/05/2017 01:00PM ET',15.523,'DEN'\
'QB','Drew Stanton',4700,'ARI@SF 11/05/2017 04:05PM ET',1.880,'ARI'\
'WR','Paul Richardson',4700,'WAS@SEA 11/05/2017 04:05PM ET',13.200,'SEA'\
'QB','Colt McCoy',4700,'WAS@SEA 11/05/2017 04:05PM ET',0,'WAS'\
'QB','Patrick Mahomes II',4700,'KC@DAL 11/05/2017 04:25PM ET',0,'KC'\
'QB','Tom Savage',4600,'IND@HOU 11/05/2017 01:00PM ET',0.240,'HOU'\
'QB','Chase Daniel',4600,'TB@NO 11/05/2017 01:00PM ET',0,'NO'\
'WR','Rishard Matthews',4600,'BAL@TEN 11/05/2017 01:00PM ET',10.286,'TEN'\
'QB','Joe Flacco',4600,'BAL@TEN 11/05/2017 01:00PM ET',8.775,'BAL'\
'RB','Alex Collins',4600,'BAL@TEN 11/05/2017 01:00PM ET',7.686,'BAL'\
'QB','Blaine Gabbert',4600,'ARI@SF 11/05/2017 04:05PM ET',0,'ARI'\
'WR','Tyler Lockett',4600,'WAS@SEA 11/05/2017 04:05PM ET',9.700,'SEA'\
'TE','Jason Witten',4600,'KC@DAL 11/05/2017 04:25PM ET',11.771,'DAL'\
'RB','T.J. Yeldon',4500,'CIN@JAX 11/05/2017 01:00PM ET',24.700,'JAX'\
'TE','Cameron Brate',4500,'TB@NO 11/05/2017 01:00PM ET',13.643,'TB'\
'WR','Cooper Kupp',4500,'LAR@NYG 11/05/2017 01:00PM ET',10.371,'LAR'\
'QB','Geno Smith',4500,'LAR@NYG 11/05/2017 01:00PM ET',0,'NYG'\
'QB','Brock Osweiler',4500,'DEN@PHI 11/05/2017 01:00PM ET',0.620,'DEN'\
'QB','Matt Cassel',4500,'BAL@TEN 11/05/2017 01:00PM ET',2.160,'TEN'\
'QB','Ryan Mallett',4500,'BAL@TEN 11/05/2017 01:00PM ET',4.970,'BAL'\
'QB','Cooper Rush',4500,'KC@DAL 11/05/2017 04:25PM ET',1.380,'DAL'\
'TE','Greg Olsen',4400,'ATL@CAR 11/05/2017 01:00PM ET',2.900,'CAR'\
'RB','Chris Ivory',4400,'CIN@JAX 11/05/2017 01:00PM ET',8.886,'JAX'\
'QB','Nick Foles',4400,'DEN@PHI 11/05/2017 01:00PM ET',-0.200,'PHI'\
'WR','Corey Davis',4400,'BAL@TEN 11/05/2017 01:00PM ET',7.150,'TEN'\
'WR','Josh Doctson',4400,'WAS@SEA 11/05/2017 04:05PM ET',5.571,'WAS'\
'RB','Charcandrick West',4400,'KC@DAL 11/05/2017 04:25PM ET',5.700,'KC'\
'QB','Matt Schaub',4300,'ATL@CAR 11/05/2017 01:00PM ET',0.000,'ATL'\
'TE','Jack Doyle',4300,'IND@HOU 11/05/2017 01:00PM ET',13.257,'IND'\
'QB','Chad Henne',4300,'CIN@JAX 11/05/2017 01:00PM ET',-0.300,'JAX'\
'WR','Robert Woods',4300,'LAR@NYG 11/05/2017 01:00PM ET',9.757,'LAR'\
'RB','Javorius Allen',4300,'BAL@TEN 11/05/2017 01:00PM ET',11.763,'BAL'\
'QB','Austin Davis',4300,'WAS@SEA 11/05/2017 04:05PM ET',-0.100,'SEA'\
'QB','Scott Tolzien',4200,'IND@HOU 11/05/2017 01:00PM ET',3.320,'IND'\
'QB','Sean Mannion',4200,'LAR@NYG 11/05/2017 01:00PM ET',-0.160,'LAR'\
'WR','Sammy Watkins',4200,'LAR@NYG 11/05/2017 01:00PM ET',8.486,'LAR'\
'RB','LeGarrette Blount',4200,'DEN@PHI 11/05/2017 01:00PM ET',9.525,'PHI'\
'WR','John Brown',4200,'ARI@SF 11/05/2017 04:05PM ET',8.680,'ARI'\
'RB','Matt Breida',4200,'ARI@SF 11/05/2017 04:05PM ET',5.825,'SF'\
'RB','Marlon Mack',4100,'IND@HOU 11/05/2017 01:00PM ET',9.550,'IND'\
'WR','Allen Hurns',4100,'CIN@JAX 11/05/2017 01:00PM ET',10.786,'JAX'\
'RB','Jamaal Charles',4100,'DEN@PHI 11/05/2017 01:00PM ET',5.900,'DEN'\
'WR','Eric Decker',4100,'BAL@TEN 11/05/2017 01:00PM ET',6.514,'TEN'\
'WR','Terrelle Pryor Sr.',4100,'WAS@SEA 11/05/2017 04:05PM ET',6.614,'WAS'\
'TE','Vernon Davis',4100,'WAS@SEA 11/05/2017 04:05PM ET',7.600,'WAS'\
'QB','Garrett Gilbert',4000,'ATL@CAR 11/05/2017 01:00PM ET',0,'CAR'\
'RB','D'Onta Foreman',4000,'IND@HOU 11/05/2017 01:00PM ET',4.214,'HOU'\
'QB','Jeff Driskel',4000,'CIN@JAX 11/05/2017 01:00PM ET',0,'CIN'\
'QB','Taysom Hill',4000,'TB@NO 11/05/2017 01:00PM ET',0,'NO'\
'QB','Ryan Griffin',4000,'TB@NO 11/05/2017 01:00PM ET',0,'TB'\
'RB','Jacquizz Rodgers',4000,'TB@NO 11/05/2017 01:00PM ET',4.843,'TB'\
'QB','Brandon Allen',4000,'LAR@NYG 11/05/2017 01:00PM ET',0,'LAR'\
'QB','Davis Webb',4000,'LAR@NYG 11/05/2017 01:00PM ET',0,'NYG'\
'QB','Paxton Lynch',4000,'DEN@PHI 11/05/2017 01:00PM ET',0,'DEN'\
'QB','Chad Kelly',4000,'DEN@PHI 11/05/2017 01:00PM ET',0,'DEN'\
'WR','Bennie Fowler',4000,'DEN@PHI 11/05/2017 01:00PM ET',7.714,'DEN'\
'QB','Brandon Weeden',4000,'BAL@TEN 11/05/2017 01:00PM ET',0.000,'TEN'\
'WR','Jeremy Maclin',4000,'BAL@TEN 11/05/2017 01:00PM ET',9.700,'BAL'\
'WR','Jaron Brown',4000,'ARI@SF 11/05/2017 04:05PM ET',8.586,'ARI'\
'WR','Aldrick Robinson',4000,'ARI@SF 11/05/2017 04:05PM ET',4.100,'SF'\
'WR','Cole Beasley',4000,'KC@DAL 11/05/2017 04:25PM ET',6.300,'DAL'\
'QB','Tyler Bray',4000,'KC@DAL 11/05/2017 04:25PM ET',0,'KC'\
'RB','Frank Gore',3900,'IND@HOU 11/05/2017 01:00PM ET',9.788,'IND'\
'TE','Tyler Kroft',3900,'CIN@JAX 11/05/2017 01:00PM ET',8.829,'CIN'\
'WR','Marqise Lee',3900,'CIN@JAX 11/05/2017 01:00PM ET',8.857,'JAX'\
'RB','Malcolm Brown',3900,'LAR@NYG 11/05/2017 01:00PM ET',3.950,'LAR'\
'RB','Wendell Smallwood',3900,'DEN@PHI 11/05/2017 01:00PM ET',6.367,'PHI'\
'RB','Andre Ellington',3900,'ARI@SF 11/05/2017 04:05PM ET',9.767,'ARI'\
'DST','Jaguars ',3800,'CIN@JAX 11/05/2017 01:00PM ET',15.286,'JAX'\
'WR','Willie Snead',3800,'TB@NO 11/05/2017 01:00PM ET',1.050,'NO'\
'RB','Orleans Darkwa',3800,'LAR@NYG 11/05/2017 01:00PM ET',8.100,'NYG'\
'WR','Marquise Goodwin',3800,'ARI@SF 11/05/2017 04:05PM ET',7.313,'SF'\
'WR','Taylor Gabriel',3700,'ATL@CAR 11/05/2017 01:00PM ET',6.014,'ATL'\
'TE','Austin Hooper',3700,'ATL@CAR 11/05/2017 01:00PM ET',9.500,'ATL'\
'RB','Alfred Blue',3700,'IND@HOU 11/05/2017 01:00PM ET',0.825,'HOU'\
'DST','Titans ',3700,'BAL@TEN 11/05/2017 01:00PM ET',6.143,'TEN'\
'RB','Terrance West',3700,'BAL@TEN 11/05/2017 01:00PM ET',5.820,'BAL'\
'RB','Danny Woodhead',3700,'BAL@TEN 11/05/2017 01:00PM ET',6.700,'BAL'\
'RB','C.J. Prosise',3700,'WAS@SEA 11/05/2017 04:05PM ET',4.175,'SEA'\
'RB','Rob Kelley',3700,'WAS@SEA 11/05/2017 04:05PM ET',5.200,'WAS'\
'DST','Texans ',3600,'IND@HOU 11/05/2017 01:00PM ET',8.000,'HOU'\
'RB','De'Angelo Henderson',3600,'DEN@PHI 11/05/2017 01:00PM ET',0.033,'DEN'\
'WR','Mike Wallace',3600,'BAL@TEN 11/05/2017 01:00PM ET',7.171,'BAL'\
'RB','Samaje Perine',3600,'WAS@SEA 11/05/2017 04:05PM ET',4.229,'WAS'\
'WR','Albert Wilson',3600,'KC@DAL 11/05/2017 04:25PM ET',7.386,'KC'\
'RB','Jonathan Stewart',3500,'ATL@CAR 11/05/2017 01:00PM ET',6.788,'CAR'\
'WR','Dede Westbrook',3500,'CIN@JAX 11/05/2017 01:00PM ET',0,'JAX'\
'RB','Devontae Booker',3500,'DEN@PHI 11/05/2017 01:00PM ET',8.400,'DEN'\
'DST','Cardinals ',3500,'ARI@SF 11/05/2017 04:05PM ET',4.714,'ARI'\
'DST','Seahawks ',3500,'WAS@SEA 11/05/2017 04:05PM ET',10.000,'SEA'\
'WR','Ryan Grant',3500,'WAS@SEA 11/05/2017 04:05PM ET',7.786,'WAS'\
'WR','Brandon LaFell',3400,'CIN@JAX 11/05/2017 01:00PM ET',6.714,'CIN'\
'WR','Brandon Coleman',3400,'TB@NO 11/05/2017 01:00PM ET',7.929,'NO'\
'DST','Saints ',3400,'TB@NO 11/05/2017 01:00PM ET',10.286,'NO'\
'RB','Charles Sims',3400,'TB@NO 11/05/2017 01:00PM ET',3.957,'TB'\
'RB','Wayne Gallman',3400,'LAR@NYG 11/05/2017 01:00PM ET',9.075,'NYG'\
'RB','Corey Clement',3400,'DEN@PHI 11/05/2017 01:00PM ET',3.775,'PHI'\
'TE','Jonnu Smith',3400,'BAL@TEN 11/05/2017 01:00PM ET',4.814,'TEN'\
'RB','Kerwynn Williams',3400,'ARI@SF 11/05/2017 04:05PM ET',2.643,'ARI'\
'WR','Justin Hardy',3300,'ATL@CAR 11/05/2017 01:00PM ET',3.229,'ATL'\
'RB','Giovani Bernard',3300,'CIN@JAX 11/05/2017 01:00PM ET',7.100,'CIN'\
'RB','Corey Grant',3300,'CIN@JAX 11/05/2017 01:00PM ET',2.514,'JAX'\
'WR','Adam Humphries',3300,'TB@NO 11/05/2017 01:00PM ET',8.243,'TB'\
'WR','Roger Lewis',3300,'LAR@NYG 11/05/2017 01:00PM ET',4.129,'NYG'\
'WR','Torrey Smith',3300,'DEN@PHI 11/05/2017 01:00PM ET',5.088,'PHI'\
'DST','Eagles ',3300,'DEN@PHI 11/05/2017 01:00PM ET',9.750,'PHI'\
'WR','J.J. Nelson',3300,'ARI@SF 11/05/2017 04:05PM ET',9.600,'ARI'\
'RB','Thomas Rawls',3300,'WAS@SEA 11/05/2017 04:05PM ET',2.200,'SEA'\
'WR','Terrance Williams',3300,'KC@DAL 11/05/2017 04:25PM ET',6.086,'DAL'\
'WR','Andre Roberts',3200,'ATL@CAR 11/05/2017 01:00PM ET',0.314,'ATL'\
'WR','Donte Moncrief',3200,'IND@HOU 11/05/2017 01:00PM ET',6.388,'IND'\
'RB','Shane Vereen',3200,'LAR@NYG 11/05/2017 01:00PM ET',6.129,'NYG'\
'RB','Paul Perkins',3200,'LAR@NYG 11/05/2017 01:00PM ET',4.150,'NYG'\
'WR','Travis Rudolph',3200,'LAR@NYG 11/05/2017 01:00PM ET',3.100,'NYG'\
'TE','George Kittle',3200,'ARI@SF 11/05/2017 04:05PM ET',6.875,'SF'\
'DST','49ers ',3200,'ARI@SF 11/05/2017 04:05PM ET',4.000,'SF'\
'RB','Eddie Lacy',3200,'WAS@SEA 11/05/2017 04:05PM ET',2.920,'SEA'\
'RB','J.D. McKissic',3200,'WAS@SEA 11/05/2017 04:05PM ET',8.400,'SEA'\
'RB','Rod Smith',3200,'KC@DAL 11/05/2017 04:25PM ET',1.600,'DAL'\
'WR','Brice Butler',3200,'KC@DAL 11/05/2017 04:25PM ET',5.814,'DAL'\
'WR','Demarcus Robinson',3200,'KC@DAL 11/05/2017 04:25PM ET',2.688,'KC'\
'WR','Russell Shepard',3100,'ATL@CAR 11/05/2017 01:00PM ET',3.788,'CAR'\
'WR','Curtis Samuel',3100,'ATL@CAR 11/05/2017 01:00PM ET',2.386,'CAR'\
'TE','Ed Dickson',3100,'ATL@CAR 11/05/2017 01:00PM ET',7.488,'CAR'\
'RB','Jeremy Hill',3100,'CIN@JAX 11/05/2017 01:00PM ET',2.457,'CIN'\
'WR','Tavon Austin',3100,'LAR@NYG 11/05/2017 01:00PM ET',3.986,'LAR'\
'DST','Rams ',3100,'LAR@NYG 11/05/2017 01:00PM ET',12.286,'LAR'\
'WR','Tavarres King',3100,'LAR@NYG 11/05/2017 01:00PM ET',1.000,'NYG'\
'RB','Kenjon Barner',3100,'DEN@PHI 11/05/2017 01:00PM ET',1.680,'PHI'\
'WR','Taywan Taylor',3100,'BAL@TEN 11/05/2017 01:00PM ET',5.200,'TEN'\
'WR','Michael Campanaro',3100,'BAL@TEN 11/05/2017 01:00PM ET',4.343,'BAL'\
'RB','Terron Ward',3000,'ATL@CAR 11/05/2017 01:00PM ET',0.000,'ATL'\
'RB','Derrick Coleman',3000,'ATL@CAR 11/05/2017 01:00PM ET',0.300,'ATL'\
'WR','Marvin Hall',3000,'ATL@CAR 11/05/2017 01:00PM ET',5.500,'ATL'\
'WR','Nick Williams',3000,'ATL@CAR 11/05/2017 01:00PM ET',6.000,'ATL'\
'RB','Fozzy Whittaker',3000,'ATL@CAR 11/05/2017 01:00PM ET',2.233,'CAR'\
'RB','Cameron Artis-Payne',3000,'ATL@CAR 11/05/2017 01:00PM ET',0.400,'CAR'\
'RB','Alex Armah',3000,'ATL@CAR 11/05/2017 01:00PM ET',0.000,'CAR'\
'WR','Damiere Byrd',3000,'ATL@CAR 11/05/2017 01:00PM ET',0.300,'CAR'\
'WR','Kaelin Clay',3000,'ATL@CAR 11/05/2017 01:00PM ET',0.760,'CAR'\
'RB','Jay Prosch',3000,'IND@HOU 11/05/2017 01:00PM ET',0.400,'HOU'\
'RB','Jordan Todman',3000,'IND@HOU 11/05/2017 01:00PM ET',0.000,'HOU'\
'WR','Bruce Ellington',3000,'IND@HOU 11/05/2017 01:00PM ET',6.000,'HOU'\
'WR','Braxton Miller',3000,'IND@HOU 11/05/2017 01:00PM ET',2.600,'HOU'\
'WR','Chris Thompson',3000,'IND@HOU 11/05/2017 01:00PM ET',0.725,'HOU'\
'TE','Ryan Griffin',3000,'IND@HOU 11/05/2017 01:00PM ET',6.133,'HOU'\
'TE','C.J. Fiedorowicz',3000,'IND@HOU 11/05/2017 01:00PM ET',8.600,'HOU'\
'RB','Matt Jones',3000,'IND@HOU 11/05/2017 01:00PM ET',0.467,'IND'\
'RB','George Winn',3000,'IND@HOU 11/05/2017 01:00PM ET',0,'IND'\
'RB','Josh Ferguson',3000,'IND@HOU 11/05/2017 01:00PM ET',0.250,'IND'\
'WR','Chester Rogers',3000,'IND@HOU 11/05/2017 01:00PM ET',2.333,'IND'\
'WR','Quan Bray',3000,'IND@HOU 11/05/2017 01:00PM ET',0.863,'IND'\
'WR','Kamar Aiken',3000,'IND@HOU 11/05/2017 01:00PM ET',3.388,'IND'\
'RB','Tra Carson',3000,'CIN@JAX 11/05/2017 01:00PM ET',0,'CIN'\
'WR','John Ross',3000,'CIN@JAX 11/05/2017 01:00PM ET',0.100,'CIN'\
'WR','Tyler Boyd',3000,'CIN@JAX 11/05/2017 01:00PM ET',2.575,'CIN'\
'WR','Josh Malone',3000,'CIN@JAX 11/05/2017 01:00PM ET',5.750,'CIN'\
'WR','Alex Erickson',3000,'CIN@JAX 11/05/2017 01:00PM ET',2.229,'CIN'\
'WR','Cody Core',3000,'CIN@JAX 11/05/2017 01:00PM ET',0.000,'CIN'\
'RB','Tommy Bohanon',3000,'CIN@JAX 11/05/2017 01:00PM ET',2.100,'JAX'\
'WR','Jaelen Strong',3000,'CIN@JAX 11/05/2017 01:00PM ET',0.000,'JAX'\
'WR','Keelan Cole',3000,'CIN@JAX 11/05/2017 01:00PM ET',2.729,'JAX'\
'WR','Arrelious Benn',3000,'CIN@JAX 11/05/2017 01:00PM ET',0.314,'JAX'\
'WR','Jaydon Mickens',3000,'CIN@JAX 11/05/2017 01:00PM ET',0.000,'JAX'\
'RB','Daniel Lasco II',3000,'TB@NO 11/05/2017 01:00PM ET',0.000,'NO'\
'RB','Trey Edmunds',3000,'TB@NO 11/05/2017 01:00PM ET',0.000,'NO'\
'RB','Zach Line',3000,'TB@NO 11/05/2017 01:00PM ET',0.000,'NO'\
'WR','Tommylee Lewis',3000,'TB@NO 11/05/2017 01:00PM ET',2.700,'NO'\
'WR','Austin Carr',3000,'TB@NO 11/05/2017 01:00PM ET',0.000,'NO'\
'RB','Peyton Barber',3000,'TB@NO 11/05/2017 01:00PM ET',0.700,'TB'\
'WR','Bernard Reedy',3000,'TB@NO 11/05/2017 01:00PM ET',0.471,'TB'\
'WR','Chris Godwin',3000,'TB@NO 11/05/2017 01:00PM ET',2.057,'TB'\
'RB','Lance Dunbar',3000,'LAR@NYG 11/05/2017 01:00PM ET',0,'LAR'\
'RB','Justin Davis',3000,'LAR@NYG 11/05/2017 01:00PM ET',0.050,'LAR'\
'WR','Pharoh Cooper',3000,'LAR@NYG 11/05/2017 01:00PM ET',1.514,'LAR'\
'WR','Michael Thomas',3000,'LAR@NYG 11/05/2017 01:00PM ET',0.000,'LAR'\
'WR','Josh Reynolds',3000,'LAR@NYG 11/05/2017 01:00PM ET',0.543,'LAR'\
'WR','Ed Eagan',3000,'LAR@NYG 11/05/2017 01:00PM ET',0.000,'NYG'\
'DST','Giants ',3000,'LAR@NYG 11/05/2017 01:00PM ET',6.000,'NYG'\
'RB','Andy Janovich',3000,'DEN@PHI 11/05/2017 01:00PM ET',0.557,'DEN'\
'WR','Jordan Taylor',3000,'DEN@PHI 11/05/2017 01:00PM ET',2.275,'DEN'\
'WR','Cody Latimer',3000,'DEN@PHI 11/05/2017 01:00PM ET',1.925,'DEN'\
'WR','Isaiah McKenzie',3000,'DEN@PHI 11/05/2017 01:00PM ET',0.067,'DEN'\
'WR','Marcus Johnson',3000,'DEN@PHI 11/05/2017 01:00PM ET',0.600,'PHI'\
'WR','Mack Hollins',3000,'DEN@PHI 11/05/2017 01:00PM ET',3.800,'PHI'\
'WR','Shelton Gibson',3000,'DEN@PHI 11/05/2017 01:00PM ET',0.000,'PHI'\
'RB','Jalston Fowler',3000,'BAL@TEN 11/05/2017 01:00PM ET',0.900,'TEN'\
'RB','David Fluellen',3000,'BAL@TEN 11/05/2017 01:00PM ET',0.300,'TEN'\
'WR','Eric Weems',3000,'BAL@TEN 11/05/2017 01:00PM ET',0.214,'TEN'\
'WR','Darius Jennings',3000,'BAL@TEN 11/05/2017 01:00PM ET',0,'TEN'\
'RB','Bobby Rainey',3000,'BAL@TEN 11/05/2017 01:00PM ET',3.967,'BAL'\
'WR','Chris Matthews',3000,'BAL@TEN 11/05/2017 01:00PM ET',0.917,'BAL'\
'WR','Chris Moore',3000,'BAL@TEN 11/05/2017 01:00PM ET',4.900,'BAL'\
'WR','Griff Whalen',3000,'BAL@TEN 11/05/2017 01:00PM ET',3.150,'BAL'\
'WR','Breshad Perriman',3000,'BAL@TEN 11/05/2017 01:00PM ET',0.943,'BAL'\
'RB','Elijhaa Penny',3000,'ARI@SF 11/05/2017 04:05PM ET',0.243,'ARI'\
'RB','T.J. Logan',3000,'ARI@SF 11/05/2017 04:05PM ET',0,'ARI'\
'RB','D.J. Foster',3000,'ARI@SF 11/05/2017 04:05PM ET',0,'ARI'\
'WR','Brittan Golden',3000,'ARI@SF 11/05/2017 04:05PM ET',1.714,'ARI'\
'WR','Chad Williams',3000,'ARI@SF 11/05/2017 04:05PM ET',2.150,'ARI'\
'RB','Raheem Mostert',3000,'ARI@SF 11/05/2017 04:05PM ET',0.250,'SF'\
'RB','Kyle Juszczyk',3000,'ARI@SF 11/05/2017 04:05PM ET',4.050,'SF'\
'WR','Trent Taylor',3000,'ARI@SF 11/05/2017 04:05PM ET',5.650,'SF'\
'WR','Victor Bolden Jr.',3000,'ARI@SF 11/05/2017 04:05PM ET',0.000,'SF'\
'WR','Kendrick Bourne',3000,'ARI@SF 11/05/2017 04:05PM ET',0.000,'SF'\
'RB','Tre Madden',3000,'WAS@SEA 11/05/2017 04:05PM ET',1.214,'SEA'\
'WR','Tanner McEvoy',3000,'WAS@SEA 11/05/2017 04:05PM ET',0.757,'SEA'\
'WR','Amara Darboh',3000,'WAS@SEA 11/05/2017 04:05PM ET',1.500,'SEA'\
'WR','Brian Quick',3000,'WAS@SEA 11/05/2017 04:05PM ET',0.420,'WAS'\
'RB','Keith Smith',3000,'KC@DAL 11/05/2017 04:25PM ET',0.429,'DAL'\
'WR','Ryan Switzer',3000,'KC@DAL 11/05/2017 04:25PM ET',0.400,'DAL'\
'WR','Noah Brown',3000,'KC@DAL 11/05/2017 04:25PM ET',0.460,'DAL'\
'RB','Akeem Hunt',3000,'KC@DAL 11/05/2017 04:25PM ET',0.200,'KC'\
'RB','Anthony Sherman',3000,'KC@DAL 11/05/2017 04:25PM ET',0.263,'KC'\
'WR','Jehu Chesson',3000,'KC@DAL 11/05/2017 04:25PM ET',0.000,'KC'\
'WR','De'Anthony Thomas',3000,'KC@DAL 11/05/2017 04:25PM ET',3.488,'KC'\
'TE','A.J. Derby',2900,'DEN@PHI 11/05/2017 01:00PM ET',7.014,'DEN'\
'DST','Ravens ',2900,'BAL@TEN 11/05/2017 01:00PM ET',13.000,'BAL'\
'TE','Stephen Anderson',2800,'IND@HOU 11/05/2017 01:00PM ET',4.117,'HOU'\
'DST','Bengals ',2800,'CIN@JAX 11/05/2017 01:00PM ET',7.857,'CIN'\
'TE','Tyler Higbee',2800,'LAR@NYG 11/05/2017 01:00PM ET',4.557,'LAR'\
'DST','Panthers ',2700,'ATL@CAR 11/05/2017 01:00PM ET',8.500,'CAR'\
'TE','Coby Fleener',2700,'TB@NO 11/05/2017 01:00PM ET',5.857,'NO'\
'TE','O.J. Howard',2700,'TB@NO 11/05/2017 01:00PM ET',7.586,'TB'\
'TE','Benjamin Watson',2700,'BAL@TEN 11/05/2017 01:00PM ET',8.125,'BAL'\
'DST','Falcons ',2600,'ATL@CAR 11/05/2017 01:00PM ET',5.143,'ATL'\
'TE','Marcedes Lewis',2600,'CIN@JAX 11/05/2017 01:00PM ET',5.929,'JAX'\
'TE','Gerald Everett',2600,'LAR@NYG 11/05/2017 01:00PM ET',4.057,'LAR'\
'DST','Broncos ',2600,'DEN@PHI 11/05/2017 01:00PM ET',6.429,'DEN'\
'TE','Niles Paul',2600,'WAS@SEA 11/05/2017 04:05PM ET',0.686,'WAS'\
'TE','Eric Saubert',2500,'ATL@CAR 11/05/2017 01:00PM ET',0.000,'ATL'\
'TE','Levine Toilolo',2500,'ATL@CAR 11/05/2017 01:00PM ET',1.300,'ATL'\
'TE','Chris Manhertz',2500,'ATL@CAR 11/05/2017 01:00PM ET',0.263,'CAR'\
'TE','Erik Swoope',2500,'IND@HOU 11/05/2017 01:00PM ET',0,'IND'\
'TE','Brandon Williams',2500,'IND@HOU 11/05/2017 01:00PM ET',1.900,'IND'\
'TE','Darrell Daniels',2500,'IND@HOU 11/05/2017 01:00PM ET',0.700,'IND'\
'TE','C.J. Uzomah',2500,'CIN@JAX 11/05/2017 01:00PM ET',1.380,'CIN'\
'TE','Ryan Hewitt',2500,'CIN@JAX 11/05/2017 01:00PM ET',0.650,'CIN'\
'TE','Clark Harris',2500,'CIN@JAX 11/05/2017 01:00PM ET',0.000,'CIN'\
'TE','Cethan Carter',2500,'CIN@JAX 11/05/2017 01:00PM ET',0.000,'CIN'\
'TE','James O'Shaughnessy',2500,'CIN@JAX 11/05/2017 01:00PM ET',1.157,'JAX'\
'TE','Ben Koyack',2500,'CIN@JAX 11/05/2017 01:00PM ET',0.686,'JAX'\
'TE','Michael Hoomanawanui',2500,'TB@NO 11/05/2017 01:00PM ET',2.114,'NO'\
'TE','Josh Hill',2500,'TB@NO 11/05/2017 01:00PM ET',1.871,'NO'\
'TE','Antony Auclair',2500,'TB@NO 11/05/2017 01:00PM ET',0.000,'TB'\
'TE','Luke Stocker',2500,'TB@NO 11/05/2017 01:00PM ET',0.214,'TB'\
'TE','Derek Carrier',2500,'LAR@NYG 11/05/2017 01:00PM ET',0.971,'LAR'\
'TE','Jerell Adams',2500,'LAR@NYG 11/05/2017 01:00PM ET',1.214,'NYG'\
'TE','Rhett Ellison',2500,'LAR@NYG 11/05/2017 01:00PM ET',2.429,'NYG'\
'TE','Matt LaCosse',2500,'LAR@NYG 11/05/2017 01:00PM ET',0.000,'NYG'\
'TE','Jeff Heuerman',2500,'DEN@PHI 11/05/2017 01:00PM ET',2.571,'DEN'\
'TE','Virgil Green',2500,'DEN@PHI 11/05/2017 01:00PM ET',3.857,'DEN'\
'TE','Jake Butt',2500,'DEN@PHI 11/05/2017 01:00PM ET',0,'DEN'\
'TE','Trey Burton',2500,'DEN@PHI 11/05/2017 01:00PM ET',2.750,'PHI'\
'TE','Brent Celek',2500,'DEN@PHI 11/05/2017 01:00PM ET',0.913,'PHI'\
'TE','Phillip Supernaw',2500,'BAL@TEN 11/05/2017 01:00PM ET',1.557,'TEN'\
'TE','Beau Brinkley',2500,'BAL@TEN 11/05/2017 01:00PM ET',0.000,'TEN'\
'TE','Maxx Williams',2500,'BAL@TEN 11/05/2017 01:00PM ET',2.800,'BAL'\
'TE','Nick Boyle',2500,'BAL@TEN 11/05/2017 01:00PM ET',4.225,'BAL'\
'TE','Vince Mayle',2500,'BAL@TEN 11/05/2017 01:00PM ET',0.775,'BAL'\
'TE','Gavin Escobar',2500,'BAL@TEN 11/05/2017 01:00PM ET',0.000,'BAL'\
'TE','Jermaine Gresham',2500,'ARI@SF 11/05/2017 04:05PM ET',4.833,'ARI'\
'TE','Ifeanyi Momah',2500,'ARI@SF 11/05/2017 04:05PM ET',0.800,'ARI'\
'TE','Ricky Seals-Jones',2500,'ARI@SF 11/05/2017 04:05PM ET',0.000,'ARI'\
'TE','Troy Niklas',2500,'ARI@SF 11/05/2017 04:05PM ET',2.086,'ARI'\
'TE','Cole Hikutini',2500,'ARI@SF 11/05/2017 04:05PM ET',1.167,'SF'\
'TE','Garrett Celek',2500,'ARI@SF 11/05/2017 04:05PM ET',2.263,'SF'\
'TE','Kyle Nelson',2500,'ARI@SF 11/05/2017 04:05PM ET',0.000,'SF'\
'TE','Luke Willson',2500,'WAS@SEA 11/05/2017 04:05PM ET',4.243,'SEA'\
'TE','Tyler Ott',2500,'WAS@SEA 11/05/2017 04:05PM ET',0.000,'SEA'\
'TE','Nick Vannett',2500,'WAS@SEA 11/05/2017 04:05PM ET',1.186,'SEA'\
'TE','Jeremy Sprinkle',2500,'WAS@SEA 11/05/2017 04:05PM ET',0.000,'WAS'\
'TE','James Hanna',2500,'KC@DAL 11/05/2017 04:25PM ET',1.400,'DAL'\
'TE','Geoff Swaim',2500,'KC@DAL 11/05/2017 04:25PM ET',0.643,'DAL'\
'TE','Rico Gathers',2500,'KC@DAL 11/05/2017 04:25PM ET',0,'DAL'\
'TE','Blake Jarwin',2500,'KC@DAL 11/05/2017 04:25PM ET',0,'DAL'\
'TE','Ross Travis',2500,'KC@DAL 11/05/2017 04:25PM ET',0.738,'KC'\
'TE','Demetrius Harris',2500,'KC@DAL 11/05/2017 04:25PM ET',2.275,'KC'\
'TE','James Winchester',2500,'KC@DAL 11/05/2017 04:25PM ET',0.000,'KC'\
'DST','Chiefs ',2500,'KC@DAL 11/05/2017 04:25PM ET',8.750,'KC'\
'DST','Redskins ',2400,'WAS@SEA 11/05/2017 04:05PM ET',7.143,'WAS'\
'DST','Cowboys ',2300,'KC@DAL 11/05/2017 04:25PM ET',8.143,'DAL'\
'DST','Buccaneers ',2100,'TB@NO 11/05/2017 01:00PM ET',5.571,'TB'\
'DST','Colts ',2000,'IND@HOU 11/05/2017 01:00PM ET',6.250,'IND'";