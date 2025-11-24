<template>
  <header class="main-header">
    <div class="main-container">
      <div class="header-content">
        <router-link to="/" class="site-logo">
          <div class="logo-icon">🏛️</div>
          <span class="logo-title">Kelurahan Kebagusan</span>
        </router-link>
        <nav class="main-nav">
          <router-link to="/" class="nav-item" exact-active-class="active">
            Beranda
          </router-link>
          <router-link to="/layanan-publik" class="nav-item" active-class="active">
            Layanan Publik
          </router-link>
          <router-link to="/berita" class="nav-item" active-class="active">
            Berita
          </router-link>
          <router-link to="/profil-kelurahan" class="nav-item" active-class="active">
            Profil Kelurahan
          </router-link>
            <router-link to="/kontak" class="nav-item" active-class="active">
              Kontak
            </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavbarComponent'
}
</script>

<style scoped>
.main-header {
  background-color: #003d82;
  color: white;
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
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
  text-decoration: none;
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
  border-bottom: 2px solid transparent;
}

.nav-item:hover {
  opacity: 0.8;
}

.nav-item.active {
  border-bottom: 2px solid white;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
  }
  
  .main-nav {
    justify-content: center;
  }
}
</style>