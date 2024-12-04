const bmi = document.getElementById("bmi");
const btn1 = document.getElementById("button-hidden1");
const btn2 = document.getElementById("button-hidden2");
const phidden = document.getElementById("p-hidden");
const divhidden = document.getElementById("div-hidden");

bmi.addEventListener("submit", function (event) {
  event.preventDefault(); // mencegah refresh halaman

  // Ambil value input
  const beratBadan = parseFloat(document.getElementById("beratBadan").value);
  const tinggiBadan =
    parseFloat(document.getElementById("tinggiBadan").value) / 100;
  const umur = parseInt(document.getElementById("umur").value);

  // Validasi input
  if (isNaN(beratBadan) || isNaN(tinggiBadan) || isNaN(umur)) {
    alert("Masukkan angka yang valid untuk semua input!");
    return;
  }

  // Menghitung BMI
  const hitungBMI = (beratBadan / (tinggiBadan * tinggiBadan)).toFixed(2); // Pembulatan 2 desimal

  // Menentukan status berat badan dan message
  let status;
  let message;
  if (hitungBMI < 18.5) {
    status = "Kekurangan berat badan";
    message =
      "Hasil BMI Anda menunjukkan bahwa Anda berada dalam kategori kekurangan berat badan. Hal ini dapat meningkatkan risiko masalah kesehatan, seperti kekurangan nutrisi atau gangguan kekebalan tubuh. Untuk mencapai berat badan yang sehat, pertimbangkan untuk meningkatkan asupan makanan bergizi dan berkonsultasi dengan ahli gizi atau dokter.";
  } else if (hitungBMI >= 18.5 && hitungBMI <= 24.9) {
    status = "Normal";
    message =
      "Selamat! Hasil BMI Anda menunjukkan bahwa berat badan Anda berada dalam kategori normal. Ini berarti Anda memiliki risiko yang lebih rendah untuk mengalami masalah kesehatan yang berhubungan dengan berat badan. Tetap jaga pola makan yang sehat dan lakukan olahraga secara teratur untuk mempertahankan kondisi ini.";
  } else if (hitungBMI >= 25 && hitungBMI <= 29.9) {
    status = "Berat badan berlebih";
    message =
      "Hasil BMI Anda menunjukkan bahwa Anda berada dalam kategori overweight atau berat badan berlebih. Untuk mencapai berat badan yang lebih ideal, penting untuk mengatur pola makan dengan memilih makanan sehat dan rendah kalori, serta meningkatkan aktivitas fisik sehari-hari. Konsultasikan dengan dokter atau ahli gizi untuk rencana yang sesuai dengan kebutuhan Anda.";
  } else {
    status = "Obesitas";
    message =
      "Hasil BMI Anda menunjukkan bahwa Anda berada dalam kategori obesitas. Hal ini dapat meningkatkan risiko berbagai masalah kesehatan, seperti diabetes, hipertensi, dan penyakit jantung. Sebaiknya segera lakukan langkah-langkah untuk menurunkan berat badan, seperti menerapkan pola makan sehat, rutin berolahraga, dan berkonsultasi dengan dokter atau ahli gizi untuk mendapatkan panduan yang tepat.";
  }

  // Menampilkan hasil di halaman
  document.getElementById("result-calculation").textContent = hitungBMI;
  document.getElementById(
    "info-result"
  ).textContent = `Berdasarkan hasil perhitungan, status berat badan adalah ${status}`;
  document.getElementById("desc-result").textContent = message;
  btn1.removeAttribute("hidden");
  btn2.removeAttribute("hidden");
  phidden.removeAttribute("hidden");
  divhidden.removeAttribute("hidden");
});
