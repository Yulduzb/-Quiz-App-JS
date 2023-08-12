const sorular = [
  {
    soru: "JavaScript'te kaç temel veri türü vardır?",
    cevaplar: [
      { metin: "6", dogru: false },
      { metin: "7", dogru: false },
      { metin: "8", dogru: true },
      { metin: "9", dogru: false }
    ]
  },
  {
    soru: "JavaScript'te 'String' veri türü ne tür verileri temsil eder?",
    cevaplar: [
      { metin: "Tam sayıları", dogru: false },
      { metin: "Metin (karakter dizilerini)", dogru: true },
      { metin: "Boolean değerleri", dogru: false },
      { metin: "Sembol değerlerini", dogru: false }
    ]
  },
  {
    soru: "Aşağıdakilerden hangisi JavaScript'teki bir veri türü değildir?",
    cevaplar: [
      { metin: "Number", dogru: false },
      { metin: "Null", dogru: false },
      { metin: "NaN", dogru: true },
      { metin: "Symbol", dogru: false }
    ]
  },
  {
    soru: "JavaScript'teki 'Boolean' veri türü kaç farklı değeri temsil edebilir?",
    cevaplar: [
      { metin: "1", dogru: false },
      { metin: "2", dogru: true },
      { metin: "3", dogru: false },
      { metin: "4", dogru: false }
    ]
  },
  {
    soru: "Bir değişkenin değeri atanmamışsa hangi  değeri alır?",
    cevaplar: [
      { metin: "null", dogru: false },
      { metin: "0", dogru: false },
      { metin: "undefined", dogru: true },
      { metin: "false", dogru: false }
    ]
  },
  {
    soru: "JavaScript'teki 'Symbol' veri türü ne işe yarar?",
    cevaplar: [
      { metin: "Karakter dizilerini temsil eder.", dogru: false },
      { metin: "Benzersiz ve değişmez değerler oluşturmak için kullanılır.", dogru: true },
      { metin: "Sayıları temsil eder.", dogru: false },
      { metin: "Boole değerlerini temsil eder.", dogru: false }
    ]
  },
  {
    soru: "JavaScript'teki 'Object' veri türü hangi tür verileri temsil edebilir?",
    cevaplar: [
      { metin: "Sadece metin verilerini", dogru: false },
      { metin: "Sadece sayısal verileri", dogru: false },
      { metin: "Fonksiyonları", dogru: false },
      { metin: "Hemen hemen her tür veriyi", dogru: true }
    ]
  },
  {
    soru: "Aşağıdakilerden hangisi 'Number' veri türünün özel değerlerinden biridir?",
    cevaplar: [
      { metin: "Zero", dogru: false },
      { metin: "NaN", dogru: true },
      { metin: "Undefined", dogru: false },
      { metin: "Null", dogru: false }
    ]
  },
  
  {
    soru: "Üs alma (exponentiation) operatörü nedir?",
    cevaplar: [
      { metin: "**", dogru: true },
      { metin: "//", dogru: false },
      { metin: "^^", dogru: false },
      { metin: "^^^", dogru: false }
    ]
  },
  {
    soru: "Bir sayının 2'ye bölümünden kalanı (remainder) bulmak için hangi operatör kullanılır?",
    cevaplar: [
      { metin: "%", dogru: true },
      { metin: "/", dogru: false },
      { metin: "*", dogru: false },
      { metin: "+", dogru: false }
    ]
  },
  {
    soru: "Aşağıdakilerden hangisi sayıyı azaltma (subtraction) operatörüdür?",
    cevaplar: [
      { metin: "+", dogru: false },
      { metin: "-", dogru: true },
      { metin: "*", dogru: false },
      { metin: "/", dogru: false }
    ]
  },
  {
    soru: "İki sayının çarpım sonucunu bulmak için hangi operatör kullanılır?",
    cevaplar: [
      { metin: "*", dogru: true },
      { metin: "/", dogru: false },
      { metin: "+", dogru: false },
      { metin: "-", dogru: false }
    ]
  },
  {
    soru: "Aritmetik işlemler sırasında hangi operatör öncelikli olarak işlem yapar?",
    cevaplar: [
      { metin: "++", dogru: false },
      { metin: "*", dogru: false },
      { metin: "/", dogru: false },
      { metin: "**", dogru: true }
    ]
  },

 //13
 {
  soru: "JavaScript dilinin orijinal sürümü hangi sürümleri kapsar?",
  cevaplar: [
    { metin: "ES1, ES2, ES3", dogru: true },
    { metin: "ES4, ES5, ES6", dogru: false },
    { metin: "ES3, ES5, ES6", dogru: false },
    { metin: "ES2, ES3, ES5", dogru: false }
  ]
},

  {
    soru: "JavaScript nedir ve genellikle nerede kullanılır?",
    cevaplar: [
      { metin: "JavaScript, web geliştirme için kullanılan bir programlama dilidir.", dogru: true },
      { metin: "JavaScript, web sayfalarının stilini oluşturmak için kullanılır.", dogru: false },
      { metin: "JavaScript, veritabanı yönetim sistemi olarak kullanılır.", dogru: false },
      { metin: "JavaScript, sunucu tarafı uygulamalar oluşturmak için kullanılır.", dogru: false }
    ]
  },
  {
    soru: "JavaScript standartlaştırılmış mıdır?",
    cevaplar: [
      { metin: "Evet, JavaScript ECMA International tarafından standartlaştırılmıştır.", dogru: true },
      { metin: "Hayır, JavaScript herhangi bir standartla uyumlu değildir.", dogru: false },
      { metin: "JavaScript sadece mobil uygulamalar için standartlaştırılmıştır.", dogru: false },
      { metin: "Standartlaşma sadece ön yüz geliştirme için geçerlidir.", dogru: false }
    ]
  },
  {
    soru: "JavaScript'in en son spesifikasyon adı nedir?",
    cevaplar: [
      { metin: "ES3", dogru: false },
      { metin: "ES5", dogru: false },
      { metin: "ES6", dogru: true },
      { metin: "ES7", dogru: false }
    ]
  },
  {
    soru: "JavaScript motoru nedir?",
    cevaplar: [
      { metin: "JavaScript kodunu yürüten bir araçtır.", dogru: true },
      { metin: "JavaScript stil yapısı için kullanılan bir programdır.", dogru: false },
      { metin: "JavaScript ile veritabanı işlemleri gerçekleştirilen bir sistemdir.", dogru: false },
      { metin: "JavaScript için grafik arayüz sağlayan bir araçtır.", dogru: false }
    ]
  },
  // 18

 
    {
      soru: "JavaScript sayıları bellekte nasıl depolar?",
      cevaplar: [
        { metin: "Sayılar 64-bitlik kayan nokta formatında depolanır.", dogru: true },
        { metin: "Sayılar 32-bitlik sabit nokta formatında depolanır.", dogru: false },
        { metin: "Sayılar 16-bitlik tam sayı formatında depolanır.", dogru: false },
        { metin: "Sayılar ASCII kodları olarak depolanır.", dogru: false }
      ]
    },
    {
      soru: "Bir değeri sayıya dönüştürmek için hangi farklı yollar kullanılabilir?",
      cevaplar: [
        { metin: "parseInt() fonksiyonu, Number() fonksiyonu, + operatörü", dogru: true },
        { metin: "convert() fonksiyonu, toNumber() fonksiyonu, - operatörü", dogru: false },
        { metin: "toInteger() fonksiyonu, parseFloat() fonksiyonu, * operatörü", dogru: false },
        { metin: "parseNumber() fonksiyonu, convertToNumber() fonksiyonu, / operatörü", dogru: false }
      ]
    },
    {
      soru: "JavaScript hangi sayı tabanını destekler?",
      cevaplar: [
        { metin: "Onluk (Decimal), ikili (Binary), sekizli (Octal), onaltılı (Hexadecimal)", dogru: true },
        { metin: "Onluk (Decimal), üçlük (Ternary), altılı (Hexary), onaltılı (Hexadecimal)", dogru: false },
        { metin: "Onluk (Decimal), beşlik (Quinary), yedilik (Septenary), onaltılı (Hexadecimal)", dogru: false },
        { metin: "Onluk (Decimal), altılı (Hexary), dokuzluk (Nonary), onaltılı (Hexadecimal)", dogru: false }
      ]
    },
  //21

 
    {
      soru: "JavaScript hangi karşılaştırma operatörlerini içerir?",
      cevaplar: [
        { metin: "===", dogru: false },
        { metin: "<>", dogru: false },
        { metin: "==", dogru: true },
        { metin: ">=", dogru: false }
      ]
    },
    {
      soru: "== operatörü nasıl çalışır?",
      cevaplar: [
        { metin: "Değerleri karşılaştırırken veri türünü dikkate almaz.", dogru: false },
        { metin: "Değerleri ve veri türlerini karşılaştırır, eşitse true döner.", dogru: true },
        { metin: "Değerleri ve veri türlerini karşılaştırır, eşitse false döner.", dogru: false },
        { metin: "Sadece değerleri karşılaştırır, veri türünü dikkate almaz.", dogru: false }
      ]
    },
    {
      soru: "JavaScript'de <, <=, > ve >= operatörleri hangi veri türlerinde kullanılabilir?",
      cevaplar: [
        { metin: "Sadece sayısal veri türlerinde kullanılabilirler.", dogru: true },
        { metin: "Sadece metinsel (string) veri türlerinde kullanılabilirler.", dogru: false },
        { metin: "Herhangi bir veri türünde kullanılabilirler.", dogru: false },
        { metin: "Sadece mantıksal (boolean) veri türlerinde kullanılabilirler.", dogru: false }
      ]
    },
    //24

   
      {
        soru: "JavaScript'de && ve || operatörleri neden kısa devre denir?",
        cevaplar: [
          { metin: "Çünkü bu operatörlerin çalışması, ilk değere bağlı olarak sonlanır ve diğer değerlere bakılmaz.", dogru: true },
          { metin: "Bu operatörler, yalnızca iki değeri karşılaştırarak çalıştığı için kısa devre olarak adlandırılır.", dogru: false },
          { metin: "Bu operatörler, yalnızca sayıları karşılaştırdığı için kısa devre olarak adlandırılır.", dogru: false },
          { metin: "Bu operatörler, yalnızca metinsel (string) verileri karşılaştırdığı için kısa devre olarak adlandırılır.", dogru: false }
        ]
      },
      {
        soru: "&& operatörü nasıl çalışır ve ne döner?",
        cevaplar: [
          { metin: "İki değeri mantıksal AND işlemine tabi tutar ve sonuç olarak true veya false döner.", dogru: true },
          { metin: "İki değeri toplar ve sonucu döner.", dogru: false },
          { metin: "İki değeri mantıksal OR işlemine tabi tutar ve sonuç olarak true veya false döner.", dogru: false },
          { metin: "İki değeri birbirine böler ve sonucu döner.", dogru: false }
        ]
      },
      {
        soru: "|| operatörü nasıl çalışır ve ne döner?",
        cevaplar: [
          { metin: "İki değeri mantıksal OR işlemine tabi tutar ve sonuç olarak true veya false döner.", dogru: true },
          { metin: "İki değeri çarpar ve sonucu döner.", dogru: false },
          { metin: "İki değeri mantıksal AND işlemine tabi tutar ve sonuç olarak true veya false döner.", dogru: false },
          { metin: "İki değeri birbirine ekler ve sonucu döner.", dogru: false }
        ]
      },
      // 27

     
        {
          soru: "JavaScript'de && ve || operatörleri neden kısa devre denir?",
          cevaplar: [
            { metin: "Çünkü bu operatörlerin çalışması, ilk değere bağlı olarak sonlanır ve diğer değerlere bakılmaz.", dogru: true },
            { metin: "Bu operatörler, yalnızca iki değeri karşılaştırarak çalıştığı için kısa devre olarak adlandırılır.", dogru: false },
            { metin: "Bu operatörler, yalnızca sayıları karşılaştırdığı için kısa devre olarak adlandırılır.", dogru: false },
            { metin: "Bu operatörler, yalnızca metinsel (string) verileri karşılaştırdığı için kısa devre olarak adlandırılır.", dogru: false }
          ]
        },
        {
          soru: "&& operatörü nasıl çalışır ve ne döner?",
          cevaplar: [
            { metin: "İki değeri mantıksal AND işlemine tabi tutar ve sonuç olarak true veya false döner.", dogru: true },
            { metin: "İki değeri toplar ve sonucu döner.", dogru: false },
            { metin: "İki değeri mantıksal OR işlemine tabi tutar ve sonuç olarak true veya false döner.", dogru: false },
            { metin: "İki değeri birbirine böler ve sonucu döner.", dogru: false }
          ]
        },
        {
          soru: "|| operatörü nasıl çalışır ve ne döner?",
          cevaplar: [
            { metin: "İki değeri mantıksal OR işlemine tabi tutar ve sonuç olarak true veya false döner.", dogru: true },
            { metin: "İki değeri çarpar ve sonucu döner.", dogru: false },
            { metin: "İki değeri mantıksal AND işlemine tabi tutar ve sonuç olarak true veya false döner.", dogru: false },
            { metin: "İki değeri birbirine ekler ve sonucu döner.", dogru: false }
          ]
        },
        // 30soru
      ];
    
    