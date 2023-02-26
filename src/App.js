import { useEffect, useRef } from "react";
import { io } from "socket.io-client";
import ChatInput from "./components/chatInput";
import LockView from "./components/initialLock";
import { useUserStore } from "./store";

function App() {
  const socketRef = useRef(null);

  const { userName } = useUserStore((state) => state);

  useEffect(() => {
    if (userName && socketRef?.current) {
      socketRef.current.emit("userSelected", {
        userType: userName,
      });
    }
  }, [userName, socketRef]);

  const initMessage = (message) => {
    socketRef.current.emit("message", {
      newMessage: message,
      userType: userName,
    });
  };

  useEffect(() => {

  }, []);

  const handleSend = (message) => {
    initMessage(message);
  };

  return (
    <div className="container mx-auto h-screen">
      <>
        {!!userName ? (
          <>
            <header className="h-14 flex px-4 justify-center items-center">
              <p className="text-xl text-center">Reply in Gmail, Or Next week ethil settakkam</p>
            </header>
            <div className="relative h-[calc(100vh-3.5rem)]">
              <div className="h-[calc(100vh-6rem)] py-2 overflow-scroll px-2">
              <div>Hey, Njn ee message type cheyunathu nee vayikko, aennu vayikkuo aennonum ariyilla, Ethu ezhuthunathu Feb 26 inu anu Sunday night 22:36, Ee Lifil nammal parechayapaettathu oru deva niyogamayittanu njn kaanunathu, ninnakkum athumariyam,.. Aennal eppayathae avasthayil entae ullil ninnae nashtapaedumoyaenna bhayam maathraamanu ullathu,.. Njn pandu pareyarillae , enthina veruthae kareyunae,. njn engum poiyillalo,.. But,.. eppo aenikku kareyan pollum pattarha avasthayanu,.. Enne nammallu kanumoyaennariyilla,.. nerae samsarikkuo aennariyilla,.. payayae polae angonnum ariyilla,.. Njan last daysil thanna oru vaaku pending anu, enne kanumppol tharamaennu parenjathu,... Annu ninttae veetinu vilichappol paettanu enagane parenjappol aellam nashtapaettae polae ayirunnu,. kaiyil thanittu thatti aedutha pollae oru feel, sahikkan pattilarunnu,... Aenaram aa callil ulkollan pattatha karingal ayirunnu,.. aenikku entae wordsum feelingsum control cheyan pattiyilla,... athu entae mistake anu,... Oru pakshae enganae worst agan athum oru kareyanamayaekkam,... sorry for that,... I'm really sorry,.. 

              </div><div>Njn eppol nee parenja polaeyannu jeevikkunae,.. Nee koodullapooll aenikku palikkan pattatha poya karingal,. athu nee koodundallo,. aenna feel ayirinnu,.. eppol entae paedi,.. Aenikku ninnae life long feel cheyan enne njn angottu enganaeyae jeevikku,.. Enne orikkalum liquor use cheyilla,.. Oru bottle vaellam und aeppayum aduthu,.. Daily parthikkarund,...Bike paiyae ottikarulu,.. Morning aenikkan thudagannam.... Paedikkathae life munpottu pogan shremikkam,.. Nee aduthillakillum engane jeeevikkumpol namakku vaendi jeevikkunna oru feel annu,.. njn enganae jeevichollam... 

              </div><div>Enne ninnae purathu vidonariyilla,.. Aentae guessil eene ottakku schoolil vidunathu nee verae oru marriaginu samaechal mathram ayirikkum,... enagane annael nammakku life long payaae polae jeevikkanno samsarikkano onnum pattilla ,... enne njn pareyun kariyam serious anu,.. verry serious,..  

              </div><div>Njn eenne pareyunathil enthokae ninnaku hurt ayittundaenum,. nintae thoughts enthanaennum aenikku ariyam,,.. But,. ethonnum eppa pareyathae verae vazhi ella oru decision nee pareyanam,.. And enganae ninnodu chothykaendi varumaennu karuthiyathalla,.. I know,.. and hard mind odaeyanu chotykkunathu,..

              </div><div>Aenikku oru kariyam ariyanam,... enne enthanu nintae thouughts aennu,. orikkalum ethu nintae veettukaru nadathi tharulla,.. Enne ulla orae oru maargam legally courtil move cheyuka aennathanu,.. But athinnu aenikku ninttae poorna samatham vaennam,.. aa samatham nee tharunnathu kurae karingal alochichu vaennam. And aa word mattan paddila,,. courtil vachu chothykkum,,.. 

              </div><div>Enne pareyunna karingal anu legal court movil varunathu,... 

              </div><div>Karingal ottum easy agilla,.. and athu oru normal way alla,. life long onigil Njan alael veetukar aennaggum.. oru come back undagilla,... Pinnae ee legal proceduresil othiri struggles undaggum,,. and kurae paerae vaeshamippikaendiyum varum,,. and nintae veetukaru nallonam plan cheythae ethinae approach cheyullu,.. Police veettil vaarum,.. Aenikku legally neeyumayittu oru relationum elathond thannae as a friend aenna nilayillae aenikku petition kodukkan pattullu,.. athum enaganae ayirikkum,.. ninae anakrithamayi veettu thadagilil vachirikkukkayannu aennu,.. athrae aenikku kodukkan pattullu,. police karae enthayallum nintae veetukaru influence cheyum,... Nee ee petisionil pareyuna kariyam sheri annaennu parenjal mathrae courtil ninnae acharakku,.. avidaeyum nee same pareyanam,.. anaganae nee parenjal avidae vachu court ninae entae koodae ayakkum,.. but vetttukarkkum problems varum,.. Avarkkum legal issues face cheyanaendi varum,. Not sure,. but anagane und,.. but athintae deepth onnumm ariyulla,..

              </div><div>Enne eee petitionil pareyunna karingal thaettanaenu parenjal, its the end of the relation between sairah and varun, Namakku orimikkan pattilla,.. we will not have a life together,..And i will face the legal issues, may be ninnaku police karodu oru nuetral marupadi kodukkan pattum,. but result same ayirikkum,.. Njn ninate lifil ninnu pokaendi varum,,..May be nintae veetukaru parenju njn legal issues face cheyanadi varum,..Police ninae question cheyuna reethi enganae agum aennu aenikku ariyan pattilla,. but they have experience ,,.. and will execute it well,..

              </div><div>Pinae ee legally move cheyuna kariyam njn aneshichappol arinjathanu,... and eppa eganae ninnodu chothykkathu verea orru vazhiyumillathondannu,.. And nintae answer anagane courtil  move cheyanamaenno ( Only after May 11 ), vaendanno athu  enthayallum,.. i will understand you,.. Because i know you,,.. Love you with my heart in this whole life,.. I will not blame you ,.. ethu namudae sitution anu,..

              </div><div>Enne enaganae legally move cheythillael, Njan enthayallum ee life wait cheyum,.. Nee aviadae undaenna vishuasathill,. Pinae namudae thoughts Mindil vicharichu ninakku   kaettathirikkam,,. But,. Njn pratically pareyuva,. athinnu oru limit ninate veetikaru vakkum,.. Nintae parentsinu ethrayumokae cheyamaekkil avaru ninttae futureum decide cheyum,.. Allael kanchana maala polae oru story koodi varum,... But ee jeevithatil marukareyil orallu undaennu vishuasathil namakku jeevikkam,.. But athu nerthae parenja polae life long ottakku jeevikaendi varum ,.. and veettukarudae strugglesum undaeggum,. because your are living there,.. Its not easly to live like that,.. and not sure how long,.. But,. aeppayegillum contact cheyan pattumakkil ,.. kaanan pattumaekkil ,... Its a gift,..

              </div><div>Because enne karingal orikkallum payae polae aggilla... namaldae contacts kuranju kuranju varuvayirunnu,... Enne contact undagumoyaennu pollum ariyulla,..

              </div><div>Lastly ,. Sorry for all the tears which i gave to you, all the pain,.. I'm really sorry,. 

              </div><div>With Love , With Tears, 
              </div><div>To,
              </div><div>Entae Best English teacher, The most valuble person i meet in my life, 
              </div><div>To My Sairah.

              </div><div>By Your Varun Wilson ( Your Pottan ) 
              </div>

              </div>
              <div className="w-full">
                <ChatInput handleSend={handleSend} />
              </div>
            </div>
          </>
        ) : (
          <LockView />
        )}
      </>
    </div>
  );
}

export default App;
