export interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: string;
  }
  
  export interface Category {
    id: string;
    name: string;
    description: string;
    icon: string;
    questions: Question[];
  }
  
  export const categories: Category[] = [
    {
        "id": "belysning",
        "name": "Belysning & Signaler",
        "description": "Frågor om fordonsbelysning, signaler och synlighet.",
        "icon": "💡",
        "questions": [
          {
            "id": 1,
            "text": "Vad ska du kontrollera gällande belysningen?",
            "options": [
              "Endast att strålkastarna fungerar.",
              "Att alla lampor är rena.",
              "Att alla lampor är hela, rena och fungerar.",
              "Endast bakljusen."
            ],
            "correctAnswer": "Att alla lampor är hela, rena och fungerar."
          },
          {
            "id": 2,
            "text": "Vad händer om ett strålkastarglas är sprucket?",
            "options": [
              "Det är okej så länge ljuset fungerar.",
              "Ljuset kan spridas och blända andra förare, dessutom kan fukt skada reflektorn.",
              "Det spelar ingen roll.",
              "Glaset skyddar reflektorn."
            ],
            "correctAnswer": "Ljuset kan spridas och blända andra förare, dessutom kan fukt skada reflektorn."
          },
          {
            "id": 3,
            "text": "Vad är minimikravet på belysning under dagsljus och god sikt?",
            "options": [
              "Strålkastare och bakljus.",
              "Endast positionsljus.",
              "Halvljus, dimljus eller varselljus fram, inget bakljus eller sidomarkeringsljus.",
              "Endast helljus."
            ],
            "correctAnswer": "Halvljus, dimljus eller varselljus fram, inget bakljus eller sidomarkeringsljus."
          },
          {
            "id": 4,
            "text": "Vad är minimikravet på belysning under gryning, skymning, mörker eller dålig sikt?",
            "options": [
              "Endast strålkastare.",
              "Endast helljus.",
              "Halvljus, bakljus och sidomarkeringsljus.",
              "Endast dimljus."
            ],
            "correctAnswer": "Halvljus, bakljus och sidomarkeringsljus."
          },
          {
            "id": 5,
            "text": "Vilka är konsekvenserna om ett halvljus inte fungerar?",
            "options": [
              "Inga problem så länge det andra fungerar.",
              "Andra trafikanter kan uppfatta dig som en motorcykel/moped och din synlighet minskar.",
              "Helljuset kommer att kompensera.",
              "Inga, så länge dimljusen fungerar."
            ],
            "correctAnswer": "Andra trafikanter kan uppfatta dig som en motorcykel/moped och din synlighet minskar."
          },
          {
            "id": 6,
            "text": "Vad är risken med smutsiga lampor och reflektorer?",
            "options": [
              "Ingen risk alls.",
              "Endast ett estetiskt problem.",
              "Du ser sämre och syns sämre.",
              "Påverkar endast bränsleförbrukningen."
            ],
            "correctAnswer": "Du ser sämre och syns sämre."
          },
          {
            "id": 7,
            "text": "En av lamporna på din lastbil fungerar inte, vad är det troliga problemet?",
            "options": [
              "Batteriet är dött.",
              "Glödlampan är trasig eller det finns en lös anslutning.",
              "Generatorn laddar inte.",
              "Startmotorn är trasig."
            ],
            "correctAnswer": "Glödlampan är trasig eller det finns en lös anslutning."
          },
          {
            "id": 8,
            "text": "Flera lampor slocknar på din lastbil. Vad är det troliga problemet?",
            "options": [
              "Batteriet är dött.",
              "En säkring har gått.",
              "Generatorn laddar inte.",
              "Startmotorn är trasig."
            ],
            "correctAnswer": "En säkring har gått."
          },
          {
            "id": 9,
            "text": "Finns det någon risk med en signal/tuta som inte fungerar, vilka är konsekvenserna?",
            "options": [
              "Ingen risk om du har bra bromsar.",
              "Du kan inte varna andra trafikanter, avvärja faror och förhindra olyckor.",
              "Du kan bara ropa istället.",
              "Det påverkar endast besiktningen."
            ],
            "correctAnswer": "Du kan inte varna andra trafikanter, avvärja faror och förhindra olyckor."
          }
        ]
      },
      {
        "id": "styrning",
        "name": "Styrning",
        "description": "Frågor om fordonets styrsystem.",
        "icon": "🚗",
        "questions": [
          {
            "id": 1,
            "text": "Du körde framåt, varför styrde du fullt till vänster och fullt till höger?",
            "options": [
              "För att imponera på inspektören.",
              "Kontroll av styr- och servofunktionen.",
              "För att värma upp däcken.",
              "För att testa bilens manövrerbarhet."
            ],
            "correctAnswer": "Kontroll av styr- och servofunktionen."
          },
          {
            "id": 2,
            "text": "Hur vet du om det är något problem med styrningen?",
            "options": [
              "Om bilen inte går rakt.",
              "Det ska inte gå tungt och det ska inte hugga i ratten när man styr.",
              "Om däcken slits ojämnt.",
              "Om det gnisslar när man svänger."
            ],
            "correctAnswer": "Det ska inte gå tungt och det ska inte hugga i ratten när man styr."
          },
          {
            "id": 3,
            "text": "Vad kan vara fel om det hugger i ratten eller är tungt att styra?",
            "options": [
              "Lågt däcktryck.",
              "Det kan vara luft, smuts, skadade ventiler eller dåligt med olja i styrservosystemet.",
              "Ratten är för liten.",
              "Hjulen är feljusterade."
            ],
            "correctAnswer": "Det kan vara luft, smuts, skadade ventiler eller dåligt med olja i styrservosystemet."
          },
          {
            "id": 4,
            "text": "Du upptäcker problem med styrningen. Hur åtgärdar du problemet?",
            "options": [
              "Fyller på luft i däcken.",
              "Kontrollerar styrservons oljenivå och letar efter eventuellt läckage. Anlitar verkstad omgående.",
              "Smörjer upp styrstagarna.",
              "Ignorerar det tills det blir värre."
            ],
            "correctAnswer": "Kontrollerar styrservons oljenivå och letar efter eventuellt läckage. Anlitar verkstad omgående."
          },
          {
            "id": 5,
            "text": "Var tar du reda på hur du kontrollerar oljenivån och vilken olja det ska vara till styrservon?",
            "options": [
              "På internet.",
              "Instruktionsboken.",
              "Frågar en vän.",
              "Gissar mig fram."
            ],
            "correctAnswer": "Instruktionsboken."
          },
          {
            "id": 6,
            "text": "Kan man köra ett fordon när styrservon är ur funktion?",
            "options": [
              "Ja, men man bör inte göra det då det blir oerhört tungstyrt och därmed trafikfarligt.",
              "Ja, det är bara lite jobbigare.",
              "Nej, det är olagligt.",
              "Ja, men bara korta sträckor."
            ],
            "correctAnswer": "Ja, men man bör inte göra det då det blir oerhört tungstyrt och därmed trafikfarligt."
          }
        ]
      },
      {
        "id": "bromsar",
        "name": "Bromsar",
        "description": "Frågor om fordonets bromssystem.",
        "icon": "🛑",
        "questions": [
          {
            "id": 1,
            "text": "Varför pumpade/bromsade du (i snabb följd) med bromspedalen?",
            "options": [
              "För att värma upp bromsarna.",
              "För att kontrollera bromsbeläggen.",
              "För att kontrollera funktion av lågtrycksindikator/summer samt de kontrollampor som varnar för lågt bromstryck.",
              "För att rengöra bromsarna."
            ],
            "correctAnswer": "För att kontrollera funktion av lågtrycksindikator/summer samt de kontrollampor som varnar för lågt bromstryck."
          },
          {
            "id": 2,
            "text": "Vid vilket tryck startar summern och tänds lamporna som varnar för lågt lufttryck?",
            "options": [
              "2,5-3,5 bar.",
              "3,5-4,5 bar.",
              "4,5-5,5 bar.",
              "5,5-6,5 bar."
            ],
            "correctAnswer": "4,5-5,5 bar."
          },
          {
            "id": 3,
            "text": "Kan du upptäcka att du har lågt lufttryck innan summern startar och lamporna för lågt lufttryck tänds?",
            "options": [
              "Nej, det är omöjligt.",
              "Ja, på manometrarna/bromstrycksmätarna på instrumentpanelen.",
              "Endast genom att lyssna efter läckage.",
              "Genom att känna på bromspedalen."
            ],
            "correctAnswer": "Ja, på manometrarna/bromstrycksmätarna på instrumentpanelen."
          },
          {
            "id": 4,
            "text": "Vad räknas som normalt arbetstryck, när börjar respektive slutar kompressorn att ladda tryckluft till bromssystemet?",
            "options": [
              "Kompressorn slutar ladda tryckluft när maximalt arbetstryck uppnåtts, 6 bar (bladfjädrad) till 10 bar (luftfjädrad). Kompressorn börjar ladda luft igen vid 4,5 bar (bladfjädrad) till 8,5 bar (luftfjädrad).",
              "Kompressorn slutar ladda tryckluft när maximalt arbetstryck uppnåtts, 8 bar (bladfjädrad) till 12 bar (luftfjädrad). Kompressorn börjar ladda luft igen vid 6,5 bar (bladfjädrad) till 10,5 bar (luftfjädrad).",
              "Kompressorn slutar ladda tryckluft när maximalt arbetstryck uppnåtts, 10 bar (bladfjädrad) till 14 bar (luftfjädrad). Kompressorn börjar ladda luft igen vid 8,5 bar (bladfjädrad) till 12,5 bar (luftfjädrad).",
              "Kompressorn slutar ladda tryckluft när maximalt arbetstryck uppnåtts, 12 bar (bladfjädrad) till 16 bar (luftfjädrad). Kompressorn börjar ladda luft igen vid 10,5 bar (bladfjädrad) till 14,5 bar (luftfjädrad)."
            ],
            "correctAnswer": "Kompressorn slutar ladda tryckluft när maximalt arbetstryck uppnåtts, 8 bar (bladfjädrad) till 12 bar (luftfjädrad). Kompressorn börjar ladda luft igen vid 6,5 bar (bladfjädrad) till 10,5 bar (luftfjädrad)."
          },
          {
            "id": 5,
            "text": "Varför finns det två mätare för färdbromstrycket?",
            "options": [
              "En för framhjulen och en för bakhjulen.",
              "En för föraren och en för passageraren.",
              "En för släpvagnen och en för lastbilen.",
              "En för färdbromsen och en för parkeringsbromsen."
            ],
            "correctAnswer": "En för framhjulen och en för bakhjulen."
          },
          {
            "id": 6,
            "text": "Varför är färdbromsen uppdelad i två kretsar?",
            "options": [
              "För att kunna bromsa snabbare.",
              "Om det är läckage i den ena kretsen så finns det fortfarande tryckluft/bromsverkan kvar i den andra kretsen.",
              "För att fördela bromskraften jämnare.",
              "För att minska slitaget på bromsbeläggen."
            ],
            "correctAnswer": "Om det är läckage i den ena kretsen så finns det fortfarande tryckluft/bromsverkan kvar i den andra kretsen."
          },
          {
            "id": 7,
            "text": "Vad ska du tänka på vid inbromsning om du har läckage på den ena av bromskretsarna, kan det påverka din färdbroms?",
            "options": [
              "Nej, det påverkar inte bromsningen.",
              "Ja, jag ska räkna med att inbromsningen inte blir lika effektiv och att köregenskaperna försämras.",
              "Det påverkar bara om jag bromsar hårt.",
              "Endast om läckaget är mycket stort."
            ],
            "correctAnswer": "Ja, jag ska räkna med att inbromsningen inte blir lika effektiv och att köregenskaperna försämras."
          },
          {
            "id": 8,
            "text": "Du höll tryck på färdbromsen och släppte/lossade parkeringsbromsen. Varför gjorde du det?",
            "options": [
              "För att testa parkeringsbromsens funktion.",
              "Jag gjorde en läckagekontroll av färd- och parkeringsbromssystemet.",
              "För att värma upp bromsarna.",
              "För att lufta bromsarna."
            ],
            "correctAnswer": "Jag gjorde en läckagekontroll av färd- och parkeringsbromssystemet."
          },
          {
            "id": 9,
            "text": "Hur vet du om något av systemen läcker?",
            "options": [
              "Genom att titta på bromsbeläggen.",
              "Jag lyssnar efter luftläckage och kontrollerar om trycket sjunker på någon av manometrarna/bromstrycksmätarna på instrumentpanelen.",
              "Genom att känna på bromspedalen.",
              "Genom att se om det är olja på marken."
            ],
            "correctAnswer": "Jag lyssnar efter luftläckage och kontrollerar om trycket sjunker på någon av manometrarna/bromstrycksmätarna på instrumentpanelen."
          },
          {
            "id": 10,
            "text": "Du upptäcker en luftläcka och behöver kommunicera med verkstan. Hur tar du reda på vad det är som läcker?",
            "options": [
              "Genom att gissa.",
              "Jag kontrollerar alla slangar visuellt.",
              "Jag lyssnar efter var det pyser/trycket sjunker och anpassar mina åtgärder beroende på om jag trycker på bromspedalen eller inte.",
              "Jag kör till verkstan och låter dem undersöka."
            ],
            "correctAnswer": "Jag lyssnar efter var det pyser/trycket sjunker och anpassar mina åtgärder beroende på om jag trycker på bromspedalen eller inte."
          },
          {
            "id": 11,
            "text": "Du upptäcker en luftläcka. Hur avgör du om du får köra till verkstan eller om det är körförbud och du måste reparera läckan på plats alternativt ta bärgare?",
            "options": [
              "Om det är en liten läcka kan jag köra.",
              "Jag gör en läckagekontroll med motorn på tomgång. Tryck på färdbromsen, parkeringsbromsen ska vara släppt/lossad. Om kompressorn inte klarar av att underhålla bromstrycket, om trycket sjunker, är det körförbud. Om trycket håller sig konstant eller ökar är det inte körförbud, men jag ska jag konsultera/rådgöra med verkstan. En liten luftläcka kan snabbt bli stor.",
              "Det beror på hur långt det är till verkstan.",
              "Jag ringer polisen och frågar."
            ],
            "correctAnswer": "Jag gör en läckagekontroll med motorn på tomgång. Tryck på färdbromsen, parkeringsbromsen ska vara släppt/lossad. Om kompressorn inte klarar av att underhålla bromstrycket, om trycket sjunker, är det körförbud. Om trycket håller sig konstant eller ökar är det inte körförbud, men jag ska jag konsultera/rådgöra med verkstan. En liten luftläcka kan snabbt bli stor."
          },
          {
            "id": 12,
            "text": "Vad ska du göra om du upptäcker att du har för lågt bromstryck under färd. Summern/lågtrycksindikatorn varnar, kontrollampor för lågt bromstryck tänds på instrumentpanelen?",
            "options": [
              "Jag fortsätter till närmaste rastplats.",
              "Jag saktar ner och kör försiktigt.",
              "Jag stannar omedelbart/direkt.",
              "Jag försöker pumpa bromsarna."
            ],
            "correctAnswer": "Jag stannar omedelbart/direkt."
          },
          {
            "id": 13,
            "text": "Du behöver stanna på grund av lågt bromstryck. Du befinner dig till exempel vid ett backkrön eller direkt efter en skymd kurva där det är stor risk för att det ska ske en olycka. Parkeringsbromsen har inte ansatts/bromsats. Hur ska du bete dig för att stanna på en säkrare plats?",
            "options": [
              "Jag fortsätter till nästa lämpliga ställe.",
              "För att ta mig till en säkrare plats att stanna på sänker jag farten så att jag klarar av att hantera situationen om parkeringsbromsen tappar så mycket tryck att den plötsligt ansätts/bromsas. Jag sänker farten genom att växla ner, varvet höjs och motorbromsen blir kraftigare. Dessutom tar jag hjälp av eventuella hjälpbromsar. På så sätt undviker jag att slösa på tryckluften. Kompressorn drivs av motorns transmission. När jag växlar ner höjs även kompressorns varv, den levererar komprimerad luft i ett högre tempo. Det innebär större möjlighet för kompressorn att kunna kompensera för luftläckaget, det låga lufttrycket.",
              "Jag försöker hålla så hög fart som möjligt.",
              "Jag använder parkeringsbromsen för att sakta ner."
            ],
            "correctAnswer": "För att ta mig till en säkrare plats att stanna på sänker jag farten så att jag klarar av att hantera situationen om parkeringsbromsen tappar så mycket tryck att den plötsligt ansätts/bromsas. Jag sänker farten genom att växla ner, varvet höjs och motorbromsen blir kraftigare. Dessutom tar jag hjälp av eventuella hjälpbromsar. På så sätt undviker jag att slösa på tryckluften. Kompressorn drivs av motorns transmission. När jag växlar ner höjs även kompressorns varv, den levererar komprimerad luft i ett högre tempo. Det innebär större möjlighet för kompressorn att kunna kompensera för luftläckaget, det låga lufttrycket."
          },
          {
            "id": 14,
            "text": "Har du någon reservbroms om båda färdbromskretsarna upphör att fungerar?",
            "options": [
              "Ja, motorbromsen.",
              "Ja, parkeringsbromsen.",
              "Nej, jag har ingen reservbroms.",
              "Ja, ABS-systemet."
            ],
            "correctAnswer": "Ja, parkeringsbromsen."
          },
          {
            "id": 15,
            "text": "Vad är det för skillnad i arbetssätt mellan parkeringsbroms och färdbroms?",
            "options": [
              "Färdbromsen ansätts/bromsas med tryckluft. Parkeringsbromsen släpps/lossas med tryckluft. Parkeringsbromsen ansätts/bromsas med en fjäder i bromscylinderns parkeringsbromsdel.",
              "Färdbromsen ansätts/bromsas med en fjäder. Parkeringsbromsen ansätts/bromsas med tryckluft.",
              "Det är ingen skillnad.",
              "Båda ansätts/bromsas med tryckluft."
            ],
            "correctAnswer": "Färdbromsen ansätts/bromsas med tryckluft. Parkeringsbromsen släpps/lossas med tryckluft. Parkeringsbromsen ansätts/bromsas med en fjäder i bromscylinderns parkeringsbromsdel."
          },
          {
            "id": 16,
            "text": "Varför körde du framåt och ansatte/bromsade parkeringsbromsen?",
            "options": [
              "För att kontrollera däckslitaget.",
              "För att kontrollera parkeringsbromsens funktion. Att fjädrarna i bromscylindrarnas parkeringsbromsdel är hela.",
              "För att värma upp bromsarna.",
              "För att lufta bromsarna."
            ],
            "correctAnswer": "För att kontrollera parkeringsbromsens funktion. Att fjädrarna i bromscylindrarnas parkeringsbromsdel är hela."
          },
          {
            "id": 17,
            "text": "Vad har lastbilens tryckluftssystem för frysskydd och hur fungerar det?",
            "options": [
              "Systemet har inget frysskydd.",
              "En lufttork torkar luften/avskiljer fukten från den komprimerade luften.",
              "Systemet använder glykol.",
              "Systemet använder en värmare."
            ],
            "correctAnswer": "En lufttork torkar luften/avskiljer fukten från den komprimerade luften."
          },
          {
            "id": 18,
            "text": "Var är lufttorken placerad på lastbilen?",
            "options": [
              "I motorrummet.",
              "Under hytten innanför insteget på förarsidan.",
              "Vid bakaxeln.",
              "Vid batteriet."
            ],
            "correctAnswer": "Under hytten innanför insteget på förarsidan."
          },
          {
            "id": 19,
            "text": "Hur undviks frysning i lufttorken?",
            "options": [
              "Genom att tillsätta glykol.",
              "Frysning i lufttorken undviks med hjälp av ett elektriskt värmeelement eller genom att använda varm luft från kompressorn.",
              "Genom att isolera lufttorken.",
              "Det går inte att undvika frysning."
            ],
            "correctAnswer": "Frysning i lufttorken undviks med hjälp av ett elektriskt värmeelement eller genom att använda varm luft från kompressorn."
          },
          {
            "id": 20,
            "text": "Hur kontrollerar du att frysskyddet fungerar?",
            "options": [
              "Jag kontrollerar det inte.",
              "Jag dränerar lufttankarna och kontrollerar att det inte kommer vatten eller oljeblandat vatten ur tankarna. I instruktionsboken kan jag se om det finns någon varningslampa som indikerar att lufttorkens filter/kristallzeolitkulorna behöver bytas.",
              "Jag ser till att det finns tillräckligt med glykol.",
              "Jag känner på lufttorken om den är varm."
            ],
            "correctAnswer": "Jag dränerar lufttankarna och kontrollerar att det inte kommer vatten eller oljeblandat vatten ur tankarna. I instruktionsboken kan jag se om det finns någon varningslampa som indikerar att lufttorkens filter/kristallzeolitkulorna behöver bytas."
          },
          {
            "id": 21,
            "text": "Vad kan det vara för fel om luften innehåller vatten när du dränerar lufttankarna och hur åtgärdar du problemet?",
            "options": [
              "Det är normalt.",
              "Troligtvis behöver lufttorkens filter/kristallzeolitkulorna bytas. Jag anlitar en verkstad.",
              "Det beror på luftfuktigheten.",
              "Jag fyller på med mer luft."
            ],
            "correctAnswer": "Troligtvis behöver lufttorkens filter/kristallzeolitkulorna bytas. Jag anlitar en verkstad."
          },
          {
            "id": 22,
            "text": "Vad kan det vara för fel om luften innehåller oljeblandat vatten när du dränerar lufttankarna och hur åtgärdar du problemet?",
            "options": [
              "Det är normalt.",
              "Olja i vattnet är ett tecken på att kompressorn är sliten. Eftersom olja förstör lufttorkens absorptionsförmåga anlitar jag en verkstad som ser över både lufttork och kompressor.",
              "Det beror på vilken olja jag använder.",
              "Jag fyller på med mer luft."
            ],
            "correctAnswer": "Olja i vattnet är ett tecken på att kompressorn är sliten. Eftersom olja förstör lufttorkens absorptionsförmåga anlitar jag en verkstad som ser över både lufttork och kompressor."
          },
          {
            "id": 23,
            "text": "Vid vilken temperatur måste frysskyddet fungera och vad gäller om det inte fungerar?",
            "options": [
              "Frysskyddet måste fungera vid +10 grader och kallare. Detta är ett lagkrav.",
              "Frysskyddet måste fungera vid +5 grader och kallare. Detta är ett lagkrav.",
              "Frysskyddet måste fungera vid 0 grader och kallare. Detta är ett lagkrav.",
              "Det finns inget lagkrav."
            ],
            "correctAnswer": "Frysskyddet måste fungera vid +5 grader och kallare. Detta är ett lagkrav."
          },
          {
            "id": 24,
            "text": "Vad finns det för risker om du kör trots att frysskyddet inte fungerar?",
            "options": [
              "Ventiler och ledningar i bromssystemet kan frysa så att jag blir utan broms eller att bromsarna låser sig/inte släpper.",
              "Motorn kan överhettas.",
              "Däcken kan explodera.",
              "Bränsleförbrukningen ökar."
            ],
            "correctAnswer": "Ventiler och ledningar i bromssystemet kan frysa så att jag blir utan broms eller att bromsarna låser sig/inte släpper."
          },
          {
            "id": 25,
            "text": "Vad finns det för risker om spärr-/blockeringsventilen inte fungerar?",
            "options": [
              "Om trycket i parkeringsbromsens lufttank sjunker under 4,5-5,5 bar ansätts parkeringsbromsens fjädrar i bromscylindrarnas parkeringsbromsdel. Samtidigt stängs/blockeras förbindelsen mellan parkeringsbromsens handreglage och parkeringsbromsens tryckluftstank av spärr-/blockeringsventilen. Om bilens motor är avstängd levererar kompressorn inte någon tryckluft till parkeringsbromstanken. Det innebär att parkeringsbromsen inte går att släppa/lossa med handreglaget om trycket i parkeringsbromsens lufttank sjunkit under 4,5-5,5 bar. Om parkeringsbromsens handreglage släppts/lossats när trycket i parkeringsbromsens tryckluftstank sjunkit under 4,5-5,5 bar trycks/pressas alltså inte fjädrarna i bromscylindrarnas parkeringsbromsdel ihop, det innebär att lastbilen inte rullar. Om spärr-/blockeringsventilen är trasig, inte blockerar tryckluften när du startar lastbilens motor och kompressorn börjar leverera luft, kan lastbilen komma i ofrivillig rullning om parkeringsbromsens handreglage inte är ansatt/bromsat.",
              "Det finns ingen risk.",
              "Bromsarna kan låsa sig.",
              "Det kan leda till ökad bränsleförbrukning."
            ],
            "correctAnswer": "Om trycket i parkeringsbromsens lufttank sjunker under 4,5-5,5 bar ansätts parkeringsbromsens fjädrar i bromscylindrarnas parkeringsbromsdel. Samtidigt stängs/blockeras förbindelsen mellan parkeringsbromsens handreglage och parkeringsbromsens tryckluftstank av spärr-/blockeringsventilen. Om bilens motor är avstängd levererar kompressorn inte någon tryckluft till parkeringsbromstanken. Det innebär att parkeringsbromsen inte går att släppa/lossa med handreglaget om trycket i parkeringsbromsens lufttank sjunkit under 4,5-5,5 bar. Om parkeringsbromsens handreglage släppts/lossats när trycket i parkeringsbromsens tryckluftstank sjunkit under 4,5-5,5 bar trycks/pressas alltså inte fjädrarna i bromscylindrarnas parkeringsbromsdel ihop, det innebär att lastbilen inte rullar. Om spärr-/blockeringsventilen är trasig, inte blockerar tryckluften när du startar lastbilens motor och kompressorn börjar leverera luft, kan lastbilen komma i ofrivillig rullning om parkeringsbromsens handreglage inte är ansatt/bromsat."
          },
          {
            "id": 26,
            "text": "Hur kan du se att lastbilens parkeringsbroms är ansatt/bromsad?",
            "options": [
              "Det hörs ett tydligt ljud.",
              "Det lyser en röd varningslampa på instrumentpanelen.",
              "Bromspedalen är nedtryckt.",
              "Ratten är låst."
            ],
            "correctAnswer": "Det lyser en röd varningslampa på instrumentpanelen."
          },
          {
            "id": 27,
            "text": "Vad har hjälpbromsar (t ex telma, retarder, avgasbroms) för uppgift?",
            "options": [
              "Att öka bromskraften.",
              "Att minska slitage samt risk för överhettning på lastbilen ordinarie färdbromsar i långa utförsbackar.",
              "Att stabilisera lastbilen.",
              "Att förkorta bromssträckan."
            ],
            "correctAnswer": "Att minska slitage samt risk för överhettning på lastbilen ordinarie färdbromsar i långa utförsbackar."
          },
          {
            "id": 28,
            "text": "När ska du inte använda hjälpbromsar?",
            "options": [
              "När det är torrt väglag.",
              "Använd inte hjälpbromsar på fordon utan ABS i halt väglag. Hjälpbromsar bromsar bara drivande axlar, risken att få sladd på lastbilen ökar när man inte bromsar hjulen på samtliga axlar. När man befinner sig i tätbebyggda områden ska man undvika att använda hjälpbromsar som ger ett förhöjt motorljud.",
              "När det är uppförsbacke.",
              "När du kör i låg hastighet."
            ],
            "correctAnswer": "Använd inte hjälpbromsar på fordon utan ABS i halt väglag. Hjälpbromsar bromsar bara drivande axlar, risken att få sladd på lastbilen ökar när man inte bromsar hjulen på samtliga axlar. När man befinner sig i tätbebyggda områden ska man undvika att använda hjälpbromsar som ger ett förhöjt motorljud."
          }
        ]
      },
      {
        "id": "dack",
        "name": "Däck, fälg, hjulbultar och stänkskydd",
        "description": "Frågor om däckens skick, fälgar, hjulbultar och stänkskydd.",
        "icon": " 🛞",
        "questions": [
          {
            "id": 1,
            "text": "Du tittade på alla hjul. Vad var det du kontrollerade?",
            "options": [
              "Bara att däcken var runda.",
              "Däckens mönsterdjup, slitage, skador, sprickor, lufttryck, att alla hjulmuttrar finns och är åtdragna (inga rostrinningar).",
              "Endast däcktrycket.",
              "Att fälgarna var rena."
            ],
            "correctAnswer": "Däckens mönsterdjup, slitage, skador, sprickor, lufttryck, att alla hjulmuttrar finns och är åtdragna (inga rostrinningar)."
          },
          {
            "id": 2,
            "text": "Vad är minsta godkända mönsterdjup på sommaren?",
            "options": [
              "0,6 mm.",
              "1,0 mm.",
              "1,6 mm. Vid tvillingmontage får man ha mindre mönsterdjup på det yttre däcket, kordväven får inte synas.",
              "2,0 mm."
            ],
            "correctAnswer": "1,6 mm. Vid tvillingmontage får man ha mindre mönsterdjup på det yttre däcket, kordväven får inte synas."
          },
          {
            "id": 3,
            "text": "Mellan vilka datum är det ok med 1,6 mm mönsterdjup?",
            "options": [
              "1 maj - 31 oktober.",
              "1 april - 30 november.",
              "1 juni - 31 augusti.",
              "1 januari - 31 december."
            ],
            "correctAnswer": "1 april - 30 november."
          },
          {
            "id": 4,
            "text": "Det är vinterväglag. Din lastbil har en totalvikt över 3,5 ton. Vad är minsta godkända mönsterdjup på vintern och på vilka hjul gäller mönsterdjupskravet?",
            "options": [
              "3 mm på lastbilens drivande hjul.",
              "5 mm på lastbilens samtliga däck.",
              "5 mm på lastbilens framhjul.",
              "8 mm på lastbilens samtliga däck."
            ],
            "correctAnswer": "5 mm på lastbilens samtliga däck."
          },
          {
            "id": 5,
            "text": "Mellan vilka datum måste lastbilens däck ha minst 5 mm mönsterdjup?",
            "options": [
              "1 november - 31 mars.",
              "1 december - 31 mars.",
              "1 januari - 31 mars.",
              "1 november - 30 april."
            ],
            "correctAnswer": "1 december - 31 mars."
          },
          {
            "id": 6,
            "text": "Får du använda dubbdäck på en lastbil?",
            "options": [
              "Ja.",
              "Nej, det är förbjudet.",
              "Endast på bakaxeln.",
              "Endast under vissa perioder."
            ],
            "correctAnswer": "Ja."
          },
          {
            "id": 7,
            "text": "Vad är det för krav på placering av dubbdäck på en lastbil?",
            "options": [
              "De ska vara placerade på drivhjulen.",
              "De ska vara symmetriskt placerade, vilket innebär att det måste vara ett jämnt antal dubbdäck.",
              "Endast på framhjulen.",
              "Endast på bakhjulen."
            ],
            "correctAnswer": "De ska vara symmetriskt placerade, vilket innebär att det måste vara ett jämnt antal dubbdäck."
          },
          {
            "id": 8,
            "text": "Mellan vilka datum får man använda dubbdäck?",
            "options": [
              "15 september - 30 april.",
              "1 oktober - 15 april.",
              "1 november - 31 mars.",
              "1 december - 31 mars."
            ],
            "correctAnswer": "1 oktober - 15 april."
          },
          {
            "id": 9,
            "text": "Mellan vilka datum krävs det vinterdäck om det är vinterväglag?",
            "options": [
              "15 november - 31 mars.",
              "1 december - 31 mars.",
              "1 januari - 31 mars.",
              "15 november - 15 april."
            ],
            "correctAnswer": "1 december - 31 mars."
          },
          {
            "id": 10,
            "text": "Vilka hjul måste ha vinterdäck?",
            "options": [
              "Endast framhjulen.",
              "Endast drivhjulen.",
              "Alla/samtliga.",
              "Endast bakhjulen."
            ],
            "correctAnswer": "Alla/samtliga."
          },
          {
            "id": 11,
            "text": "Hur ska vinterdäck vara märkta för att vara godkända?",
            "options": [
              "Med symbolen Alptopp+Snöflinga, med M+S / M.S / M&S / “Mud and Snow”, med POR (Professional Off Road), vara dubbade eller ha likvärdig utrustning.",
              "Endast med M+S.",
              "Endast med dubbar.",
              "Med valfri märkning."
            ],
            "correctAnswer": "Med symbolen Alptopp+Snöflinga, med M+S / M.S / M&S / “Mud and Snow”, med POR (Professional Off Road), vara dubbade eller ha likvärdig utrustning."
          },
          {
            "id": 12,
            "text": "Vad menas med vinterväglag?",
            "options": [
              "När temperaturen är under 0 grader.",
              "Vinterväglag råder när det finns snö, is, snömodd eller frost på någon del av vägen. Polisen avgör om det råder vinterväglag på platsen där du befinner dig.",
              "När det är halt ute.",
              "När det är risk för snö."
            ],
            "correctAnswer": "Vinterväglag råder när det finns snö, is, snömodd eller frost på någon del av vägen. Polisen avgör om det råder vinterväglag på platsen där du befinner dig."
          },
          {
            "id": 13,
            "text": "Vad är viktigt att tänka på om du haft ett hjul demonterat/bortskruvat?",
            "options": [
              "Ingenting.",
              "Hjulmuttrarna ska efterdras efter 5-10 mil.",
              "Däcket måste balanseras om.",
              "Lufttrycket måste kontrolleras."
            ],
            "correctAnswer": "Hjulmuttrarna ska efterdras efter 5-10 mil."
          },
          {
            "id": 14,
            "text": "Vad tittade du på mellan tvillingmontaget och varför gjorde du det?",
            "options": [
              "Däcktrycket.",
              "Jag kontrollerade att inga stenar eller dylikt fastnat mellan tvillingmontaget, föremål som kan skada däcken eller lossna och träffa andra trafikanter.",
              "Slitaget på däcken.",
              "Att det inte var någon smuts."
            ],
            "correctAnswer": "Jag kontrollerade att inga stenar eller dylikt fastnat mellan tvillingmontaget, föremål som kan skada däcken eller lossna och träffa andra trafikanter."
          },
          {
            "id": 15,
            "text": "Vad kontrollerade du på lastbilens stänkskydd?",
            "options": [
              "Att de var rena.",
              "Att de var hela och rätt färg.",
              "Jag kontrollerade att de sitter fast, är hela och lika breda som däcket, tvillingmontaget.",
              "Att de inte var rostiga."
            ],
            "correctAnswer": "Jag kontrollerade att de sitter fast, är hela och lika breda som däcket, tvillingmontaget."
          },
          {
            "id": 16,
            "text": "Hur högt tryck ska det ungefär vara i ett lastbilsdäck?",
            "options": [
              "3,5 - 5 bar.",
              "5 - 7 bar.",
              "7,5 - 10 bar.",
              "10 - 12 bar."
            ],
            "correctAnswer": "7,5 - 10 bar."
          },
          {
            "id": 17,
            "text": "Hur tar du reda på hur högt tryck det ska vara i dina däck?",
            "options": [
              "Jag frågar en kollega.",
              "Jag tittar i instruktionsboken.",
              "Jag gissar mig fram.",
              "Jag tittar på däckets sida."
            ],
            "correctAnswer": "Jag tittar i instruktionsboken."
          },
          {
            "id": 18,
            "text": "Vad kan hända om du kör med för lågt lufttryck?",
            "options": [
              "Bättre komfort.",
              "Dåliga köregenskaper, ökad bränsleförbrukning, däcken kan bli överhettade och explodera.",
              "Minskat däckslitage.",
              "Bättre grepp på halt väglag."
            ],
            "correctAnswer": "Dåliga köregenskaper, ökad bränsleförbrukning, däcken kan bli överhettade och explodera."
          },
          {
            "id": 19,
            "text": "Hur påverkar felaktigt lufttryck miljön?",
            "options": [
              "Ingen påverkan.",
              "Minskar utsläppen.",
              "Bilen drar mer bränsle vilket ger ökade utsläpp.",
              "Ger mindre buller."
            ],
            "correctAnswer": "Bilen drar mer bränsle vilket ger ökade utsläpp."
          },
          {
            "id": 20,
            "text": "Vad är du skyldig att göra om du kör på något så att stänkskyddet går sönder?",
            "options": [
              "Ingenting, det är inte mitt ansvar.",
              "Du måste laga eller byta ut stänkskyddet.",
              "Du måste anmäla det till polisen.",
              "Du måste informera vägverket."
            ],
            "correctAnswer": "Du måste laga eller byta ut stänkskyddet."
          },
          {
            "id": 21,
            "text": "Vad ska du göra om du upptäcker att hjulmuttrarna rostat runt omkring?",
            "options": [
              "Ingenting, det är bara ytrost.",
              "Smeta på lite fett.",
              "Kontakta verkstad.",
              "Dra åt muttrarna hårdare."
            ],
            "correctAnswer": "Kontakta verkstad."
          }
        ]
      }
      
                        
      
  ];