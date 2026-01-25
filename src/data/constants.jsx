import React from 'react';
import { Activity, Camera, Map as MapIcon, Users, Sprout, Egg } from 'lucide-react';

// --- IMPORT GAMBAR UMKM ---
import robbaniImg1 from '../assets/umkm/robbani.jpeg';
import robbaniImg2 from '../assets/umkm/robbani2.jpeg';
import kangdoblehImg1 from '../assets/umkm/kangdobleh1.jpeg';
import kangdoblehImg2 from '../assets/umkm/kangdobleh2.png';
import mieayampakminimg from '../assets/umkm/mieayampakmin.jpeg';
import adaseblakmg from '../assets/umkm/adaseblak.jpeg';

// --- IMPORT GAMBAR GALERI (TAMBAHAN BARU) ---
import karangTaruna1 from '../assets/umkm/karangtaruna.jpeg';
import karangTaruna2 from '../assets/umkm/karangtaruna2.jpeg';
import kwtImg1 from '../assets/umkm/kwt3.jpeg';
import kwtImg2 from '../assets/umkm/kwt2.jpeg';
import ternakImg1 from '../assets/umkm/kelompok_ternak.JPG';
import ternakImg2 from '../assets/umkm/kelompok_ternak2.JPG';

export const PUNDONG_CENTER = [-7.7334246, 110.3153961];

export const umkmData = [
  {
    id: 1, name: "Toko Robbani",
    image1: robbaniImg1, 
    image2: robbaniImg2,
    hours: "07.00 - 21.00 WIB",
    desc: "Toko Robbani merupakan suatu unit usaha mikro yang berlokasi di Pundong 1, Tirtoadi, Mlati. Toko menjual berbagai macam bahan pokok (sembako) untuk kebutuhan keluarga hingga aneka cemilan",
    address: "7899+85X, Pundong I, Tirtoadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55287", phone: "081802748749", coords: [-7.7316421, 110.3179837]
  },
  {
    id: 2, name: "Bakso & Mie Ayam Pak Min",
    image1: mieayampakminimg, 
    hours: " 09.00 - 21.00 WIB",
    desc: "Berlokasi langsung di area rumah tinggal yang nyaman, Bakso & Mie Ayam Pak Min menjadi pilihan tepat bagi masyarakat yang mencari mie ayam lezat dengan kualitas terjamin. Harga makanan dan minuman di sini sangat terjangkau, berkisar antara Rp3.000 hingga Rp7.000.",
    address: " Jl. Pundong, Pundong I, Tirtoadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55287", phone: "089668756721", coords: [-7.7338877,110.3174139,21]
  },
  {
    id: 3, name: "Angkringan Kang Dobleh",
    image1: kangdoblehImg1, 
    image2: kangdoblehImg2,
    hours: " 09.00 - 23.00 WIB",
    desc: "Angkringan Kang Dobleh merupakan sebuah UMKM yang menyediakan berbagai macam minuman dan makanan berat maupun ringan dengan kisaran harga yang terjangkau,  berkisar antara Rp3.000 hingga Rp13.000.",
    address: " Jl. Pundong, Pundong I, Tirtoadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55287", phone: "089668756721", coords: [-7.733776, 110.317583]
  },
  {
    id: 4, name: "Ada Salad Buah & Seblak",
    image1: adaseblakmg, 
    hours: "08.00 - 23.00 WIB",
    desc: "ADA Salad Buah & Seblak menawarkan perpaduan unik kuliner antara seblak pedas yang gurih dan salad buah segar. Selain menu utama, tersedia juga pilihan hidangan lain seperti Rawon dan Ayam Kremes lezat yang siap melayani pelanggan selama 24 jam penuh. Kuliner ini juga tersedia di Gofood, Grabfood, dan ShopeeFood ",
    address: "Pundong I, Tirtoadi, Mlati, Sleman Regency, Special Region of Yogyakarta 55287", coords: [-7.7331308,110.3145382]
  }
];

export const publicServices = [
  { id: 1, name: "Masjid Al-Ikhlas", type: "Ibadah", coords: [-7.7330, 110.3155] },
  { id: 2, name: "Masjid Al-Barokah", type: "Ibadah", coords: [-7.7338, 110.3158] },
  { id: 3, name: " Masjid Ash-Shohabah", type: "Ibadah", coords: [ -7.734723, 110.318711] },
  { id: 4, name: " Mushola Al-Fatah", type: "Ibadah", coords: [ -7.737033, 110.314893] },
  { id: 5, name: " Mushola Tani Massa", type: "Ibadah", coords: [  -7.734191, 110.317407] },
  { id: 6, name: " Makam Sijonggo", type: "Makam", coords: [ -7.736886, 110.316341] },
  { id: 7, name: " Kantor Kapanewon Mlati", type: "Layanan Publik", coords: [-7.73401,110.3284936] },
  { id: 8, name: " Kantor Desa Tirtoadi", type: "Layanan Publik", coords: [-7.7399572,110.3208728] },
  { id: 9, name: " Puskesmas Mlati 2", type: "Layanan Kesehatan", coords: [-7.7362124,110.3155531] }
];

export const potensiData = [
  {
    id: 1,
    title: "Karang Taruna",
    desc: "Wadah pengembangan generasi muda Pundong 1 yang aktif dalam kegiatan sosial, olahraga, dan kesenian untuk mempererat solidaritas warga. Terdapat 2 kelompok Tarang Taruna di Pundong 1, yaitu AMP 1 dan Tunas Mlati",
    icon: <Users size={48} />, 
    color: "text-blue-600"
  },
  {
    id: 2,
    title: "Kelompok Wanita Tani (KWT)",
    desc: "Pemberdayaan ibu-ibu melalui pemanfaatan lahan pekarangan untuk tanaman pangan, mendukung ketahanan pangan keluarga.",
    icon: <Sprout size={48} />, 
    color: "text-green-600"
  },
  {
    id: 3,
    title: "Kelompok Ternak",
    desc: "Unit usaha masyarakat yang berfokus pada pembudidayaan ternak sebagai aset ekonomi jangka panjang dusun.",
    icon: <Egg size={48} />, 
    color: "text-orange-600"
  }
];

export const galleryData = [
  { 
    id: 1, 
    category: "Karang Taruna", 
    src: karangTaruna1, 
    caption: "Kerja Bakti Pengumpulan Sampah Plastik Oleh Karang Taruna Pundong 1." 
  },
  { 
    id: 2, 
    category: "KWT", 
    src: kwtImg1, 
    caption: " Lahan Kelompok Wanita Tani (KWT) Pundong 1." 
  },
  { 
    id: 3, 
    category: "Ternak", 
    src: ternakImg1, 
    caption: "Hewan Ternak Pundong 1." 
  },
  { 
    id: 4, 
    category: "Karang Taruna", 
    src: karangTaruna2, 
    caption: "Kegiatan Jalan Sehat Warga Pundong 1 Yang Diselenggarakan oleh Karang Taruna." 
  },
  { 
    id: 5, 
    category: "KWT", 
    src: kwtImg2, 
    caption: "Lahan KWT Pundong 1." 
  },
  { 
    id: 6, 
    category: "Ternak", 
    src: ternakImg2, 
    caption: "Hewan Ternak Pundong 1." 
  }
];