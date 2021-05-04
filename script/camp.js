$(function () {
	$.scrollify({
		section: 'section',
		setHeights : false
	});

	function headSize() {
		var headHeight = $('header').innerHeight();
		$('.menu').css('top', headHeight);
	};
	headSize();
	$(window).on('resize', function () {
		headSize();
	});

	// カウントダウン
	function countdown() {
		var date = new Date();
		var camp = new Date('Sat May 15 2021 00:00:00')
		var diff = camp - date;
		var day = Math.floor(diff / 1000 / 60 / 60 / 24);
		$('#day').text(day + 1);
	}
	countdown();

	// ページトップボタン
	$('.pagetop').hide();

	$(window).on('scroll', function () {
		var position = $(window).scrollTop();
		if (position > 100) {
			$('.pagetop').fadeIn();
		} else {
			$('.pagetop').fadeOut();
		}
		// var winHeight = $(window).height();
		// var footHeight = $('footer').offset().top;
		// if (position >= footHeight - winHeight) {
		// 	$('.pagetop').css('position', 'absolute');
		// } else {
		// 	$('.pagetop').css('position', 'fixed');
		// }
	});

	// $('.pagetop').on('click', function (e) {
	// 	e.preventDefault();
	// 	$('html, body').animate({ scrollTop: 0 }, 500);
	// });


	// ハンバーガー
	$('.btn-trigger').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('is-active');
		$('.menu').toggleClass('is-active');
	});

	//スムーススクロール
	$('a[href^="#"]').on('click', function () {
		var href = $(this).attr('href');
		var target = $(href == '#' || href == '' ? 'html' : href);
		var position = target.offset().top;
		$('html, body').animate({ scrollTop: position }, 500);
		$('.btn-trigger').removeClass('is-active');
		$('.menu').removeClass('is-active');
	});

	// アコーディオン
	$('.aco-trigger').on('click', function () {
		$(this).next('.aco-contents').slideToggle();
	});

});
