<template>
  <div class="kontak-page-wrapper">
    <!-- Hero Banner -->
    <section class="kontak-hero">
      <div class="main-container">
        <h1 class="kontak-hero-title">KONTAK</h1>
        <p class="kontak-hero-desc">
          Untuk informasi lebih lanjut, Anda dapat menghubungi kami melalui berbagai saluran komunikasi yang tersedia. Kami siap melayani Anda dengan sepenuh hati untuk menjawab segala pertanyaan dan keluhan Anda.
        </p>
      </div>
    </section>

    <!-- Cara Menghubungi Kami -->
    <section class="cara-hubungi-section">
      <div class="main-container">
        <h2 class="section-title">Cara Menghubungi Kami</h2>
        <div class="cara-hubungi-grid">
          <div class="cara-card">
            <div class="cara-icon" style="background-color: #E3F2FD;">
              <span style="font-size: 40px;">📞</span>
            </div>
            <h3 class="cara-title">Telepon</h3>
            <p class="cara-desc">Hubungi kami melalui telepon untuk informasi cepat dan langsung</p>
          </div>
          <div class="cara-card">
            <div class="cara-icon" style="background-color: #E8F5E9;">
              <span style="font-size: 40px;">💬</span>
            </div>
            <h3 class="cara-title">WhatsApp</h3>
            <p class="cara-desc">Chat langsung dengan kami melalui WhatsApp untuk respon cepat</p>
          </div>
          <div class="cara-card">
            <div class="cara-icon" style="background-color: #FFF3E0;">
              <span style="font-size: 40px;">✉️</span>
            </div>
            <h3 class="cara-title">Email</h3>
            <p class="cara-desc">Kirim email untuk pertanyaan detail dan dokumentasi lengkap</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Lokasi Kantor -->
    <section class="lokasi-section">
      <div class="main-container">
        <h2 class="section-title">Lokasi Kantor</h2>
        <div class="lokasi-wrapper">
          <div class="lokasi-info">
            <div class="info-item">
              <div class="info-icon-box">
                <span class="info-icon">📍</span>
              </div>
              <div class="info-content">
                <h4>ALAMAT KANTOR</h4>
                <p>Jl. Kebagusan Raya No. 123<br/>Kebagusan, Pasar Minggu<br/>Jakarta Selatan 12520</p>
              </div>
            </div>
            <div class="info-item">
              <div class="info-icon-box">
                <span class="info-icon">🕐</span>
              </div>
              <div class="info-content">
                <h4>JAM OPERASIONAL</h4>
                <p>Senin - Jumat: 08.00 - 16.00 WIB<br/>Sabtu: 08.00 - 12.00 WIB<br/>Minggu & Hari Libur: Tutup</p>
              </div>
            </div>
          </div>
          <div class="lokasi-map">
            <div class="map-placeholder">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5287634673644!2d106.83974131476896!3d-6.318626195437477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed3b50000001%3A0x0!2zNsKwMTknMDcuMSJTIDEwNsKwNTAnMjcuMSJF!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <p class="map-label">Peta Lokasi Kelurahan Kebagusan</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Denah Kantor -->
    <section class="denah-section">
      <div class="main-container">
        <h2 class="section-title">Denah Kantor</h2>
        <div class="denah-grid">
          <div class="denah-card">
            <h3 class="denah-title">Lantai Dasar</h3>
            <ul class="denah-list">
              <li>Lobi dan Ruang Tunggu</li>
              <li>Loket Pelayanan</li>
              <li>Ruang Arsip</li>
            </ul>
          </div>
          <div class="denah-card">
            <h3 class="denah-title">Lantai Dua</h3>
            <ul class="denah-list">
              <li>Ruang Lurah</li>
              <li>Ruang Sekretaris</li>
              <li>Ruang Rapat</li>
            </ul>
          </div>
          <div class="denah-card">
            <h3 class="denah-title">Lantai Tiga</h3>
            <ul class="denah-list">
              <li>Ruang Kasi Pemerintahan</li>
              <li>Ruang Kasi Kesejahteraan</li>
              <li>Ruang Staff</li>
            </ul>
          </div>
          <div class="denah-card">
            <h3 class="denah-title">Lantai Empat</h3>
            <ul class="denah-list">
              <li>Ruang Serbaguna</li>
              <li>Ruang Pertemuan</li>
              <li>Mushola</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Kirim Pesan -->
    <section class="kirim-pesan-section">
      <div class="main-container">
        <h2 class="section-title">Kirim Pesan</h2>
        <p class="section-subtitle">Silakan isi formulir di bawah ini untuk mengirimkan pesan, pertanyaan, atau keluhan Anda. Kami akan merespons secepat mungkin.</p>
        
        <form @submit.prevent="handleSubmit" class="kontak-form">
          <div class="form-row">
            <div class="form-group">
              <label for="name">Nama Lengkap *</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name"
                placeholder="Masukkan nama lengkap Anda"
                required
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="email">Email *</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email"
                placeholder="nama@email.com"
                required
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="phone">Nomor Telepon *</label>
              <input 
                type="tel" 
                id="phone" 
                v-model="formData.phone"
                placeholder="08xxxxxxxxxx"
                required
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="subject">Subjek *</label>
              <input 
                type="text" 
                id="subject" 
                v-model="formData.subject"
                placeholder="Subjek pesan Anda"
                required
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="message">Pesan *</label>
              <textarea 
                id="message" 
                v-model="formData.message"
                rows="6"
                placeholder="Tuliskan pesan, pertanyaan, atau keluhan Anda di sini..."
                required
              ></textarea>
            </div>
          </div>

          <div class="form-actions">
            <button type="submit" class="submit-btn">
              Kirim Pesan
            </button>
          </div>
        </form>

        <div v-if="submitStatus" class="submit-message" :class="submitStatus">
          {{ submitMessage }}
        </div>
      </div>
    </section>

    <!-- Media Sosial -->
    <section class="medsos-section">
      <div class="main-container">
        <h2 class="section-title">Media Sosial</h2>
        <p class="section-subtitle">Ikuti media sosial kami untuk mendapatkan informasi terbaru dan update kegiatan kelurahan</p>
        
        <div class="medsos-grid">
          <div class="medsos-card">
            <div class="medsos-icon facebook">
              <span style="font-size: 48px;">📘</span>
            </div>
            <h3 class="medsos-name">Facebook</h3>
            <p class="medsos-handle">@KelurahanKebagusan</p>
            <a href="#" class="medsos-link">Kunjungi Halaman →</a>
          </div>
          <div class="medsos-card">
            <div class="medsos-icon instagram">
              <span style="font-size: 48px;">📷</span>
            </div>
            <h3 class="medsos-name">Instagram</h3>
            <p class="medsos-handle">@kelurahan.kebagusan</p>
            <a href="#" class="medsos-link">Kunjungi Halaman →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Kontak Darurat -->
    <section class="darurat-section">
      <div class="main-container">
        <h2 class="section-title">Kontak Darurat</h2>
        <div class="darurat-grid">
          <div class="darurat-card emergency">
            <div class="darurat-icon">🚨</div>
            <h3 class="darurat-title">Kepolisian & Keamanan (Bhabinkamtibmas Kelurahan Kebagusan)</h3>
            <p class="darurat-subtitle">Hubungi untuk keperluan keamanan dan ketertiban</p>
            <div class="darurat-contacts">
              <p><strong>HP:</strong> 082-XXX-XXX-XXX</p>
              <p><strong>Telp:</strong> (021) XXXX-XXXX</p>
            </div>
          </div>

          <div class="darurat-card">
            <div class="darurat-icon">🚒</div>
            <h3 class="darurat-title">BPBD</h3>
            <p class="darurat-subtitle">Badan Penanggulangan Bencana Daerah</p>
            <div class="darurat-contacts">
              <p><strong>Call Center:</strong> 112</p>
            </div>
          </div>

          <div class="darurat-card">
            <div class="darurat-icon">🚑</div>
            <h3 class="darurat-title">Ambulans 6200</h3>
            <p class="darurat-subtitle">Layanan ambulans gratis 24 jam</p>
            <div class="darurat-contacts">
              <p><strong>Call Center:</strong> 6200</p>
            </div>
          </div>

          <div class="darurat-card">
            <div class="darurat-icon">💧</div>
            <h3 class="darurat-title">PMI (Palang Merah Cabang Jaktim)</h3>
            <p class="darurat-subtitle">Palang Merah Indonesia</p>
            <div class="darurat-contacts">
              <p><strong>Telp:</strong> (021) XXXX-XXXX</p>
            </div>
          </div>

          <div class="darurat-card">
            <div class="darurat-icon">📋</div>
            <h3 class="darurat-title">Posko Bidan Mandiri</h3>
            <p class="darurat-subtitle">Layanan kesehatan ibu dan anak</p>
            <div class="darurat-contacts">
              <p><strong>Telp:</strong> (021) XXXX-XXXX</p>
            </div>
          </div>

          <div class="darurat-card">
            <div class="darurat-icon">🏥</div>
            <h3 class="darurat-title">BPJS</h3>
            <p class="darurat-subtitle">Badan Penyelenggara Jaminan Sosial</p>
            <div class="darurat-contacts">
              <p><strong>Website:</strong> bpjs-kesehatan.go.id</p>
            </div>
          </div>

          <div class="darurat-card">
            <div class="darurat-icon">📞</div>
            <h3 class="darurat-title">Telkom</h3>
            <p class="darurat-subtitle">Layanan telekomunikasi</p>
            <div class="darurat-contacts">
              <p><strong>Call Center:</strong> 147</p>
            </div>
          </div>

          <div class="darurat-card">
            <div class="darurat-icon">⚡</div>
            <h3 class="darurat-title">PLN (PT. PLN Cab. Jakbar)</h3>
            <p class="darurat-subtitle">Layanan kelistrikan</p>
            <div class="darurat-contacts">
              <p><strong>Call Center:</strong> 123</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Peringatan -->
    <section class="warning-section">
      <div class="main-container">
        <div class="warning-box">
          <div class="warning-icon">⚠️</div>
          <div class="warning-content">
            <h3>Peringatan</h3>
            <ul>
              <li>Jangan pernah memberikan data pribadi seperti password atau informasi rekening melalui telepon atau email yang mengatasnamakan pihak kelurahan.</li>
              <li>Kelurahan tidak pernah meminta biaya apapun untuk pengurusan surat-surat resmi.</li>
              <li>Harap waspada terhadap penipuan yang mengatasnamakan perangkat kelurahan.</li>
              <li>Laporkan segera jika ada pihak yang mencurigakan.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'KontakPage',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      },
      submitStatus: null,
      submitMessage: ''
    }
  },
  methods: {
    handleSubmit() {
      this.submitStatus = 'loading'
      this.submitMessage = 'Mengirim pesan...'
      
      setTimeout(() => {
        this.submitStatus = 'success'
        this.submitMessage = 'Pesan berhasil dikirim! Kami akan segera menghubungi Anda.'
        
        this.formData = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        }
        
        setTimeout(() => {
          this.submitStatus = null
          this.submitMessage = ''
        }, 5000)
      }, 1500)
    }
  }
}
</script>

<style>
.kontak-page-wrapper {
  background-color: #f5f5f5;
}

.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Banner */
.kontak-hero {
  background: linear-gradient(135deg, #FFA500 0%, #FF8C00 100%);
  color: white;
  padding: 50px 0;
  text-align: center;
}

.kontak-hero-title {
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 15px;
  letter-spacing: 2px;
}

.kontak-hero-desc {
  font-size: 14px;
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto;
  opacity: 0.95;
}

/* Section Title */
.section-title {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 15px;
}

.section-subtitle {
  text-align: center;
  color: #666;
  font-size: 14px;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* Cara Menghubungi */
.cara-hubungi-section {
  padding: 60px 0;
  background-color: white;
}

.cara-hubungi-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.cara-card {
  background-color: white;
  border: 2px solid #e0e0e0;
  border-radius: 15px;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.3s;
}

.cara-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  border-color: #003d82;
}

.cara-icon {
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cara-title {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.cara-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* Lokasi Kantor */
.lokasi-section {
  padding: 60px 0;
  background-color: #f8f9fa;
}

.lokasi-wrapper {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;
}

.lokasi-info {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.info-item {
  background-color: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  display: flex;
  gap: 20px;
}

.info-icon-box {
  width: 60px;
  height: 60px;
  background-color: #E3F2FD;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-icon {
  font-size: 28px;
}

.info-content h4 {
  font-size: 14px;
  font-weight: bold;
  color: #003d82;
  margin-bottom: 8px;
}

.info-content p {
  font-size: 13px;
  color: #666;
  line-height: 1.8;
}

.lokasi-map {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.map-placeholder {
  width: 100%;
  height: 400px;
  background-color: #e0e0e0;
}

.map-label {
  padding: 15px;
  text-align: center;
  font-size: 13px;
  color: #666;
  background-color: #f8f9fa;
}

/* Denah Kantor */
.denah-section {
  padding: 60px 0;
  background-color: white;
}

.denah-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.denah-card {
  background-color: #f8f9fa;
  border: 2px solid #003d82;
  border-radius: 10px;
  padding: 25px 20px;
}

.denah-title {
  font-size: 16px;
  font-weight: bold;
  color: #003d82;
  margin-bottom: 15px;
  text-align: center;
}

.denah-list {
  list-style: none;
  font-size: 13px;
  color: #666;
}

.denah-list li {
  padding: 8px 0;
  border-bottom: 1px solid #e0e0e0;
}

.denah-list li:last-child {
  border-bottom: none;
}

/* Kirim Pesan */
.kirim-pesan-section {
  padding: 60px 0;
  background-color: #f8f9fa;
}

.kontak-form {
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0,0,0,0.08);
}

.form-row {
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.form-group input,
.form-group textarea {
  padding: 12px 15px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #003d82;
}

.form-group textarea {
  resize: vertical;
}

.form-actions {
  text-align: center;
  margin-top: 30px;
}

.submit-btn {
  background-color: #003d82;
  color: white;
  border: none;
  padding: 15px 50px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #002d62;
}

.submit-message {
  max-width: 800px;
  margin: 20px auto 0;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
}

.submit-message.loading {
  background-color: #fff3cd;
  color: #856404;
}

.submit-message.success {
  background-color: #d4edda;
  color: #155724;
}

/* Media Sosial */
.medsos-section {
  padding: 60px 0;
  background-color: white;
}

.medsos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 800px;
  margin: 0 auto;
}

.medsos-card {
  background-color: white;
  border: 2px solid #e0e0e0;
  border-radius: 15px;
  padding: 40px;
  text-align: center;
  transition: all 0.3s;
}

.medsos-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.medsos-icon {
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.medsos-icon.facebook {
  background-color: #E3F2FD;
}

.medsos-icon.instagram {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.medsos-name {
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
}

.medsos-handle {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

.medsos-link {
  color: #003d82;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}

.medsos-link:hover {
  text-decoration: underline;
}

/* Kontak Darurat */
.darurat-section {
  padding: 60px 0;
  background-color: #f8f9fa;
}

.darurat-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.darurat-card {
  background-color: white;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  padding: 25px 20px;
  transition: all 0.3s;
}

.darurat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.darurat-card.emergency {
  grid-column: span 2;
  border-color: #dc3545;
  background-color: #fff5f5;
}

.darurat-icon {
  font-size: 40px;
  text-align: center;
  margin-bottom: 15px;
}

.darurat-title {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
  min-height: 40px;
}

.darurat-subtitle {
  font-size: 12px;
  color: #666;
  margin-bottom: 12px;
  min-height: 35px;
}

.darurat-contacts {
  font-size: 12px;
  color: #333;
}

.darurat-contacts p {
  margin-bottom: 5px;
}

/* Warning Section */
.warning-section {
  padding: 30px 0 60px;
}

.warning-box {
  background: linear-gradient(135deg, #FFF3CD 0%, #FFE69C 100%);
  border: 2px solid #FFC107;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  gap: 20px;
}

.warning-icon {
  font-size: 48px;
  flex-shrink: 0;
}

.warning-content h3 {
  font-size: 18px;
  font-weight: bold;
  color: #856404;
  margin-bottom: 15px;
}

.warning-content ul {
  list-style-position: inside;
  font-size: 13px;
  color: #856404;
  line-height: 2;
}

.warning-content li {
  margin-bottom: 8px;
}

/* Responsive */
@media (max-width: 768px) {
  .kontak-hero-title {
    font-size: 28px;
  }
  
  .cara-hubungi-grid {
    grid-template-columns: 1fr;
  }
  
  .lokasi-wrapper {
    grid-template-columns: 1fr;
  }
  
  .denah-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .medsos-grid {
    grid-template-columns: 1fr;
  }
  
  .darurat-grid {
    grid-template-columns: 1fr;
  }
  
  .darurat-card.emergency {
    grid-column: span 1;
  }
  
  .warning-box {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>