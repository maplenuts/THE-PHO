$(document).ready(function () {

    // Splitting Call

    $(function () {
        Splitting();
    });

    document.addEventListener('DOMContentLoaded', function () {
        AOS.init();
    });

    // Header Scroll Event
    $(function () {
        var prevScrollTop = 0;
        document.addEventListener("scroll", function () {
            // Check screen width
            if (window.innerWidth > 427) {
                var nowScrollTop = $(window).scrollTop();
    
                if (nowScrollTop > prevScrollTop) {
                    $('#header').addClass('active');
                } else {
                    $('#header').removeClass('active');
                }
                prevScrollTop = nowScrollTop;
            } else {
                $('#header').removeClass('active'); // Ensure the header is not active for narrow screens
            }
        });
    });
    

    // Scroll Smooth
    document.addEventListener("DOMContentLoaded", function () {
        var scroll = new SmoothScroll('a[href*="#"]', {
            speed: 800,
            speedAsDuration: true
        });
    });



    // 창업문의 form
    // Initially hide the contact form
    $(".contactForm").hide();

    // Show the contact form when .btn-contact is clicked
    $(".btn-contact").click(function () {
        $(".contactForm").css("display", "block");
    });

    // Close the form
    $(".closeBtn").click(function () {
        $(".contactForm").css("display", "none");
    });

    // // Form submission
    // document.getElementById('Form').addEventListener('submit', function (event) {
    //     event.preventDefault(); // 폼 제출을 막음

    //     alert('제출되었습니다.');

    //     const name = document.getElementById('name').value;
    //     const phone = document.getElementById('phone').value;
    //     const place = document.getElementById('place').value;
    //     const message = document.getElementById('message').value;

    //     // 폼 데이터 검증
    //     if (name && phone && place && message) {
    //         const form = document.getElementById('Form');
    //         const formData = new FormData(form);

    //         fetch(form.action, {
    //             method: 'POST',
    //             body: formData,
    //             headers: {
    //                 'Content-Type': 'application/x-www-form-urlencoded'
    //             }
    //         })
    //             .then(response => response.json())
    //             .then(data => {
    //                 if (data.result === 'success') {
    //                     alert('문의가 성공적으로 전송되었습니다.');
    //                 } else {
    //                     alert('문의 전송에 실패했습니다. 다시 시도해주세요.');
    //                 }
    //             })
    //             .catch(error => {
    //                 console.error('Error:', error);
    //                 alert('서버 오류가 발생했습니다. 다시 시도해주세요.');
    //             });

    //         alert(`문의가 성공적으로 제출되었습니다!\n이름: ${name}\n전화번호: ${phone}\n희망지역: ${place}\n문의 내용: ${message}`);
    //     }
    // });

    // Brand Button
    $(function () {
        $('.brandCeo').show().siblings().hide();
        $(".brandBtn li:nth-child(1)").click(function () {
            event.preventDefault();
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            $(".brandInner .brandCeo").fadeIn(300).siblings().hide();
        });
        $(".brandBtn li:nth-child(2)").click(function () {
            event.preventDefault();
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            $(".brandInner .brandLuho").fadeIn(300).siblings().hide();
        });
    })

    $(function () {
        // 스크롤 이벤트 핸들러
        $(window).on('scroll', function () {
            $('.num').each(function () {
                // 요소의 위치와 뷰포트의 위치를 확인
                if ($(this).isInViewport() && !$(this).data('animated')) {
                    $(this).data('animated', true); // 중복 실행 방지
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                }
            });
        });

        // jQuery 플러그인으로 뷰포트 내 여부 확인
        $.fn.isInViewport = function () {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            return elementBottom > viewportTop && elementTop < viewportBottom;
        };
    });

    //최초 로드 시 iframe 높이값 비율에 맞게 세팅
    var $videoIframe = document.getElementById('video');
    var responsiveHeight = $videoIframe.offsetWidth * 0.5625;
    $videoIframe.setAttribute('height', responsiveHeight);

    //브라우저 리사이즈 시 iframe 높이값 비율에 맞게 세팅
    window.addEventListener('resize', function () {
        responsiveHeight = $videoIframe.offsetWidth * 0.5625;
        $videoIframe.setAttribute('height', responsiveHeight);
    });

    // Swiper
    $(function () {
        var mainSwiper = new Swiper(".mainSwiper", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            clickable: true,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            }
        });

        var appetizer = new Swiper(".appetizer", {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                loop: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,  //브라우저가 768보다 클 때
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 4,  //브라우저가 1024보다 클 때
                    spaceBetween: 50,
                },
            },
        });

        var special = new Swiper(".special", {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                loop: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,  //브라우저가 768보다 클 때
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,  //브라우저가 1024보다 클 때
                    spaceBetween: 50,
                },
            },
        });

        var noodle = new Swiper(".noodle", {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                loop: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,  //브라우저가 768보다 클 때
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 4,  //브라우저가 1024보다 클 때
                    spaceBetween: 50,
                },
            },
        });

        var noodleMix = new Swiper(".noodleMix", {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                loop: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,  //브라우저가 768보다 클 때
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 4,  //브라우저가 1024보다 클 때
                    spaceBetween: 50,
                },
            },
        });

        var rice = new Swiper(".rice", {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                loop: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,  //브라우저가 768보다 클 때
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 4,  //브라우저가 1024보다 클 때
                    spaceBetween: 50,
                },
            },
        });

        var juice = new Swiper(".juice", {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                loop: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,  //브라우저가 768보다 클 때
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,  //브라우저가 1024보다 클 때
                    spaceBetween: 50,
                },
            },
        });

        $('.appetizer').show().siblings().hide();
        $(".menuBtn li:nth-child(1)").click(function () {
            event.preventDefault();
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            $(".menus .appetizer").fadeIn(300).siblings().hide();
        });
        $(".menuBtn li:nth-child(2)").click(function () {
            event.preventDefault();
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            $(".menus .special").fadeIn(300).siblings().hide();
        });
        $(".menuBtn li:nth-child(3)").click(function () {
            event.preventDefault();
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            $(".menus .noodle").fadeIn(300).siblings().hide();
        });
        $(".menuBtn li:nth-child(4)").click(function () {
            event.preventDefault();
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            $(".menus .noodleMix").fadeIn(300).siblings().hide();
        });
        $(".menuBtn li:nth-child(5)").click(function () {
            event.preventDefault();
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            $(".menus .rice").fadeIn(300).siblings().hide();
        });
        $(".menuBtn li:nth-child(6)").click(function () {
            event.preventDefault();
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            $(".menus .juice").fadeIn(300).siblings().hide();
        });

        var newsList = new Swiper(".newsList", {
            slidesPerView: 1,
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
                loop: true,
                loopAdditionalSlides: 1,
            },
            // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
            grid: {
                rows: 2,
            },
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,  //브라우저가 768보다 클 때
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,  //브라우저가 1024보다 클 때
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 4,  //브라우저가 1024보다 클 때
                    spaceBetween: 30,
                },
            },
        });
    });

    // ScrollMagic & GSAP
    $(function () {
        // ScrollMagic Controller
        var controller = new ScrollMagic.Controller();

        // 각 li 요소에 대해 ScrollMagic Scene 생성
        $('.intro-txt li').each(function () {
            var scene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.5,
                duration: "90%"
            })
                .setPin(this)
                .on("enter", function (event) {
                    $(event.target.triggerElement()).addClass("active");
                })
                .on("leave", function (event) {
                    $(event.target.triggerElement()).removeClass("active");
                })
                //.addIndicators({name: "pin scene"}) // 디버깅용 마커 표시
                .addTo(controller);
        });
    });




    // AOS
    $(function () {
        AOS.init();

        // You can also pass an optional settings object
        // below listed default settings
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });
    })

});
