const configs = require('../config/configs');
const visitorsDummy = require('./datadummy/visitors');

let data = JSON.parse(`{
  "hero": {
    "img": [{
      "id" : 1,
      "src" : "${configs.base_url}/images/hero/hero-1.jpeg"
    },{
      "id" : 2,
      "src" : "${configs.base_url}/images/hero/hero-2.jpeg"
    },{
      "id" : 3,
      "src" : "${configs.base_url}/images/hero/hero-3.jpeg"
    }],
    "nama": "PT. Restu Agung Narogong",
    "deskripsi": "PT Restu Agung Narogong adalah perusahaan yang bergerak di bidang Kontraktor, Supplier, manufacture, Fabrikasi & Engineering. Selain itu PT. Restu agung Narogong juga memiliki beberapa unit usaha yang mana salah satunya adalah RAN PRECAST."
  },
  "visimisi": {
    "visi": "Menjadikan perusahaan industry beton yang menghasilkan produk berkualitas, dengan mengutamakan “research and development” serta inovasi, sehingga menjadi perusahaan industry beton yang bertaraf internasional.",
    "misi": "Menghasilkan produk-produk inovatif dan berkualitas, yang dapat mengikuti perubahan dan perkembangan zaman. Menjalin Kerjasama dengan mengedepankan profesionalisme, integritas. Kejujuran dan keadilan yang berfokus pada kebutuhan pelanggan. Mewujudkan SDM Ketenagakerjaan yang kompeten, dan membuka akses kesempatan kerja yang lebih luas."
  },
  "keunggulan": [{
    "id" : 1,
    "icon": "${configs.base_url}/images/icons/icon_heart.png",
    "deskripsi": "Produk Berkualitas"
  }, {
    "id" : 2,
    "icon": "${configs.base_url}/images/icons/icon_trending_up.png",
    "deskripsi": "Harga bersaing"
  }, {
    "id" : 3,
    "icon": "${configs.base_url}/images/icons/icon_message_square.png",
    "deskripsi": "Layanan fast respon"
  }, {
    "id" : 4,
    "icon": "${configs.base_url}/images/icons/icon_clock.png",
    "deskripsi": "Ketepatan waktu pengiriman"
  }, {
    "id" : 5,
    "icon": "${configs.base_url}/images/icons/icon_car.png",
    "deskripsi": "Siap kirim seluruh Indonesia"
  }, {
    "id" : 6,
    "icon": "${configs.base_url}/images/icons/icon_people.png",
    "deskripsi": "Gratis konsultasi produk"
  }, {
    "id" : 7,
    "icon": "${configs.base_url}/images/icons/icon_shopping_cart.png",
    "deskripsi": "Melayani dalam jumlah besar maupun kecil"
  }],
  "kontak": {
    "alamat_1": "Jl. Raya PPLI, Ds. Nambo Kec. Klapanungga Kab. Bogor 16820 – Jawa Barat (Workshop 1)",
    "alamat_2": "Ds. Klapasawit Kec. Kalimanah Kab. Purbalingga – Jawa Tengah (Workshop 2)",
    "telepon" : "+62 281-890-2251",
    "email" : "ranprecast@gmail.com",
    "whatsapp_1" : "+6281324198783",
    "whatsapp_2" : "+6285817355087",
    "link_instagram" : "https://www.instagram.com/ranprecast/?igshid=YmMyMTA2M2Y%3D",
    "link_youtube"  : "https://www.youtube.com/channel/UC8Ors0Yr40Q9GZ4rmSBbDRQ"
  },
  "portofolio": [{
    "id": 5001,
    "img": "${configs.base_url}/images/portofolio/(1).jpeg",
    "deskripsi": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
  }, {
    "id": 5002,
    "img": "${configs.base_url}/images/portofolio/(2).jpeg",
    "deskripsi": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
  }, {
    "id": 5003,
    "img": "${configs.base_url}/images/portofolio/(3).jpeg",
    "deskripsi": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
  }, {
    "id": 5004,
    "img": "${configs.base_url}/images/portofolio/(4).jpeg",
    "deskripsi": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
  }, {
    "id": 5005,
    "img": "${configs.base_url}/images/portofolio/(6).jpeg",
    "deskripsi": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
  }, {
    "id": 5005,
    "img": "${configs.base_url}/images/portofolio/(7).jpeg",
    "deskripsi": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
  }, {
    "id": 5005,
    "img": "${configs.base_url}/images/portofolio/(8).jpeg",
    "deskripsi": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
  }, {
    "id": 5005,
    "img": "${configs.base_url}/images/portofolio/(9).jpeg",
    "deskripsi": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
  }, {
    "id": 5005,
    "img": "${configs.base_url}/images/portofolio/(10).jpeg",
    "deskripsi": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
  }, {
    "id": 5005,
    "img": "${configs.base_url}/images/portofolio/(11).jpeg",
    "deskripsi": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
  }],
  "produk": [{
    "id": 5001,
    "name": "Barrier",
    "img": ["${configs.base_url}/images/products/Barier F 500x1000x1000.jpg", "${configs.base_url}/images/products/Barier M 500x1000x1000.jpg"],
    "desc": "Barrier adalah produk precast yang digunakan sebagai pembatas jalan",
    "specs": ["Mutu beton K-350", "Mutu besi U-50 Hard Drawn Deformed Wire (HDDW)",
      "Cetak Basah dengan getaran frekuensi tinggi",
      "System join male-female"
    ],
    "dimensi": ["Lebar : 60cm dan 80cm", "Panjang : 100cm dan 120cm", "Tinggi : 70cm s.d 120cm"],
    "jenis": null
  }, {
    "id": 5002,
    "name": "U-DITCH",
    "img": ["${configs.base_url}/images/products/3d Uditch 40x40 F1.jpg", "${configs.base_url}/images/products/3d Uditch 40x40 F2.jpg", "${configs.base_url}/images/products/3d Uditch 40x40 M2.jpg", "${configs.base_url}/images/products/3d Uditch 40x40 M1.jpg"],
    "desc": "Uditch adalah beton bertulang dengan bentuk penampang huruf U yang berfungsi sebagai saluran Drainase. Uditch memiliki daya lateral yang tinggi, mampu menahan beban dari tanah dan juga alirai air.",
    "specs": ["Mutu beton K-350", "Mutu besi U-50 Hard Drawn Deformed Wire (HDDW)",
      "Cetak Basah dengan getaran frekuensi tinggi",
      "System join male-female"
    ],
    "dimensi": ["30 x 30 x 120 Cm",
      "30 x 40 x 120 Cm",
      "30 x 50 x 120 Cm",
      "40 x 40 x 120 Cm",
      "40 x 50 x 120 Cm",
      "40 x 60 x 120 Cm",
      "50 x 50 x 120 Cm",
      "50 x 60 x 120 Cm",
      "50 x 70 x 120 Cm",
      "60 x 60 x 120 Cm",
      "60 x 70 x 120 Cm",
      "60 x 80 x 120 Cm",
      "80 x 80 x 120 Cm",
      "80 x 100 x 120 Cm",
      "100 x 100 x 120 Cm",
      "100 x 120 x 120 Cm"
    ],
    "jenis": null
  }, {
    "id": 5003,
    "name": "COVER U-DITCH",
    "img": ["${configs.base_url}/images/products/cover 40 1.jpg", "${configs.base_url}/images/products/cover 40 2.jpg", "${configs.base_url}/images/products/cover 40 3.jpg"],
    "desc": "Cover U-ditch adalah merupakan tutup saluran air drainase beton pracetak yang berbentuk huruf U atau U-ditch.",
    "specs": ["Mutu beton K-350", "Mutu besi U-50 Hard Drawn Deformed Wire (HDDW)",
      "Cetak Basah dengan getaran frekuensi tinggi",
      "System join male-female"
    ],
    "dimensi": ["30 x 60 x 9 Cm",
      "40 x 60 x 10 Cm",
      "50 x 60 x 12 Cm",
      "60 x 60 x 12 Cm",
      "80 x 60 x 15 Cm"
    ],
    "jenis": null
  }, {
    "id": 5004,
    "name": "BOX CULVERT",
    "img": ["${configs.base_url}/images/products/BC 100x100x100 M1.jpg", "${configs.base_url}/images/products/BC 100x100x100 M2.jpg", "${configs.base_url}/images/products/BC 100x100x100.jpg", "${configs.base_url}/images/products/BC 60x60x100 F1.jpg", "${configs.base_url}/images/products/BC 60x60x100 F2.jpg", "${configs.base_url}/images/products/BC 60x60x100 M1.jpg", "${configs.base_url}/images/products/BC 60x60x100 M2.jpg"],
    "desc": "Box Culvert adalah merupakan material beton yang banyak digunakan untuk keperluan saluran air sehingga ia banyak dikenal masyarakat dengan sebutan gorong-gorong. Betuk Box Culvert sendiri kotak atau persegi sesuai dengan nama yang diberikan. Box Culvert dapat diaplikasikan pada area kontruksi bawah tanah baik untuk gorong-gorong jembatan, terowongan, gorong-gorong kereta api dan lain sebagainya.",
    "specs": ["Mutu beton K-350", "Mutu besi U-50 Hard Drawn Deformed Wire (HDDW)",
      "Cetak Basah dengan getaran frekuensi tinggi",
      "System join male-female"
    ],
    "dimensi": ["40 x 40 x 100 Cm",
      "50 x 50 x 100 Cm",
      "60 x 60 x 100 Cm",
      "80 x 80 x 100 Cm",
      "100 x 100 x 100 Cm"
    ],
    "jenis": null
  }, {
    "id": 5005,
    "name": "CANSTEEN",
    "img": ["${configs.base_url}/images/products/kansteen 18x32x60.jpg", "${configs.base_url}/images/products/kansteen M 18x32x60.jpg", "${configs.base_url}/images/products/kansteen F 22x25x60.jpg", "${configs.base_url}/images/products/kansteen m 22x25x60.jpg"],
    "desc": "produk beton precast yang banyak dijumpai di pinggir badan jalan. Fungsi utamanya adalah sebagai pembatas antara badan jalan dan trotoar.",
    "specs": ["Mutu Beton K-350",
      "Tidak Bertulang",
      "Model Cansteen dapat disesuaikan dengan permintaan",
      "Join male-female"
    ],
    "dimensi": null,
    "jenis": null
  }, {
    "id": 5006,
    "name": "PAVING BLOCK",
    "img": ["${configs.base_url}/images/products/paving block.jpg"],
    "desc": "Paving Block atau conblock dan adapula yang menyebutnya bata block, merupakan produk beton berbentuk block kecil dan disusun diatas tanah dengan tujuan membuat jalan lebih padat, keras dan rata.",
    "specs": ["Mutu Beton K-250 s.d K-400"],
    "dimensi": null,
    "jenis": ["Model Bata",
      "Trihex",
      "Cacing",
      "Grassblock",
      "Antik",
      "Uskup",
      "Hexagon",
      "Kubus"
    ]
  }],
  "testimoni": [{
    "id": 5001,
    "name": "Asep Balon",
    "rating": 2,
    "deskripsi": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
  }, {
    "id": 5002,
    "name": "Asep Kurnia",
    "rating": 5,
    "deskripsi": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
  }, {
    "id": 5003,
    "name": "Asep Saepul",
    "rating": 3,
    "deskripsi": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
  }, {
    "id": 5004,
    "name": "Ridho Roma",
    "rating": 1,
    "deskripsi": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
  }, {
    "id": 5005,
    "name": "Ridho Ajah",
    "rating": 2,
    "deskripsi": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
  }],
  "visitors": ${visitorsDummy}
}`);


module.exports = data;