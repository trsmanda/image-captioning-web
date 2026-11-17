// Mengambil elemen-elemen dari HTML
const imageInput = document.getElementById('imageInput');
const uploadPrompt = document.getElementById('uploadPrompt');
const imagePreview = document.getElementById('imagePreview');
const analyzeBtn = document.getElementById('analyzeBtn');
const resultSection = document.getElementById('resultSection');
const resultText = document.getElementById('resultText');

let selectedFile = null;

// Ketika user memilih file foto
imageInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        selectedFile = file;
        const reader = new FileReader();
        
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.classList.remove('hidden');
            uploadPrompt.classList.add('hidden');
            analyzeBtn.removeAttribute('disabled'); // Aktifkan tombol analisis
        }
        
        reader.readAsDataURL(file);
    }
});

// Ketika tombol "Analisis Foto" diklik
analyzeBtn.addEventListener('click', function() {
    if (!selectedFile) return;

    // Tampilkan kotak hasil dan teks loading
    resultSection.classList.remove('hidden');
    resultText.textContent = "AI sedang menganalisis gambar Anda...";
    analyzeBtn.setAttribute('disabled', 'true');

    // SIMULASI PENGHUBUNG KE MODEL KAGGLE / BACKEND
    // Nanti di sini tempat kamu menyambungkan fetch() ke API Python/Flask atau model Kaggle kalian.
    setTimeout(() => {
        // Contoh hasil dummy / tiruan respon dari model AI *captioning* kalian
        resultText.textContent = "Hasil Analisis: Foto ini menunjukkan pemandangan lingkungan luar ruangan dengan suasana yang bersih dan minimalis.";
        analyzeBtn.removeAttribute('disabled');
    }, 2000); // Simulasi jeda waktu proses AI selama 2 detik
});