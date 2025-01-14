import React from "react";

const Index = () => {
  return (
    <div className="min-h-screen -m-6">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/landing.svg"
            alt="landing"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto pt-48 px-10">
          <h1 className="text-5xl font-bold text-black mb-1 max-w-2xl ">
            Join Us in Building a
          </h1>
          <h1 className="text-5xl font-bold text-black mb-1 max-w-2xl">
            Tsunami Early Warning System
          </h1>
        </div>
      </div>

      {/* About Project Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="bg-[#2E3192] rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Sejarah Terbentuknya PUMMA dan Buoy
            </h3>
            <div className="space-y-6 text-white">
              <p>
                Pada tanggal 22 Desember 2018, bencana tsunami besar melanda
                wilayah Selat Sunda, yang terletak di antara Pulau Jawa dan
                Sumatra. Tsunami ini diakibatkan oleh keruntuhan sebagian besar
                tubuh barat Gunung Anak Krakatau, yang menyebabkan pulau
                Krakatau kehilangan lebih dari 50% massanya. Keruntuhan ini
                adalah hasil dari proses destabilisasi yang telah berlangsung
                lama, yang akhirnya menyebabkan longsoran besar yang memicu
                tsunami. Gelombang tsunami tersebut menerjang wilayah pesisir
                Banten dan Lampung dengan ketinggian ombak yang mencapai hingga
                13 meter. Di sekitar Gunung Anak Krakatau, tinggi ombak bahkan
                mencapai 80 meter. Peristiwa tragis ini mengakibatkan korban
                jiwa sebanyak 437 orang, 14.059 orang mengalami luka-luka, dan
                lebih dari 33.719 orang kehilangan tempat tinggal. Selain itu,
                erupsi vulkanik yang terjadi setelah longsor tersebut
                memuntahkan material vulkanik yang semakin memperburuk situasi
                di kawasan tersebut.{" "}
              </p>
              <p>
                Bencana tsunami Selat Sunda ini menjadi salah satu bencana alam
                paling mematikan di Indonesia pada tahun 2018. Dampaknya yang
                begitu besar tidak hanya mempengaruhi masyarakat setempat secara
                langsung, tetapi juga membuka mata berbagai pihak tentang
                pentingnya sistem peringatan dini yang efektif. Saat bencana
                terjadi, sebagian besar masyarakat tidak mendapatkan peringatan
                yang cukup dini untuk menghindari dampak tsunami. Hal ini
                disebabkan oleh kurangnya teknologi pendeteksi yang mampu
                memberikan peringatan secara cepat dan tepat waktu.{" "}
              </p>
              <p>
                Berangkat dari peristiwa tersebut, tim dosen dari Universitas
                Lampung, yang dipimpin oleh Dr. Ing. Ardian Ulvan, S.T., M.Sc.,
                bersama dengan Melvi, S.T., M.T., Ph.D., Mona Arif Muda, S.T.,
                M.T., serta tim mahasiswa, melakukan penelitian untuk
                mengembangkan alat peringatan dini yang lebih canggih dan
                responsif. Kami menciptakan dua perangkat utama, yaitu PUMMA dan
                Buoy, yang dirancang khusus untuk mendeteksi tsunami dengan
                mengukur ketinggian air laut secara real-time dan membantu
                memberikan informasi ke BMKG sebagai pihak yang berwenang dalam
                mitigasi bencana di indonesia untuk memberi peringatan ke
                masyarakat. Inovasi ini diharapkan dapat menjadi solusi dalam
                memitigasi risiko tsunami di masa mendatang, serta memberikan
                waktu yang cukup bagi masyarakat untuk menyelamatkan diri dan
                mengurangi potensi kerugian material dan korban jiwa.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
