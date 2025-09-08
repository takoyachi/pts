const questions = [
    {
        question: "1. Urutan langkah-langkah yang logis dan sistematis untuk menyelesaikan masalah disebut...",
        choices: {
            a: "Program",
            b: "Algoritma",
            c: "Struktur data",
            d: "Sintaks"
        },
        correctAnswer: "b"
    },
    {
        question: "2. Pernyataan 'Mulai' dan 'Selesai' dalam flowchart dilambangkan dengan simbol...",
        choices: {
            a: "Persegi panjang",
            b: "Jajar genjang",
            c: "Terminator (Elips)",
            d: "Belah ketupat"
        },
        correctAnswer: "c"
    },
    {
        question: "3. Simbol yang melambangkan input atau output data dalam flowchart adalah...",
        choices: {
            a: "Persegi panjang",
            b: "Belah ketupat",
            c: "Jajar genjang",
            d: "Lingkaran"
        },
        correctAnswer: "c"
    },
    {
        question: "4. Simbol yang digunakan untuk proses atau perhitungan dalam flowchart adalah...",
        choices: {
            a: "Belah ketupat",
            b: "Persegi panjang",
            c: "Lingkaran",
            d: "Trapesium"
        },
        correctAnswer: "b"
    },
    {
        question: "5. Tanda panah dalam flowchart berfungsi sebagai...",
        choices: {
            a: "Penghubung simbol",
            b: "Pemberi instruksi",
            c: "Menunjukkan arah aliran data",
            d: "Menunjukkan urutan eksekusi"
        },
        correctAnswer: "c"
    },
    {
        question: "6. Sebuah algoritma harus memiliki awal dan akhir yang jelas. Sifat ini disebut...",
        choices: {
            a: "Terstruktur",
            b: "Berhingga",
            c: "Terarah",
            d: "Efisien"
        },
        correctAnswer: "b"
    },
    {
        question: "7. Jika suatu kondisi harus diputuskan (YA atau TIDAK) dalam flowchart, simbol apa yang digunakan?",
        choices: {
            a: "Persegi",
            b: "Jajar genjang",
            c: "Belah ketupat",
            d: "Lingkaran kecil"
        },
        correctAnswer: "c"
    },
    {
        question: "8. Simbol lingkaran kecil dalam flowchart berfungsi sebagai...",
        choices: {
            a: "Titik awal",
            b: "Titik akhir",
            c: "Konektor (penghubung)",
            d: "Proses"
        },
        correctAnswer: "c"
    },
    {
        question: "9. Manakah dari pernyataan berikut yang paling tepat mendeskripsikan algoritma?",
        choices: {
            a: "Serangkaian kode program yang rumit",
            b: "Urutan langkah-langkah untuk memecahkan masalah",
            c: "Desain visual dari sebuah aplikasi",
            d: "Kumpulan data yang disimpan di database"
        },
        correctAnswer: "b"
    },
    {
        question: "10. Urutan langkah dalam algoritma harus jelas dan tidak menimbulkan makna ganda. Sifat ini disebut...",
        choices: {
            a: "Berhingga",
            b: "Efektif",
            c: "Terstruktur",
            d: "Jelas"
        },
        correctAnswer: "d"
    },
    {
        question: "11. Simbol apakah yang digunakan untuk menampilkan output di layar monitor?",
        choices: {
            a: "Jajar genjang",
            b: "Trapesium",
            c: "Persegi panjang",
            d: "Belah ketupat"
        },
        correctAnswer: "a"
    },
    {
        question: "12. Alur flowchart dari atas ke bawah, atau dari kiri ke kanan. Hal ini menunjukkan sifat...",
        choices: {
            a: "Terarah",
            b: "Berhingga",
            c: "Efektif",
            d: "Logis"
        },
        correctAnswer: "a"
    },
    {
        question: "13. Sebuah algoritma dikatakan baik jika...",
        choices: {
            a: "Cepat dan menghasilkan output yang benar",
            b: "Panjang dan kompleks",
            c: "Sulit dipahami",
            d: "Memerlukan banyak memori"
        },
        correctAnswer: "a"
    },
    {
        question: "14. Simbol flowchart yang digunakan untuk persiapan atau inisialisasi adalah...",
        choices: {
            a: "Persegi",
            b: "Belah ketupat",
            c: "Garis aliran",
            d: "Heksagon (Segi enam)"
        },
        correctAnswer: "d"
    },
    {
        question: "15. Proses pengujian dan pencarian kesalahan pada algoritma atau program disebut...",
        choices: {
            a: "Kompilasi",
            b: "Dekomposisi",
            c: "Debugging",
            d: "Inisialisasi"
        },
        correctAnswer: "c"
    },
    {
        question: "16. Mengapa penting untuk membuat algoritma sebelum menulis kode program?",
        choices: {
            a: "Agar program lebih mahal",
            b: "Agar program menjadi lebih kompleks",
            c: "Untuk merencanakan langkah-langkah sebelum mengkode",
            d: "Agar program lebih sulit dibaca"
        },
        correctAnswer: "c"
    },
    {
        question: "17. Manakah dari berikut ini yang merupakan contoh masalah yang dapat diselesaikan dengan algoritma?",
        choices: {
            a: "Mencari jalan terpendek di peta",
            b: "Membaca buku",
            c: "Menonton film",
            d: "Mendengarkan musik"
        },
        correctAnswer: "a"
    },
    {
        question: "18. Simbol yang digunakan untuk memulai sebuah perulangan (loop) dalam flowchart adalah...",
        choices: {
            a: "Terminator",
            b: "Konektor",
            c: "Garis aliran",
            d: "Belah ketupat"
        },
        correctAnswer: "d"
    },
    {
        question: "19. Aliran data dalam flowchart biasanya ditunjukkan dengan...",
        choices: {
            a: "Garis lurus",
            b: "Panah",
            c: "Garis putus-putus",
            d: "Titik"
        },
        correctAnswer: "b"
    },
    {
        question: "20. Urutan langkah-langkah yang harus diikuti untuk menyelesaikan suatu tugas disebut...",
        choices: {
            a: "Algoritma",
            b: "Flowchart",
            c: "Pseudocode",
            d: "Program"
        },
        correctAnswer: "a"
    },
    {
        question: "21. Suatu diagram yang menunjukkan aliran instruksi dalam sebuah algoritma secara visual disebut...",
        choices: {
            a: "Program",
            b: "Flowchart",
            c: "Database",
            d: "Struktur data"
        },
        correctAnswer: "b"
    },
    {
        question: "22. Keuntungan utama menggunakan flowchart adalah...",
        choices: {
            a: "Membuat kode lebih rumit",
            b: "Mempercepat proses pengetikan kode",
            c: "Mempermudah pemahaman alur program",
            d: "Mengurangi jumlah variabel yang digunakan"
        },
        correctAnswer: "c"
    },
    {
        question: "23. Simbol belah ketupat dalam flowchart melambangkan...",
        choices: {
            a: "Input/Output",
            b: "Proses",
            c: "Kondisi atau keputusan",
            d: "Awal atau akhir"
        },
        correctAnswer: "c"
    },
    {
        question: "24. Algoritma harus dapat diselesaikan dalam waktu yang terbatas. Sifat ini disebut...",
        choices: {
            a: "Berhingga",
            b: "Tepat",
            c: "Efektif",
            d: "Jelas"
        },
        correctAnswer: "a"
    },
    {
        question: "25. Manakah dari berikut ini yang merupakan representasi visual dari algoritma?",
        choices: {
            a: "Bahasa pemrograman",
            b: "Pseudocode",
            c: "Flowchart",
            d: "Tabel"
        },
        correctAnswer: "c"
    },
    {
        question: "26. Simbol persegi panjang yang memiliki garis ganda di sisi vertikalnya dalam flowchart menunjukkan...",
        choices: {
            a: "Perulangan",
            b: "Subrutin atau proses yang telah ditentukan",
            c: "Konektor",
            d: "Input"
        },
        correctAnswer: "b"
    },
    {
        question: "27. Dalam flowchart, 'Decision' (Keputusan) memiliki satu input dan...",
        choices: {
            a: "Satu output",
            b: "Dua atau lebih output",
            c: "Tidak ada output",
            d: "Satu input lagi"
        },
        correctAnswer: "b"
    },
    {
        question: "28. Proses mengubah algoritma menjadi kode yang dapat dijalankan komputer disebut...",
        choices: {
            a: "Algoritmik",
            b: "Debugging",
            c: "Kompilasi",
            d: "Pengkodean (coding)"
        },
        correctAnswer: "d"
    },
    {
        question: "29. Alur yang berulang-ulang dalam sebuah algoritma disebut...",
        choices: {
            a: "Perulangan (Loop)",
            b: "Percabangan (Branching)",
            c: "Sintaks",
            d: "Variabel"
        },
        correctAnswer: "a"
    },
    {
        question: "30. Berikut ini merupakan komponen dasar dalam algoritma, kecuali...",
        choices: {
            a: "Urutan",
            b: "Pemilihan",
            c: "Pengulangan",
            d: "Penghapusan"
        },
        correctAnswer: "d"
    },
    {
        question: "31. Dalam algoritma, struktur 'if-then-else' termasuk ke dalam jenis...",
        choices: {
            a: "Struktur sekuensial",
            b: "Struktur perulangan",
            c: "Struktur percabangan",
            d: "Struktur array"
        },
        correctAnswer: "c"
    },
    {
        question: "32. Manakah yang termasuk ke dalam ciri-ciri algoritma yang baik?",
        choices: {
            a: "Hasilnya tidak bisa dipastikan",
            b: "Langkah-langkahnya tidak terurut",
            c: "Memiliki efisiensi yang tinggi",
            d: "Hanya bisa digunakan sekali"
        },
        correctAnswer: "c"
    },
    {
        question: "33. Simbol flowchart yang digunakan untuk perulangan dengan kondisi di awal adalah...",
        choices: {
            a: "Belah ketupat",
            b: "Persegi panjang",
            c: "Lingkaran",
            d: "Heksagon"
        },
        correctAnswer: "d"
    },
    {
        question: "34. Bagian dari algoritma yang tidak akan pernah dieksekusi disebut...",
        choices: {
            a: "Dead code",
            b: "Loop tak terbatas",
            c: "Debugging",
            d: "Subrutin"
        },
        correctAnswer: "a"
    },
    {
        question: "35. Apa yang dimaksud dengan 'nested loop'?",
        choices: {
            a: "Perulangan yang memiliki kondisi ganda",
            b: "Perulangan yang berada di dalam perulangan lain",
            c: "Perulangan yang berjalan terbalik",
            d: "Perulangan yang tidak memiliki batas"
        },
        correctAnswer: "b"
    },
    {
        question: "36. Flowchart yang alurnya berurutan dari atas ke bawah tanpa percabangan atau perulangan disebut...",
        choices: {
            a: "Flowchart sekuensial",
            b: "Flowchart perulangan",
            c: "Flowchart percabangan",
            d: "Flowchart bersarang"
        },
        correctAnswer: "a"
    },
    {
        question: "37. Sebuah algoritma dikatakan benar jika...",
        choices: {
            a: "Menghasilkan output yang salah",
            b: "Menghasilkan output yang benar untuk semua input yang valid",
            c: "Tidak pernah berhenti",
            d: "Tidak dapat dipahami orang lain"
        },
        correctAnswer: "b"
    },
    {
        question: "38. Tanda panah yang melengkung dan mengarah kembali ke atas dalam flowchart biasanya menunjukkan...",
        choices: {
            a: "Percabangan",
            b: "Perulangan",
            c: "Proses",
            d: "Akhir program"
        },
        correctAnswer: "b"
    },
    {
        question: "39. Simbol flowchart yang digunakan untuk menampilkan data pada printer adalah...",
        choices: {
            a: "Jajar genjang",
            b: "Dokumen (segi empat dengan bawah bergelombang)",
            c: "Trapesium",
            d: "Belah ketupat"
        },
        correctAnswer: "b"
    },
    {
        question: "40. Mengubah program menjadi algoritma adalah proses...",
        choices: {
            a: "Debugging",
            b: "Kompilasi",
            c: "Dekompilasi",
            d: "Pengodean"
        },
        correctAnswer: "c"
    },
    {
        question: "41. Apa yang dimaksud dengan 'variabel' dalam algoritma?",
        choices: {
            a: "Tempat untuk menyimpan data sementara",
            b: "Instruksi untuk program",
            c: "Simbol flowchart",
            d: "Nama dari sebuah fungsi"
        },
        correctAnswer: "a"
    },
    {
        question: "42. Simbol flowchart yang digunakan untuk menampilkan pesan di layar adalah...",
        choices: {
            a: "Jajar genjang",
            b: "Persegi panjang",
            c: "Belah ketupat",
            d: "Terminal"
        },
        correctAnswer: "a"
    },
    {
        question: "43. Karakteristik utama dari flowchart adalah...",
        choices: {
            a: "Berupa teks narasi",
            b: "Menggunakan simbol standar yang universal",
            c: "Hanya digunakan untuk masalah matematika",
            d: "Tidak memiliki arah aliran"
        },
        correctAnswer: "b"
    },
    {
        question: "44. Sebuah algoritma harus menghasilkan satu atau lebih output. Sifat ini disebut...",
        choices: {
            a: "Input",
            b: "Output",
            c: "Berhingga",
            d: "Jelas"
        },
        correctAnswer: "b"
    },
    {
        question: "45. Simbol 'Input' dan 'Output' dalam flowchart memiliki bentuk yang sama. Mengapa?",
        choices: {
            a: "Agar lebih mudah diingat",
            b: "Karena keduanya adalah proses yang sama",
            c: "Karena keduanya melibatkan perpindahan data",
            d: "Untuk menghemat ruang"
        },
        correctAnswer: "c"
    },
    {
        question: "46. Dalam sebuah algoritma, langkah 'Baca data dari keyboard' termasuk ke dalam kategori...",
        choices: {
            a: "Proses",
            b: "Input",
            c: "Output",
            d: "Percabangan"
        },
        correctAnswer: "b"
    },
    {
        question: "47. Flowchart yang menggambarkan alur program secara umum tanpa detail disebut...",
        choices: {
            a: "Flowchart rinci",
            b: "Flowchart makro",
            c: "Flowchart mikro",
            d: "Flowchart nested"
        },
        correctAnswer: "b"
    },
    {
        question: "48. Manakah yang bukan merupakan manfaat dari algoritma?",
        choices: {
            a: "Mempermudah penulisan program",
            b: "Mempercepat komputer",
            c: "Membantu pemecahan masalah yang kompleks",
            d: "Menjadi dasar untuk membuat flowchart"
        },
        correctAnswer: "b"
    },
    {
        question: "49. Jika sebuah algoritma tidak memiliki akhir yang jelas, maka ia akan menjadi...",
        choices: {
            a: "Sangat efisien",
            b: "Loop tak terbatas (Infinite Loop)",
            c: "Program yang sempurna",
            d: "Tidak dapat dikompilasi"
        },
        correctAnswer: "b"
    },
    {
        question: "50. Simbol yang digunakan untuk koneksi antar halaman flowchart yang berbeda adalah...",
        choices: {
            a: "Konektor",
            b: "Terminator",
            c: "Jajar genjang",
            d: "Lingkaran"
        },
        correctAnswer: "a"
    }
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

function buildQuiz() {
    const output = [];

    questions.forEach((currentQuestion, questionNumber) => {
        const choices = [];
        for (const letter in currentQuestion.choices) {
            choices.push(
                `<label class="choice-item">
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    <span>${currentQuestion.question.startsWith(`${questionNumber + 1}.`) ? `${letter.toUpperCase()} : ${currentQuestion.choices[letter]}` : `${letter.toUpperCase()} : ${currentQuestion.choices[letter]}`}</span>
                </label>`
            );
        }

        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="choices">${choices.join('')}</div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.choices');
    let numCorrect = 0;

    questions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        const allChoicesForQuestion = answerContainer.querySelectorAll('.choice-item');
        allChoicesForQuestion.forEach(item => {
            item.style.backgroundColor = '#f8fcfd';
            item.style.borderColor = '#b2ebf2';
            item.style.color = '#444444';
        });

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            const correctChoiceElement = answerContainer.querySelector(`input[value="${userAnswer}"]`).closest('.choice-item');
            if (correctChoiceElement) {
                correctChoiceElement.style.backgroundColor = '#d4edda';
                correctChoiceElement.style.borderColor = '#28a745';
                correctChoiceElement.style.color = '#155724';
            }
        } else {
            if (userAnswer) {
                const wrongChoiceElement = answerContainer.querySelector(`input[value="${userAnswer}"]`).closest('.choice-item');
                if (wrongChoiceElement) {
                    wrongChoiceElement.style.backgroundColor = '#f8d7da';
                    wrongChoiceElement.style.borderColor = '#dc3545';
                    wrongChoiceElement.style.color = '#721c24';
                }
            }
            const actualCorrectChoiceElement = answerContainer.querySelector(`input[value="${currentQuestion.correctAnswer}"]`).closest('.choice-item');
            if (actualCorrectChoiceElement) {
                actualCorrectChoiceElement.style.backgroundColor = '#d4edda';
                actualCorrectChoiceElement.style.borderColor = '#28a745';
                actualCorrectChoiceElement.style.color = '#155724';
            }
        }
    });

    // ... kode di dalam fungsi showResults() lainnya ...

let finalScore = numCorrect * 2;
resultContainer.innerHTML = `Skor kamu: ${finalScore} dari 100 🎉`;
}

buildQuiz();
submitButton.addEventListener('click', showResults);
