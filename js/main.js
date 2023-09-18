;(function ($) {
	"use strict";

	//*=============menu sticky js =============*//
	var $window = $(window);
	var didScroll,
		lastScrollTop = 0,
		delta = 5,
		$mainNav = $("#sticky"),
		$mainNavHeight = $mainNav.outerHeight(),
		scrollTop;

	$window.on("scroll", function () {
		didScroll = true;
		scrollTop = $(this).scrollTop();
	});
	var base_url = "https://api-paprika.perpusnas.go.id/";
	setInterval(function () {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 200);

	function hasScrolled() {
		if (Math.abs(lastScrollTop - scrollTop) <= delta) {
			return;
		}
		if (scrollTop > lastScrollTop && scrollTop > $mainNavHeight) {
			$mainNav.removeClass("fadeInDown").addClass("fadeInUp").css('top', -$mainNavHeight);
		} else {
			if (scrollTop + $(window).height() < $(document).height()) {
				$mainNav.removeClass("fadeInUp").addClass("fadeInDown").css('top', 0);
			}
		}
		lastScrollTop = scrollTop;
	}

	function navbarFixed() {
		if ($('#sticky').length) {
			$(window).scroll(function () {
				var scroll = $(window).scrollTop();
				if (scroll) {
					$("#sticky").addClass("navbar_fixed");
					$(".sticky-nav-doc .body_fixed").addClass("body_navbar_fixed");
				} else {
					$("#sticky").removeClass("navbar_fixed");
					$(".sticky-nav-doc .body_fixed").removeClass("body_navbar_fixed");
				}
			});
		};
	};
	navbarFixed();

	function navbarFixedTwo() {
		if ($('#stickyTwo').length) {
			$(window).scroll(function () {
				var scroll = $(window).scrollTop();
				if (scroll) {
					$("#stickyTwo").addClass("navbar_fixed");
				} else {
					$("#stickyTwo").removeClass("navbar_fixed");
				}
			});
		};
	};
	navbarFixedTwo();

	//*=============menu sticky js =============*//

	//         page scroll
	function bodyFixed() {
		var windowWidth = $(window).width();
		if ($('#sticky_doc').length) {
			if (windowWidth > 576) {
				var tops = $('#sticky_doc');
				var leftOffset = tops.offset().top;

				$(window).on('scroll', function () {
					var scroll = $(window).scrollTop();
					if (scroll >= leftOffset) {
						tops.addClass("body_fixed");
					} else {
						tops.removeClass("body_fixed");
					}
				});
			}
		}
	}

	bodyFixed();


	/*  Menu Click js  */
	function Menu_js() {
		if ($('.submenu').length) {
			$('.submenu > .dropdown-toggle').click(function () {
				var location = $(this).attr('href');
				window.location.href = location;
				return false;
			});
		}
	}

	Menu_js();


	$('.doc_menu a[href^="#"]:not([href="#"]').on('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 900);
		event.preventDefault();
	});

	$(window).on("load", function () {
		if ($('.scroll').length) {
			$(".scroll").mCustomScrollbar({
				mouseWheelPixels: 50,
				scrollInertia: 0,
			});
		}
	});

	/*--------------- doc_documentation_area Switcher js--------*/
	if ($(".doc_documentation_area").length > 0) {
		//switcher
		var switchs = true;
		$("#right").on("click", function (e) {
			e.preventDefault();
			if (switchs) {
				$(".doc_documentation_area,#right").addClass("overlay");
				$(".doc_right_mobile_menu").animate({
					"right": "0px"
				}, 100);
				switchs = false;
			} else {
				$(".doc_documentation_area,#right").removeClass("overlay");
				$(".doc_right_mobile_menu").animate({
					"right": "-250px"
				}, 100);
				switchs = true;
			}
		});

		$("#left").on("click", function (e) {
			e.preventDefault();
			if (switchs) {
				$(".doc_documentation_area,#left").addClass("overlay");
				$(".doc_mobile_menu").animate({
					"left": "0px"
				}, 300);
				switchs = false;
			} else {
				$(".doc_documentation_area,#left").removeClass("overlay");
				$(".doc_mobile_menu").animate({
					"left": "-245px"
				}, 300);
				switchs = true;
			}
		});
	}

	if ($(".mobile_menu").length > 0) {
		var switchs = true;
		$(".mobile_btn").on("click", function (e) {
			if (switchs) {
				$(".mobile_menu").addClass("open");
			}
		})
	}

	/*--------------- slick js--------*/
	if ($('.doc_feedback_slider').length) {
		$('.doc_feedback_slider').slick({
			autoplay: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplaySpeed: 2000,
			speed: 1000,
			dots: false,
			arrows: true,
			prevArrow: '.prev',
			nextArrow: '.next',
		});
	}

	/*--------------- parallaxie js--------*/
	function parallax() {
		if ($(".parallaxie").length) {
			$('.parallaxie').parallaxie({
				speed: 0.5,
			});
		}
	}

	parallax();

	/*--------------- tooltip js--------*/
	function tooltip() {
		if ($('.tooltips').length) {
			$('.tooltips').tooltipster({
				interactive: true,
				arrow: true,
				animation: 'grow',
				delay: 200,
			});
		}
	}

	tooltip();
	$('.tooltips_one').data('tooltip-custom-class', 'tooltip_blue').tooltip();
	$('.tooltips_two').data('tooltip-custom-class', 'tooltip_danger').tooltip();

	$(document).on('inserted.bs.tooltip', function (e) {
		var tooltip = $(e.target).data('bs.tooltip');
		$(tooltip.tip).addClass($(e.target).data('tooltip-custom-class'));
	});

	/*--------------- wavify js--------*/
	if ($('.animated-waves').length) {
		$('#animated-wave-three').wavify({
			height: 40,
			bones: 4,
			amplitude: 70,
			color: "rgba(188, 214, 234, 0.14)",
			speed: .3
		});

		$('#animated-wave-four').wavify({
			height: 60,
			bones: 5,
			amplitude: 90,
			color: "rgba(188, 214, 234, 0.14)",
			speed: .2
		});
	}

	/*--------------- nav-sidebar js--------*/
	if ($('.nav-sidebar > li').hasClass('active')) {
		$(".nav-sidebar > li.active").find('ul').slideDown(700);
	}

	function active_dropdown() {
		$('.nav-sidebar > li .icon').on('click', function (e) {
			$(this).parent().find('ul').first().toggle(300);
			$(this).parent().siblings().find('ul').hide(300);
		});
	}

	active_dropdown();

	$('.nav-sidebar > li .icon').each(function () {
		var $this = $(this);
		$this.on('click', function (e) {
			var has = $this.parent().hasClass('active');
			$('.nav-sidebar li').removeClass('active');
			if (has) {
				$this.parent().removeClass('active');
			} else {
				$this.parent().addClass('active');
			}
		});
	});

	/*--------------- mobile dropdown js--------*/
	function active_dropdown2() {
		$('.menu > li .mobile_dropdown_icon').on('click', function (e) {
			$(this).parent().find('ul').first().slideToggle(300);
			$(this).parent().siblings().find('ul').hide(300);
		});
	}

	active_dropdown2();

	/*--------------- search js--------*/
	$('.search a').on('click', function () {
		if ($(this).parent().hasClass('open')) {
			$(this).parent().removeClass('open')
		} else {
			$(this).parent().addClass('open')
		}
		return false
	});

	/*--------------- niceSelect js--------*/
	function select() {
		if ($('.custom-select').length) {
			$('.custom-select').niceSelect();
		}
		if ($('#mySelect').length) {
			$('#mySelect').selectpicker();
		}
	}

	select();
	function getClass(){
        $.ajax({
            url: base_url + "statistic/class",
            method : 'GET',
            dataType : 'json',
            success : function(response){
                $('#0xx').html(response["0xx"]).digits();
                $('#1xx').html(response["1xx"]).digits();
                $('#2xx').html(response["2xx"]).digits();
                $('#3xx').html(response["3xx"]).digits();
                $('#4xx').html(response["4xx"]).digits();
                $('#5xx').html(response["5xx"]).digits();
                $('#6xx').html(response["6xx"]).digits();
                $('#7xx').html(response["7xx"]).digits();
                $('#8xx').html(response["8xx"]).digits();
                $('#9xx').html(response["9xx"]).digits();
                //console.log(response);
            },
            error : function(){
                alert("error!")
            }
        })
    }
	var loc_now = window.location.href.toString().replace("https://", "").replace("http://", "");
	if(loc_now.includes('index.html') || loc_now.replace("/","") == "paprika.perpusnas.go.id" || loc_now.replace("/","") == "paprika.perpusnas.go.id"){
		getClass();
	}
	if(loc_now.includes('content-list.html')){
		createContent();
	}	
	if(loc_now.includes('content-detail.html')){
		getDetail();
	}
	if(loc_now.includes('creator.html')){
		getDetailCreator();
		getCreatorContent();
	}
	if(loc_now.includes('subjek.html')){
		getClassSubject();
	}
	
	$.fn.digits = function(){ 
        return this.each(function(){ 
            $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
        })
    }
    $('.funfact-box').on('click', function(){
        var subyek_class = $(this).attr("data");
        window.location.href = "content-list.html?class=" + subyek_class;
    })
    $('#form_search').submit(function (evt) {
            evt.preventDefault();
            let params = window.location.search.substring(1);
            window.location.href = removeDuplicateparam("content-list.html?" +params +"&q=" + $('#search').val()); 
    })
	function getUrlParameter(sParam) {
		var sPageURL = window.location.search.substring(1),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
			}
		}
		return false;
	}
    function removeDuplicateparam(url_old){
        let url = url_old
        let [path, params] = url.split("?");
        let result = path + '?' + new URLSearchParams(Object.fromEntries(new URLSearchParams(params))).toString()
        return result
    }
	function createNavigation(current, total, length, query){
		var navigation = '<div class="nav-links" id="navigation">';
		if(current > 1) {
			navigation += '<a id="left-arrow" class="next page-numbers" href="#"><i class="arrow_carrot-left"></i></a>';
		}
		navigation += '<span aria-current="page" class="page-numbers current" id="current">'+current+'</span>';
		var max_page = Math.ceil(total/length), max_iter = current + 11;

		for(var i = current+1; i< max_iter; i++){
			if(i < max_page + 1) {
				navigation += '<a class="page-numbers" href="#">'+i+'</a>';
			} else {
				break;
			}
		}
		navigation += '<a class="next page-numbers" href="#"><i class="arrow_carrot-right"></i></a>';
		navigation += " <span class='next' style='margin-left: 40px;'>Go to page: </span><input type='number' id='txt_page_number' style='width:50px; border-radius: 4px; color: #10b3d6; border: 1px solid #a7e1ed;'/> </div> ";
		$('#txt_page_number').val(current);
		$('#navigation').html(navigation);
		bindNavEvent(current, query);

	}
	function bindNavEvent(current, query) {
	   
		$('.page-numbers').on('click', function(){
			window.location.href = removeDuplicateparam("content-list.html?q="+ query + "&page=" + $(this).html()); 
		});
		$('#left-arrow').on('click', function(){
			window.location.href = removeDuplicateparam("content-list.html?q="+ query + "&page=" + $(this).html()); 
		});
		$('#txt_page_number').on('change', function(){
			window.location.href = removeDuplicateparam("content-list.html?q="+ query + "&page=" + $(this).val()); 
		});
		$('#txt_page_number').val(current);
	}
	function removeDuplicateparam(url_old){
		let url = url_old
		let [path, params] = url.split("?");
		let result = path + '?' + new URLSearchParams(Object.fromEntries(new URLSearchParams(params))).toString()
		return result
	}
	function getSubjectClassDesc(sub_class){
		if(sub_class != null) {
			if(sub_class.toString().length == 2) {
				sub_class = "0" + sub_class;
			}
			$.ajax({
				url: base_url + "content/get-subclass-desc" +"/" +sub_class,
				method : 'GET',
				dataType : 'json',
				success : function(response){
					$('#breadcrumb_subyek_class').html(response[0]);
					$('#breadcrumb_subyek_sub_class').html(response[1]);
					$('head').append( '<meta name="keywords" content="'+response[0]+', '+response[1]+'">' );
				},
				error : function(){
					alert("error!")
				}
			});
		} else {
			$('#breadcrumb_subyek_class').html("Subyek");
			$('#breadcrumb_subyek_sub_class').html();
		}
		
	}
	function createContent(){
		var q = getUrlParameter('q'),
			sub_class = getUrlParameter('sub-class'),
			class_ = getUrlParameter('class'),
			page = getUrlParameter('page'),
			length = getUrlParameter('length');
			
		if(q == false){
			q = null;
		} else {
			$('#search').val(q);
		}
		if(sub_class == false){
			sub_class = null;
		} 
		if(class_ == false){
			class_ = null;
		} 
		if(page == false){
			page = null;
		}
		if(length == false){
			length = "9";
		}
		$.ajax({
			url: base_url + "content/search?q="+ q + "&class="+class_+"&sub-class=" + sub_class + '&page=' + page + '&length=' + length ,
			method : 'GET',
			dataType : 'json',
			success : function(response){
				
				$.each(response.results, function(index, value){
					var html_element = "";
					html_element += '<div class="col-lg-4 col-sm-6">';
					html_element += '<div class="blog_grid_post wow fadeInUp" data-wow-delay="0.2s">';
					if(value.link.includes("youtube")){
						html_element += '<iframe width="100%" height="220" src="'+value.link+'"></iframe> ';  
					} else {
						html_element += '<img src="img/blog-grid/blog_grid_post2.jpg" alt="">';
					}
					html_element += '<div class="grid_post_content">';
					if(value.type == 'video') {
						html_element += '<div class="post_tag"><a class="cat-KbDoc orange" href="#">'+value.type+'</a></div>';
					} else {
						html_element += '<div class="post_tag"><a class="cat orange" href="#">'+value.type+'</a></div>';
					}
					html_element += '<a href="content-detail.html?id='+value.id+'"><h4 class="b_title">'+value.title+'</h4></a>';
					html_element += '<p>'+ value.description.substring(0, 250)+'</p>';
					html_element += '<div class="media post_author"><div class="round_img"><img src="img/blog-grid/author_2.jpg" alt=""></div>';
					html_element += '<div class="media-body author_text"><a href="creator.html?q='+value.creator+'"><h4>'+value.creator+'</h4></a><div class="date">'+value.created_at+'</div></div></div></div></div></div>';
					$('#content_list').append(html_element);
				})

				$('#countSearch').html('<i class="icon_search"></i>' + "Menemukan <span id='tot_result'>"+ response.total_results + "</span> konten");
				if(sub_class != null){
					$('#breadcrumb_subyek_sub_class').html(sub_class);
					$('#breadcrumb_subyek_class').removeClass('active');
					$('#breadcrumb_subyek_sub_class').addClass('active');
					$('#breadcrumb_subyek_sub_class').css('display', 'block');
					getSubjectClassDesc(sub_class);
				} else {
					$('#breadcrumb_subyek_sub_class').css('display', 'none');
					$('#breadcrumb_subyek_sub_class').removeClass('active');
					$('#breadcrumb_subyek_class').addClass('active');
				}
				if(class_ != null){
					$('#breadcrumb_subyek_class').removeClass('active');
					getSubjectClassDesc(class_);

				} else {
					$('#breadcrumb_subyek_class').addClass('active');
				}
				
				$('#tot_result').digits();
				createNavigation(parseInt(response.page), response.total_results, response.length, response.query);
				
				
			},
			error : function(){
				alert("error!")
			}
		})
	}
	function getDetail(){
		var id = getUrlParameter('id')
		$.ajax({
			url: base_url + "content/detail/" + id ,
			method : 'GET',
			dataType : 'json',
			//async : false,
			success : function(response){
				$('#title').html(response.title);
				$('#author').html(response.creator[0]);
				$('#created_at').html(response.created_at.substring(0, 10));
				$('#description').html(response.description);
				$('#konten_embed').attr('src',response.link);
				$('#type').html(response.type);
				$('head title').text(response.title);
				$('meta[name=description]').remove();
				$('head').append( '<meta name="title" content="'+response.title+'">' );
				$('head').append( '<meta name="description" content="'+response.description+'">' );
				$('head').append( '<meta name="author" content="'+response.description+'">' );
				$('head').append( '<meta name="date.created" content="'+response.created_at+'">' );
				$('head').append( '<meta property="og:title" content="'+response.title+'">' );
				$('head').append( '<meta property="og:site_name" content="Portal Repositori Konten Kreatif">' );
				$('head').append( '<meta name="og:type" content="'+response.type+'">' );
				$('head').append( '<meta name="og:url" content="'+ base_url + "content/detail/" + id+'">' );

				contentRelated(response);
			},
			error : function(){
				alert("error!")
			}
		})
	}
	function contentRelated(data){
		var page = getRandomInt(10);
		getSubjectClassDesc(data.subject_sub_class);
		$.ajax({
			url: base_url + "content/search?sub-class=" + data.subject_sub_class + '&page='+ page+'&length=3&id=' + data.id + '&class=' + data.subject_class,
			method : 'GET',
			dataType : 'json',
			async : false,
			success : function(response){                        
				$.each(response.results, function(index, value){
					var html_element = "";
					html_element += '<div class="col-lg-4 col-sm-6">';
					html_element += '<div class="blog_grid_post wow fadeInUp" data-wow-delay="0.2s">';
					if(value.link.includes("youtube")){
						html_element += '<iframe width="100%" height="220" src="'+value.link+'"></iframe> ';  
					} else {
						html_element += '<img src="img/blog-grid/blog_grid_post2.jpg" alt="">';
					}
					html_element += '<div class="grid_post_content">';
					if(value.type == 'video') {
						html_element += '<div class="post_tag"><a class="cat-KbDoc orange" href="#">'+value.type+'</a></div>';
					} else {
						html_element += '<div class="post_tag"><a class="cat orange" href="#">'+value.type+'</a></div>';
					}
					html_element += '<a href="content-detail.html?id='+value.id+'"><h4 class="b_title">'+value.title+'</h4></a>';
					html_element += '<p>'+ value.description.substring(0, 250)+'</p>';
					html_element += '<div class="media post_author"><div class="round_img"><img src="img/blog-grid/author_2.jpg" alt=""></div>';
					html_element += '<div class="media-body author_text"><a href="creator.html?q='+value.creator+'"><h4>'+value.creator+'</h4></a><div class="date">'+value.created_at+'</div></div></div></div></div></div>';
					$('#content_related').append(html_element);
				})              
			},
			error : function(){
				alert("error!")
			}
		})
	}
	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}
	function getSubjectClassDesc(sub_class){
		if(sub_class != null) {
			if(sub_class.toString().length == 2) {
				sub_class = "0" + sub_class;
			}
			$.ajax({
				url: base_url + "content/get-subclass-desc" +"/" +sub_class,
				method : 'GET',
				dataType : 'json',
				success : function(response){
					$('#breadcrumb_subyek_class').html(response[0]);
					$('#breadcrumb_subyek_sub_class').html(response[1]);
				},
				error : function(){
					alert("error!")
				}
			});
		} else {
			$('#breadcrumb_subyek_class').html("Subyek");
			$('#breadcrumb_subyek_sub_class').html();
		}
	}
	function getDetailCreator(){
		var creator = getUrlParameter('q');
		$('#creator_name').html(creator);
		$.ajax({
			url: base_url + "user/detail?q=" + creator ,
			method : 'GET',
			dataType : 'json',
			success : function(response){
				$('#total_konten').html(response.total_konten + " konten");
				$('#total_konten2').html(response.total_konten + " konten");
				$('#total_video').html(response.video + " konten");
				$('#total_artikel').html(response.artikel + " konten");      
				
			},
			error : function(){
				alert("error!")
			}
		})
	}
	function getCreatorContent(page = 1){
		var creator = getUrlParameter('q');
		$.ajax({
			url: base_url + "user/content?q=" + creator +'&page=' + page,
			method : 'GET',
			dataType : 'json',
			//async : false,
			success : function(response){    
				$('#list_content').html('');                    
				$.each(response.results, function(index, value){
					var html_element = "";
					html_element += '<div class="community-post style-two kbDoc richard bug"><div class="post-content"><div class="author-avatar">';
					html_element += '<img src="img/home_support/rc15.png" alt="'+ value.creator +'"></div>';
					html_element += '<div class="entry-content"><h3 class="post-title"><a href="content-detail.html?id='+value.id+'">'+value.title+'</a></h3>';
					html_element += '<ul class="meta">';

					if(value.link.includes("youtube")){
						html_element += '<li><img src="img/home_support/cmm2.png" alt="cmm"><a href="'+value.link+'">Video</a></li><li><i class="icon_calendar"></i>updated 3 days ago</li></ul>';  
					} else {
						html_element += '<li><img src="img/home_support/cmm1.png" alt="cmm"><a href="'+value.link+'">Artikel</a></li><li><i class="icon_calendar"></i>updated 3 days ago</li></ul>';  
					}
					html_element += '</div></div></div>';
					$('#list_content').append(html_element);
				})
				getCreatorContentNavigation(parseInt(response.page), response.total_results, response.length);            
			},
			error : function(){
				alert("error!")
			}
		})
	}
	function getCreatorContentNavigation(current, total, length){
		var navigation = '<div class="view-post-of"><p>Viewing 5 contents of ' + total +' total</p></div><ul class="post-pagination">';
		if(current > 1) {
			navigation += '<li class="prev-post pegi-disable"><a href="#"><i class="arrow_carrot-left"></i></a></li>';
		}
		navigation += '<li><a href="#creator_name" class="active">'+current+'</a></li>';
		var max_page = Math.ceil(total/length), max_iter = current + 5;

		for(var i = current+1; i< max_iter; i++){
			if(i < max_page + 1) {
				navigation += '<li><a href="#creator_name" class="numbers">'+i+'</a></li>';
			} else {
				break;
			}
		}
		navigation += '<li class="next-post"><a href="#"><i class="arrow_carrot-right"></i></a></li>';
		navigation += '</ul></div>';
		$('#pagination_wrapper').html(navigation);
		bindCreatorNavEvent();
	}
	function bindCreatorNavEvent() {
		$('.numbers').on('click', function(){
			getCreatorContent($(this).html());
		});
	}
	function getClassSubject(){
		$.ajax({
			url: base_url + "statistic/sub-class-all",
			method : 'GET',
			dataType : 'json',
			success : function(response){
				$.each(response, function(index, value){
					$('#' + index).html(" (" + value + ")").digits();
					$('#' + index).parent().click(function() {
						window.location.href = "content-list.html?sub-class=" + index; 
					})
				})

			},
			error : function(){
				alert("error!")
			}
		})
	}
	/*--------------- counterUp js--------*/
	function counterUp() {
		if ($('.counter').length) {
			$('.counter').counterUp({
				delay: 1,
				time: 250
			});
		};
	};

	counterUp();

	/*--------------- popup-js--------*/
	function popupGallery() {
		if ($(".img_popup").length) {
			$(".img_popup").each(function () {
				$(".img_popup").magnificPopup({
					type: 'image',
					closeOnContentClick: true,
					closeBtnInside: false,
					fixedContentPos: true,
					removalDelay: 300,
					mainClass: 'mfp-no-margins mfp-with-zoom',
					image: {
						enabled: true,
						navigateByImgClick: true,
						preload: [0, 1] // Will preload 0 - before current, and 1 after the current image,
					}
				});
			})
		}
	}

	popupGallery();

	/*--------------- video js--------*/
	function video() {
		if ($("#inline-popups").length) {
			$('#inline-popups').magnificPopup({
				delegate: 'a',
				removalDelay: 500, //delay removal by X to allow out-animation
				mainClass: 'mfp-no-margins mfp-with-zoom',
				preloader: false,
				midClick: true
			});
		}
	}

	video();

	/*=========== Font size switcher/controller ===========*/
	if ($('#post').length > 0) {
		$.rvFontsize({
			targetSection: '#post',
			store: true, // store.min.js required!
			controllers: {
				appendTo: '#rvfs-controllers',
				showResetButton: true
			}
		});
	}

	/*=========== anchors js ===========*/

	if ($(".load-order-2").length) {
		var Anchor1 = new AnchorJS();
		document.addEventListener("DOMContentLoaded", function (event) {
			Anchor1 = new AnchorJS();
			Anchor1.add('.load-order-2');
		});
	}


	/*--------- WOW js-----------*/
	function bodyScrollAnimation() {
		var scrollAnimate = $('body').data('scroll-animation');
		if (scrollAnimate === true) {
			new WOW({}).init()
		}
	}

	bodyScrollAnimation();


	/*------------ Video js ------------*/
	if ($(".video-js").length) {
		videojs('vid2', {
			"techOrder": ["wistia"],
			"sources": [{
				"type": "video/wistia",
				"src": "http://fast.wistia.com/embed/iframe/b0767e8ebb?version=v1&controlsVisibleOnLoad=false&playerColor=aae3d8"
			}]
		}).ready(function () {
			this.on('pause', function () {
				console.log("video.js - pause");
			});

			this.on('play', function () {
				console.log("video.js - play");
			});

			this.on('seeked', function () {
				console.log("video.js - seeked");
			});

			this.on('volumechange', function () {
				console.log("video.js - volumechange");
			});

			this.one('ended', function () {
				console.log("video.js - ended");
				this.src("https://home.wistia.com/medias/oefj398m6q?playerColor=ff0000");
				this.play();
			});
		});
	}

	/*------------ Cookie functions and color js ------------*/
	function createCookie(name, value, days) {
		var expires = "";
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + value + expires + "; path=/";
	}

	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	}

	function eraseCookie(name) {
		createCookie(name, "", -1);
	}

	var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	var selectedNightTheme = readCookie("body_dark");

	if (selectedNightTheme == "true" || (selectedNightTheme === null && prefersDark)) {
		applyNight();
		$('#something').prop('checked', true);
	} else {
		applyDay();
		$('#something').prop('checked', false);
	}

	function applyNight() {
		$("body.doc").addClass("body_dark");
	}

	function applyDay() {
		$("body.doc").removeClass("body_dark");
	}

	$('#something').change(function () {
		if ($(this).is(':checked')) {
			applyNight();
			$(".tab-btns").css("color", "#6b707f");
			createCookie("body_dark", true, 999)
		} else {
			applyDay();
			$(".tab-btns").css("color", "#10b3d6");
			createCookie("body_dark", false, 999);
		}
	});

	$('.mobile_menu_btn').on('click', function () {
		$('body').removeClass('menu-is-closed').addClass('menu-is-opened');
	});
	$('.close_nav').on("click", function (e) {
		if ($('.side_menu').hasClass('menu-opened')) {
			$('.side_menu').removeClass('menu-opened');
			$('body').removeClass('menu-is-opened')
		} else {
			$('.side_menu').addClass('menu-opened');
		}
	});

	$('.click_capture').on('click', function () {
		$('body').removeClass('menu-is-opened').addClass('menu-is-closed');
		$('.side_menu').removeClass('menu-opened');
	});


	/*--------------- Tab button js--------*/
	$('.next').on('click', function () {
		$('.v_menu .nav-item > .active').parent().next('li').find('a').trigger('click');
	});

	$('.previous').on('click', function () {
		$('.v_menu .nav-item > .active').parent().prev('li').find('a').trigger('click');
	});
	/*------------ MAILCHIMP js ------------*/
	if ($(".mailchimp").length > 0) {
		$(".mailchimp").ajaxChimp({
			callback: mailchimpCallback,
			url: "http://droitlab.us15.list-manage.com/subscribe/post?u=0fa954b1e090d4269d21abef5&id=a80b5aedb0" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
		});
	}
	if ($(".mailchimp_two").length > 0) {
		$(".mailchimp_two").ajaxChimp({
			callback: mailchimpCallback,
			url: "https://droitthemes.us19.list-manage.com/subscribe/post?u=5d334217e146b083fe74171bf&amp;id=0e45662e8c" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
		});
	}
	$(".memail").on("focus", function () {
		$(".mchimp-errmessage").fadeOut();
		$(".mchimp-sucmessage").fadeOut();
	});
	$(".memail").on("keydown", function () {
		$(".mchimp-errmessage").fadeOut();
		$(".mchimp-sucmessage").fadeOut();
	});
	$(".memail").on("click", function () {
		$(".memail").val("");
	});

	function mailchimpCallback(resp) {
		if (resp.result === "success") {
			$(".mchimp-errmessage").html(resp.msg).fadeIn(1000);
			$(".mchimp-sucmessage").fadeOut(500);
		} else if (resp.result === "error") {
			$(".mchimp-errmessage").html(resp.msg).fadeIn(1000);
		}
	}

	function Click_menu_hover() {
		if ($('.tab-demo').length) {
			$.fn.tab = function (options) {
				var opts = $.extend({}, $.fn.tab.defaults, options);
				return this.each(function () {
					var obj = $(this);

					$(obj).find('.tabHeader li').on(opts.trigger_event_type, function () {
						$(obj).find('.tabHeader li').removeClass('active');
						$(this).addClass('active');

						$(obj).find('.tabContent .tab-pane').removeClass('active show');
						$(obj).find('.tabContent .tab-pane').eq($(this).index()).addClass('active show');

					})
				});
			}
			$.fn.tab.defaults = {
				trigger_event_type: 'click', //mouseover | click é»˜è®¤æ˜¯click
			};
		}
	}

	Click_menu_hover();

	function Tab_menu_activator() {
		if ($('.tab-demo').length) {
			$('.tab-demo').tab({
				trigger_event_type: 'mouseover'
			});
		}
	}

	Tab_menu_activator();

	function fAqactive() {
		$(".doc_faq_info .card").on('click', function () {
			$(".doc_faq_info .card").removeClass("active");
			$(this).addClass('active');
		});
	}

	fAqactive();


	function chartJs() {

		var windowSize = $(window).width();

		if (windowSize <= 767) {
			var leg = true,
				ratio = false;
		} else {
			var leg = false,
				ratio = true;
		}



		var data = [{

				'name': '35 out of 205 issues unanswered',
				'value': 36
			},
			{

				'name': 'We are working on 42 out of 205 issues',
				'value': 40
			},
			{
				'name': '20 Out of 205 issues haven\'t got a reply',
				'value': 44
			},
			{
				'name': '90 Out of 205 issues resolved in last tow monthsSent',
				'value': 50
			}
		];

		var labels = [];
		var datasets = [];
		var sent = data[0];
		var opened = data[1];
		var response = data[2];
		var secured = data[3];

		data.forEach(function (items) {
			labels.push(items.name);
		});

		datasets.push({
			data: [sent.value, opened.value, response.value, secured.value],
			backgroundColor: ["#f9327a", "#ecb939", "#35bae9", "#42dabf"],
			borderWidth: 0,
			label: [sent.name, opened.name, response.name, secured.name],
		});

		$('#kbDoc-chart').each(function () {

			var canvas = $('#kbDoc-chart');
			canvas.attr('height', 125);
			// chart.canvas.parentNode.style.height = '128px';
			// chart.canvas.parentNode.style.width = '128px';	

			var chart = new Chart(canvas, {
				type: 'polarArea',
				borderWidth: 0,
				hover: false,
				data: {
					datasets: datasets,
					labels: labels
				},

				options: {
					responsive: true,
					maintainAspectRatio: ratio,
					legend: {
						position: 'top',
						display: leg,
						fullWidth: false,
						padding: 10,
						align: 'start'
					},
					scale: {
						display: false
					},
					tooltips: {
						enabled: false,
						backgroundColor: 'white',
						borderColor: '#868e96',
						borderWidth: .5,
						bodyFontColor: '#868e96',
						bodyFontSize: 14,
						bodySpacing: 5,
						caretSize: 0,
						cornerRadius: 0,
						displayColors: true,
						xPadding: 10,
						yPadding: 15,
					}
				}
			});
		});
	}

	$(window).on("load", function () {
		chartJs();
	});

	function general() {

		$('.collapse-btn').on('click', function (e) {
			e.preventDefault();
			$(this).toggleClass('active')
			$(".collapse-wrap").slideToggle(500);

		});

		
		$('.short-by a').click( function() {
			$(this).toggleClass('active-short').siblings().removeClass('active-short');
		});
	}

	general()
	/*-------------------------------------
	Intersection Observer
	-------------------------------------*/
	if (!!window.IntersectionObserver) {
		let observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add("active-animation");
					//entry.target.src = entry.target.dataset.src;
					observer.unobserve(entry.target);
				}
			});
		}, {
			rootMargin: "0px 0px -100px 0px"
		});
		document.querySelectorAll('.has-animation').forEach(block => {
			observer.observe(block)
		});
	} else {
		document.querySelectorAll('.has-animation').forEach(block => {
			block.classList.remove('has-animation')
		});
	}

    // === Image Magnify
    if ($('.zoom').length) {
        $('.zoom').magnify({
            afterLoad: function () {
                console.log('Magnification powers activated!');
            }
        });
    }

    // === Focus Search Form
    $( document ).on( 'keydown', function ( e ) {
        if ( e.keyCode === 191 ) {
            e.preventDefault();
            $('input[type=search]').focus();
            return;
        }
    });

	$('input[type=search]').focus(function() {
		$('body').addClass('search-focused');
		$('.banner_search_form .input-group').css('z-index', '9999')
	})

	$('input[type=search]').focusout(function() {
		$('body').removeClass('search-focused');
	})


	// === Video Autoplay on viewport
	$(document).ready(function() {
		$(window).scroll(function () {
			$('video').each(function () {
				if ($(this).is(":in-viewport")) {
					$(this)[0].play();
				} else {
					$(this)[0].pause();
				}
			})
		});
	})

	// === YouTube Channel Videos Playlist
	if ( $('#ycp').length ) {
		$("#ycp").ycp({
			apikey: 'AIzaSyBS5J1A7o-M8X78JuiqF5h103XLmSQiReE',
			playlist: 6,
			autoplay: true,
			related: true
		});
	}

    // === Back to Top Button
	var back_top_btn = $('#back-to-top');

	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
			back_top_btn.addClass('show');
		} else {
			back_top_btn.removeClass('show');
		}
	});

	back_top_btn.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '300');
	});


	/**
	 * OS select dropdown
	 */
	if( $('#mySelect').val() == "windows" ) {
		$('.windows').show();
	} else {
		$('.windows').hide();
	}

	if( $('#mySelect').val() == "ios" ) {
		$('.ios').show();
	} else {
		$('.ios').hide();
	}

	$('#mySelect').change(function() {
		if( $('#mySelect').val() == "windows" ) {
			$('.windows').show();
		} else {
			$('.windows').hide();
		}
		if( $('#mySelect').val() == "ios" ) {
			$('.ios').show();
		} else {
			$('.ios').hide();
		}
	})


})(jQuery);