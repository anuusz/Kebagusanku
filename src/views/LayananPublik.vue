<template>
  <div class="layanan-publik-wrapper">
    <!-- Header -->
    <header class="main-header">
      <div class="main-container">
        <div class="header-content">
          <div class="site-logo">
            <div class="logo-icon">🏛️</div>
            <span class="logo-title">Kelurahan Kebagusan</span>
          </div>
          <nav class="main-nav">
            <a href="#" class="nav-item">Beranda</a>
            <a href="#" class="nav-item active">Layanan Publik</a>
            <a href="#" class="nav-item">Berita</a>
            <a href="#" class="nav-item">Profil Kelurahan</a>
            <a href="#" class="nav-item">PPID</a>
          </nav>
        </div>
      </div>
    </header>

    <!-- Hero Banner -->
    <section class="layanan-hero">
      <div class="main-container">
        <h1 class="layanan-hero-title">LAYANAN PUBLIK</h1>
        <p class="layanan-hero-desc">
          Layanan publik merupakan rangkaian kegiatan dalam rangka pemenuhan kebutuhan pelayanan sesuai dengan peraturan perundang-undangan bagi setiap warga negara dan penduduk atas barang, jasa, dan/atau pelayanan administratif yang disediakan oleh penyelenggara pelayanan publik
        </p>
      </div>
    </section>

    <!-- Kategori Filter -->
    <section class="layanan-kategori">
      <div class="main-container">
        <div class="kategori-wrapper">
          <button class="kategori-btn active">
            <span class="kategori-icon">📄</span>
            <span>SK</span>
          </button>
          <button class="kategori-btn">
            <span class="kategori-icon">📋</span>
            <span>SK</span>
          </button>
          <button class="kategori-btn">
            <span class="kategori-icon">👥</span>
            <span>SK</span>
          </button>
          <button class="kategori-btn">
            <span class="kategori-icon">📝</span>
            <span>SK-Digital</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Search & Filter -->
    <section class="layanan-search-section">
      <div class="main-container">
        <div class="search-filter-wrapper">
          <div class="search-input-wrapper">
            <input 
              type="text" 
              v-model="searchQuery"
              placeholder="Cari layanan atau kata kunci..."
              class="layanan-search-input"
            />
            <button class="layanan-search-btn">Cari</button>
          </div>
          <button class="filter-btn">
            <span>🔽</span> Pilihan & Filter
          </button>
        </div>
      </div>
    </section>

    <!-- Layanan Grid -->
    <section class="layanan-grid-section">
      <div class="main-container">
        <div class="layanan-grid">
          <div 
            v-for="layanan in filteredLayanan" 
            :key="layanan.id"
            class="layanan-card"
            :class="'layanan-' + layanan.color"
          >
            <div class="layanan-card-header" :style="{ backgroundColor: getColor(layanan.color) }">
              <h3 class="layanan-card-title">{{ layanan.title }}</h3>
            </div>
            <div class="layanan-card-body">
              <p class="layanan-card-desc">{{ layanan.description }}</p>
              <div class="layanan-card-meta">
                <div class="meta-item">
                  <span class="meta-icon">📅</span>
                  <span class="meta-text">{{ layanan.waktu }}</span>
                </div>
                <div class="meta-item">
                  <span class="meta-icon">💰</span>
                  <span class="meta-text">{{ layanan.biaya }}</span>
                </div>
              </div>
              <a href="#" class="layanan-card-link">Lihat detail →</a>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="pagination-wrapper">
          <button class="pagination-btn active">1</button>
          <button class="pagination-btn">2</button>
        </div>
      </div>
    </section>

    <!-- Info Banner -->
    <section class="info-banner-section">
      <div class="main-container">
        <div class="info-banner">
          <div class="info-banner-icon">✓</div>
          <div class="info-banner-content">
            <h4>Butuhkan Konsultasi Lebih Lanjut?</h4>
            <p>Hubungi kami melalui WhatsApp atau datang langsung ke kantor kelurahan untuk mendapatkan informasi lebih detail mengenai layanan yang Anda butuhkan</p>
          </div>
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
            </div>
          </div>
        </div>
        <div class="footer-bottom-text">
          <p>© 2024 Kelurahan Kebagusan. Semua Hak Dilindungi | Pelayanan Digital Untuk Masyarakat</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LayananPublikPage',
  data() {
    return {
      searchQuery: '',
      layananList: [
        {
          id: 1,
          title: 'SURAT KETERANGAN DOMISILI',
          description: 'Pengurusan surat keterangan domisili untuk keperluan administrasi kependudukan',
          waktu: '1-2 Hari',
          biaya: 'Gratis',
          color: 'red'
        },
        {
          id: 2,
          title: 'SURAT KETERANGAN TIDAK MAMPU',
          description: 'Surat keterangan tidak mampu untuk keperluan bantuan sosial dan pendidikan',
          waktu: '1-2 Hari',
          biaya: 'Gratis',
          color: 'red'
        },
        {
          id: 3,
          title: 'SURAT KETERANGAN USAHA',
          description: 'Pengurusan surat keterangan usaha untuk pelaku UMKM',
          waktu: '2-3 Hari',
          biaya: 'Gratis',
          color: 'green'
        },
        {
          id: 4,
          title: 'AKTA KELAHIRAN (TERLAMBAT)',
          description: 'Pengurusan akta kelahiran yang terlambat didaftarkan',
          waktu: '7-14 Hari',
          biaya: 'Gratis',
          color: 'green'
        },
        {
          id: 5,
          title: 'AKTA KELAHIRAN (ONLINE)',
          description: 'Pengurusan akta kelahiran secara online melalui sistem',
          waktu: '3-5 Hari',
          biaya: 'Gratis',
          color: 'green'
        },
        {
          id: 6,
          title: 'AKTA KEMATIAN (ONLINE 2.0)',
          description: 'Pengurusan akta kematian secara online dengan sistem terbaru',
          waktu: '3-5 Hari',
          biaya: 'Gratis',
          color: 'blue'
        },
        {
          id: 7,
          title: 'KTP BARU (RUSAK/ HILANG) (LURING 2.0)',
          description: 'Pengurusan KTP baru, rusak, atau hilang secara offline',
          waktu: '7-14 Hari',
          biaya: 'Gratis',
          color: 'blue'
        },
        {
          id: 8,
          title: 'KTP BARU (RUSAK/ HILANG) (ONLINE 2.0)',
          description: 'Pengurusan KTP baru, rusak, atau hilang secara online',
          waktu: '7-14 Hari',
          biaya: 'Gratis',
          color: 'blue'
        },
        {
          id: 9,
          title: 'SURAT KETERANGAN (LURING 2.0)',
          description: 'Berbagai jenis surat keterangan yang diproses secara offline',
          waktu: '1-2 Hari',
          biaya: 'Gratis',
          color: 'blue'
        },
        {
          id: 10,
          title: 'MUTASI KELUAR (PINDAH KELUAR 2.0)',
          description: 'Pengurusan mutasi keluar untuk pindah domisili',
          waktu: '3-5 Hari',
          biaya: 'Gratis',
          color: 'purple'
        },
        {
          id: 11,
          title: 'MUTASI MASUK (PINDAH DATANG 2.0)',
          description: 'Pengurusan mutasi masuk dari domisili lain',
          waktu: '3-5 Hari',
          biaya: 'Gratis',
          color: 'purple'
        },
        {
          id: 12,
          title: 'MUTASI KELUAR (PINDAH DATANG ANTAR 2.0)',
          description: 'Pengurusan mutasi antar kelurahan dalam satu wilayah',
          waktu: '3-5 Hari',
          biaya: 'Gratis',
          color: 'purple'
        },
        {
          id: 13,
          title: 'KARTU KELUARGA BARU (LURING)',
          description: 'Pengurusan kartu keluarga baru secara offline',
          waktu: '3-5 Hari',
          biaya: 'Gratis',
          color: 'orange'
        },
        {
          id: 14,
          title: 'KARTU KELUARGA BARU (ONLINE)',
          description: 'Pengurusan kartu keluarga baru secara online',
          waktu: '3-5 Hari',
          biaya: 'Gratis',
          color: 'orange'
        },
        {
          id: 15,
          title: 'PERUBAHAN KARTU KELUARGA',
          description: 'Pengurusan perubahan data dalam kartu keluarga',
          waktu: '2-3 Hari',
          biaya: 'Gratis',
          color: 'orange'
        },
        {
          id: 16,
          title: 'AKTA KELAHIRAN (LURING 2.0)',
          description: 'Pengurusan akta kelahiran secara offline dengan sistem terbaru',
          waktu: '5-7 Hari',
          biaya: 'Gratis',
          color: 'orange'
        },
        {
          id: 17,
          title: 'SURAT KETERANGAN (LURING 2.0)',
          description: 'Berbagai surat keterangan untuk keperluan administrasi',
          waktu: '1-2 Hari',
          biaya: 'Gratis',
          color: 'pink'
        },
        {
          id: 18,
          title: 'KARTU KELUARGA (ONLINE 2.0)',
          description: 'Pengurusan dan pembaruan kartu keluarga online',
          waktu: '3-5 Hari',
          biaya: 'Gratis',
          color: 'pink'
        },
        {
          id: 19,
          title: 'AKTA KEMATIAN (LURING 2.0)',
          description: 'Pengurusan akta kematian secara offline',
          waktu: '5-7 Hari',
          biaya: 'Gratis',
          color: 'blue'
        },
        {
          id: 20,
          title: 'AKTA KELAHIRAN (3 TAHUN+)',
          description: 'Pengurusan akta kelahiran untuk usia 3 tahun ke atas',
          waktu: '7-14 Hari',
          biaya: 'Gratis',
          color: 'purple'
        }
      ]
    }
  },
  computed: {
    filteredLayanan() {
      if (!this.searchQuery) {
        return this.layananList;
      }
      return this.layananList.filter(layanan => 
        layanan.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        layanan.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    getColor(colorName) {
      const colors = {
        red: '#dc3545',
        green: '#28a745',
        blue: '#007bff',
        purple: '#6f42c1',
        orange: '#fd7e14',
        pink: '#e83e8c'
      };
      return colors[colorName] || '#007bff';
    }
  }
}
</script>

<style>
/* Global Reset */
.layanan-publik-wrapper * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.layanan-publik-wrapper {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  background-color: #f5f5f5;
}

.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
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
  padding-bottom: 5px;
}

.nav-item:hover,
.nav-item.active {
  opacity: 1;
  border-bottom: 2px solid white;
}

/* Hero Banner */
.layanan-hero {
  background: linear-gradient(135deg, #1e5799 0%, #003d82 100%);
  color: white;
  padding: 50px 0;
  text-align: center;
}

.layanan-hero-title {
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 20px;
  letter-spacing: 2px;
}

.layanan-hero-desc {
  font-size: 15px;
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto;
  opacity: 0.95;
}

/* Kategori Filter */
.layanan-kategori {
  background-color: white;
  padding: 20px 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.kategori-wrapper {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.kategori-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 25px;
  border: 2px solid #e0e0e0;
  background-color: white;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s;
}

.kategori-btn:hover {
  border-color: #003d82;
  background-color: #f8f9fa;
}

.kategori-btn.active {
  background-color: #003d82;
  color: white;
  border-color: #003d82;
}

.kategori-icon {
  font-size: 18px;
}

/* Search & Filter */
.layanan-search-section {
  padding: 30px 0;
}

.search-filter-wrapper {
  display: flex;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
}

.search-input-wrapper {
  flex: 1;
  display: flex;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  min-width: 300px;
}

.layanan-search-input {
  flex: 1;
  padding: 15px 20px;
  border: none;
  outline: none;
  font-size: 14px;
}

.layanan-search-btn {
  background-color: #003d82;
  color: white;
  border: none;
  padding: 15px 30px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;
}

.layanan-search-btn:hover {
  background-color: #002d62;
}

.filter-btn {
  background-color: white;
  border: 2px solid #e0e0e0;
  padding: 15px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s;
}

.filter-btn:hover {
  border-color: #003d82;
  background-color: #f8f9fa;
}

/* Layanan Grid */
.layanan-grid-section {
  padding: 30px 0 60px;
}

.layanan-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-bottom: 40px;
}

.layanan-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.layanan-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}

.layanan-card-header {
  padding: 20px;
  color: white;
}

.layanan-card-title {
  font-size: 16px;
  font-weight: bold;
  line-height: 1.4;
}

.layanan-card-body {
  padding: 20px;
}

.layanan-card-desc {
  font-size: 13px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
  min-height: 60px;
}

.layanan-card-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e0e0e0;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: #666;
}

.meta-icon {
  font-size: 14px;
}

.layanan-card-link {
  color: #003d82;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s;
}

.layanan-card-link:hover {
  color: #002d62;
}

/* Pagination */
.pagination-wrapper {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.pagination-btn {
  width: 40px;
  height: 40px;
  border: 2px solid #e0e0e0;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
}

.pagination-btn:hover {
  border-color: #003d82;
  color: #003d82;
}

.pagination-btn.active {
  background-color: #003d82;
  color: white;
  border-color: #003d82;
}

/* Info Banner */
.info-banner-section {
  padding: 30px 0 60px;
}

.info-banner {
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
  border-left: 5px solid #28a745;
  border-radius: 10px;
  padding: 25px;
  display: flex;
  gap: 20px;
  align-items: start;
}

.info-banner-icon {
  width: 50px;
  height: 50px;
  background-color: #28a745;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  flex-shrink: 0;
}

.info-banner-content h4 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #155724;
}

.info-banner-content p {
  font-size: 14px;
  line-height: 1.7;
  color: #155724;
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
  font-size: 13px;
  opacity: 0.8;
}

/* Responsive */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
  }
  
  .main-nav {
    justify-content: center;
  }
  
  .layanan-hero-title {
    font-size: 28px;
  }
  
  .layanan-hero-desc {
    font-size: 13px;
  }
  
  .search-filter-wrapper {
    flex-direction: column;
  }
  
  .search-input-wrapper {
    width: 100%;
  }
  
  .filter-btn {
    width: 100%;
    justify-content: center;
  }
  
  .layanan-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-wrapper {
    grid-template-columns: 1fr;
  }
  
  .info-banner {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>