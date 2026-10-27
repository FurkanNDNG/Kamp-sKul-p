
# Test İşlemleri

Arama senaryoları `script.js` üzerinde Node.js ile sahte DOM kullanılarak doğrulandı. Sayfa bağlantıları yerel HTTP sunucusunda kontrol edildi. Mobil görünüm ve klavye odağı için CSS kuralları incelendi; gerçek cihazda manuel Tab testi yapılmadı.

| # | Test | Beklenen sonuç | Gerçekleşen sonuç |
|---|---|---|---|
| 1 | Başlığın tamamını veya bir bölümünü arama | Yalnızca eşleşen kart görünür ve sayaç doğru sayıyı gösterir. | Ana sayfada “Bahçe”, etkinliklerde “Okuma” aramalarında birer eşleşme ve doğru sayaç görüldü. |
| 2 | Aynı ifadeyi büyük ve küçük harfle arama | Her iki aramada aynı kartlar görünür. | “Okuma” ve “okuma” aynı kartı ve sayacı verdi. |
| 3 | Eşleşmeyen ifade arama | Sayaç 0 olur ve sonuç bulunmadığını bildirir. | Sayaç 0 oldu ve “0 sonuç bulundu.” mesajı üretildi. |
| 4 | Boşluk yazma veya aramayı temizleme | Tüm kartlar görünür, sonuç mesajı temizlenir. | Boşluk ve boş arama girişinde tüm kartlar geri geldi, mesaj temizlendi. |
| 5 | Üç sayfanın menü bağlantılarını açma | Tüm sayfalar doğru şekilde açılır. | `index.html`, `etkinlikler.html` ve `hakkimizda.html` HTTP 200 yanıtladı. |
| 6 | 390px görünüm ve klavye odağı | Yatay taşma olmaz; arama alanında görünür odak bulunur. | Mobil tek sütun ve `focus-visible` CSS kuralları mevcut. Gerçek cihazda ve Tab ile manuel kontrol yapılmadı. |
