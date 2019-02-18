//kejadian pada saat diklik
$('.page-scroll').on('click',function(e){
//ambil isi href
	var tujuan=$(this).attr('href');
	//tangkap elemen
	var elementujuan=$(tujuan);
	//pindahkan scroll
	$('body').animate({
	scrollTop: elementujuan.offset().top-50
	},1250,'easeInOutExpo');
	
	e.preventDefault();
});

// membuat function
	function kirim(){
	alert("Berhasil Di Kirim");
	}