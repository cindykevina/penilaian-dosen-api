const dataKriteria = [
  {
    nama: "Pelaksanaan Pendidikan (termasuk Penilaian Pimpinan dan Mahasiswa)",
    bobot: 10,
    deskripsi: ""
  },
  {
    nama: "Penelitian",
    bobot: 25,
    deskripsi: ""
  },
  {
    nama: "Pengabdian kepada Masyarakat",
    bobot: 20,
    deskripsi: ""
  },
  {
    nama: "Penunjang",
    bobot: 5,
    deskripsi: ""
  },
  {
    nama: "Kompetensi",
    bobot: 5,
    deskripsi: ""
  },
  {
    nama: "Jabatan Akademik Dosen",
    bobot: 15,
    deskripsi: ""
  },
  {
    nama: "Kuesioner Mahasiswa",
    bobot: 10,
    deskripsi: ""
  },
  {
    nama: "Kuesioner Pimpinan",
    bobot: 10,
    deskripsi: ""
  },
];
const dataHomebase = [
  {
    nama: "Sarjana Terapan Akuntansi Bisnis Digital",
  },
  {
    nama: "Sarjana Terapan Bisnis Digital",
  },
  {
    nama: "Sarjana Terapan Perbankan dan Keuangan Digital",
  },
  {
    nama: "S1 Akuntansi",
  },
  {
    nama: "S2 Akuntansi",
  },
  {
    nama: "S1 Biokewirausahaan",
  },
  {
    nama: "S1 Manajemen",
  },
  {
    nama: "S1 Pariwisata",
  },
  {
    nama: "S1 Sistem Informasi",
  },
  {
    nama: "S1 Teknologi Informasi",
  },
];

const dataDosen = [
  {
    nama: "Arief Fahmie, S.E., M.M., CAAT.",
    homebaseId: 1,
    nip: "732173215819059000",
    jabatan: "LEKTOR",
  },
  {
    nama: "Hardini Lestiani Hernusa, S.E., Ak., M.Sc., CA., AIEMA., CFE.",
    homebaseId: 1,
    nip: "943244724044546000",
    jabatan: "LEKTOR",
  },
  {
    nama: "Iis Wahyuni, .SE., M.Ak., AWP",
    homebaseId: 1,
    nip: "813518699122042000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Jasmadeti, S.E., M.Ak., AWP",
    homebaseId: 1,
    nip: "711665081384403000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Siti Ita Rosita, S.E., M.M., SAS., CAAT.",
    homebaseId: 1,
    nip: "204674011317498000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Toni Andrianto, SST., Ak., M.M., CA., QIA.",
    homebaseId: 1,
    nip: "975274874920049000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Triandi, M.Ak., Ak., CA.",
    homebaseId: 1,
    nip: "296322218115413000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Yayuk Nurjanah, S.E., M.Ak., AWP., CIIQA., CAAT.",
    homebaseId: 1,
    nip: "195280259120428000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Ade Yusdira, S.E., M.M.",
    homebaseId: 2,
    nip: "422057993434192000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Dr. Adil Fadillah, S.E., M.M, CSM.",
    homebaseId: 2,
    nip: "556899143653961000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Denta Purnama, S.E., M.M., CDM.",
    homebaseId: 2,
    nip: "275740398655261000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Morita, SS., M.Pd.",
    homebaseId: 2,
    nip: "311500470474031000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "(C)Dr. TB. Dicky Faldy SN, S.E., M.H., M.M., CDM.",
    homebaseId: 2,
    nip: "301085668544975000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "H. Weman Suardy, S.E., M.M.",
    homebaseId: 2,
    nip: "425624192632117000",
    jabatan: "GURU_BESAR",
  },
  {
    nama: "Dr. Hj. Yulia Nurendah, S.E., M.M.",
    homebaseId: 2,
    nip: "291678904544715000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Dr. H. R. Aang Munawar, S.E., M.M., CIFM., CIGS., CIMA., CIERM., CIBG., CIABV., CIIQA., QBSS, CBOA®",
    homebaseId: 3,
    nip: "355017863706670000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Rini Syarif, SH., MH.",
    homebaseId: 3,
    nip: "104448740059528000",
    jabatan: "LEKTOR",
  },
  {
    nama: "Robert Pius Pardede, S.E., M.M.",
    homebaseId: 3,
    nip: "425576558669708000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Sinta Listari, S.E., M.M.",
    homebaseId: 3,
    nip: "635162922111205000",
    jabatan: "LEKTOR",
  },
  {
    nama: "Hj. Suharmiati, Dra., MM.",
    homebaseId: 3,
    nip: "330024186139236000",
    jabatan: "LEKTOR",
  },
  {
    nama: "Sujana, SE., MM.",
    homebaseId: 3,
    nip: "559398571996063000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Airin Nuraini, SE., M.Si.",
    homebaseId: 4,
    nip: "977489402869075000",
    jabatan: "GURU_BESAR",
  },
  {
    nama: "Amrulloh, SE., M.Si.",
    homebaseId: 4,
    nip: "176082411107567000",
    jabatan: "GURU_BESAR",
  },
  {
    nama: "Prof. Dr. Bambang Pamungkas, Ak,. MBA, CA, CPA, CPA (Aust), ASEAN CPA, CIMBA, CSFA, CFrA, CGAE.",
    homebaseId: 5,
    nip: "728759608978633000",
    jabatan: "GURU_BESAR",
  },
  {
    nama: "Dr. David HM Hasibuan, Ak., MM., CA, CTA.",
    homebaseId: 5,
    nip: "993365476706368000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Desi Efrianti, S.E., M.Ak.",
    homebaseId: 4,
    nip: "731147579529298000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Dessy Evianti, S.E., M.Ak.",
    homebaseId: 4,
    nip: "453750829306758000",
    jabatan: "LEKTOR",
  },
  {
    nama: "Didit Pradipto, Ak., MM., CA",
    homebaseId: 4,
    nip: "837659134357122000",
    jabatan: "LEKTOR",
  },
  {
    nama: "Firdaus Amyar, S.E., M.A., Ph,D., Ak., CA., LCCC., CSFA., CGAE.",
    homebaseId: 5,
    nip: "735930833250431000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Hadi Sutomo, S.E., M.Ak., BKP.",
    homebaseId: 4,
    nip: "795009113398681000",
    jabatan: "LEKTOR",
  },
  {
    nama: "Dr. Handono Ishardyatmo, S.E., Ak., M.M.",
    homebaseId: 4,
    nip: "886287049394526000",
    jabatan: "TENAGA_PENGAJAR",
  },
  {
    nama: "Dr. H. Hendra Setiawan, SE., MM., CMA., CIBA., PFM., CBV., CSRS.",
    homebaseId: 5,
    nip: "476540400919343000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Heti Herawati, SE., M.Ak., CA",
    homebaseId: 4,
    nip: "937145417214570000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "I Gede Sudi Adnyana, S.E., MBA, CSFA, ERMCP, CSRA, CGAP, CA., Ak.",
    homebaseId: 4,
    nip: "290922062220042000",
    jabatan: "TENAGA_PENGAJAR",
  },
  {
    nama: "Dr. H. Iriyadi, Ak., M.Comm., CA",
    homebaseId: 5,
    nip: "668244582478871000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Kusuma Dewi, S.Akun., BKP., M.Ak., CAAT.",
    homebaseId: 4,
    nip: "696292464030572000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Prof. Dr. H. Moermahadi Soerja Djanegara, S.E., M.M., Ak., CPA., CA., CSFA, ASEAN CPA.",
    homebaseId: 4,
    nip: "907739239708742000",
    jabatan: "TENAGA_PENGAJAR",
  },
  {
    nama: "Muanas, S.E., M.M., CA",
    homebaseId: 4,
    nip: "692702412503609000",
    jabatan: "LEKTOR",
  },
  {
    nama: "Nilda Tartilla, S.E., M.Ak.",
    homebaseId: 4,
    nip: "350915889298941000",
    jabatan: "LEKTOR",
  },
  {
    nama: "Richad Alamsyah, S.E., M.Ak., CSA®, CRMO, CFP®, CRMP.",
    homebaseId: 4,
    nip: "411749210851211000",
    jabatan: "TENAGA_PENGAJAR",
  },
  {
    nama: "Sudradjat, S.E., M.Ak., Ak., CA.",
    homebaseId: 4,
    nip: "960684650976828000",
    jabatan: "TENAGA_PENGAJAR",
  },
  {
    nama: "Dr. Sutarti, S.E., M.M., SAS.",
    homebaseId: 4,
    nip: "805857851547115000",
    jabatan: "TENAGA_PENGAJAR",
  },
  {
    nama: "Suwarno, S.E., M.Ak, Ak, CA, C.FrA, Asean CPA, CIS",
    homebaseId: 4,
    nip: "511830474105172000",
    jabatan: "TENAGA_PENGAJAR",
  },
  {
    nama: "Tjokorda Gde Budi Kusuma, S.T., M.Si., M.Int.Dev.E",
    homebaseId: 4,
    nip: "808481199310770000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Hj. Tri Marlina, S.E., M.Ak.",
    homebaseId: 4,
    nip: "926411492576727000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Udi Pramiudi, SE., M.Ak, CIIQA",
    homebaseId: 4,
    nip: "599316612371501000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Wulan Wahyuni Rossa Putri, S.Pd., M.Ak.",
    homebaseId: 4,
    nip: "503378245277271000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Yuliandi, S.E., M.Ak.",
    homebaseId: 4,
    nip: "563562040137132000",
    jabatan: "GURU_BESAR",
  },
  {
    nama: "Ani Mekaniwati, S.E., M.P.",
    homebaseId: 6,
    nip: "282286179325758000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Arde Lindung Pambudi, S.E., M.M.",
    homebaseId: 6,
    nip: "550278183615557000",
    jabatan: "GURU_BESAR",
  },
  {
    nama: "Danti Astrini, S.E., M.Si.",
    homebaseId: 6,
    nip: "656477283697282000",
    jabatan: "LEKTOR",
  },
  {
    nama: "Diah Kusumayanti, S.P., M.Si.",
    homebaseId: 6,
    nip: "181494159563573000",
    jabatan: "GURU_BESAR",
  },
  {
    nama: "Dr. H. Mumuh Mulyana, SE., MM., M.Si., CSM., CSO., CBO, CCBA., CPSM., CBPA®",
    homebaseId: 6,
    nip: "777878002053613000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Sandy Wibisono, S.Si., M.S.M.",
    homebaseId: 6,
    nip: "115532212188904000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Sulistiono, S.E., M.M., CSM.",
    homebaseId: 6,
    nip: "635778152658765000",
    jabatan: "GURU_BESAR",
  },
  {
    nama: "Dr. Annaria Magdalena M., SE., MM., M.Pd.",
    homebaseId: 7,
    nip: "563806137259005000",
    jabatan: "GURU_BESAR",
  },
  {
    nama: "Anton Widio Pratomo, S.E., M.M.",
    homebaseId: 7,
    nip: "407887470437492000",
    jabatan: "TENAGA_PENGAJAR",
  },
  {
    nama: "Arnold Sultantio Hutabarat, S.Hut., M.S.E.",
    homebaseId: 7,
    nip: "277399463364459000",
    jabatan: "GURU_BESAR",
  },
  {
    nama: "Bayu Prasetyo Soedargo, S.SOS., M.M.",
    homebaseId: 7,
    nip: "794172466995945000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Bintang Sahala Marpaung, SP., M.M.",
    homebaseId: 7,
    nip: "895617624202462000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Dr. Budi Setiawan, S.E., M.Si.",
    homebaseId: 7,
    nip: "311042538452359000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Donny Hendry Fahsani, S.Sos., M.Hum.",
    homebaseId: 7,
    nip: "230452343230321000",
    jabatan: "GURU_BESAR",
  },
  {
    nama: "Edy Safni Rosa, S.H., M.M.",
    homebaseId: 7,
    nip: "235504934382503000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Febry Lodwyk Rihe Riwoe, S.Kom., M.M.",
    homebaseId: 7,
    nip: "809972731894486000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Hj. Gen Gen Gendalasari, Dra., M.M.",
    homebaseId: 7,
    nip: "884419828039447000",
    jabatan: "LEKTOR",
  },
  {
    nama: "Henry  Sumurung Octavian, S.E., M.M.",
    homebaseId: 7,
    nip: "565622026819146000",
    jabatan: "GURU_BESAR",
  },
  {
    nama: "Heri Sastra, S.E., M.M.",
    homebaseId: 7,
    nip: "133712879932993000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Dr. Iswandi Sukartaatmadja, S.E., M.M., CIIQA, CRMA.",
    homebaseId: 7,
    nip: "276381578895727000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Dr. Jan Horas V. Purba, Ir.,M.Si., CBPA®., CPSP®.",
    homebaseId: 7,
    nip: "352604806699253000",
    jabatan: "GURU_BESAR",
  },
  {
    nama: "Maju Lumban Tobing, S.E., M.M.",
    homebaseId: 7,
    nip: "537289142623131000",
    jabatan: "GURU_BESAR",
  },
  {
    nama: "Dr. Ir. Mangasa Augustinus Sipahutar, M.M.",
    homebaseId: 7,
    nip: "588968856243468000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Mashadi, S.E., M.M.",
    homebaseId: 7,
    nip: "972828859337060000",
    jabatan: "LEKTOR",
  },
  {
    nama: "H. M. Noorman Mulyadi, S.E., M.M.",
    homebaseId: 7,
    nip: "660716911393697000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Hj. Nani Cahyani, Dra., M.Si.",
    homebaseId: 7,
    nip: "169149102243702000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Neni Nurisnaini, S.P., M.M.",
    homebaseId: 7,
    nip: "704237729438865000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Dr. Nusa Muktiadji, Ir., MM.",
    homebaseId: 5,
    nip: "952116056483343000",
    jabatan: "GURU_BESAR",
  },
  {
    nama: "Pinto Jaya, S.E., M.M.",
    homebaseId: 7,
    nip: "994518972094515000",
    jabatan: "TENAGA_PENGAJAR",
  },
  {
    nama: "Rachmawaty Rachman, S.E., M.M.",
    homebaseId: 7,
    nip: "994164785547919000",
    jabatan: "LEKTOR",
  },
  {
    nama: "Dr. Ratih Puspitasari, S.E., MBA., QIBP, CBPA®",
    homebaseId: 5,
    nip: "685154834002619000",
    jabatan: "LEKTOR",
  },
  {
    nama: "Rizal Riyadi, S.E., M.M., M.Ak.",
    homebaseId: 7,
    nip: "550386484011351000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Dr. Saefudin Zuhdi, Drs., M.M.",
    homebaseId: 7,
    nip: "563074527136314000",
    jabatan: "TENAGA_PENGAJAR",
  },
  {
    nama: "Soei Khim, S.E., M.M.",
    homebaseId: 7,
    nip: "154431442864131000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Stanislaus Bandung Argoputro, SE., MAB.",
    homebaseId: 7,
    nip: "462139514235854000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Prof. Sukandi Sukartaatmadja, Ir., MS., Ph.D.",
    homebaseId: 7,
    nip: "275617051744023000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Uluan Silaen, S.E., M.M.",
    homebaseId: 7,
    nip: "807342642933793000",
    jabatan: "TENAGA_PENGAJAR",
  },
  {
    nama: "Wadudi Wibowo, Ir., M.Ec.Dev",
    homebaseId: 7,
    nip: "877911333038764000",
    jabatan: "TENAGA_PENGAJAR",
  },
  {
    nama: "Wimpi Srihandoko, S.E., M.M.",
    homebaseId: 7,
    nip: "748223219307365000",
    jabatan: "TENAGA_PENGAJAR",
  },
  {
    nama: "Yoyon Supriadi, S.E., M.M., CSA., CIB.",
    homebaseId: 7,
    nip: "195448061560784000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Yudin Taqyudin, S.Kom.I, M.Sos.",
    homebaseId: 7,
    nip: "250263891358152000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Bambang Hengky Rainanto, S.Pi., M.M., Ph.D., CIIQA.",
    homebaseId: 8,
    nip: "254638384300305000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Cecilia Valentina Srihadi Suryanti, Ir., M.Sc.",
    homebaseId: 8,
    nip: "401743064239232000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Charles Parnauli Saragi, S.I.Kom., M.I.Kom.",
    homebaseId: 8,
    nip: "227097900048605000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Sri Endah Yuwantiningrum, S.E., M.M.Par",
    homebaseId: 8,
    nip: "858975888797077000",
    jabatan: "TENAGA_PENGAJAR",
  },
  {
    nama: "Tarida Marlin Surya M., Ir., M.M.",
    homebaseId: 8,
    nip: "934603752434226000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Wulandari Dwi Utari, S.Hut., M.Si.",
    homebaseId: 8,
    nip: "281640981374001000",
    jabatan: "GURU_BESAR",
  },
  {
    nama: "Ade Mulyana, S.SI., M.Kom.",
    homebaseId: 9,
    nip: "722419121833707000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Egi Adithia Pradana, S.Kom., M.Kom.",
    homebaseId: 9,
    nip: "310649871426624000",
    jabatan: "GURU_BESAR",
  },
  {
    nama: "Marwan Effendy, S.Kom., MMSI",
    homebaseId: 9,
    nip: "403190118337001000",
    jabatan: "TENAGA_PENGAJAR",
  },
  {
    nama: "Pingky Dezar Zulkarnain, S.E., M.Sc., Ph.D, CertDA.",
    homebaseId: 9,
    nip: "171183723175820000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Rahma Djati Kusuma, S.SI., M.T.",
    homebaseId: 9,
    nip: "208402219160990000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Wahyu Indra Satria, S.Kom.,  M. Kom.",
    homebaseId: 9,
    nip: "182447572783943000",
    jabatan: "GURU_BESAR",
  },
  {
    nama: "Yanto Hermawan, S.T, M.Kom.",
    homebaseId: 9,
    nip: "127469474774169000",
    jabatan: "GURU_BESAR",
  },
  {
    nama: "Abdul Roup, SE., M.Ak., CCNSP.",
    homebaseId: 4,
    nip: "241545142149902000",
    jabatan: "GURU_BESAR",
  },
  {
    nama: "Anton Sukamto, S.Kom., M.T.I.",
    homebaseId: 10,
    nip: "615372846118829000",
    jabatan: "LEKTOR",
  },
  {
    nama: "Edi Nurachmad, S.Kom., M.Kom.",
    homebaseId: 10,
    nip: "765833639461361000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Febri Damatraseta, ST., M.Kom.",
    homebaseId: 10,
    nip: "589807853378831000",
    jabatan: "TENAGA_PENGAJAR",
  },
  {
    nama: "Isnan Mulia, S.Komp., M.Kom.",
    homebaseId: 10,
    nip: "221111299380607000",
    jabatan: "GURU_BESAR",
  },
  {
    nama: "Septian Cahyadi, S.Kom., M.Kom.",
    homebaseId: 10,
    nip: "416357869133837000",
    jabatan: "GURU_BESAR",
  },
  {
    nama: "Suci Sri Utami Sutjipto, S.T., M.Kom., MPP.",
    homebaseId: 10,
    nip: "988944212785199000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Iwan Purwanto Sudjali, S.E., M.Bus. (Acc), Ph.D., Ak.",
    homebaseId: 4,
    nip: "394701988293946000",
    jabatan: "LEKTOR_KEPALA",
  },
  {
    nama: "Dr. Dewi Sarifah Tullah, S.E., M.Si., Ak., CA.",
    homebaseId: 4,
    nip: "978892666205072000",
    jabatan: "LEKTOR",
  },
  {
    nama: "Dr. Hery Subowo, S.E., MPM., CIA., CFE., CA., Ak., ASEAN CPA., CSFA., CPA., CFrA., IIAP., CGAE., CHFI.",
    homebaseId: 4,
    nip: "176921200877329000",
    jabatan: "LEKTOR",
  },
  {
    nama: "Dr. Bahtiar Arif, S.E., MA.Econ., Ak., CPA, CSFA, CFrA.",
    homebaseId: 7,
    nip: "793865218003909000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Dr. Daissy Erdianthy, S.E., M.Ak., Ak., CA., ASEAN CPA",
    homebaseId: 4,
    nip: "647711709025358000",
    jabatan: "ASSISTEN_AHLI",
  },
  {
    nama: "Dr. Fatimah Abdillah, STP, M.Si., M.S.M.",
    homebaseId: 7,
    nip: "639772595950364000",
    jabatan: "GURU_BESAR",
  },
  {
    nama: "Jemy Arieswanto, S.Kom., M.Kom.",
    homebaseId: 10,
    nip: "597393791671887000",
    jabatan: "TENAGA_PENGAJAR",
  },
  {
    nama: "Dr. Sri Pujiastuti, S.E., M.Par.",
    homebaseId: 8,
    nip: "265222656743420000",
    jabatan: "TENAGA_PENGAJAR",
  },
];

const dataPeriode = [
  {
    periode: "2023/2024 Ganjil"
  },
  {
    periode: "2023/2024 Genap"
  },
  {
    periode: "2024/2025 Ganjil"
  },
  {
    periode: "2024/2025 Genap"
  },
]

const dataSubKriteria = [
  {
    kriteriaId: 1,
    nama: "Buku teks. buku referensi. buku ajar yang diterbitkan oleh penerbit nasional atau penerbit luar negeri",
    nilaiMaksimal: 100,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 2,
    nama: "Hak Kekayaan Intelektual (hak paten. desain industri. hak cipta. merek)",
    nilaiMaksimal: 5,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 2,
    nama: "Tulisan/Publikasi pada jurnal ilmiah Nasional yang terakreditasi",
    nilaiMaksimal: 20,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 2,
    nama: "Tulisan/Publikasi pada jurnal ilmiah Internasional bereputasi",
    nilaiMaksimal: 40,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 2,
    nama: "Dampak dari publikasi ilmiah yang ditunjukkan oleh jumlah sitasi dan H-index di Scopus dan Google Scholar",
    nilaiMaksimal: 10,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 2,
    nama: "Karya tulis ilmiah yang disajikan pada seminar ilmiah di tingkat Nasional sebagai Keynote Speaker atau Invited Speaker",
    nilaiMaksimal: 5,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 2,
    nama: "Karya tulis ilmiah yang disajikan pada seminar ilmiah di tingkat Internasional sebagai Keynote Speaker atau Invited Speaker",
    nilaiMaksimal: 15,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 2,
    nama: "Karya tulis ilmiah yang disajikan pada seminar ilmiah di tingkat Nasional sebagai Pemakalah",
    nilaiMaksimal: 10,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 2,
    nama: "Karya tulis ilmiah yang disajikan pada seminar ilmiah di tingkat Internasional sebagai Pemakalah",
    nilaiMaksimal: 15,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 2,
    nama: "Memperoleh hibah internal",
    nilaiMaksimal: 5,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 2,
    nama: "Memperoleh hibah nasional",
    nilaiMaksimal: 10,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 2,
    nama: "Memperoleh hibah internasional",
    nilaiMaksimal: 15,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 3,
    nama: "Menghasilkan Teknologi Tepat Guna/Pengembangan Software (misalnya: Aplikasi Laporan Keuangan. Sistem Informasi Akuntansi. dll). Produk (Produk Terstandarisasi. Produk Tersertifikasi)",
    nilaiMaksimal: 20,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 3,
    nama: "Memberikan pelatihan/penyuluhan/pendampingan kepada masyarakat. terjadwal/terprogram di tingkat Lokal / Wilayah",
    nilaiMaksimal: 5,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 3,
    nama: "Memberikan pelatihan/penyuluhan/pendampingan kepada masyarakat. terjadwal/terprogram di tingkat Nasional",
    nilaiMaksimal: 10,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 3,
    nama: "Memberikan pelatihan/penyuluhan/pendampingan kepada masyarakat. terjadwal/terprogram di tingkat Internasional",
    nilaiMaksimal: 15,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 3,
    nama: "Memperoleh hibah internal",
    nilaiMaksimal: 5,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 3,
    nama: "Memperoleh hibah nasional",
    nilaiMaksimal: 10,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 3,
    nama: "Memperoleh hibah internasional",
    nilaiMaksimal: 15,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 4,
    nama: "Menjadi anggota organisasi profesi di tingkat Nasional",
    nilaiMaksimal: 1,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 4,
    nama: "Menjadi anggota organisasi profesi di tingkat Internasional",
    nilaiMaksimal: 2,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 4,
    nama: "Keanggotaan dalam organisasi profesi dosen",
    nilaiMaksimal: 1,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 4,
    nama: "Mendapat penghargaan/tanda jasa",
    nilaiMaksimal: 2,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 4,
    nama: "Berperan serta dalam kegiatan panitia/badan pada perguruan tinggi (termasuk Reviewer Jurnal)",
    nilaiMaksimal: 3,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 4,
    nama: "Menjadi anggota dalam suatu panitia/badan pada lembaga pemerintah",
    nilaiMaksimal: 2,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 4,
    nama: "Berperan aktif dalam pertemuan ilmiah sebagai peserta",
    nilaiMaksimal: 1,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 5,
    nama: "Sertifkasi Dosen",
    nilaiMaksimal: 10,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 5,
    nama: "Sertifkasi Profesi",
    nilaiMaksimal: 10,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 6,
    nama: "Guru Besar",
    nilaiMaksimal: 4,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 6,
    nama: "Lektor Kepala",
    nilaiMaksimal: 3,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 6,
    nama: "Lektor",
    nilaiMaksimal: 2,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 6,
    nama: "Asisten Ahli",
    nilaiMaksimal: 1,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 6,
    nama: "Tenaga Pengajar",
    nilaiMaksimal: 0,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 7,
    nama: "Kuesioner Mahasiswa",
    nilaiMaksimal: 5,
    jenis: "BENEFIT",
  },
  {
    kriteriaId: 8,
    nama: "Kuesioner Pimpinan",
    nilaiMaksimal: 5,
    jenis: "BENEFIT",
  },
];

module.exports = {dataDosen, dataHomebase, dataKriteria, dataPeriode, dataSubKriteria}

