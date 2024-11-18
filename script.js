let penumpang = [];

const tambahPenumpang = (namaPenumpang, penumpang) => {
    if (penumpang.length === 0) {
        penumpang.push(namaPenumpang);
    } else {
        let kursiKosong = penumpang.indexOf(undefined);
        if (kursiKosong !== -1) {
            penumpang[kursiKosong] = namaPenumpang;
        } else if (!penumpang.includes(namaPenumpang)) {
            penumpang.push(namaPenumpang);
        } else {
            alert(`${namaPenumpang} sudah ada di dalam kendaraan.`);
            return;
        }
    }
    alert(`${namaPenumpang} telah ditambahkan.`);
    renderPenumpang();
};

const hapusPenumpang = (namaPenumpang, penumpang) => {
    let index = penumpang.indexOf(namaPenumpang);
    if (index !== -1) {
        penumpang[index] = undefined;
        alert(`${namaPenumpang} telah dihapus.`);
    } else {
        alert(`${namaPenumpang} tidak ditemukan.`);
    }
    renderPenumpang();
};

const renderPenumpang = () => {
    const list = document.getElementById("listPenumpang");
    list.innerHTML = "";
    penumpang.forEach((pen, index) => {
        const item = document.createElement("li");
        item.textContent = pen || `Kursi ${index + 1} kosong`;
        item.classList.add(pen ? "penumpang" : "kosong");
        list.appendChild(item);
    });
};

document.getElementById("btnTambah").addEventListener("click", () => {
    const nama = document.getElementById("namaPenumpang").value.trim();
    if (nama) {
        tambahPenumpang(nama, penumpang);
    } else {
        alert("Nama tidak boleh kosong!");
    }
    document.getElementById("namaPenumpang").value = "";
});

document.getElementById("btnHapus").addEventListener("click", () => {
    const nama = document.getElementById("namaPenumpang").value.trim();
    if (nama) {
        hapusPenumpang(nama, penumpang);
    } else {
        alert("Nama tidak boleh kosong!");
    }
    document.getElementById("namaPenumpang").value = "";
});
