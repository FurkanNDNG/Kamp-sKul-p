# Kampüs Kulübü — AI Notları

## Değişiklikler
1. Üç sayfalı statik site, Bartın Üniversitesi kulüplerini tanıtacak içerik ve ortak görsel dille düzenlendi. Yeni framework veya paket eklenmedi.
2. Ana sayfaya altı kulübün logosu, adı ve kısa tanıtımıyla kartlar eklendi.
3. Etkinlikler sayfasında 2026–27 dönemi için 15 örnek etkinlik listelendi. Her kart ilgili kulübün küçük logosunu içerir; tarihler sayfada örnek olarak belirtilir.
4. Ortak `script.js`, ana sayfa ve etkinliklerde yazdıkça filtreleme, Türkçe harf duyarlılığı ve sonuç sayacı sağlar.
5. Hakkımızda içeriği kulüp çeşitliliği, etkinlikler ve katılım konularıyla yenilendi.
6. Ortak CSS'e mavi vurgu, hafif kart hover'ı ve dar ekran düzeni eklendi. Etkinlik sayfasındaki sağ/sol fotoğraf alanları kaldırıldı; article içindeki logolar korundu.

## Kullanılan İstemlerin Özeti
- Mevcut statik yapıyı koruyarak kulüp temasına ve görsel dile uyarlama.
- Kulüp ve etkinlik kartlarına görseller ekleme, boyutlandırma ve yerleşimlerini düzenleme.
- Ortak JavaScript ile arama/filtreleme ve sonuç sayacı ekleme.
- Mobil düzeni ve metinleri gelen geri bildirimlere göre iyileştirme.

## Dosyalar
- `index.html`: Ana sayfa ve kulüp kartları
- `etkinlikler.html`: Örnek etkinlikler ve arama
- `hakkimizda.html`: Kulüp yaşamı tanıtımı
- `style.css`: Ortak görünüm ve duyarlı düzen
- `script.js`: Arama filtreleri
- `Image/`: Kulüp logoları
- `README.md`: Kurulum ve kullanım
- `Test_Notları.md`: Test senaryoları ve sonuçları
