<template>
  <div class="homepage-wrapper">

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="main-container">
        <h1 class="hero-main-title">SELAMAT DATANG</h1>
        <h2 class="hero-sub-title">di SISTEM INFORMASI KEBAGUSAN</h2>
        <p class="hero-description">Pusat Informasi Layanan Kelurahan Kebagusan Untuk Kemudahan Akses Bagi Seluruh Warga</p>
        <div class="hero-search-box">
          <input 
            type="text" 
            v-model="searchQuery"
            placeholder="Cari layanan, dokumen atau informasi..."
            class="hero-search-input"
          />
          <button class="hero-search-btn">Cari</button>
        </div>
        <div class="hero-quick-links">
          <button class="hero-link-btn">Beranda</button>
          <button class="hero-link-btn">Profil Kelurahan</button>
          <button class="hero-link-btn">Kelurahan Kebagusan</button>
          <button class="hero-link-btn">Undang-Undang</button>
          <button class="hero-link-btn">Layanan</button>
        </div>
      </div>
    </section>

    <!-- Sambutan Lurah -->
    <section class="sambutan-section">
      <div class="main-container">
        <h2 class="main-section-title">Sambutan Lurah Kebagusan</h2>
        <div class="sambutan-wrapper">
          <div class="sambutan-profile">
            <div class="profile-photo">Foto Lurah</div>
            <p class="profile-name">Nama Lurah<br/>Lurah Kebagusan</p>
          </div>
          <div class="sambutan-content">
            <p>Assalamu'alaikum Warahmatullahi Wabarakatuh,</p>
            <p>Puji syukur kita panjatkan kehadirat Allah SWT yang telah memberikan rahmat dan karunia-Nya kepada kita semua. Selamat datang di website resmi Kelurahan Kebagusan.</p>
            <p>Website ini kami hadirkan sebagai sarana informasi dan komunikasi antara pemerintah kelurahan dengan masyarakat. Melalui website ini, kami berharap dapat memberikan pelayanan yang lebih baik, transparan, dan mudah diakses oleh seluruh masyarakat Kelurahan Kebagusan.</p>
            <p>Kami senantiasa berupaya untuk terus meningkatkan kualitas pelayanan publik dan pembangunan di wilayah Kelurahan Kebagusan. Kritik dan saran dari masyarakat sangat kami harapkan demi kemajuan bersama.</p>
            <p>Wassalamu'alaikum Warahmatullahi Wabarakatuh</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Layanan Populer -->
    <section class="layanan-section">
      <div class="main-container">
        <h2 class="main-section-title">Layanan Populer</h2>
        <div class="layanan-wrapper">
          <div 
            v-for="layanan in layananList" 
            :key="layanan.id"
            class="layanan-item"
          >
            <div class="layanan-item-icon" :style="{ backgroundColor: layanan.color }">
              {{ layanan.icon }}
            </div>
            <p class="layanan-item-name">{{ layanan.name }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Berita Terbaru -->
    <section class="berita-section">
      <div class="main-container">
        <h2 class="main-section-title">Berita Terbaru</h2>
        <div class="berita-wrapper">
          <div 
            v-for="berita in beritaList" 
            :key="berita.id"
            class="berita-item"
          >
            <div class="berita-item-img">{{ berita.title.substring(0, 20) }}</div>
            <div class="berita-item-content">
              <span class="berita-item-date">{{ berita.date }}</span>
              <h3 class="berita-item-title">{{ berita.title }}</h3>
              <p class="berita-item-excerpt">{{ berita.excerpt }}</p>
              <a href="#" class="berita-item-link">Selengkapnya →</a>
            </div>
          </div>
        </div>
        <div class="berita-more-wrapper">
          <button class="main-btn-more">Lihat Semua Berita</button>
        </div>
      </div>
    </section>

    <!-- Informasi Kelurahan -->
    <section class="info-section">
      <div class="main-container">
        <h2 class="main-section-title">Informasi Kelurahan</h2>
        <div class="info-wrapper">
          <div class="info-image-box">Kantor Kelurahan</div>
          <div class="info-buttons-wrapper">
            <button class="info-button-item">Sejarah</button>
            <button class="info-button-item">Visi & Misi</button>
            <button class="info-button-item">Struktur Organisasi</button>
            <button class="info-button-item">SDM</button>
            <button class="info-button-item">Sarana/Prasarana</button>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <div class="main-container">
        <h2 class="main-section-title">Pertanyaan Umum</h2>
        <div class="faq-wrapper">
          <div 
            v-for="(faq, index) in faqList" 
            :key="index"
            class="faq-box"
            :class="{ 'faq-active': activeFaq === index }"
          >
            <button 
              class="faq-question-btn"
              @click="toggleFaq(index)"
            >
              <span>{{ faq.question }}</span>
              <span class="faq-toggle-icon">{{ activeFaq === index ? '−' : '+' }}</span>
            </button>
            <div v-show="activeFaq === index" class="faq-answer-text">
              {{ faq.answer }}
            </div>
          </div>
        </div>
        <div class="faq-more-wrapper">
          <button class="main-btn-more">Lihat Pertanyaan Lainnya</button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="main-footer">
      <div class="main-container">
        <div class="footer-wrapper">
          <div class="footer-col">
            <h3>Kontak Kami</h3>
            <p>📍 Alamat: Jl. Kelurahan No. 123, Kebagusan</p>
            <p>📞 Telepon: (021) 1234-5678</p>
            <p>✉️ Email: kelurahan@kebagusan.go.id</p>
          </div>
          <div class="footer-col">
            <h3>Link Terkait</h3>
            <p><a href="#">Kementerian Dalam Negeri</a></p>
            <p><a href="#">Pemerintah Provinsi</a></p>
            <p><a href="#">Pemerintah Kota/Kabupaten</a></p>
          </div>
          <div class="footer-col">
            <h3>Ikuti Kami</h3>
            <div class="footer-social">
              <a href="#">📘</a>
              <a href="#">📷</a>
              <a href="#">🐦</a>
              <a href="#">▶️</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom-text">
          <p>© 2024 Kelurahan Kebagusan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      searchQuery: '',
      activeFaq: null,
      layananList: [
        { id: 1, name: 'Surat Pengantar', icon: '📄', color: '#FFE5E5' },
        { id: 2, name: 'KK (Kartu Keluarga)', icon: '👨‍👩‍👧‍👦', color: '#E5F5E5' },
        { id: 3, name: 'Administrasi', icon: '📋', color: '#E5F0FF' },
        { id: 4, name: 'E-Planning', icon: '📊', color: '#FFF5E5' },
        { id: 5, name: 'Surat Keterangan', icon: '📝', color: '#F0E5FF' },
        { id: 6, name: 'Legalisir', icon: '✅', color: '#FFE5F5' },
        { id: 7, name: 'SKCK', icon: '🪪', color: '#FFF0E5' },
        { id: 8, name: 'Pengaduan', icon: '📢', color: '#E5FFFF' }
      ],
      beritaList: [
        {
          id: 1,
          title: 'Kegiatan Gotong Royong Membersihkan Lingkungan',
          excerpt: 'Warga Kelurahan Kebagusan melaksanakan kegiatan gotong royong membersihkan lingkungan sekitar...',
          date: '20 November 2024'
        },
        {
          id: 2,
          title: 'Peluncuran Program Kelurahan Sehat',
          excerpt: 'Kelurahan Kebagusan meluncurkan program kelurahan sehat untuk meningkatkan kesehatan masyarakat...',
          date: '18 November 2024'
        },
        {
          id: 3,
          title: 'Pelatihan UMKM untuk Warga',
          excerpt: 'Dinas terkait mengadakan pelatihan UMKM untuk memberdayakan ekonomi warga kelurahan...',
          date: '15 November 2024'
        }
      ],
      faqList: [
        {
          question: 'Bagaimana cara mengurus surat pengantar RT/RW/Kelurahan?',
          answer: 'Untuk mengurus surat pengantar, Anda perlu membawa KTP asli dan fotokopi, Kartu Keluarga, dan dokumen pendukung lainnya sesuai keperluan. Datang ke kantor kelurahan pada jam kerja.'
        },
        {
          question: 'Berapa lama proses pembuatan surat keterangan dari kelurahan?',
          answer: 'Proses pembuatan surat keterangan biasanya memakan waktu 1-3 hari kerja tergantung jenis surat dan kelengkapan dokumen.'
        },
        {
          question: 'Apakah ada biaya untuk pengurusan surat di kelurahan?',
          answer: 'Tidak ada biaya resmi untuk pengurusan surat-surat di kelurahan. Semua layanan administrasi kependudukan adalah gratis.'
        },
        {
          question: 'Apa saja persyaratan untuk membuat Kartu Keluarga baru?',
          answer: 'Persyaratan membuat KK baru meliputi: Surat pengantar RT/RW, fotokopi KTP suami istri, fotokopi akta nikah, fotokopi akta kelahiran anak, dan mengisi formulir yang disediakan.'
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.activeFaq = this.activeFaq === index ? null : index;
    }
  }
}
</script>

<style>
/* Global Reset */
.homepage-wrapper * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.homepage-wrapper {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
}

.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header Styles */
.main-header {
  background-color: #003d82;
  color: white;
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

.site-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.logo-title {
  font-size: 18px;
  font-weight: bold;
  color: white;
}

.main-nav {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
}

.nav-item {
  color: white;
  text-decoration: none;
  font-size: 14px;
  transition: opacity 0.3s;
}

.nav-item:hover {
  opacity: 0.8;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #1e5799 0%, #003d82 100%);
  color: white;
  padding: 60px 0;
  text-align: center;
}

.hero-main-title {
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 10px;
}

.hero-sub-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 15px;
}

.hero-description {
  font-size: 16px;
  margin-bottom: 30px;
  opacity: 0.9;
}

.hero-search-box {
  max-width: 600px;
  margin: 0 auto 25px;
  display: flex;
  background-color: white;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.hero-search-input {
  flex: 1;
  padding: 15px 25px;
  border: none;
  outline: none;
  font-size: 15px;
  color: #333;
}

.hero-search-btn {
  background-color: #FFA500;
  color: white;
  border: none;
  padding: 15px 35px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.hero-search-btn:hover {
  background-color: #FF8C00;
}

.hero-quick-links {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-link-btn {
  background-color: rgba(255,255,255,0.2);
  color: white;
  border: 1px solid white;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.3s;
}

.hero-link-btn:hover {
  background-color: white;
  color: #003d82;
}

/* Sambutan Section */
.sambutan-section {
  padding: 60px 0;
  background-color: #f8f9fa;
}

.main-section-title {
  font-size: 32px;
  color: #003d82;
  margin-bottom: 40px;
  text-align: center;
  font-weight: bold;
}

.sambutan-wrapper {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 40px;
  align-items: start;
}

.sambutan-profile {
  text-align: center;
}

.profile-photo {
  width: 200px;
  height: 250px;
  border-radius: 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin: 0 auto 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
}

.profile-name {
  font-size: 14px;
  font-weight: bold;
  color: #003d82;
  line-height: 1.5;
}

.sambutan-content p {
  margin-bottom: 15px;
  line-height: 1.8;
  text-align: justify;
}

/* Layanan Section */
.layanan-section {
  padding: 60px 0;
}

.layanan-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.layanan-item {
  background-color: white;
  border: 2px solid #e0e0e0;
  border-radius: 15px;
  padding: 30px 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
}

.layanan-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  border-color: #003d82;
}

.layanan-item-icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  border-radius: 50%;
}

.layanan-item-name {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

/* Berita Section */
.berita-section {
  padding: 60px 0;
  background-color: #f8f9fa;
}

.berita-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;
}

.berita-item {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.berita-item:hover {
  transform: translateY(-5px);
}

.berita-item-img {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 14px;
  padding: 20px;
  text-align: center;
}

.berita-item-content {
  padding: 20px;
}

.berita-item-date {
  font-size: 12px;
  color: #666;
}

.berita-item-title {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
  color: #003d82;
}

.berita-item-excerpt {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
}

.berita-item-link {
  color: #003d82;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
}

.berita-more-wrapper {
  text-align: center;
}

.main-btn-more {
  background-color: #003d82;
  color: white;
  border: none;
  padding: 12px 40px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  transition: background-color 0.3s;
}

.main-btn-more:hover {
  background-color: #002d62;
}

/* Info Section */
.info-section {
  padding: 60px 0;
}

.info-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.info-image-box {
  width: 100%;
  height: 350px;
  border-radius: 10px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
}

.info-buttons-wrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.info-button-item {
  background-color: #003d82;
  color: white;
  border: none;
  padding: 15px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  text-align: left;
  transition: background-color 0.3s;
}

.info-button-item:hover {
  background-color: #002d62;
}

/* FAQ Section */
.faq-section {
  padding: 60px 0;
  background-color: #f8f9fa;
}

.faq-wrapper {
  max-width: 900px;
  margin: 0 auto 40px;
}

.faq-box {
  background-color: white;
  border-radius: 8px;
  margin-bottom: 15px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.faq-question-btn {
  width: 100%;
  background-color: white;
  border: none;
  padding: 20px;
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s;
}

.faq-question-btn:hover {
  background-color: #f8f9fa;
}

.faq-toggle-icon {
  font-size: 24px;
  color: #003d82;
  transition: transform 0.3s;
}

.faq-active .faq-toggle-icon {
  transform: rotate(45deg);
}

.faq-answer-text {
  padding: 0 20px 20px;
  font-size: 14px;
  line-height: 1.8;
  color: #666;
}

.faq-more-wrapper {
  text-align: center;
}

/* Footer */
.main-footer {
  background-color: #003d82;
  color: white;
  padding: 40px 0 20px;
}

.footer-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 30px;
}

.footer-col h3 {
  font-size: 18px;
  margin-bottom: 15px;
}

.footer-col p {
  font-size: 14px;
  margin-bottom: 10px;
  opacity: 0.9;
}

.footer-col a {
  color: white;
  text-decoration: none;
}

.footer-col a:hover {
  text-decoration: underline;
}

.footer-social {
  display: flex;
  gap: 15px;
  font-size: 24px;
}

.footer-social a {
  opacity: 0.8;
  transition: opacity 0.3s;
}

.footer-social a:hover {
  opacity: 1;
}

.footer-bottom-text {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.2);
  font-size: 14px;
  opacity: 0.8;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
  }
  
  .main-nav {
    justify-content: center;
  }
  
  .hero-main-title {
    font-size: 28px;
  }
  
  .hero-sub-title {
    font-size: 24px;
  }
  
  .sambutan-wrapper {
    grid-template-columns: 1fr;
  }
  
  .layanan-wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .berita-wrapper {
    grid-template-columns: 1fr;
  }
  
  .info-wrapper {
    grid-template-columns: 1fr;
  }
  
  .footer-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>