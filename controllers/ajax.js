function renderTableSinhVien(mangSV) {
    var sHTML = '';
    for (var index = 0; index < mangSV.length; index++) {
        //Mỗi lần duyệt lấy ra 1 sinh viên
        var sinhVien = mangSV[index];
        sHTML += `
            <tr>
                <td>${sinhVien.maSinhVien}</td>
                <td>${sinhVien.tenSinhVien}</td>
                <td>${sinhVien.email}</td>
                <td>${sinhVien.soDienThoai}</td>
                <td>${sinhVien.loaiSinhVien}</td>
                <td>
                    <button class="btn btn-danger" onclick="xoaSinhVien('${sinhVien.maSinhVien}')" > Xoá </button>
                    <button class="btn btn-primary ml-2" onclick="suaSinhVien('${sinhVien.maSinhVien}')">Chỉnh sửa</button>
                </td>
            </tr>
        `
    };
  
    //Ra khỏi vòng lặp for dom đến thẻ tbody đưa html vào 
    document.querySelector('#tblSinhVien').innerHTML = sHTML;
}


function getApiSinhVien(){
    var promise  = axios({
        url: 'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien',
        method: 'GET',
        
    })
//Thanh cong
promise.then(function(result){
   
    renderTableSinhVien(result.data);
})
// That bai
promise.catch(function(error){
    console.log(error);
});

}
getApiSinhVien();

document.querySelector('#btnXacNhan').onclick = function(){

    // Lay thong tin nguoi dung nhap vao ==> chua trong format object backend yeu cau
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    sv.email = document.querySelector('#email').value;
    sv.soDienThoai = document.querySelector('#soDienThoai').value;
    // dung axios goi du lieu len backend
  
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien',
        method: 'POST',
        data: sv

    });
    promise.then(function(result){
        console.log(result.data);
    })

    promise.catch(function(error){
        console.log(error);
    })



}

function xoaSinhVien(maSinhVienClick){
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=' +maSinhVienClick,
        method: 'DELETE'
    })
    promise.then(function(result){

        getApiSinhVien();
    })
    promise.catch(function(error){
        console.log(error);
    })
}


function suaSinhVien(maSinhVienClick){
    var promise = axios({url: 'http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=' +maSinhVienClick,
    method: 'GET',

    })
    promise.then(function(result){
      // Lay thong tin sv gan len the input  
    var sinhVien = result.data;
    document.querySelector('#maSinhVien').value = sinhVien.maSinhVien;
    document.querySelector('#tenSinhVien').value = sinhVien.tenSinhVien;
    document.querySelector('#loaiSinhVien').value = sinhVien.loaiSinhVien;
    document.querySelector('#diemToan').value = sinhVien.diemToan;
    document.querySelector('#diemLy').value = sinhVien.diemLy;
    document.querySelector('#diemHoa').value = sinhVien.diemHoa;
    document.querySelector('#diemRenLuyen').value = sinhVien.diemRenLuyen;
    document.querySelector('#email').value = sinhVien.email;
    document.querySelector('#soDienThoai').value = sinhVien.soDienThoai;
    
    })
    promise.catch(function(error){
        console.log("Error: ",error);
    })
    

}
document.querySelector('#btnCapNhat').onclick = function(){
    //lay thong tin sinh vien khi nguoi dung thay doi
    var sinhVienUpDate = new SinhVien ();
    sinhVienUpDate.maSinhVien = document.querySelector('#maSinhVien').value;
    sinhVienUpDate.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sinhVienUpDate.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sinhVienUpDate.diemToan = document.querySelector('#diemToan').value;
    sinhVienUpDate.diemLy = document.querySelector('#diemLy').value;
    sinhVienUpDate.diemHoa = document.querySelector('#diemHoa').value;
    sinhVienUpDate.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    sinhVienUpDate.email = document.querySelector('#email').value;
    sinhVienUpDate.soDienThoai = document.querySelector('#soDienThoai').value;
    var promise = axios({
        url:'http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=' +sinhVienUpDate.maSinhVien,
        method: 'PUT',
        data: sinhVienUpDate
    });
    promise.then(function(result){
        getApiSinhVien();
    });
    promise.catch(function(error){

    })
}


//callback function: laf Function ddong đóng vai trò là tham số truyền vào function khác
