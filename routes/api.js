var express = require('express');
var router = express.Router();


/* GET dataHeader listing. */
let data = {
  nama : "PT. Restu Agung Narogong",
  deskripsi : `PT Restu Agung Narogong adalah perusahaan yang bergerak di bidang Kontraktor, Supplier, manufacture, Fabrikasi & Engineering. Selain itu PT. Restu agung Narogong juga memiliki beberapa unit usaha yang mana salah satunya adalah RAN PRECAST.`,
  visimisi: {
    visi : "Menjadikan perusahaan industry beton yang menghasilkan produk berkualitas, dengan mengutamakan “research and development” serta inovasi, sehingga menjadi perusahaan industry beton yang bertaraf internasional.",
    misi : `Menghasilkan produk-produk inovatif dan berkualitas, yang dapat mengikuti perubahan dan perkembangan zaman.
    Menjalin Kerjasama dengan mengedepankan profesionalisme, integritas. Kejujuran dan keadilan yang berfokus pada kebutuhan pelanggan.
    Mewujudkan SDM Ketenagakerjaan yang kompeten, dan membuka akses kesempatan kerja yang lebih luas.`,
  },
  kontak : [{
    alamat : "Jl. Raya PPLI, Ds. Nambo Kec. Klapanungga Kab. Bogor 16820 – Jawa Barat (Workshop 1)",
    telepon : "+62 281-890-2251 (Fax)",
  },{
    alamat : "Ds. Klapasawit Kec. Kalimanah Kab. Purbalingga – Jawa Tengah (Workshop 2)",
    telepon : "+62 858-1735-5087"
  }]  
}

router.get('/', function(req, res, next) {
  res.send(JSON.stringify(data));
});

router.get('/:id', function(req, res, next) {
  res.send(JSON.stringify(data[req.params.id]));
});

module.exports = router;
