<template>
  <div class="berita-page-wrapper">

    <!-- Hero Banner -->
    <section class="berita-hero">
      <div class="main-container">
        <h1 class="berita-hero-title">BERITA</h1>
        <p class="berita-hero-desc">
          Temukan informasi terbaru dan informasi penting mengenai kegiatan dan pengumuman di Kelurahan Kebagusan
        </p>
      </div>
    </section>

    <!-- Event Kelurahan Section -->
    <section class="event-section">
      <div class="main-container">
        <h2 class="event-title">Event Kelurahan</h2>
        <p class="event-subtitle">Ikuti beragagai kegiatan yang tersedia di Kelurahan</p>
        
        <!-- Calendar Controls -->
        <div class="calendar-controls">
          <div class="calendar-tabs">
            <button class="calendar-tab active">Event Kelurahan</button>
            <button class="calendar-tab">Hari Libur</button>
          </div>
          <div class="calendar-nav">
            <select class="month-select" v-model="selectedMonth">
              <option value="11">November 2024</option>
              <option value="0">Januari 2025</option>
              <option value="1">Februari 2025</option>
            </select>
          </div>
        </div>

        <!-- Calendar -->
        <div class="calendar-wrapper">
          <div class="calendar-header">
            <div class="calendar-day-name">MIN</div>
            <div class="calendar-day-name">SEN</div>
            <div class="calendar-day-name">SEL</div>
            <div class="calendar-day-name">RAB</div>
            <div class="calendar-day-name">KAM</div>
            <div class="calendar-day-name">JUM</div>
            <div class="calendar-day-name">SAB</div>
          </div>
          <div class="calendar-grid">
            <div v-for="day in calendarDays" :key="day.id" class="calendar-cell" :class="day.class">
              <span class="day-number">{{ day.number }}</span>
              <div v-if="day.events" class="day-events">
                <div v-for="event in day.events" :key="event.id" class="event-item" :class="event.color">
                  {{ event.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Berita Kelurahan Section -->
    <section class="berita-list-section">
      <div class="main-container">
        <h2 class="berita-list-title">Berita Kelurahan</h2>
        <p class="berita-list-subtitle">Kumpulan informasi terbaru dan pengumuman penting dari kelurahan</p>

        <!-- Berita Grid -->
        <div class="berita-grid">
          <div v-for="berita in beritaList" :key="berita.id" class="berita-card">
            <div class="berita-image">
              <img :src="berita.image" :alt="berita.title" />
            </div>
            <div class="berita-content">
              <span class="berita-category">{{ berita.category }}</span>
              <h3 class="berita-title">{{ berita.title }}</h3>
              <div class="berita-meta">
                <span class="berita-date">📅 {{ berita.date }}</span>
                <span class="berita-author">👤 {{ berita.author }}</span>
              </div>
              <p class="berita-excerpt">{{ berita.excerpt }}</p>
              <a href="#" class="berita-link">Lihat detail →</a>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="pagination-wrapper">
          <button class="pagination-btn prev">‹</button>
          <button class="pagination-btn active">1</button>
          <button class="pagination-btn">2</button>
          <button class="pagination-btn">3</button>
          <button class="pagination-btn next">›</button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="main-footer">
      <div class="main-container">
        <div class="footer-wrapper">
          <div class="footer-col">
            <div class="footer-logo">
              <div class="footer-logo-icon">🏛️</div>
              <span class="footer-logo-text">Kelurahan Kebagusan</span>
            </div>
            <p class="footer-desc">Portal informasi dan layanan digital Kelurahan Kebagusan untuk kemudahan akses masyarakat</p>
          </div>
          <div class="footer-col">
            <h3>Informasi</h3>
            <p><a href="#">Beranda</a></p>
            <p><a href="#">Layanan Publik</a></p>
            <p><a href="#">Berita Program</a></p>
          </div>
          <div class="footer-col">
            <h3>Ikuti Kami</h3>
            <div class="footer-social">
              <a href="#" class="social-icon">📘</a>
              <a href="#" class="social-icon">📷</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2024 Kelurahan Kebagusan. Semua Hak Dilindungi | Pelayanan Digital Untuk Masyarakat</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BeritaPage',
  data() {
    return {
      selectedMonth: '11',
      calendarDays: [
        { id: 1, number: '', class: 'empty' },
        { id: 2, number: '', class: 'empty' },
        { id: 3, number: '', class: 'empty' },
        { id: 4, number: '', class: 'empty' },
        { id: 5, number: '', class: 'empty' },
        { id: 6, number: '1', class: '' },
        { id: 7, number: '2', class: '' },
        { id: 8, number: '3', class: '' },
        { id: 9, number: '4', class: '' },
        { id: 10, number: '5', class: '' },
        { id: 11, number: '6', class: '' },
        { id: 12, number: '7', class: '' },
        { id: 13, number: '8', class: '' },
        { id: 14, number: '9', class: 'today', events: [{ id: 1, title: 'Rapat RT', color: 'red' }] },
        { id: 15, number: '10', class: '' },
        { id: 16, number: '11', class: '' },
        { id: 17, number: '12', class: '' },
        { id: 18, number: '13', class: '' },
        { id: 19, number: '14', class: '' },
        { id: 20, number: '15', class: '' },
        { id: 21, number: '16', class: '' },
        { id: 22, number: '17', class: '' },
        { id: 23, number: '18', class: '' },
        { id: 24, number: '19', class: '' },
        { id: 25, number: '20', class: '' },
        { id: 26, number: '21', class: '', events: [{ id: 2, title: 'Posyandu', color: 'green' }] },
        { id: 27, number: '22', class: '' },
        { id: 28, number: '23', class: '' },
        { id: 29, number: '24', class: '', events: [{ id: 3, title: 'Gotong Royong', color: 'green' }] },
        { id: 30, number: '25', class: '' },
        { id: 31, number: '26', class: '' },
        { id: 32, number: '27', class: '' },
        { id: 33, number: '28', class: '' },
        { id: 34, number: '29', class: '' },
        { id: 35, number: '30', class: '' },
        { id: 36, number: '1', class: 'next-month' },
        { id: 37, number: '2', class: 'next-month' }
      ],
      beritaList: [
        {
          id: 1,
          title: 'Kegiatan Gotong Royong Membersihkan Lingkungan RT 05',
          category: 'Berita',
          date: '20 Nov 2024',
          author: 'Admin',
          excerpt: 'Warga RT 05 melaksanakan kegiatan gotong royong membersihkan lingkungan sekitar dengan penuh antusias...',
          image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop'
        },
        {
          id: 2,
          title: 'Peluncuran Program Kelurahan Sehat 2024',
          category: 'Program',
          date: '18 Nov 2024',
          author: 'Admin',
          excerpt: 'Kelurahan Kebagusan resmi meluncurkan program kelurahan sehat untuk meningkatkan kesejahteraan masyarakat...',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop'
        },
        {
          id: 3,
          title: 'Pelatihan UMKM untuk Warga Kelurahan',
          category: 'Pelatihan',
          date: '15 Nov 2024',
          author: 'Admin',
          excerpt: 'Dinas terkait mengadakan pelatihan UMKM untuk memberdayakan ekonomi warga kelurahan...',
          image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop'
        },
        {
          id: 4,
          title: 'Sosialisasi Program Bantuan Sosial Pemerintah',
          category: 'Sosialisasi',
          date: '12 Nov 2024',
          author: 'Admin',
          excerpt: 'Kelurahan mengadakan sosialisasi mengenai program bantuan sosial yang tersedia untuk masyarakat...',
          image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop'
        },
        {
          id: 5,
          title: 'Vaksinasi Massal untuk Lansia dan Anak-Anak',
          category: 'Kesehatan',
          date: '10 Nov 2024',
          author: 'Admin',
          excerpt: 'Program vaksinasi massal dilaksanakan di gedung serbaguna kelurahan dengan target 200 peserta...',
          image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=250&fit=crop'
        },
        {
          id: 6,
          title: 'Penyuluhan Kesehatan Lingkungan dan Sanitasi',
          category: 'Penyuluhan',
          date: '08 Nov 2024',
          author: 'Admin',
          excerpt: 'Tim kesehatan memberikan penyuluhan tentang pentingnya menjaga kebersihan lingkungan...',
          image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400&h=250&fit=crop'
        },
        {
          id: 7,
          title: 'Lomba Kebersihan Antar RT Se-Kelurahan',
          category: 'Lomba',
          date: '05 Nov 2024',
          author: 'Admin',
          excerpt: 'Kelurahan menggelar lomba kebersihan untuk meningkatkan kesadaran warga akan pentingnya lingkungan bersih...',
          image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop'
        },
        {
          id: 8,
          title: 'Musyawarah Perencanaan Pembangunan Kelurahan',
          category: 'Musyawarah',
          date: '03 Nov 2024',
          author: 'Admin',
          excerpt: 'Kelurahan mengadakan musrenbang untuk membahas program pembangunan tahun depan...',
          image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop'
        },
        {
          id: 9,
          title: 'Pembagian Sembako untuk Warga Kurang Mampu',
          category: 'Bantuan',
          date: '01 Nov 2024',
          author: 'Admin',
          excerpt: 'Kelurahan membagikan paket sembako kepada warga kurang mampu sebagai bentuk kepedulian sosial...',
          image: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=400&h=250&fit=crop'
        }
      ]
    }
  }
}
</script>

<style>
/* Global Reset */
.berita-page-wrapper * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.berita-page-wrapper {
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
  padding-bottom: 5px;
  transition: opacity 0.3s;
}

.nav-item:hover,
.nav-item.active {
  border-bottom: 2px solid white;
}

/* Hero Banner */
.berita-hero {
  background: linear-gradient(135deg, #FFA500 0%, #FF8C00 100%);
  color: white;
  padding: 50px 0;
  text-align: center;
}

.berita-hero-title {
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 15px;
  letter-spacing: 2px;
}

.berita-hero-desc {
  font-size: 15px;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.95;
}

/* Event Section */
.event-section {
  background-color: white;
  padding: 50px 0;
}

.event-title {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  color: #333;
}

.event-subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 30px;
  font-size: 14px;
}

/* Calendar Controls */
.calendar-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 15px;
}

.calendar-tabs {
  display: flex;
  gap: 10px;
}

.calendar-tab {
  padding: 10px 20px;
  border: 2px solid #e0e0e0;
  background-color: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.3s;
}

.calendar-tab:hover {
  border-color: #003d82;
}

.calendar-tab.active {
  background-color: #003d82;
  color: white;
  border-color: #003d82;
}

.month-select {
  padding: 10px 20px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  background-color: white;
}

/* Calendar */
.calendar-wrapper {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.calendar-header {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  margin-bottom: 10px;
}

.calendar-day-name {
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: #666;
  padding: 10px 0;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
}

.calendar-cell {
  min-height: 80px;
  padding: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  position: relative;
  background-color: white;
}

.calendar-cell.empty {
  background-color: #f8f9fa;
}

.calendar-cell.today {
  border: 2px solid #003d82;
  background-color: #f0f7ff;
}

.calendar-cell.next-month {
  opacity: 0.4;
}

.day-number {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.day-events {
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.event-item {
  font-size: 10px;
  padding: 4px 6px;
  border-radius: 4px;
  color: white;
  font-weight: 600;
}

.event-item.red {
  background-color: #dc3545;
}

.event-item.green {
  background-color: #28a745;
}

/* Berita List Section */
.berita-list-section {
  padding: 50px 0;
}

.berita-list-title {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  color: #333;
}

.berita-list-subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 40px;
  font-size: 14px;
}

/* Berita Grid */
.berita-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;
}

.berita-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.berita-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}

.berita-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.berita-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.berita-card:hover .berita-image img {
  transform: scale(1.05);
}

.berita-content {
  padding: 20px;
}

.berita-category {
  display: inline-block;
  background-color: #003d82;
  color: white;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 10px;
}

.berita-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
  line-height: 1.4;
  min-height: 45px;
}

.berita-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 12px;
  font-size: 12px;
  color: #666;
}

.berita-date,
.berita-author {
  display: flex;
  align-items: center;
  gap: 4px;
}

.berita-excerpt {
  font-size: 13px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.berita-link {
  color: #003d82;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s;
}

.berita-link:hover {
  color: #002d62;
}

/* Pagination */
.pagination-wrapper {
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
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

.pagination-btn.prev,
.pagination-btn.next {
  font-size: 20px;
}

/* Footer */
.main-footer {
  background-color: #003d82;
  color: white;
  padding: 40px 0 20px;
}

.footer-wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 30px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.footer-logo-icon {
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.footer-logo-text {
  font-size: 18px;
  font-weight: bold;
}

.footer-desc {
  font-size: 13px;
  line-height: 1.7;
  opacity: 0.9;
}

.footer-col h3 {
  font-size: 16px;
  margin-bottom: 15px;
}

.footer-col p {
  font-size: 13px;
  margin-bottom: 8px;
  opacity: 0.9;
}

.footer-col a {
  color: white;
  text-decoration: none;
  transition: opacity 0.3s;
}

.footer-col a:hover {
  opacity: 0.7;
}

.footer-social {
  display: flex;
  gap: 15px;
}

.social-icon {
  width: 40px;
  height: 40px;
  background-color: rgba(255,255,255,0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  transition: background-color 0.3s;
}

.social-icon:hover {
  background-color: rgba(255,255,255,0.2);
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.2);
  font-size: 12px;
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
  
  .berita-hero-title {
    font-size: 28px;
  }
  
  .calendar-controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .calendar-tabs {
    width: 100%;
    justify-content: center;
  }
  
  .month-select {
    width: 100%;
  }
  
  .calendar-grid {
    gap: 5px;
  }
  
  .calendar-cell {
    min-height: 60px;
    padding: 5px;
  }
  
  .day-number {
    font-size: 12px;
  }
  
  .event-item {
    font-size: 8px;
    padding: 2px 4px;
  }
  
  .berita-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>