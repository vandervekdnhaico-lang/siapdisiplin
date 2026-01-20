const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw5ONT0ILC1m9njQN7l6CGV17cslnugg01640f6wm_Y3Io5Hkk2l8fI4IGIU1jDhwwH/exec";

let sudahAbsen = false;
let dataRekapGlobal = [];

// DATA KELAS
const dataKelas = {
  "X AHMAD YANI": [
    "ABDUL HAFIZH", "Ade Fitra AS. Tahuru", "AINUN MARDIAH", "Andi Rezky Aditya",
    "Azra Huriyah Tamrin", "CERLI ALORI", "DEFGHI DARREL IBADIKA JIYYAD",
    "DENAYSAN RATU", "DIRGAN SATRIO", "DIVA SALSABILA", "DWI ADELIA FATARANI",
    "FITRI AULIA", "ICHWAN ADE CHANDRA", "JESSEN POALER", "JULIYANTI R. ABDULLAH",
    "Kurnia Amala Derya", "LUCIANA I MANTO", "MOH ALVIN K. BATALIPU", "Moh Asraf",
    "MUFID FATHUR RAHMAN", "MUH. AKBAR FAISAL", "Muh. Ariq Abdillah",
    "MUH. DIHYA AL QALBI", "NAZWAH ADELIA", "NELIRA KHANZA SOESANTO",
    "NURUL AINUN S. ALFIAH", "Nurul Azizah", "Rizky Arianto",
    "RIZKY FAUZI RAMADHAN", "SEPTY APRILIA W. ISA", "SHEEREN AURELIA",
    "Sintia Bela M. Zen", "SRI ANGRIANI", "SYARAH ZELLAH ALFARAZI",
    "YULIANA", "ZULFAHMI A. MANGADA"
  ],

  "X RADEN SOEPRAPTO": [
    "Abyan Zahi Zakwan Daidullah", "ADELIYA SUBIANTO", "ALTA NUR'AINI",
    "ANDI DEWI FORTUNA TAUFIQ", "ANDRI I. DOTUTINGGI", "AULIA",
    "BAI'MUNTIA NOVA MOKOAGOW", "DESI NOVITA", "DIAZ SAPUTRA", "DWI AULIA",
    "DWIYANTI AURA REZKY", "Fitran Arjuna Putra", "INDAH SARI AZIS",
    "JOSUA CRISTOFEL", "KEYLA APRILIA", "MARWAH A TIMUMUN", "MOH ALFATH",
    "MOH. ASRAFA Y. PADJIMBUNG", "MOH. RIZCHY", "MOH. ZIKRAN PAYU",
    "MUH. FAUZAN AKBAR", "Muhammad Nazrin Zaquan",
    "NAYLA HILL DESTIYAN SOFYAN", "NOVIANA PUTRI", "NUR HAFIZA",
    "NURUL HUSNA", "NURUL KHAIRUN NISA A. DAY",
    "PUTRI MEILANI A. RUDIN", "PUTRI ZASKIA A. MUSA",
    "ROSITA ROSALINDA IR. KIBAS", "SATRIO SULEMAN",
    "SHAFIYAH SHABIL R.A. MATALATTA", "SINTA S.A. TUNGOLI",
    "SITI NURUL FAUZIA", "SRI MAULINDA R. SUMANGAN",
    "ZIZIL AYUDISTIRA"
  ],

  "X S. PARMAN": [
  "ADHELILA EFENDY", "ADIYATMA A. DATUAMAS", "ANAYA ADELIANDRA KAWULUSAN",
  "ANNISA KHAIRIYA", "APRIANA AHMADI", "ARILYAKASNO",
  "DIAH INDAH TRI UTAMI", "DITA QORIVA RAMADANI", "DWI ERLANGGA",
  "EEF ZULHAFIS F.P.", "Fadhil Candra Wijaya", "FIGRI NOVRIADI",
  "INDAY PRATIWI S. PADJIMBUNG", "INTAN SALSABILLA", "JIHAN SAFITRI",
  "KHANSA DWI NAWA HANIFAH", "MARWAN R. KASAD", "MOH. AKBAR",
  "MOH. FADIL HERMANSYAH S. POLIOTO",
  "MOHAMMAD TAUFIQUL HAKIM F. SUMA", "Muhammad Fa'iq Umar",
  "Myiesha Nafeeza Kawulusan", "NAICYLLA MAGFIRA PRATIWI",
  "NOVITA AULIA", "NUR FITRI JUNIANTI", "Nurul Fauziah",
  "Orin Putri Salwa S. Ali", "PUTRI CLAURESYA ANDRIS",
  "RAHADIAN M. KAPUUNG", "RIVANI KURNIAWATI B. GONTJING",
  "SALSABILA H. RUKMAN", "SELFIRA A.G. SAINING",
  "Siti Qolillah Fatharani U. Datuela", "Sri Nanda Is. Baculu",
  "TIARA PRATIWI J. LAMADANG", "ZEYN ARDINI ZAHRA"
],

"X M.T. HARYONO": [
  "AHMAD DANI", "Ais Rinaldi", "ALISYA DWI OKTAVIANY",
  "ANA ULFATUL KHASANAH", "ANNISA S.IMRAN", "ASRIANI S. YAMIN",
  "DAFA RIZQULLAH SALSABIL", "DYAH RIZQA SYA'BANI",
  "EDI SUPRIONO KARMIN", "EKA RAMDANI S. TIMUMUN",
  "FAHRIL GUNAWAN", "Femmy Cresye Manuho", "HAFIZA",
  "Indra Cahya Wicaksana", "JEFAN PUTRA KRISTOFEL MANGUMBAHANG",
  "MAHIRA RAFIFAH A. BIN YAHYA", "MILAN ARASHTI FEBRIANTY",
  "Moh. Afandi", "MOH. FAHMY", "Moh. Khoirul Dzuhdi",
  "MOH. WAHYU RAMADAN W. L.", "MUHAMMAD KHUZAIFAH",
  "NABILA SALSABILLAH", "NASYWA AULIA PUTRI R. PALANTE",
  "Novita H. Butudoka", "NUR AZIZAH R. DOTUTINGGI",
  "NURUL ANNISA IDHAM", "PIKA RIFKA", "RAHMAT ADITYA PRATAMA",
  "RIHDO JUNAIDI", "Riswal", "SAKINAH MEYLINDA",
  "SHAFA AULIA KASIM", "SITTI HUMAIRA",
  "SUCI RIZKY RAMADHANI", "Zahratun Zira Sunardi"
],

"X D.I. PANDJAITAN": [
  "ABRAR I.R OGI", "AHMAD FAIZ KANZUL FIQRI", "ALFATIH ALWIRANGGA S. ELAM",
  "ANA KHUMAIRA SARMAN", "ARRAIHAN JIHADATUL S.", "ASRIANI",
  "CAHAYA NABILA", "EKA APRILIA A. KANOLI", "ERTINA SRI MULYANI Z. KADIR",
  "FATMA I. TIMUMUN", "FAUZIYYAH", "FIBRIANI J. YUNUS",
  "Hairul Nisa Olivia Ruslan", "Inka Putrisyah A. Saleh", "IRMAWATI RUPI",
  "MAYSARAH", "MEYVA LOVELY ROMBOUTS", "Moh. Fahriel Affandi",
  "MOH. FAZRIN B. NANU", "MOH. IZHAR S. HASAN", "MOH. TRI ABID ALFARIZZI",
  "MUHAMMAD NUZUL KHAIRAN", "Nada Alfatiha", "NASYA NAURA MEDINAH",
  "NOVANIA ANASTASYA KIRANA", "NUGRAH ARHIANDA PRATAMA MK. TIMUMUN",
  "NUR SAFITRA", "NURUL APRIANI S. RAUF", "Putra Moh. Rezky",
  "RANDATA NAJWA ALIYAH", "RISNAWATI SOFYAN", "RISTIAWATI A. SULEMAN",
  "RIZKY ABDUL WAHAB BATALIPU", "SRI WAHYUNI",
  "SYIFA NURHIKMAH", "YUWEN MUNAYANG"
],

"X SUTOYO SISWOMIHARJO": [
  "Afrifahri", "AKBAR RIZKIANSYAH WICAKSONO", "ALMAIRAH", "Alvarizivino",
  "ASMAUL HUSNA", "BAGUS PUTRA PRATAMA", "ERLANGGA SAPUTRA S. TURUNGKU",
  "FADILA U. S. UMBEN", "FATIMAH PUTRI RAHAYU", "FIRA ANTON DAUD",
  "FITRI ABD. RASYID", "Ifqi Febriyano H. Idris", "IMAM SUHARTO",
  "Irmadhita", "IRSAD FIRDAUS", "Mei Gita Kurniasih Madjid",
  "MEYLA ASRIANI S. BATALIPU", "MOH. INDRA FAJAR",
  "Moh. Rahadian Reyzar", "MOH. RIZKY G. DZAINUDIN",
  "MUHAMAD ANANDA BAGAS", "MUNTAZZAKY A. EATO",
  "NAFISA WARDA SAPRI", "NASHRUL HAQ", "NI KADEK YENI RIANTI",
  "NIVENA TANUKITESVARA TODAR", "NUR AFNI S. RIFAI",
  "NUR RAMADHANI SARIPUDIN HARUN", "QIRAN ALIYAH WIJAYA",
  "Regina Putri", "REGINA R. L.", "RISKA R. KAMBAYAN",
  "Rizka Mardhiyah R. Umar", "Sri Yanti Mahmud",
  "THORIQ RAMADAN Z. KOPING", "ZULKIFLI N. NUPURA"
],

"X PIERRE TENDEAN": [
  "ALEZANDRO DYLAN H WANGI", "ALKADAFI S. TIMUMUN", "ALMIRA",
  "Anjelline H. Ongosito", "ASTI DWI PUTRI B. LATAMA", "AZIS KHUMAIDI",
  "ERSHY AGUSTINA RAMADHANI", "FAHRIL FAJAR S. MANU",
  "FARWANSYA J. RUSTAM", "FILZAH PUTRI NURAINI",
  "ICHA AYU LESTARI S. HASIM", "IFDZAKY IRSYAD A. HI. MANSYUR",
  "Jerico Christian Sondakh", "JIHAN J. PALANTE",
  "KHAIRUNNISA A. DATUAMAS", "MAGHFIRAH", "MEI PUTRI R. GAPUR",
  "MOH. DHANY", "Moh. Rayhan Dede Saputra", "MOH. RIFKY SYAHPUTRA",
  "MOHAMMAD ZIKRIL SABANDI", "MUHAMMAD FAHMIANSYAH J. SALEH",
  "MUSDALIFA ARIANTO", "Nahdifa Sasy Kirana",
  "NAJMAH RAFIFA RAWANG", "NI MADE DHEVIE ADELEYDA ARTAWAN",
  "NUR ANNISA SUWANDI", "NUR JESSY RAMADANTI", "QURATUL AINUN",
  "RIDHA INAYAH PUTRI J. KONIO", "RILIS YUNDA SURAHMY",
  "RIZKA AGRINA MULIA", "SRI YANTI SAHARI", "SYASA AIDHA RIFKA",
  "TRI JULIA S. NGGAI", "Zafira Tsabita Rayhana Biya"
],

"X KATAMSO DARMOKUSOMO": [
  "ALIKA MAUREEN ISMAIL", "ALISHA SALSABILA RAMADHANI", "ALYA S. SORAPEL",
  "ANDRIYANSAH A. SI'O", "AURELLIA TIARA", "AVRIL AULIA", "FAHMI ISMAIL",
  "FAKHRUL NAUFAL MIRZA R", "FARAMI A. RAIS", "FAUZIA S.", "HABIBI USMAN",
  "ICA SAPITRA M.R.", "KELVIN ROLANDO MUNAYANG", "MELYZA REGINA PUTRI",
  "MOCH. KAFQA", "MOH ZUL AZAM A. BUTUDOKA",
  "MOH. FADHIL APRIANSYAH A. DAY", "MOH. RIFKI RAJA PRATAMA SUHONG",
  "MOH.RAMADHAN A. KAMILUN", "NADIYA NUR ZAHIRA I. ISMAIL",
  "NAFLA YUANISTY", "NAJWA MUTMAINAH MUTIARA", "NAYLA RISKA FAUZIAH",
  "NUR ASLIYAWATI", "NUR HADIA WARAHMA", "NURKHAIRA H. ISMAIL",
  "NURUL KHINAYA", "RADHIT SYAFITRAH", "RAHMA DANI",
  "Rifky Kurniawan", "RIVDA PUTRI MUNIRA R. ANDIMAKA",
  "Sarifa Febrianti S. Abd. Rahman", "SUCI LESTARI",
  "SUCI NUR RAMADANI", "Wiryawan Restu Muhammad",
  "Zakiah Narazah A. Suleman"
],

"XI MULAWARMAN": [
  "Airhin Nurfaradilah","ANDINI SAPUTRI MONOARFA","ANDRA RAMADHAN","ARUMI","AULIA PUTRI",
  "Budiyono Pratama J. Idris","CAHYA RIZKIA F. DJ. DJIMAD","Cristian Talo Ta'a",
  "DESI JUWITA LAHUSEN","EL-VINO AVRILL D'FAITH PURBA","Fahrel Setiawan A. Tamail",
  "FAIZA LAMADANG","Febriana Dwi Anggraini","FITRIANI I. DJUPANDANG","Geisha Al Mayda",
  "KEYLA REZKYANI MANSYUR","Livhy Nafizah Putri","Livia Adelia","M. NURTASBIH ALFIAN",
  "MIFTAHUL HAFIDZ A. SAID","NABILA","NADIA FITRI LAINDJONG","NAURA AIZQIA A. MAKUR",
  "NAYLA B. AWAD","NAYSILA PUTRI KOBANDAHA","Qirey Tesalonika Kaengke",
  "Rahmatullah Mardin","RHEY ANDREAN MUNA","Rista Alhairah","SAKINA I. PALANTE",
  "Satya Muttakim Timumun","Stefani Anastasya","Suci Arwani Unu",
  "TARWANGI A. YUSUP","ZALFA ALQIRANI"
],

"XI AIRLANGGA": [
  "ALGHIFARI TAHIR","ALYSSA LUTHFIA RIZKI","BAMBANG SAPUTRA S.D . MANU",
  "DESTARI ANGRIANI A. DJANGGOLA","DIAN HAFIZHAH HI.S. DAIMAROTO",
  "DINDA AYU PURNAMA","DYTA RAHMA I. LASAMA","FAHRALIA ANGGREINY ASONA",
  "FITRAH TRI RAMADHANI","Hidayat Nur Wahid M. Lamaka","HYACINTHA AISHA KYLA",
  "Iyan Samudra","JENIFER REBECCA KATILI","JULIANTI L. MORAD","KESYA SALSABILLA",
  "Lira Apriliani R. Karim","MAGHFIRAH","MOH. FADIL M. MAKMUR",
  "MOH. FAIZ R. TIMUMUN","Moh. Isnain Arkan","MUHAMMAD MIFTAHUSSALAM",
  "Muhammad Teguh Pratama","NADIRA I.KOROMPOT","NUR AULIA UTAMI",
  "NUR INAYA A. ARDJEN","OKTAFANY S. H KOTAE","RATU ANNISA AGUSTINA",
  "REZKIYANSA D. RAHMAN","RYAN ERLANGGA","SIFAH","SITI MAGFIRA JAPAR",
  "SRI LISA NATALIA","SRIMULIYANI OKTARINA H. SI'O","SYAKIRA ZIANTI",
  "TIARA AYU I. KASAD","ZASQIA T. MAKUS"
],

"XI KARTANEGARA": [
  "Abelia Astuti Nabar","ANGGUN PRATIWI M.TOHOPA","ANNISA K. BUTUDOKA",
  "APRILIA S. ABDULLAH","BUNGA APRILIA TAKULOE","DINDA PRATIWI ABDULLAH",
  "FAWWAAZ NABIL HISYAM","FIKRYANSYAH","FINZA FEBRIANTI","FITRIANI R. TAMBENGI",
  "GIVARI AKASE","HANIFAH FAUZIYYAH S. AMAS","Hindun Z. AL Hadar",
  "KHAIRAH AHMAD","KHAIRUNNISSA","MALSYA APRILIA M. LABOKO","MELANI RUSDI",
  "MOH. ARIL LAINDJONG","Moh. Ikhsan Dermawan Abdul Rachman",
  "MUH. FARDAN AL JABAR","MUHAMMAD ALFA RISKY","NUR AMALIA","NUR RISTA",
  "NURUL AINI FITRI","NURUL AJENG PRATIWI","Putri Aqilah",
  "PUTRI FEBRIANTI K.DOTUTINGGI","Rahmawati","REHAN MASUARA",
  "SHIFA SAFADILLAH","Sindi Aulia","SITI FADILLAH H. HAMID",
  "Sri Almaira Fitria","SUNARTI S. S. NAHE","WAFIQ AZIZAH A. TIMUMUN",
  "Yuli Kartiani"
],

"XI HAYAM WURUK": [
  "ALFA RAHMATIN PUTRA H. ANWAR","ALIF APRIANTO","Aulia M.","AUREL GERALIN WANGI",
  "AYESHA ASHQO JANNA","CHICHILIA OKTAVIANA","DANDI FAIRUS S. BASIRO",
  "FAHREZA","FARHAN K. SAINONG","GLEN LEWIS","JESIFAULPA YANTI T.",
  "JESIKA FRISKILA CANDRA","KAYLA NURUL AULIA","Keyza Feby Lestari",
  "LAURA LUVITHA","Lionel Caylen Ansow","LUTHFI H. TIMOMO","MAGFIRAH",
  "MOH. FIQRA RIMBAWAN D.","MOH. NAAZIL FIRLY","MOH. RIANSYAH R. AKIL",
  "Moh. Sandi Saputra","MOH.SAHRUN","MOHAMMAD HUZRIL ASSYFA",
  "MOHAMMAD SULTAN PAKAYA","MUH. ZIDANE NUGRAHA","Nabilah Elvina Denata",
  "NAYRA DESWITA AR. DONDO","SAKINA L. RADJABANI",
  "SALSABILA PUTRI HARDI","SASKIA MEIKA PUTRI","SHIFA PUTRI I.",
  "SRI MULYANI RAMLI","SULTAN RAMADHAN M. HANTA","SYIFA WARAHMA","ZILDJIAN"
],

"XI RADEN PATAH": [
  "ADELIA RAMADHANI","ANANDITA KHAIRUNNISA","Arman Gheisan Lasaka",
  "ASYIFA H. DATUELA","DWI RAMADHANI","FADILA NUR AQILA",
  "FAJRI RAHMADANI R. DJEI","FRALDO A RAHIM","JELITA A. DATU",
  "KHALYLA ANNA RINJANI","KIRANA SAHRUM","MIDYANANDA","MIRA SYAFIRA",
  "MIRANTI","MOH GALANG HIDAYAT","MOH. ALIF","MOH. DIRGA PRATAMA",
  "MOH. FAHREL A.M. SINGARA","MOH. FAUZAN J.K. LUID","MOH. RIZAL",
  "Muh. Afdhal Alamsyah","MUHAMMAD ALFATIH BUTUDOKA","NABIL Y. KADIR",
  "NANDA AYU SAPUTRI","NINDA NURLAILY","NOVITASARI","NUR AFNI",
  "NURFADILAH A. TIMUMUN","Nurul Hidayah Alhadar",
  "Putri Ramadhani R. Idjilani","REZKIANA S. TIMUMUN","RIZKY AMALIA",
  "Salsa Faozzia","SYAZWINA MULYAKIB","THORIQ FREDRIKSZ BAKULU",
  "ZASKIA TAMRIN"
],

"XI SULTAN AGUNG": [
  "AFRITIYA R. PADJIMBUNG","AIDUL AKBAR","AINUN KALBIA S. TAPSIL",
  "AIRIN CAHYA CIPTA","Anisa Salsabila R lasang","BUNGA WATI","DEWI SYAPIRA",
  "EMANUELA BLESY MAGANIA","Evasari Pertiwi","FEBRIANTY MILE","HAMDANI DIMAN",
  "INAYA AFRISILIA","INAYAH S. TARAKUKU","JACQLIEN J. APULU","JUNIARSI AMIN",
  "Leon","MOH. FIQRAN HIDAYAT","MOH. ILMAN","MOH. KHAIRIL M.S. MARJUNI",
  "MUHAMAD FAUZAN MR.BINOL","MUHAMMAD AUFA","Mutiafadila K. Baingan",
  "NUR AFNI A. RADJASIA","NUR RISTI","PUTRI RAMADANI THOMAS",
  "QASIH ALYA NABILLA S. HAMID","QHARISA A. TAKULOE","RAFIUN",
  "RIRIN ANDRIANI R. SOUNO","SAKINA","SAWALDI T.H. TIMUMUN",
  "SRI SYAHYANI","SUHADA MANSUR","SULISTIANINGSI K. LAMAKA",
  "SYAFA AULIANI","VARHAN A. ABDULLAH"
],

"XI SUNAN PAKUBUWANA": [
  "AFDHAL FAZIZ MASULILI","AFRILIANI","ALYA MEYRIAKASIH Y. SU'A",
  "Anisa U.Batalipu","Aril S. Kadir","DHINA FAUZIA","DIFA FEBRIANI","DINDA",
  "Eva Ganesya Pratiwi","FEBRIANTI","MOH WAHYU","Moh. Abuzar Al-Gifari",
  "MOH. ANDREANSA SAPUTRA","MOH. FIQRY RIMBAWAN D.","Moh. Ghivar Gautama",
  "MOH. KEMAL BOCHARI","MOH. RIFKI S. MENTEMAS","MUHAMMAD YASIN ASSAFFAT",
  "MUSLIMA A. LOLIO","Nanda Delia Putri R. Junus","Nursila M. Souno",
  "Nurul Fauzia H. Ali","PILSA DJ. LAUDI","PUTRI BUNGA","PUTRI SIFA",
  "QYSTY AMALIA","RANI DWI FEBRIANI","RHEGITHA KIRANA INGKIRIWANG",
  "Rizki H. Pawelangi","SASKIA NOFIANTI","Sri Nazmi S. Husain",
  "Suci Ramadani Samsudin","TEGU PRATAMA PUTRA","TIARA DIA SAKINA",
  "Tri Alam Firmansyah A. Bouty","ZULBAHRI I. LANAWI"
],

"XI SRI SULTAN HAMENGKUBUWONO": [
  "ABD. SALIM","ADELIA T. DJIMAD","AFRILIA A. LAMASE","Awwalia Ramadhani",
  "BURHANUDIN A. BUHANG","DENNY SAPUTRA MR. PALANTE","FABIAN SONO","FAZRAH",
  "GYSELL VERINZY MANROPI","HAIRUN S. BATALIPU","Hariyanto Harsono",
  "LUTFIANA BIN YAHYA","M. ADIFIA U. TIMUMUN","MELATI R. KAMBAYAN",
  "MOH. ALIP PRASETYA","MOH. FADHIL SALAKEA","MOH. FARIH AINUR RIDHO S.",
  "MOH. RIDHO M. MAIYA","MOH. SYAHWALDI ISMAIL","MOH. TAUFIK",
  "MOHAMMAD FIZRY M. LABOKO","MUH.RIFKAN ARIPIN","NELI OKTAVIA J.KERA",
  "Nur Aziza Djunu","Nur Hikma Ramadani","RAHMAT RASYID","RAHMATIA RAHMAN",
  "Ridho Saktiawan","SALSABILA JUMADIL","SELSY OLIVIA","Setia Nazmi",
  "SHIREN M. S. YUSUF","SINDI I MAKLUM","SITI JULIA","Zahra Alfiza",
  "ZASKIA HASAN"
],

"XII R.A. KARTINI": [
  "ALDITA WIRDHIYAH NINGRUM MADJID", "ALIFIYAH MAHARANI RACHMAN", "Anggi Muharram Asari", 
  "ANNISA", "Claudia Natasya", "Dirly F Sondokan", "DWI FEBRIANTI ANGREANI", 
  "DWI WULAN LESTARI", "Fidya Sahar", "HIDAYAT NUR WAHID", "JIHAN BUTSAINAH", 
  "KESYA", "Laura Lhesly Dien", "MELISA MARCIA LEWIS", "MIFTAHURRAHMAN M.S NAUKOKO",
  "Mirnawati Syafrudin", "Moh. Afghan S. Joesoef", "Moh. Raflan Saputra", "NAILAH", 
  "Nayla Aurelia", "Ni Putu Ayu Pratiwi", "NURFITRI SYAWALIA", "Nurul Fadhilah", 
  "NURUL ISLAH", "NURWAHIDA J.A. KUNTUAMAS", "RANDA ANAYAH NAURAH AMANDARI", 
  "REZKI DIVA KURNIA", "Ririn Dwi Julianti", "RIZKY APRILIANSYAH", "SITI HAJAR", 
  "Sri Hardiana", "Syahrul Fio Hidayat F.P", "USWATUN HASANA", "Whendy Ang Jaya", 
  "YAYA ARIMBI", "Zain Darian Danayaksa"
],

"XII CUT NYAK DHIEN": [
  "ADITYA DWI CAHYADI", "AMELIA R. LATEKA", "ANISA NURHAKIKI", "ARFIYANTI", 
  "ASTINOVIANTI AB.", "CHAIRUNNISA L.M. SALIM", "Chelsy Glory Waas", "DEWI ANDINI", 
  "DHEA PUTRI PRATIWI J. MADU", "Feby Zalzabilah", "FILLA NAZLIA PUTRI", "Hestiana Ahmadi", 
  "IFFA AZALIA NURSHIFA", "KAYLIN KHESYA MUNAYANG", "MOH. ARJUN T.A. HI. ISMAIL", 
  "Moh. Fahriansyah Islami H. Pontoh", "MOH. JAYADI W. MARHUM", "MOH. RAKA ARSYI ARRAFI", 
  "Moh. Rasya", "MOHAMMAD RISKI ARISKA", "MUH. ILHAM I. LAHILOTE", "MUTIARA YUNITA ANDRIS", 
  "NUR AINI", "NURJAZILA S.BUNAI", "Nurul Sakinah", "RAHMAWATI", "Ridho Arief Alfaruq A.M", 
  "SAFITRIANA AZIS AT. NAUKOKO", "Sarlina R. Abdullah", "SITI NUR NOVIANTI SIMIN", 
  "SITI NURFIANI ARIFIN", "SITI NURJANA S. DJAMUD", "SURATMI S. MANU", "SYIFA AULIA AR. KARIM", 
  "VELIA VILAURELYA SUPIT", "Zakiah Maharani G Aliu"
],

"XII CUT NYAK MEUTIA": [
  "ABD. HILMY FAUZAN", "AISYAH MAHARANI PUTRI", "AMIRA WIFAQ MAGHFIRAH", "ARIEF PRATAMA", 
  "ASRIA A. HANAPI", "DEDE FAHREZA H. Tamail", "DIMAS J. ABDULAH", "IKMAL ASRIN", 
  "JAYENG TIRTO SAMUDRO", "JUSTINE JERICHO TOMBOKAN", "Kamarudin", "KASMIR R. NUPURA", 
  "MARYANI RAMADANI S. LATAMA", "Moh Akbar SR Nggai", "Moh. Amar Saputra M. Mael", 
  "MOH. BILAL ALGHAFIRO", "MOH. FARHANSYA", "MOH. FIKRAN S. UMAR", "Moh. Hardiyansa S", 
  "MOH. IKRAM", "MOH. WAHYU HIDAYAT", "NURUL CAHYANI", "RAISYA WAHDANIA", 
  "RENY MALIKA AQUINY SITUJU", "RIFKA RAUF", "SAPRI Y AWAT", "SEPTIANI RAMADHANI", 
  "SRI MULANDARI", "SUCI H. OLII", "TIARA H. B. PONTOH", "TRI ARDIANSYAH", 
  "Vadel M. Sambuleng", "Zahratunnisa"
],
    
"XII TEUKU UMAR": [
  "ADRIAN HAMID", "ANDY ATHIES APRILIANSYAH", "ARDIANSYAH K. DORAHI", "ARIESTA KIRANA", 
  "ARISTAN T. FARDHANI", "FAREL S. TARIF", "FRISKAWATI AMRAN", "HENDRAWAN", 
  "ILHAM R RAMSA", "INDRI HARTATI NUR ROHIMAN", "ISRAN ERFAN", "KENDI PUSPITA", 
  "Masni I. Barsandji", "MOH FAJRI ZULFIKAR S", "MOH. ALFIN FAIZ", "MOH. BAYU TRIANSYAF S. BASIRUN", 
  "MOH. FAJRUL AS. MA'I", "MOH. IBNU RAIHAN", "MOH. REHAN AKASE", "MOH. RIFAI", 
  "MOH. ZULKIFLI R. HUSEN", "MUH. ZIKRA A. LABOKO", "MUHAMAD AFDAL BAHARUDIN", 
  "NIRWANA HASAN", "NUR AURAH", "Putri Fadila", "RASYA ADITYA PUTRA AZIS", "SAFITRI", 
  "SRI WAHYUNI PRADITYA", "SYAIFUL R. ABDURAHMAN", "UMI FARIDHA", "WANA TASYA IRWAN", 
  "WINDI H DJAFAR", "YUNITA DJ. YAHYA"
],

"XII SUTOMO": [
  "ADHE FITRIYANI", "AJMALIL YUDA SAPUTRA", "ANDIKA AM. PAWENA",
  "ANGGRAWAN W.I. GANI", "AULIA MUNZIYAH", "Cahyani",
  "Elektra Kirey Melato", "ELIZAH", "ELLA NURAZKIYA",
  "FAHRI AMARU ZIKRI", "GILBERT SYALOM SONDAKH", "Givka Meta Putri",
  "Hapsa Arika Mohtar", "IZMI JULIANTI SALAKEA", "LESTIN M. SABANTE",
  "Maria Anastasia Anu", "Moh Abrar Adiatma", "MOH. FADEL M. KAPUUNG",
  "MOH. RAFLI", "NADIA SAPIRA R.LALI", "NAISILA M. HADONG",
  "Nur Azizah", "Putri Alifah", "RADIT J. M. BAHTIAR",
  "RANGGA DJ. YUSUP", "RASTI SANTIA", "Ria Ramadhani Basira",
  "SUCI A. OTOLUA", "SULISTIA NINGSI", "SYA LAISYA AMANY",
  "SYAFIRA S. TIMUMUN", "SYAHRISTA AYUNNISA", "WAFIQ AZIZAH"
],
    
"XII H.O.S TJOKROAMINOTO": [
  "Adittia Amran", "AMELIAH", "ANDI JT. GARA", "ANGGRAINI S. DAY", "ASTI S.HI. RAAT", 
  "CINTA FEBRIANTI A. NAHIR", "Felminarti Suparman", "FERAWATI AMAN", "FITRAWATI S. ABIDIN", 
  "FITRY YANSY", "Iren Aprilia Yunus Lomo", "MELINDA Y. RAMPISELA", "MOH. FADLAN. S", 
  "MOH. NUR IBRAHIM", "MOH. RISKI R.HAMID", "MOH. RIZAL R. NABAR", "MOH. ZIDAN A. KARIM", 
  "Mutia Husain", "Novita S. Laceme", "NUR CINTA K. RAHIM", "PUTRI APRILIANI", 
  "PUTRIANI S. SALMIN", "QHALIQA AFDALRISKY S. LAMAKA", "REIHAN ALMURTADA DOUW", 
  "Safira Wulandari", "SALPIA SALSABILA", "SATRIANA J.M PANO", "SERA ADELIA PUTRI AMIN", 
  "SERLI NADIA B. TUNGOLI", "SHERA MARSILA R. OLI'I", "SITI HANDAYANI TRI DEWI", 
  "SUCI APRIANA JS. MAKUR", "SUKMAWATI A. KARIM", "Syahrul Rahmat Ramadhani F. Djimad", 
  "Zaskia Anastasia"
],
    
"XII JENDERAL SOEDIRMAN": [
  "ADITIA M. MADONUA", "Adzmi Sucipto Padjimbung", "ANANDA DHYWHE PUTRI SUDIRMAN", 
  "ANZAR ADHITYA A. GESA", "CAHYATI DEWI", "Cici Eka Hardanti", "Dwi Andika Pratama", 
  "FAHRI SATYA", "INDAH DWI ZAZSKIYAH", "ISTIQOMAH", "KEISYA SAFINKA", 
  "Liony Megumi Putri Bastian", "Lusiana Dolu Sinaga", "MOH. APRIANTHO", 
  "Moh. Rehan Kisman", "MOH. REZA", "MUH. SYAHRIAL", "NOVAN BRIAN TUNDUNAUNG", 
  "NUR SYAMSUL FALAH U. BATALIPU", "PEBRIANTO", "RAHMAKIA", "RAIHAN DWI ARIANTO", 
  "REVAN ISMAIL", "RIFDA", "RISMAN HAMID", "SITI AULIYAH I. KOROMPOT", "SITI NUR AZIZA", 
  "SITI ZAHRANI R. NADJIB", "SUCI"
],
    
"XII AHMAD DAHLAN": [
  "ABD. HAFIDZ NGASANG", "ABDUL KHAIR S. SALAKEA", "ADEL RAHMAT SALAKEA", 
  "AJENG ALIFFATURRAHMA", "Akram", "ALIF RAFI", "ALISA KARIM", "ANDI FATWA", 
  "ARINA HUSNAINI", "DAFFA AKOBA MALANTUNG", "Dika Gustriansyah H. Day", "Farel", 
  "FEBRYAN VALENTINO KONSTAN", "Fitra Fara Dina", "I WAYAN JOSES ARTAWAN", "Khairul A. Bouty", 
  "MARCELL YULIANTO WONG", "MOH FIRMANSYAH L USMAN", "MOH. ARSYIL MAULANA. S", 
  "MOH. FADLI S. DATU", "MOH. IRGI FACHRURRAZI", "MOH. LUTHFI FIRMANSYAH", 
  "MOH. MIRFAKA ALAMSYAH", "MOH. REZA S. RAUF", "MOH. ZULFIQRI M. RASYID", 
  "MOHAMMAD SIRAJ MUNIR", "MUH. AINUL S. BAHANAN", "Muh. Sandi Syahputra", 
  "Nia Erliza", "NURWINDA KASIM", "PRATIWI A. TAMAIL", "RIFKA ABD. HAMID", 
  "SITI NURUL HIDAYA", "YOSEP SABASTIAN", "ZUL FATUR"
]
};

// LOAD KELAS
window.onload = () => {
  const kelasSelect = document.getElementById("kelasSelect");
  const filterKelas = document.getElementById("filterKelas");

  // OPSI DEFAULT (INI YANG KEMARIN HILANG)
  filterKelas.innerHTML = `<option value="ALL">Semua Kelas</option>`;

  for (let k in dataKelas) {
    kelasSelect.innerHTML += `<option value="${k}">${k}</option>`;
    filterKelas.innerHTML += `<option value="${k}">${k}</option>`;
  }
};

// PINDAH HALAMAN
function mulaiAbsensi() {
  halamanAwal.style.display = "none";
  formAbsensi.style.display = "block";
}

// PILIH KELAS
kelasSelect.onchange = function () {
  namaSelect.innerHTML = '<option value="" disabled selected>Pilih Nama</option>';
  namaSelect.disabled = true;

  if (dataKelas[this.value]) {
    dataKelas[this.value].forEach(n => {
      namaSelect.innerHTML += `<option value="${n}">${n}</option>`;
    });
    namaSelect.disabled = false;
  }
};

// SUBMIT
absenBtn.onclick = () => {

  const kelas = kelasSelect.value;
  const nama = namaSelect.value;

  if (!kelas || !nama) {
    alert("Lengkapi data!");
    return;
  }

  const fotoInput = document.getElementById("fotoAbsen");

  // ✅ FOTO WAJIB (VALIDASI SAJA)
  if (!fotoInput || fotoInput.files.length === 0) {
    alert("❌ Wajib ambil foto kehadiran");
    return;
  }

  absenBtn.disabled = true;
  absenBtn.innerText = "Mengirim...";

  kirimAbsensi(nama, kelas);
};

// LOAD R/* ================= MODE GURU (3x KLIK LOGO) ================= */

let klikLogo = 0;
let resetKlik;

document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo-wrapper img");
  if (!logo) return;

  logo.style.cursor = "pointer";

  logo.addEventListener("click", () => {
    klikLogo++;
    clearTimeout(resetKlik);

    resetKlik = setTimeout(() => {
      klikLogo = 0;
    }, 1200);

    if (klikLogo === 3) {
      klikLogo = 0;

      const pwd = prompt("Masukkan password guru:");
      if (pwd === "smansahebat") {
        bukaRekap();
      } else if (pwd !== null) {
        alert("❌ Password salah");
      }
    }
  });
});

/* ================= BUKA REKAP ================= */
function bukaRekap() {
  // JANGAN sembunyikan halaman awal
  document.getElementById("formAbsensi").style.display = "none";
  document.getElementById("hasilAbsensi").style.display = "none";

  loadRekap();
}

//LOAD REKAP
function loadRekap() {
  fetch(SCRIPT_URL)
    .then(r => r.json())
    .then(data => {

      dataRekapGlobal = data;

      rekapGuru.style.display = "block";
      tampilkanRekap("ALL");
    });
}

function tampilkanRekap(filter) {
  rekapBody.innerHTML = "";

  let tampil = [];
  let nomor = 1;

  dataRekapGlobal.forEach(d => {

    if (!d.nama || d.nama.toLowerCase() === "nama") return;

    if (filter !== "ALL" && d.kelas !== filter) return;

    const key = d.nama + d.tanggal;
    if (tampil.includes(key)) return;
    tampil.push(key);

    rekapBody.innerHTML += `
      <tr>
        <td>${nomor++}</td>
        <td>${formatTanggal(d.tanggal)}</td>
        <td>${d.nama}</td>
        <td>${d.kelas}</td>
        <td>${formatJam(d.jam)}</td>
        <td style="color:${d.status==="TEPAT WAKTU"?"green":"red"}">
          <b>${d.status}</b>
        </td>
      </tr>
    `;
  });
}

// ===== FORMAT TANGGAL & JAM UNTUK REKAP =====
function formatTanggal(tanggal) {
  const d = new Date(tanggal);
  if (isNaN(d)) return "-";
  return d.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
}

function formatJam(jam) {
  if (!jam) return "-";
  const d = new Date(jam);
  return d.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

document.getElementById("btnSelesai").onclick = function () {
  location.reload();
};

function kirimAbsensi(nama, kelas) {
  fetch(SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify({
      nama,
      kelas,
      foto: true
    })
  })
  .then(r => r.json())
  .then(res => {

  // ❌ GAGAL / DITOLAK SERVER
  if (res.result !== "success") {
    if (res.result === "already") {
      alert("⚠️ Kamu sudah absen hari ini");
    } else if (res.result === "foto_required") {
      alert("❌ Foto wajib diambil");
    } else {
      alert("❌ Gagal absen: " + res.result);
    }

    absenBtn.disabled = false;
    absenBtn.innerText = "Kirim Absensi";
    return;
  }

  // ✅ BERHASIL
  formAbsensi.style.display = "none";
  hasilAbsensi.style.display = "block";

  hasilNama.textContent = nama;
  hasilKelas.textContent = kelas;
  hasilJam.textContent = new Date().toLocaleTimeString();

  hasilStatus.innerHTML =
    `<b style="color:${res.status === "TEPAT WAKTU" ? "green" : "red"}">
      ${res.status}
     </b>`;

  resetFoto();
});
}

const fotoInput = document.getElementById("fotoAbsen");
const btnKamera = document.getElementById("btnKamera");
const fileText = document.getElementById("fileText");

// Klik tombol → buka kamera
btnKamera.onclick = () => {
  fotoInput.click();
};

// Setelah foto diambil
fotoInput.addEventListener("change", () => {
  if (fotoInput.files.length > 0) {
    btnKamera.innerText = "✅ Foto siap dikirim";
    btnKamera.disabled = true;

    fileText.textContent = "Foto selfie berhasil diambil";
    fileText.style.color = "green";
  }
});

function resetFoto() {
  fotoInput.value = "";
  btnKamera.innerText = "📸 Ambil Foto";
  btnKamera.disabled = false;
}